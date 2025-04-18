<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Validation\Rules\Password;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    /**
     * Register a new user
     */
    public function register(Request $request): Response
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'confirmed', Password::min(8)],
            'role' => ['required', 'in:admin,farmer,client'],
        ]);

        // Only allow admin registration from admin users
        if ($validated['role'] === 'admin' && (!$request->user()?->isAdmin())) {
            abort(403, 'Unauthorized to create admin users');
        }

        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => Hash::make($validated['password']),
            'role' => $validated['role'],
        ]);

        // Create farmer profile if needed
        if ($validated['role'] === 'farmer') {
            $user->farmer()->create([
                'zone_coordinates' => [],
                'zone_name' => '',
                'description' => '',
            ]);
        }

        return response([
            'message' => 'User registered successfully',
            'user' => $user,
            'token' => $user->createToken('auth_token')->plainTextToken,
        ], 201);
    }

    /**
     * Authenticate user and generate token
     */
    public function login(Request $request): Response
    {
        $request->validate([
            'email' => ['required', 'email'],
            'password' => ['required'],
        ]);

        // Rate limiting
        $throttleKey = 'login:'.$request->ip();
        if (RateLimiter::tooManyAttempts($throttleKey, 5)) {
            $seconds = RateLimiter::availableIn($throttleKey);
            throw ValidationException::withMessages([
                'email' => trans('auth.throttle', [
                    'seconds' => $seconds,
                    'minutes' => ceil($seconds / 60),
                ]),
            ]);
        }

        if (! Auth::attempt($request->only('email', 'password'))) {
            RateLimiter::hit($throttleKey);
            throw ValidationException::withMessages([
                'email' => __('auth.failed'),
            ]);
        }

        RateLimiter::clear($throttleKey);
        $user = $request->user();

        return response([
            'message' => 'Login successful',
            'token' => $user->createToken('auth_token')->plainTextToken,
            'user' => $user->loadMissing('farmer'),
        ]);
    }

    /**
     * Logout user (revoke token)
     */
    public function logout(Request $request): Response
    {
        $request->user()->currentAccessToken()->delete();

        return response([
            'message' => 'Successfully logged out',
        ]);
    }

    /**
     * Refresh token
     */
    public function refresh(Request $request): Response
    {
        $user = $request->user();
        $user->tokens()->delete();

        return response([
            'token' => $user->createToken('auth_token')->plainTextToken,
        ]);
    }

    /**
     * Get authenticated user details
     */
    public function me(Request $request): Response
    {
        return response([
            'user' => $request->user()->loadMissing('farmer'),
        ]);
    }
}

<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\FarmerController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\OrderController;

// Public routes
Route::post('auth/login', [AuthController::class, 'login']);
Route::post('auth/register', [AuthController::class, 'register']);

// Protected routes
Route::group(['middleware' => 'auth:api'], function () {
    // Auth routes
    Route::post('auth/logout', [AuthController::class, 'logout']);
    Route::post('auth/refresh', [AuthController::class, 'refresh']);
    Route::get('auth/me', [AuthController::class, 'me']);

    // // Admin routes
    // Route::group(['prefix' => 'admin', 'middleware' => 'role:admin'], function () {
    //     Route::get('users', [AdminController::class, 'getAllUsers']);
    //     Route::post('users', [AdminController::class, 'createUser']);
    //     Route::get('users/{user}', [AdminController::class, 'getUser']);
    //     Route::put('users/{user}', [AdminController::class, 'updateUser']);
    //     Route::delete('users/{user}', [AdminController::class, 'deleteUser']);

    //     Route::get('farmers', [AdminController::class, 'getAllFarmers']);
    //     Route::get('products', [AdminController::class, 'getAllProducts']);
    //     Route::get('orders', [AdminController::class, 'getAllOrders']);
    //     Route::put('orders/{order}', [AdminController::class, 'updateOrderStatus']);
    // });

    // // Farmer routes
    // Route::group(['prefix' => 'farmer', 'middleware' => 'role:farmer'], function () {
    //     Route::get('zone', [FarmerController::class, 'getZone']);
    //     Route::put('zone', [FarmerController::class, 'updateZone']);

    //     Route::get('products', [FarmerController::class, 'getProducts']);
    //     Route::post('products', [FarmerController::class, 'createProduct']);
    //     Route::get('products/{product}', [FarmerController::class, 'getProduct']);
    //     Route::put('products/{product}', [FarmerController::class, 'updateProduct']);
    //     Route::delete('products/{product}', [FarmerController::class, 'deleteProduct']);

    //     Route::get('orders', [FarmerController::class, 'getOrders']);
    // });

    // // Client routes
    // Route::group(['prefix' => 'client', 'middleware' => 'role:client'], function () {
    //     Route::get('products', [ClientController::class, 'getAllProducts']);
    //     Route::get('products/{product}', [ClientController::class, 'getProduct']);

    //     Route::post('orders', [OrderController::class, 'createOrder']);
    //     Route::get('orders', [OrderController::class, 'getClientOrders']);
    //     Route::get('orders/{order}', [OrderController::class, 'getOrder']);
    // });

    // Product
    Route::get('products', [ProductController::class, 'index']);
    Route::get('products/{product}', [ProductController::class, 'show']);
    Route::post('products', [ProductController::class, 'store']);
    Route::patch('products/{product}', [ProductController::class, 'update']);
    Route::delete('products/{product}', [ProductController::class, 'destroy']);
});

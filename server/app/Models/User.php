<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $fillable = [
        'name',
        'email',
        'password',
        'role',
    ];

    protected $hidden = [
        'password',
        'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Role checking methods
    public function isAdmin(): bool
{
    return $this->role === 'admin';
}

public function isFarmer(): bool
{
    return $this->role === 'farmer';
}

public function isClient(): bool
{
    return $this->role === 'client';
}
    // Relationships
    public function farmer()
    {
        return $this->hasOne(Farmer::class);
    }

    public function orders()
    {
        return $this->hasMany(Order::class, 'client_id');
    }
}

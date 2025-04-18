<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type',
        'subtype',
        'description',
        'price',
        'quantity_available',
        'farmer_id',
        'image_path',
    ];

    public function farmer()
    {
        return $this->belongsTo(Farmer::class);
    }

    public function orderItems()
    {
        return $this->hasMany(OrderItem::class);
    }
}

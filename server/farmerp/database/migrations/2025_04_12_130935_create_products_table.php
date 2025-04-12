<?php

// products_table migration
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id('productID');
            $table->string('productName', 100);
            $table->string('grainType', 50)->nullable();
            $table->decimal('optimalTemperature', 5, 2)->nullable();
            $table->text('description')->nullable();
            $table->string('unitOfMeasure', 20);
            $table->boolean('isActive')->default(true);
            $table->dateTime('createdDate')->useCurrent();
            $table->dateTime('lastUpdated')->useCurrent();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('products');
    }
};

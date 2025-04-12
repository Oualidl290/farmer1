<?php

// inventories_table migration
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up()
    {
        Schema::create('inventories', function (Blueprint $table) {
            $table->id('inventoryID');
            $table->unsignedBigInteger('productID');
            $table->string('batchNumber', 50);
            $table->decimal('quantity', 10, 2);
            $table->string('location', 100)->nullable();
            $table->date('productionDate')->nullable();
            $table->date('expiryDate')->nullable();
            $table->decimal('unitCost', 10, 2);
            $table->decimal('totalValue', 12, 2)->storedAs('quantity * unitCost');
            $table->string('quality', 50)->nullable();
            $table->dateTime('lastUpdated')->useCurrent();
            $table->timestamps();

            $table->foreign('productID')->references('productID')->on('products');
        });
    }

    public function down()
    {
        Schema::dropIfExists('inventories');
    }
};

<?php

// sales_orders_table migration
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('sales_orders', function (Blueprint $table) {
            $table->id('orderID');
            $table->unsignedBigInteger('customerID');
            $table->unsignedBigInteger('createdByUserID');
            $table->dateTime('orderDate')->useCurrent();
            $table->date('requestedDeliveryDate')->nullable();
            $table->decimal('totalAmount', 12, 2)->default(0.00);
            $table->decimal('discountApplied', 10, 2)->default(0.00);
            $table->decimal('finalAmount', 12, 2)->default(0.00);
            $table->enum('status', ['draft', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled'])->default('draft');
            $table->enum('paymentStatus', ['unpaid', 'partial', 'paid'])->default('unpaid');
            $table->text('notes')->nullable();
            $table->timestamps();

            $table->foreign('customerID')->references('customerID')->on('customers');
            $table->foreign('createdByUserID')->references('userID')->on('users');
        });
    }

    public function down()
    {
        Schema::dropIfExists('sales_orders');
    }
};

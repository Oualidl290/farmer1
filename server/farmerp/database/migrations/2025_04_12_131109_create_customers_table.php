<?php

// customers_table migration
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->id('customerID');
            $table->enum('customerType', ['buyer', 'supplier', 'both']);
            $table->string('customerName', 100);
            $table->string('contactPerson', 100)->nullable();
            $table->string('contactEmail', 100)->nullable();
            $table->string('contactPhone', 20)->nullable();
            $table->text('address')->nullable();
            $table->decimal('discountRate', 5, 2)->default(0.00);
            $table->text('notes')->nullable();
            $table->boolean('isActive')->default(true);
            $table->dateTime('createdDate')->useCurrent();
            $table->dateTime('lastUpdated')->useCurrent();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('customers');
    }
};

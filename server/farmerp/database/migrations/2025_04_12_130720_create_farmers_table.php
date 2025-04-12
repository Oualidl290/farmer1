<?php

// farmers_table migration
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('farmers', function (Blueprint $table) {
            $table->id('farmerID');
            $table->unsignedBigInteger('userID')->unique();
            $table->string('fullName', 100);
            $table->string('contactInfo', 255)->nullable();
            $table->timestamps();

            $table->foreign('userID')->references('userID')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('farmers');
    }
};

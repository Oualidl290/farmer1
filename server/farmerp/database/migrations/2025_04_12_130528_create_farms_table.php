<?php

// backoffice_admins_table migration
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('backoffice_admins', function (Blueprint $table) {
            $table->id('adminID');
            $table->unsignedBigInteger('userID')->unique();
            $table->string('fullName', 100);
            $table->string('contactInfo', 255)->nullable();
            $table->timestamps();

            $table->foreign('userID')->references('userID')->on('users')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('backoffice_admins');
    }
};

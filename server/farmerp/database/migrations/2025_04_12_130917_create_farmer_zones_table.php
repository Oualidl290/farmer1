<?php

// farmer_zone_table migration
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('farmer_zone', function (Blueprint $table) {
            $table->unsignedBigInteger('farmerID');
            $table->unsignedBigInteger('zoneID');
            $table->primary(['farmerID', 'zoneID']);
            $table->timestamps();

            $table->foreign('farmerID')->references('farmerID')->on('farmers')->onDelete('cascade');
            $table->foreign('zoneID')->references('zoneID')->on('zones')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('farmer_zone');
    }
};

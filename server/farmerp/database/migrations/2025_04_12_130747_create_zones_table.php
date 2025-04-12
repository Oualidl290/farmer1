<?php

// zones_table migration
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('zones', function (Blueprint $table) {
            $table->id('zoneID');
            $table->string('zoneName', 100);
            $table->decimal('area', 10, 2);
            $table->string('location', 255)->nullable();
            $table->string('soilType', 50)->nullable();
            $table->dateTime('lastCultivated')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('zones');
    }
};

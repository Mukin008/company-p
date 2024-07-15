<?php

namespace App\Http\Controllers;

use App\Models\Location;

class LocationController extends Controller
{
    public function index()
    {
        return Location::all(); // Mengembalikan semua data lokasi
    }
}
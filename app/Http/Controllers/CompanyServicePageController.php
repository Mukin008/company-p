<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CompanyServicePageController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {

        return inertia('Services/Services', [
            'title' => 'Layanan Kami',
            // Contractor Image
            'bgContractor' => Storage::url('assets/bgContractor.jpg'),
            'contractorLandscape' => Storage::url('assets/contractorLandscape.jpg'),
            'contractorSeaport' => Storage::url('assets/contractorSeaport.jpg'),
            'contractorHospital' => Storage::url('assets/contractorHospital.jpg'),
            'contractorMako' => Storage::url('assets/contractorMako.jpg'),
            'contractorRestArea' => Storage::url('assets/contractorRestArea.jpg'),
            

            // Supplier Image
            'supplierImg' => Storage::url('assets/supplier.jpg'),
            'supplierPlumbing' => Storage::url('assets/supplierPlumbing.jpg'),
            'supplierMaterials' => Storage::url('assets/supplierMaterials.jpg'),
            'supplierElectrical' => Storage::url('assets/supplierElectrical.jpg'),

            // Tech image
            'bgTech' => Storage::url('assets/tech.jpg'),
            'techHardware' => Storage::url('assets/techHardware.jpg'),
            'techSoftware' => Storage::url('assets/techSoftware.jpg'),
            'techCyber' => Storage::url('assets/techCyber.jpg'),
            'techPerbankan' => Storage::url('assets/techBanking.jpg'),

            // trading image
            'tradingImg' => Storage::url('assets/trading.jpg'),
            'tradMedical' => Storage::url('assets/tradMedical.jpg'),
            'tradBlanket' => Storage::url('assets/tradBlanket.jpg'),
            'tradTowel' => Storage::url('assets/tradTowel.jpg'),
            'tradShoes' => Storage::url('assets/tradShoes.jpg'),

        ]);
    }
}
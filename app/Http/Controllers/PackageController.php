<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\Package;

class PackageController extends Controller
{
    public function index()
    {
        return Inertia::render('Package/Index');
    }

    public function store(Request $request)
    {

        $request->validate([
            'FirstParameter' => 'required',
            'SecondParameter' => 'required',
            'ThirdParameter' => 'required',
        ]);

        $package = new Package();
        $package->FirstParameter = $request->FirstParameter;
        $package->SecondParameter = $request->SecondParameter;
        $package->ThirdParameter = $request->ThirdParameter;
        $package->save();

        return Redirect::route('package.index')->with('status', 'package-created');
    }
}

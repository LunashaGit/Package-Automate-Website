<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use App\Models\Package;
use ZipArchive;
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
        if($request){
            $package = new Package();
        }

        foreach ($request->all() as $key => $value) {
            $package->$key = $value;
        }
        
        if($request->hasFile('FourthParameter')){
            $zip = new ZipArchive;

            $file = $request->file('FourthParameter');
            $scriptName = $file->getClientOriginalName();

            $name = substr(uniqid(), 0, 8);

            $template = storage_path('app/templates/creation.zip');
            fopen(storage_path("app/temp/creation/{$name}.zip"), "w");
            $destination = storage_path("app/temp/creation/{$name}.zip");
            copy($template, $destination);

            $zip->open($destination);
            $zip->addFile($file, $scriptName);
            $zip->close();

            $file->move(storage_path('app/temp/creation/'), $scriptName);
            $package->FourthParameter = $scriptName;
        }
        
        $package->save();

        return Redirect::route('package.index')->with('status', 'package-created');
    }
}

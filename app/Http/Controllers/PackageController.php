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
        function createFile($path, $content)
        {
            if(file_exists($path)){
                echo "File already exists";
                return;
            }
            $file = fopen($path, "w");
            fwrite($file, $content);
            fclose($file);
        }

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

            fopen(storage_path("app/temp/creation/{$name}.zip"), "w");
            copy(storage_path('app/templates/template.zip'), storage_path("app/temp/creation/{$name}.zip"));

            $zip->open(storage_path("app/temp/creation/{$name}.zip"));
            $zip->extractTo(storage_path("app/temp/creation/{$name}"));

            $file->move(storage_path('app/temp/creation/'), $scriptName);

            createFile(storage_path("app/temp/creation/{$name}/src/composer") . ".json", '
            {
                "name": "' . $package->FirstParameter . '",
                "description": "' . $package->SecondParameter . '",
                "type": "library",
                "license": "MIT",
                "autoload": {
                    "psr-4": {
                        "' . $package->FirstParameter . '": "src/"
                    }
                },
                "extra": {
                    "laravel": {
                        "providers": [
                            "' . $package->FirstParameter . "\\\\" . $scriptName . 'ServiceProvider"
                        ]
                    },
                    "aliases": {
                        "' . $scriptName .'": "' . $package->FirstParameter . "\\\\Facades\\\\". $scriptName .'"
                    }
                },
                "authors": [
                    {
                        "name": "Luna Muylkens",
                        "email": "93606228+LunashaGit@users.noreply.github.com"
                    }
                ],
                "minimum-stability": "stable"
            }
            ');
            $package->FourthParameter = $scriptName;
        }
        
        $package->save();

        return Redirect::route('package.index')->with('status', 'package-created');
    }
}

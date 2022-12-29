<?php

namespace App\Http\Controllers;

use ZipArchive;
use Inertia\Inertia;
use App\Models\Vendor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\URL;

class VendorController extends Controller
{
    public function index()
    {
        return Inertia::render('Package/Index');
    }

    public function download($id)
    {
        $package = Vendor::find($id);
        $path = storage_path('app/temp/creation/'.$package->namePackage.'.zip');
        return response()->download($path);
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
            'name' => 'required',
            'namePackage' => 'required',
            'description' => 'required',
            'type' => 'required',
            'nameAuthor' => 'required',
            'emailAuthor' => 'required',
            'stability' => 'required',
            'command' => 'required',
        ]);

        if($request){
            $package = new Vendor();
        }

        foreach ($request->all() as $key => $value) {
            $package->$key = $value;
        }
        
        if($request->hasFile('file')){
            $zip = new ZipArchive;

            $file = $request->file('file');
            $scriptName = $file->getClientOriginalName();

            $name = substr(uniqid(), 0, 8);

            fopen(storage_path("app/temp/creation/{$name}.zip"), "w");
            copy(storage_path('app/templates/template.zip'), storage_path("app/temp/creation/{$name}.zip"));

            $zip->open(storage_path("app/temp/creation/{$name}.zip"));
            $zip->extractTo(storage_path("app/temp/creation/{$name}"));
            $zip->close();

            createFile(storage_path("app/temp/creation/{$name}/composer") . ".json", '
            {
                "name": "' .strtolower($package->name) . '/' . strtolower($package->namePackage) . '",
                "description": "' . $package->description . '",
                "type": "' . strtolower($package->type) . '",
                "license": "MIT",
                "autoload": {
                    "psr-4": {
                        "' . $package->name . "\\\\" .  $package->namePackage . "\\\\" . '": "src/"
                    }
                },
                "extra": {
                    "laravel": {
                        "providers": [
                            "' . $package->name . "\\\\" . $package->namePackage .  "\\\\" . $package->namePackage . 'ServiceProvider"
                        ]
                    },
                    "aliases": {
                        "' . $package->namePackage .'": "' . $package->name . "\\\\" . $package->namePackage . "\\\\Facades\\\\". $package->namePackage .'"
                    }
                },
                "authors": [
                    {
                        "name": "' . $package->nameAuthor . '",
                        "email": "' . $package->emailAuthor . '"
                    }
                ],
                "minimum-stability": "' . strtolower($package->stability) . '"
            }
            ');

            createFile(storage_path("app/temp/creation/{$name}/src") . "/{$package->namePackage}ServiceProvider.php", '<?php
                namespace ' . $package->name . '\\' . $package->namePackage . ';

                use Illuminate\Support\ServiceProvider;
                use ' . $package->name . '\\' . $package->namePackage . '\\' . $package->namePackage . ';
                class ' . $package->namePackage . 'ServiceProvider extends ServiceProvider
                {
                    /**
                     * Bootstrap services.
                     *
                     * @return void
                     */
                    public function boot()
                    {
                        $this->commands([
                            Commands' . $package->namePackage . '::class,
                        ]);
                    }

                    /**
                     * Register services.
                     *
                     * @return void
                     */
                    public function register()
                    {
                        $this->app->bind("' . $package->namePackage . '", function () {
                            return new ' . $package->namePackage . '();
                        });

                        $this->commands([
                            "' . $package->command . '",
                        ]);
                    }
                }
            ');

            createFile(storage_path("app/temp/creation/{$name}/src") . "/{$package->namePackage}.php", '<?php
                namespace ' . $package->name . '\\' . $package->namePackage . ';

                use Illuminate\Support\Facades\Facade;

                class ' . $package->namePackage . ' extends Facade
                {
                    protected static function getFacadeAccessor()
                    {
                        return "' . $package->namePackage . '";
                    }
                }
            ');

            $file->move(storage_path("app/temp/creation/{$name}/src/Commands"), $scriptName);

            $package->file = $scriptName;

            fopen(storage_path("app/temp/creation/{$package->namePackage}.zip"), "w");
            $zip->open(storage_path("app/temp/creation/{$package->namePackage}.zip"));
            $zip->addEmptyDir("src/Commands");
            $files = File::allFiles(storage_path("app/temp/creation/{$name}"));
            foreach ($files as $file) {
                if($file->getFilename() == $package->namePackage . "ServiceProvider.php"){
                    $zip->addFile($file->getRealPath(), "src/" . $file->getFilename());
                }
                if($file->getFilename() == $package->namePackage . ".php"){
                    $zip->addFile($file->getRealPath(), "src/" . $file->getFilename());
                }
                if($file->getFilename() == $package->file){
                    $zip->addFile($file->getRealPath(), "src/Commands/" . $file->getFilename());
                }
                if($file->getFilename() == "composer.json"){
                    $zip->addFile($file->getRealPath(), $file->getFilename());
                }
            }

            $zip->close();

            $package->file = $package->namePackage . ".zip";
            
        }

        $package->user_id = auth()->user()->id;

        $package->save();

        $url = URL::temporarySignedRoute(
            'download', now()->addSeconds(10), ['id' => $package->id]
        );

        return Inertia::render('Testing/Index', [
            'url' => $url,
        ]);
        
    }
}

<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PackageController;
use App\Http\Controllers\GitHubController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
Route::get('auth/github', [GitHubController::class, 'gitRedirect'])->name('github.login');
Route::get('auth/github/callback', [GitHubController::class, 'gitCallback'])->name('github.callback');

Route::middleware('auth')->group(function () {
    Route::get('/home', [ProfileController::class, 'index'])->name('testing.index');   
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/package', [PackageController::class, 'index'])->name('package.index');
    Route::post('/package', [PackageController::class, 'store'])->name('package.store');
});

require __DIR__.'/auth.php';

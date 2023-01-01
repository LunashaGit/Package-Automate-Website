<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\GitHubController;
use App\Http\Controllers\GoogleController;
use App\Http\Controllers\VendorController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\TestingController;
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
Route::middleware(!'auth')->group(function (){
    Route::get('auth/github', [GitHubController::class, 'gitRedirect'])->name('github.login');
    Route::get('auth/github/callback', [GitHubController::class, 'gitCallback'])->name('github.callback');
    Route::get('auth/google', [GoogleController::class, 'googleRedirect'])->name('google.login');
    Route::get('auth/google/callback', [GoogleController::class, 'googleCallback'])->name('google.callback');
});

Route::middleware('auth')->group(function () {
    Route::get('/home', [HomeController::class, 'index'])->name('home.index');   
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/package', [VendorController::class, 'index'])->name('package.index');
    Route::post('/package', [VendorController::class, 'store'])->name('package.store');
    Route::get('/download/{id}', [VendorController::class, 'download'])->name('download');
});

Route::middleware(['auth', 'verified', 'isAdmin'])->group(function (){
    Route::get('/testing', [TestingController::class, 'index'])->name('testing.index');   
    Route::get('/admin', [AdminController::class, 'index'])->name('admin.index');
});

require __DIR__.'/auth.php';

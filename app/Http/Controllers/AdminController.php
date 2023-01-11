<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\User;

class AdminController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('verified');
        $this->middleware('isAdmin');
    }
    
    public function index(Request $request)
    {
        return Inertia::render('Admin/Index');
    }
}

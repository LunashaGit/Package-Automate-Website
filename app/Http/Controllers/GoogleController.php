<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Exception;

class GoogleController extends Controller
{
    public function googleRedirect()
    {
        return Socialite::driver('google')->redirect();
    }
       
    public function googleCallback()
    {
        try {

            $googleUser = Socialite::driver('google')->user();
            
            $Found = User::where('google_id', $googleUser->id)->first();
            
            if ($Found) {
                Auth::login($Found);
                return redirect('/home');
            }

            $user = User::updateOrCreate([
                'google_id' => $googleUser->id,
            ], [
                'name' => $googleUser->name,
                'email' => $googleUser->email,
                'auth_type' => 'google',
                'password' => bcrypt($googleUser->token),
            ]);

            Auth::login($user);
        
            return redirect('/home');
     
        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}

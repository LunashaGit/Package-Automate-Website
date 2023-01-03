<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Exception;
use Illuminate\Support\Facades\Redirect;

class GitHubController extends Controller
{
    public function gitRedirect()
    {
        return Socialite::driver('github')->redirect();
    }
    
    public function gitCallback()
    {
        try {

            $githubUser = Socialite::driver('github')->user();

            $Found = User::where('github_id', $githubUser->id)->first();
            
            if ($Found) {
                Auth::login($Found);
                return  Redirect::route('home.index');
            }

            $user = User::updateOrCreate([
                'github_id' => $githubUser->id,
            ], [
                'name' => $githubUser->name,
                'email' => $githubUser->email,
                'auth_type' => 'github',
                'password' => bcrypt($githubUser->token),
            ]);

            Auth::login($user);
        
            return  Redirect::route('home.index');

    
        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}
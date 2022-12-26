<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
use Exception;

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
 
            $user = User::updateOrCreate([
                'github_id' => $githubUser->id,
            ], [
                'name' => $githubUser->name,
                'email' => $githubUser->email,
                'github_token' => $githubUser->token,
                'github_refresh_token' => $githubUser->refreshToken,
                'auth_type' => 'github',
                'password' => encrypt('gitpwd059')
            ]);

            $searchUser = User::where('github_id', $user->id)->first();
      
            if($searchUser){
      
                Auth::login($searchUser);
     
                return redirect('/dashboard');
      
            }
        
            Auth::login($user);
        
            return redirect('/home');
     
        } catch (Exception $e) {
            dd($e->getMessage());
        }
    }
}
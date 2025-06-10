<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Http\Request;
use Laravel\Socialite\Two\InvalidStateException;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callback(Request $request)
    {
        try {
            $googleUser = Socialite::driver('google')->stateless()->user();
        } catch (\Exception $e) {
            Log::error('Google authentication failed: ' . $e->getMessage());
            return redirect('/')->withErrors(['Google authentication failed.']);
        }
        // Check if the user already exists
        $existingUser = User::where('google_id', $googleUser->getId())->first();
        if ($existingUser) {
            Auth::login($existingUser);
            Log::info('User logged in: ' . $existingUser->email);
            return redirect()->route('dashboard');
        } else {
            // Create a new user
            $user = User::updateOrCreate(
                ['email' => $googleUser->getEmail()],
                [
                    'name' => $googleUser->getName(),
                    'google_id' => $googleUser->getId(),
                    'avatar' => $googleUser->getAvatar(),
                ]
            );
            Auth::login($user);
            Log::info('User logged in: ' . $user->email);
            return redirect()->route('dashboard');
        }
    }

}

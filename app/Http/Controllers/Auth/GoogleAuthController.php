<?php

namespace App\Http\Controllers\Auth;
use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use Illuminate\Support\Facades\Auth;
use App\Models\User;
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
                    \Log::info('Google callback received.'); // Add this line

                    $googleUser = Socialite::driver('google')->user();

                    if (!$googleUser) {
                        \Log::error('Google authentication failed: No user returned.'); // Add this line
                        return redirect('/')->withErrors(['Google authentication failed.']);
                    }

                    $user = User::updateOrCreate(
                        ['email' => $googleUser->getEmail()],
                        [
                            'name'      => $googleUser->getName(),
                            'google_id' => $googleUser->getId(),
                            'avatar'    => $googleUser->getAvatar(),
                        ]
                    );

                    Auth::login($user);

                    \Log::info('User logged in: ' . $user->email); // Add this line

                    return redirect()->route('dashboard');

                } catch (InvalidStateException $e) {
                    \Log::error('OAuth state mismatch: ' . $e->getMessage()); // Add this line
                    return redirect('/')->withErrors(['OAuth state mismatch. Please try again.']);
                } catch (\Exception $e) {
                    \Log::error('Unexpected error: ' . $e->getMessage(), ['exception' => $e]); // Add this line
                    return redirect('/')->withErrors(['Unexpected error: ' . $e->getMessage()]);
                }
            }

}

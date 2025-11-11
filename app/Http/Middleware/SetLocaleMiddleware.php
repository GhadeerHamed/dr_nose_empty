<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;

class SetLocaleMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $locale = $request->route()->parameter('locale');
        if (! in_array($locale, ['ar','en'])) {
            return redirect()->to('/ar'.$request->getRequestUri());
        }

        app()->setLocale($locale);
        URL::defaults(['locale' => $locale]);

        return $next($request);
    }
}

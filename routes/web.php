<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

Route::get('/', function () {
    $locale = app()->getLocale() ?? "ar";
    return redirect("/$locale");
});

Route::group([
    'prefix' => '{locale}',
    'where' => ['locale' => 'en|ar'],
], function (Router $router) {
    $router->get('/', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    $router->get('/', function () {
        return Inertia::render('Dashboard');
    })->name('home');

    $router->get('/about', function () {
        return Inertia::render('Dashboard');
    })->name('about');

    $router->get('/services', function () {
        return Inertia::render('Dashboard');
    })->name('services');

    $router->get('/results', function () {
        return Inertia::render('Dashboard');
    })->name('results');

    $router->get('/appointment', function () {
        return Inertia::render('Dashboard');
    })->name('appointment');
});
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';


Route::any('/{any?}', function () {
    throw new NotFoundHttpException();
});

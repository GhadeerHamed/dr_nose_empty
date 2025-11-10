<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/locale/{locale}', function ($locale) {
    if (in_array($locale, ['ar', 'en'])) {
        session(['locale' => $locale]);
        app()->setLocale($locale);
    }
    return redirect()->back();
})->name('locale.switch');


Route::get('/', function () {
    return  Inertia::render('Dashboard');
})->name('dashboard');

Route::get('/', function () {
    return  Inertia::render('Dashboard');
})->name('home');

Route::get('/about', function () {
    return  Inertia::render('Dashboard');
})->name('about');

Route::get('/services', function () {
    return  Inertia::render('Dashboard');
})->name('services');

Route::get('/results', function () {
    return  Inertia::render('Dashboard');
})->name('results');

Route::get('/appointment', function () {
    return  Inertia::render('Dashboard');
})->name('appointment');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

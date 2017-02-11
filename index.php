<?php

/*
Bootstraps the application by autoloading required classes for the Laravel Blade
templating engine. Provides a simple routing mechanism to redirect to URI pages
*/

require 'vendor/autoload.php';

use Philo\Blade\Blade;

$views = __DIR__ . '/views';
$cache = __DIR__ . '/cache';

$blade = new Blade($views, $cache);
$redirectPage = $_SERVER['REQUEST_URI'];

if ($redirectPage == "/") {
  echo $blade->view()->make('dashboard')->render();
} else if ($redirectPage == "/myStats") {
  echo $blade->view()->make('myStats')->render();
} else if ($redirectPage == "/unproductivity") {
  echo $blade->view()->make('unproductivity')->render();
} else if ($redirectPage == "/comparisons") {
  echo $blade->view()->make('comparisons')->render();
} else if ($redirectPage == "/settings") {
  echo $blade->view()->make('settings')->render();
}

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title')</title>

    <!--Fonts-->

    <!--Styles-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/navbar-fixed-left.css">
    <link rel="stylesheet" href="../css/app.css">

    <!--Javascripts-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js" integrity="sha384-I6F5OKECLVtK/BL+8iSLDEHowSAfUo76ZL9+kGAgTRdiByINKJaqTPH/QVNS1VDb" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <script src="../js/Chart.js"></script>
    <script>var myChart = new Chart({...})</script>
</head>
<body>
  <div class="navbar navbar-inverse navbar-fixed-left">
    <a class="navbar-brand" href="/">Billy && Co.</a>
      <ul class="nav navbar-nav">
        <li><a href="/">Dashboard</a></li>
        <li><a href="myStats">My Statistics</a></li>
        <li><a href="unproductivity">(Un)Productivity</a></li>
        <li><a href="comparisons">You vs. The World</a></li>
        <li><a href="settings">Settings</a></li>
      </ul>
  </div>
  <div class="container">
    @yield('content')
</body>
</html>

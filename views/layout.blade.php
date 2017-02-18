<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>@yield('title')</title>

    <!--Fonts-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://fonts.googleapis.com/css?family=Raleway:200,400,500,800" rel="stylesheet" type="text/css">

    <!--Styles-->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">
    <link rel="stylesheet" href="../css/navbar-fixed-left.css">
    <link rel="stylesheet" href="../css/app.css">
    <link rel="stylesheet" href="../css/flipclock.css">
    <link rel="stylesheet" href="../css/unprod.css">
    <link rel="stylesheet" href="../css/mystats.css">


    <!--JavaScripts-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.3/jquery.min.js" integrity="sha384-I6F5OKECLVtK/BL+8iSLDEHowSAfUo76ZL9+kGAgTRdiByINKJaqTPH/QVNS1VDb" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
    <script src="../js/Chart.js"></script>
    <script>var myChart = new Chart({...})</script>

    <!--Website wide style definitions for fonts and colors-->
    <style>
        html, body {
          background-color: #fff;
          color: #636b6f;
          font-family: 'Raleway', sans-serif;
          font-weight: 100;
          height: 100vh;
          margin: 0;
        }
    </style>
</head>
<body>
  <div class="navbar navbar-inverse navbar-fixed-left">
    <a class="navbar-brand" href="/">Billy && Co.</a>
      <ul class="nav navbar-nav">
        <li id="Dashboard Nav"><a href="/">Dashboard &nbsp;<i class="fa fa-tachometer" aria-hidden="true"></i></a></li>
        <li id="My Statistics Nav"><a href="myStats">My Statistics &nbsp; <i class="fa fa-line-chart" aria-hidden="true"></i></a></li>
        <li id="(Un)Productivity Nav"><a href="unproductivity">(Un)Productivity &nbsp; <i class="fa fa-hourglass-half" aria-hidden="true"></i></a></li>
        <li id="You vs. The World Nav"><a href="comparisons">You vs. The World &nbsp; <i class="fa fa-globe" aria-hidden="true"></i></a></li>
        <li id="Settings Nav"><a href="settings">Settings &nbsp; <i class="fa fa-cogs" aria-hidden="true"></i></a></li>
      </ul>
    <div id="clockdiv">
      <button id="inch"> &#9650; </button>
      <button id="incm"> &#9650; </button>
      <button id="incs"> &#9650; </button>
      <div>
        <span class="hours"></span>
        <div class="smalltext">Hours</div>
      </div>
      <div>
        <span class="minutes"></span>
        <div class="smalltext">Minutes</div>
      </div>
      <div>
        <span class="seconds"></span>
        <div class="smalltext">Seconds</div>
      </div>
      <button id="dech"> &#9660; </button>
      <button id="decm"> &#9660; </button>
      <button id="decs"> &#9660; </button>
      <button id="startb"> START </button>
      <button id="stopb"> RESET </button>
      <script src="../js/flipclock.js"></script>
    </div>
  </div>
  <div class="container">
    @yield('content')
    <script type="text/javascript">
      document.getElementById(document.title + " Nav").className = "active";
    </script>
  </div>
</body>
</html>

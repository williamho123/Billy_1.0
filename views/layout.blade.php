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
    <link rel="stylesheet" href="../css/flipclock.css"

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
        <li id="Dashboard Nav"><a href="/">Dashboard</a></li>
        <li id="My Statistics Nav"><a href="myStats">My Statistics</a></li>
        <li id="(Un)Productivity Nav"><a href="unproductivity">(Un)Productivity</a></li>
        <li id="You vs. The World Nav"><a href="comparisons">You vs. The World</a></li>
        <li id="Settings Nav"><a href="settings">Settings</a></li>
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
</body>
</html>

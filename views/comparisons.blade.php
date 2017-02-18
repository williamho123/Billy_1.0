@extends('layout')

@section('title','You vs. The World')


@section('content')
  <h1>You vs. The World</h1>
  <hr/>
  <div id="comparison_bar" class="row">
    <canvas id="comparisonChart" width="40%" height="40%"></canvas>
    <script src="../js/comparisonChart.js"></script>
  </div>
<br>
<br>
<br>
<br>
<div class = 'container-embed'>
    <head>
<style>
.dropbtn {
    background-color: lightpink;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
}

.dropbtn:hover, .dropbtn:focus {
    background-color: mistyrose;
}

.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: lightpink;
    min-width: 160px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
}

.dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}

.dropdown a:hover {background-color: mistyrose}

.show {display:block;}
</style>
</head>
<body>



<div class="dropdown">
<button onclick="myFunction()" class="dropbtn">Choose Category</button>
  <div id="myDropdown" class="dropdown-content">
    <a href = '.'>Social Media</a>
    <a href = '.'>School</a>
    <a href = '.'>Entertainment</a>
    <a href = '.'>News</a>
    <a href = '.'>Email</a>
    <a href = '.'>Other</a>
  </div>
</div>

<script>
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
</script>

</body>
</div>
@endsection

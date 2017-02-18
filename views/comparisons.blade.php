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
<div class="dropdown">
  <button onclick="chooseCategory()" class="dropbtn">Choose Category</button>
  <div id="myDropdown" class="dropdown-content">
    <a href="#">Social Media</a>
    <a href="#">School</a>
    <a href="#">Entertainment</a>
    <a href="#">News</a>
    <a href="#">Email</a>
    <a href="#">Other</a>
  </div>
</div>


@endsection

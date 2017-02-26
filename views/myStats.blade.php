@extends('layout')

@section('title','My Statistics')

@section('content')
  <h1>My Statistics</h1>
  <hr/>

<div class="btn-group">
      <button id="socialMedia" class="btn button btn-active">Social Media</button>
      <button id="school" class="btn button">School</button>
      <button id="entertainment" class="btn button">Entertainment</button>
      <button id="news" class="btn button">News</button>
      <button id="shopping" class="btn button">Shopping</button> 
    </div>

  <div id="myStats_canvas_bar" class="row">
    <canvas id="barChart" width="40%" height="40%"></canvas>
    <script src="../js/myStatsChart.js"></script>
  </div>
  <div id="myStats_canvas_polar" class="row">
    <canvas id="polarChart" width="40%" height="40%"></canvas>
    <script src="../js/myStatsChart.js"></script>
    <script src="../js/dashboardChart.js"></script>
  </div>


@endsection

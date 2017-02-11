@extends('layout')

@section('title','My Statistics')

@section('content')
  <h1>My Statistics</h1>
  <hr/>
  <div id="myStats_canvas_bar" class="row">
    <canvas id="barChart" width="40%" height="40%"></canvas>
    <script src="../js/myStatsChart.js"></script>
  </div>
  <div id="myStats_canvas_polar" class="row">
    <canvas id="polarChart" width="40%" height="40%"></canvas>
    <script src="../js/myStatsChart.js"></script>
  </div>
@endsection

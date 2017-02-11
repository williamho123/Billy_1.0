@extends('layout')

@section('title','Dashboard')

@section('content')
<h1>Dashboard</h1>
<hr/>
  <div id="dashboard_canvas" class="row">
    <canvas id="myChart" width="40%" height="40%"></canvas>
    <script src="../js/dashboardChart.js"></script>
  </div>
@endsection

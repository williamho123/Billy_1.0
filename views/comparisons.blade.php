@extends('layout')

@section('title','You vs. The World')


@section('content')
  <h1>You vs. The World</h1>
  <hr/>
  <div id="comparison_bar" class="row">
    <canvas id="comparisonChart" width="40%" height="40%"></canvas>
  </div>

  <h3>Categories</h3>
  <div id = "categoryContainer" class = "container-embed">
    <div class="btn-group-vertical">
      <button id='socialMedia' class="btn btn-default active">Social Media</button>
      <button id='school' class="btn btn-default">School</button>
      <button id='entertainment' class="btn btn-default">Entertainment</button>
      <button id='news' class="btn btn-default">News</button>
      <button id='email' class="btn btn-default">Email</button>
    </div>
  </div>
  <script src="../js/comparisonChart.js"></script>



@endsection

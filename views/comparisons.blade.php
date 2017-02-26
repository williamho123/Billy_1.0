@extends('layout')

@section('title','Me vs. The World')

@section('content')
  <h1>Me vs. The World</h1>
  <hr/>
  <div id="category_select" class="container-embed">
    <div class="btn-group-vertical">
      <h3>Select Category</h3>
      <button id="socialMedia" class="btn button btn-active">Social Media</button>
      <button id="school" class="btn button">School</button>
      <button id="entertainment" class="btn button">Entertainment</button>
      <button id="news" class="btn button">News</button>
      <button id="shopping" class="btn button">Shopping</button>
    </div>
  </div>
  <div id="comparison_bar" class="row">
    <canvas id="comparisonChart" width="40%" height="40%"></canvas>
  </div>
  <script src="../js/comparisonChart.js"></script>
@endsection

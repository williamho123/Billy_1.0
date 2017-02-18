@extends('layout')

@section('title','You vs. The World')


@section('content')
  <h1>You vs. The World</h1>
  <hr/>
  <div id="comparison_bar" class="row">
    <canvas id="comparisonChart" width="40%" height="40%"></canvas>
  </div>

<h3 class = "category-bar">Categories</h3>
<div id = "categoryContainer" class = "container-embed">
    <button id = 'socialMedia'>Social Media</button>
    <br>
    <button id = 'school'>School</button>
    <br>
    <button id = 'entertainment'>Entertainment</button>
    <br>
    <button id = 'news'>News</button>
    <br>
    <button id = 'email'>Email</button>
</div>
  <script src="../js/comparisonChart.js"></script>
  


@endsection

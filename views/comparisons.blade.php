@extends('layout')

@section('title','You vs. The World')


@section('content')
  <h1>You vs. The World</h1>
  <hr/>
  <div id="comparison_bar" class="row">
    <canvas id="comparisonChart" width="40%" height="40%"></canvas>
    <script src="../js/comparisonChart.js"></script>
  </div>

<h3 class = "category-bar">Categories</h3>
<div class = "container-embed">
    <a href = '.'>Social Media</a>
    <br>
    <a href = '.'>School</a>
    <br>
    <a href = '.'>Entertainment</a>
    <br>
    <a href = '.'>News</a>
    <br>
    <a href = '.'>Email</a>
    <br>
    <a href = '.'>Other</a>
</div>



@endsection

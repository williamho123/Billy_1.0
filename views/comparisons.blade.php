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
<div id = "categoryContainer" class = "container-embed">
    <a id = 'socialMedia'>Social Media</a>
    <br>
    <a id = 'school'>School</a>
    <br>
    <a id = 'entertainment'>Entertainment</a>
    <br>
    <a id = 'news'>News</a>
    <br>
    <a id = 'email'>Email</a>
</div>



@endsection

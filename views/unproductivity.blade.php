@extends('layout')

@section('title','(Un)Productivity')

@section('content')
  <h1>(Un)Productivity</h1>
  <hr/>
<h2>Top 3 Websites</h2>
<h2>You Spent:</h2>
<br>
    <div id="unprodText" class="container-embed">
        <p class = 'site1'> 3 hours on Facebook. You could have completed two problem sets.</p>
        <br>
        <p class = 'site2'>4 hours on Canvas. You could have ordered Chinese food, had it delivered, and finished two episodes on Netflix.</p>
        <br>
        <p class = 'site3'>1.5 hours on Netflix. You could have grabbed dinner with a friend.</p>
</div>

@endsection

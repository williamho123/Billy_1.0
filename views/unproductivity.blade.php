@extends('layout')

@section('title','(Un)Productivity')

@section('content')
  <h1>(Un)Productivity</h1>
  <hr/>
  <br>
  <div class="container-embed">
    <div class="row">
      <div class="col-md-4 img-container tooltip-wrap">
          <img src="../img/fb-art.png" class="cropped">
          <div class="tooltip-content">
            <p>
              <span class="red">3 hours</span> on Facebook. You could have finished <span class="green">2 problem sets.</span>
            </p>
         </div>
      </div>
      <div class="col-md-4 img-container tooltip-wrap">
        <img src="../img/twitter.png" class="cropped">
        <div class="tooltip-content">
          <p>
            <span class="red">1 hour</span> on Twitter. You could have <span class="green">slept 1 hour earlier.</span>
          </p>
       </div>
      </div>
      <div class="col-md-4 img-container tooltip-wrap">
        <img src="../img/instagram-logo.png" class="cropped">
        <div class="tooltip-content">
          <p>
            <span class="red">4 hours</span> on Instagram. You need to <span class="green">get a life.</span>
          </p>
       </div>
      </div>
    </div>
    <div class="row offset">
      <div class="col-md-4 img-container tooltip-wrap">
        <img src="../img/northwestern-thumbnail.jpg" class="cropped">
        <div class="tooltip-content">
          <p>
            <span class="red">1 hour</span> on Caesar. You could have studied for <span class="green">your economics quiz.</span>
          </p>
       </div>
      </div>
      <div class="col-md-4 img-container tooltip-wrap">
        <img src="../img/Piazza-Icon.png" class="cropped">
        <div class="tooltip-content">
          <p>
            <span class="red">2 hours</span> on Piazza. You could have finished your <span class="green">coding project.</span>
          </p>
       </div>
      </div>
      <div class="col-md-4 img-container tooltip-wrap">
        <img src="../img/netflix.png" class="cropped">
        <div class="tooltip-content">
          <p>
            <span class="red">8 hours</span> on Netflix. You could have gotten a <span class="green">full nights sleep!</span>
          </p>
       </div>
      </div>
    </div>
    <div class="row offset">
      <div class="col-md-4 img-container tooltip-wrap">
          <img src="../img/amazon-logo.jpg" class="cropped">
          <div class="tooltip-content">
            <p>
              <span class="red">2 hours</span> on Amazon. You could have responded to <span class="green">20 emails.</span>
            </p>
         </div>
      </div>
      <div class="col-md-4 img-container tooltip-wrap">
          <img src="../img/youtube.png" class="cropped">
          <div class="tooltip-content">
            <p>
              <span class="red">4 hours</span> on YouTube. You could have studied for your <span class="green">orgo midterm.</span>
            </p>
         </div>
      </div>
      <div class="col-md-4 img-container tooltip-wrap">
          <img src="../img/cnn.png" class="cropped">
          <div class="tooltip-content">
            <p>
              <span class="red">1 hour</span> on CNN. You could have <span class="green">worked out at the gym.</span>
            </p>
         </div>
      </div>
    </div>
  </div>
@endsection

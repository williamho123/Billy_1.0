@extends('layout')

@section('title','Settings')

@section('content')

  <h1>Settings</h1>
  <hr>
  @include('categoryModal')
  @include('notificationModal')
  <div class="panel-group" id="accordion">
      <div class="panel panel-default" id="panel1">
          <div class="panel-heading">
               <h4 class="panel-title">
                 <a data-toggle="collapse" data-target="#collapseOne" href="#collapseOne" class="collapsed">
                    Categories
                </a>
              </h4>
          </div>
          <div id="collapseOne" class="panel-collapse collapse">
              <div class="panel-body">
                <div class="row">
                  <div class="col-sm-3">
                    <div class="box box-outline sm-bg">
                      Social Media
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="box box-outline school-bg">
                      School
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="box box-outline ent-bg">
                      Entertainment
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="box box-outline news-bg">
                      News
                    </div>
                  </div>
                </div>
                <div class="row offset-small">
                  <div class="col-sm-3">
                    <div class="box box-outline shop-bg">
                      Shopping
                    </div>
                  </div>
                  <div class="col-sm-3">
                    <div class="box">
                      <a href="#categoryModal" role="button" data-toggle="modal">
                        <img src="../img/plus.gif" class="small">
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
      <div class="panel panel-default" id="panel2">
        <div class="panel-heading">
             <h4 class="panel-title">
              <a data-toggle="collapse" data-target="#collapseTwo" href="#collapseTwo" class="collapsed">
                Default Timer
              </a>
            </h4>
        </div>
        <div id="collapseTwo" class="panel-collapse collapse">
            <div class="panel-body">
              <form class="form-inline">
                <label class="sr-only" for="inlineFormInput">Hours</label>
                <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="hourInput" placeholder="Hours">
                <label class="sr-only" for="inlineFormInput">Minutes</label>
                <input type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="minInput" placeholder="Minutes">
                <button id="timerDone" type="button" class="btn btn-primary">Update</button>
                <script src="../js/flipclock.js"></script>
              </form>
            </div>
        </div>
      </div>
      <div class="panel panel-default" id="panel1">
          <div class="panel-heading">
             <h4 class="panel-title">
               <a data-toggle="collapse" data-target="#collapseFour" href="#collapseFour" class="collapsed">
                  (Un) Productivity Page
              </a>
            </h4>
          </div>
          <div id="collapseFour" class="panel-collapse collapse">
          <div class="panel-body">
            <div class="container-embed">
              <h4>Choose the websites you want to track:</h4>
              <div class="checkbox">
                <label><input type="checkbox" value="" checked>Amazon</label>
              </div>
              <div class="checkbox">
                <label><input type="checkbox" value="" checked >Caesar</label>
              </div>
              <div class="checkbox">
                <label><input type="checkbox" value="" checked>CNN</label>
              </div>
              <div class="checkbox">
                <label><input type="checkbox" value="" checked>Facebook</label>
              </div>
              <div class="checkbox">
                <label><input type="checkbox" value="" checked>Instagram</label>
              </div>
              <div class="checkbox">
                <label><input type="checkbox" value="" checked>Netflix</label>
              </div>
              <div class="checkbox">
                <label><input type="checkbox" value="" checked>Piazza</label>
              </div>
              <div class="checkbox">
                <label><input type="checkbox" value="" checked>Twitter</label>
              </div>
              <div class="checkbox">
                <label><input type="checkbox" value="" checked>YouTube</label>
              </div>
              <button id = "unprodDone" type = "button" class="btn btn-primary">Update</button>
            </div>
          </div>
        </div>
      </div>
    </div>
@endsection

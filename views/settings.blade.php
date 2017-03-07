@extends('layout')

@section('title','Settings')

@section('content')

  <h1>Settings</h1>
  <hr>
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
                      <img src="../img/plus.gif" class="small">
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
                <button id = "timerDone" type = "button" class="btn btn-primary">Update</button>
              </form>
            </div>
        </div>
      </div>
      <div class="panel panel-default" id="panel3">
          <div class="panel-heading">
               <h4 class="panel-title">
                 <a data-toggle="collapse" data-target="#collapseThree" href="#collapseThree" class="collapsed">
                   My Statistics Page
                 </a>
               </h4>
          </div>
          <div id="collapseThree" class="panel-collapse collapse">
              <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
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
              <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
          </div>
      </div>
      <div class="panel panel-default" id="panel1">
          <div class="panel-heading">
               <h4 class="panel-title">
                 <a data-toggle="collapse" data-target="#collapseFive" href="#collapseFive" class="collapsed">
                    You vs. The World Page
                </a>
              </h4>
          </div>
          <div id="collapseFive" class="panel-collapse collapse">
              <div class="panel-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>
          </div>
      </div>
  </div>
@endsection

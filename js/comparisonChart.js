var data = {
    datasets: [{
      data: [60, 35, 40, 22, 37],
      label:"Me",
      backgroundColor:"rgba(255, 99, 132, 0.2)"
     },
     {
      data: [40, 45, 50, 50, 30],
      label:"The World",
      backgroundColor:"rgba(255, 0, 132, 0.2)"
     }],
  labels: ['Facebook', 'Instagram', 'Twitter','GroupMe', 'Douban']
};
function setAllButtonDefault() {
  document.getElementById('socialMedia').className = "btn button";
  document.getElementById('school').className = "btn button";
  document.getElementById('entertainment').className = "btn button";
  document.getElementById('news').className = "btn button";
  document.getElementById('shopping').className = "btn button";
}


//onclick event for the menu of categories
document.getElementById('socialMedia').onclick = function() {
setAllButtonDefault();
document.getElementById('socialMedia').className = "btn button btn-active";
barChart.data.datasets[0].data[0] = 60;
barChart.data.datasets[0].data[1] = 35;
barChart.data.datasets[0].data[2] = 40;
barChart.data.datasets[0].data[3] = 22;
barChart.data.datasets[0].data[4] = 37;
barChart.data.datasets[1].data[0] = 40;
barChart.data.datasets[1].data[1] = 45;
barChart.data.datasets[1].data[2] = 50;
barChart.data.datasets[1].data[3] = 50;
barChart.data.datasets[1].data[4] = 30;
barChart.data.labels[0] = "Facebook";
barChart.data.labels[1] = "Instagram";
barChart.data.labels[2] = "Twitter";
barChart.data.labels[3] = "GroupMe";
barChart.data.labels[4] = "Douban";
barChart.update();
};

document.getElementById('school').onclick = function() {
setAllButtonDefault();
document.getElementById('school').className = "btn button btn-active";
barChart.data.datasets[0].data[0] = 30;
barChart.data.datasets[0].data[1] = 35;
barChart.data.datasets[0].data[2] = 40;
barChart.data.datasets[0].data[3] = 32;
barChart.data.datasets[0].data[4] = 34;
barChart.data.datasets[1].data[0] = 59;
barChart.data.datasets[1].data[1] = 40;
barChart.data.datasets[1].data[2] = 50;
barChart.data.datasets[1].data[3] = 55;
barChart.data.datasets[1].data[4] = 25;
barChart.data.labels[0] = "CourseHero";
barChart.data.labels[1] = "Chegg";
barChart.data.labels[2] = "Piazza";
barChart.data.labels[3] = "Canvas";
barChart.data.labels[4] = "Caesar";
barChart.update();
};

document.getElementById('entertainment').onclick = function() {
setAllButtonDefault();
document.getElementById('entertainment').className = "btn button btn-active";
barChart.data.datasets[0].data[0] = 50;
barChart.data.datasets[0].data[1] = 70;
barChart.data.datasets[0].data[2] = 40;
barChart.data.datasets[0].data[3] = 25;
barChart.data.datasets[0].data[4] = 25;
barChart.data.datasets[1].data[0] = 60;
barChart.data.datasets[1].data[1] = 50;
barChart.data.datasets[1].data[2] = 30;
barChart.data.datasets[1].data[3] = 30;
barChart.data.datasets[1].data[4] = 25;
barChart.data.labels[0] = "YouTube";
barChart.data.labels[1] = "Netflix";
barChart.data.labels[2] = "HBO";
barChart.data.labels[3] = "Vine";
barChart.data.labels[4] = "Vimeo";
barChart.update();
};

document.getElementById('news').onclick = function() {
setAllButtonDefault();
document.getElementById('news').className = "btn button btn-active";
barChart.data.datasets[0].data[0] = 30;
barChart.data.datasets[0].data[1] = 30;
barChart.data.datasets[0].data[2] = 24;
barChart.data.datasets[0].data[3] = 22;
barChart.data.datasets[0].data[4] = 37;
barChart.data.datasets[1].data[0] = 40;
barChart.data.datasets[1].data[1] = 15;
barChart.data.datasets[1].data[2] = 45;
barChart.data.datasets[1].data[3] = 50;
barChart.data.datasets[1].data[4] = 35;
barChart.data.labels[0] = "CNN";
barChart.data.labels[1] = "Daily Northwestern";
barChart.data.labels[2] = "Washington Post";
barChart.data.labels[3] = "Guardian";
barChart.data.labels[4] = "Axios";
barChart.update();
};

document.getElementById('shopping').onclick = function() {
setAllButtonDefault();
document.getElementById('shopping').className = "btn button btn-active";
barChart.data.datasets[0].data[0] = 60;
barChart.data.datasets[0].data[1] = 35;
barChart.data.datasets[0].data[2] = 24;
barChart.data.datasets[0].data[3] = 22;
barChart.data.datasets[0].data[4] = 37;
barChart.data.datasets[1].data[0] = 40;
barChart.data.datasets[1].data[1] = 45;
barChart.data.datasets[1].data[2] = 25;
barChart.data.datasets[1].data[3] = 50;
barChart.data.datasets[1].data[4] = 15;
barChart.data.labels[0] = "Amazon";
barChart.data.labels[1] = "EBay";
barChart.data.labels[2] = "CraigsList";
barChart.data.labels[3] = "Alibaba";
barChart.data.labels[4] = "Taobao";
barChart.update();
};

var ctx3= document.getElementById("comparisonChart").getContext("2d");
var barChart = new Chart(ctx3, {
    type: 'bar',
    data: data,
});

function adjustChartSize(){
     var w = $(window).width();
var h = $(window).height();
        $("#comparisonChart").css({
                width:Math.min(w,h)*0.7,
                height: Math.min(w,h)*0.7,
}               );
document.getElementById("comparisonChart").style.marginLeft = "-15%";
}
adjustChartSize();  //onload
$(window).resize(adjustChartSize);

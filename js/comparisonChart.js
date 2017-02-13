var data = {
    datasets: [{
      data: [60, 35, 24, 40, 30, 22],
      label:"You",
      backgroundColor:"rgba(255, 99, 132, 0.2)"
     },
     {
      data: [40, 45, 40, 25, 25, 50],
      label:"The World",
      backgroundColor:"rgba(255, 0, 132, 0.2)"
     }],
  labels: ["Facebook", 'YouTube', 'Piazza', 'Canvas','Caesar', 'Gmail']

};
var options = {
};
var ctx3= document.getElementById("comparisonChart").getContext("2d");
var barChart = new Chart(ctx3, {
    type: 'bar',
    data: data,
    options: options
});

function adjustChartSize(){
     var w = $(window).width();
var h = $(window).height();
        $("#comparisonChart").css({
                width:Math.min(w,h)*0.7,
                height: Math.min(w,h)*0.7,
}               );
document.getElementById("comparisonChart").style.marginLeft = w*0.2;
}
adjustChartSize();  //onload
$(window).resize(adjustChartSize);

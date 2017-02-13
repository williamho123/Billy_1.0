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


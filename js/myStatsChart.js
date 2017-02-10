var data = {
    datasets: [{
      data: [60, 35, 24, 40, 30, 22],
      label:"minutes spent on"
     }],
  labels: ["Facebook", 'YouTube', 'Piazza', 'Canvas','Caesar', 'Gmail']

};
var options = {};
var ctx = document.getElementById("barChart").getContext("2d");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data
 //   options: options
});

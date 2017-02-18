var data = {
    datasets: [{
      data: [60, 35, 24, 40, 30, 22],
      backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
        ]     
}],
  labels: ["Facebook", 'YouTube', 'Piazza', 'Canvas','Caesar', 'Gmail']

};
var options = {
  legend:{
    display:false
  },
  tooltops :{
    callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
  }
};
var ctx = document.getElementById("barChart").getContext("2d");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});


var data2 = {
    datasets: [{
        data: [60, 35, 24, 40, 30, 22],
        backgroundColor: [
            "#FF6384",
            "#4BC0C0",
            "#FFCE56",
            "#E7E9ED",
            "#36A2EB"
        ],
        label: 'My dataset' // for legend
    }],
    labels:["Facebook", 'YouTube', 'Piazza', 'Canvas','Caesar', 'Gmail']
};
var ctx2 = document.getElementById("polarChart").getContext("2d");
var myPolarChart = new Chart(ctx2, {
	type: 'polarArea',
	data: data2

});

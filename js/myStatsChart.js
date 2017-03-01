//#####################################################################################
//# code the color for each element in function updateChart (line 92)
//# syntax for adding rgb color is shown, add for both barchart and polarchart
//################################################################################
//variable to keep track of which category
var category;
//check local storage
if (localStorage.getItem("category")) {
	category = localStorage.getItem("category");
}
else {
	category = "Social Media";
}
var data;
var data2;

function setAllButtonDefault() {
  document.getElementById('socialMedia').className = "btn button";
  document.getElementById('school').className = "btn button";
  document.getElementById('entertainment').className = "btn button";
  document.getElementById('news').className = "btn button";
  document.getElementById('shopping').className = "btn button";
}



/////////////////////////////////////////////////////////////////////
//default data, does not matter what it is, just place holder, do not delete
var defaultData = {
    datasets: [{
      data: [0, 0, 0, 0, 0],
      backgroundColor: [
            "rgba(59, 89, 152, 1)",  //Facebook
            "rgba(187, 0, 0, 1)",   //YouTube
            "rgba(62, 122, 171, 1)", //Piazza
            "rgba(214, 64, 39, 1)", //Canvas
            "rgba(78, 45, 131, 1)", //Caesar
            //  "rgba(18, 86, 136, 1)",  //Instagram
            //  "rgba(85, 172, 238, 1)",  //Twitter
        		]
		}],
  labels: ["Facebook", 'YouTube', 'Piazza', 'Canvas','Caesar']
};
data = defaultData;
//////////////////////////////////////////////////////////////////
//charts declaration, data is for bar, data2 is for polar area

var options = {
  legend:{
    display:false,
		labels: {
			 fontSize:18,
			 fontFamily: "Raleway"
		}
  },
  tooltops :{
    callbacks: {
           label: function(tooltipItem) {
                  return tooltipItem.yLabel;
           }
        }
  },
 scales: {
			 xAxes: [{
					 ticks: {
							 fontSize: 12,
							 fontFamily: "Raleway"

					 }
			 }],
	yAxes: [{
					 ticks: {
							 fontSize: 20,
							 fontFamily: "Raleway"
					 },
		 scaleLabel: {
					display: true,
				 labelString: 'Minutes',
					 fontSize: 20,
					 fontFamily: "Raleway"
		 }
			 }]
	 }
};

var ctx = document.getElementById("barChart").getContext("2d");
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
});

//same here data2 jut
var defaultData2 = {
    datasets: [{
        data: [60, 35, 24, 40, 30],
        backgroundColor: [
            "rgba(59, 89, 152, 1)",
            "rgba(187, 0, 0, 1)",
            "rgba(62, 122, 171, 1)",
            "rgba(214, 64, 39, 1)",
            "rgba(78, 45, 131, 1)",

        ],
        label: 'My dataset' // for legend
    }],
    labels:["Facebook", 'YouTube', 'Piazza', 'Canvas','Caesar']
};

data2 = defaultData2;

var options2 = {
  legend:{
		onClick: function(event, legendItem) {},
		labels: {
			 fontSize:15,
			 fontFamily: "Raleway"
		}
  }
};
var ctx2 = document.getElementById("polarChart").getContext("2d");
var myPolarChart = new Chart(ctx2, {
	type: 'polarArea',
	data: data2,
	options:options2
});


function updateChart() {
	setAllButtonDefault();
	if (category == "Social Media") {
			myBarChart.data.datasets[0].data[0] = 60;
			myBarChart.data.datasets[0].data[1] = 35;
			myBarChart.data.datasets[0].data[2] = 40;
			myBarChart.data.datasets[0].data[3] = 22;
			myBarChart.data.datasets[0].data[4] = 37;
			myBarChart.data.labels[0] = "Facebook";
			myBarChart.data.labels[1] = "Instagram";
			myBarChart.data.labels[2] = "Twitter";
			myBarChart.data.labels[3] = "GroupMe";
			myBarChart.data.labels[4] = "Douban";
			//insert background color like this for bar chart:  backgroundColor[i] where i is the index of data
			myBarChart.data.datasets[0].backgroundColor[0] = "rgba(59, 89, 152, 1)"; //facebook
			myBarChart.data.datasets[0].backgroundColor[1] = "rgba(18, 86, 136, 1)"; //Instagram
			myBarChart.data.datasets[0].backgroundColor[2] = "rgba(85, 172, 238, 1)"; //twitter
			myBarChart.data.datasets[0].backgroundColor[3] = "rgba(0, 175, 240, 1)"; //groupme
			myBarChart.data.datasets[0].backgroundColor[4] = "rgba(46, 150, 61, 1)"; //douban
			myBarChart.update();
			myPolarChart.data.datasets[0].data[0] = 30;
			myPolarChart.data.datasets[0].data[1] = 10;
			myPolarChart.data.datasets[0].data[2] = 25;
			myPolarChart.data.datasets[0].data[3] = 25;
			myPolarChart.data.datasets[0].data[4] = 10;
			myPolarChart.data.labels[0] = "Facebook";
			myPolarChart.data.labels[1] = "Instagram";
			myPolarChart.data.labels[2] = "Twitter";
			myPolarChart.data.labels[3] = "GroupMe";
			myPolarChart.data.labels[4] = "Douban";
			myPolarChart.data.datasets[0].backgroundColor[0] = "rgba(59, 89, 152, 1)"; //facebook
			myPolarChart.data.datasets[0].backgroundColor[1] = "rgba(18, 86, 136, 1)"; //Instagram
			myPolarChart.data.datasets[0].backgroundColor[2] = "rgba(85, 172, 238, 1)"; //twitter
			myPolarChart.data.datasets[0].backgroundColor[3] = "rgba(0, 175, 240, 1)"; //groupme
			myPolarChart.data.datasets[0].backgroundColor[4] = "rgba(46, 150, 61, 1)"; //douban
			//insert background color like this for polar chart:  backgroundColor[i] where i is the index of data
			//			myPolarChart.data.datasets[0].backgroundColor[0] = "rgba(78, 45, 131, 1)";

			myPolarChart.update();
			document.getElementById('socialMedia').className = "btn button btn-active";
		}
		else if (category == "School") {
			myBarChart.data.datasets[0].data[0] = 30;
			myBarChart.data.datasets[0].data[1] = 35;
			myBarChart.data.datasets[0].data[2] = 40;
			myBarChart.data.datasets[0].data[3] = 32;
			myBarChart.data.datasets[0].data[4] = 34;
			myBarChart.data.labels[0] = "Scribd";
			myBarChart.data.labels[1] = "Chegg";
			myBarChart.data.labels[2] = "Piazza";
			myBarChart.data.labels[3] = "Canvas";
			myBarChart.data.labels[4] = "Caesar";
			myBarChart.data.datasets[0].backgroundColor[0] = "rgba(26, 123, 186, 1)"; //scribd
			myBarChart.data.datasets[0].backgroundColor[1] = "rgba(240, 125, 0, 1)"; //chegg
			myBarChart.data.datasets[0].backgroundColor[2] = "rgba(62, 122, 171, 1)"; //piazza
			myBarChart.data.datasets[0].backgroundColor[3] = "rgba(214, 64, 39, 1)"; //canvas
			myBarChart.data.datasets[0].backgroundColor[4] = "rgba(78, 42, 132, 1)"; //caesar

			myBarChart.update();
			myPolarChart.data.datasets[0].data[0] = 10;
			myPolarChart.data.datasets[0].data[1] = 10;
			myPolarChart.data.datasets[0].data[2] = 40;
			myPolarChart.data.datasets[0].data[3] = 22;
			myPolarChart.data.datasets[0].data[4] = 18;
			myPolarChart.data.labels[0] = "Scribd";
			myPolarChart.data.labels[1] = "Chegg";
			myPolarChart.data.labels[2] = "Piazza";
			myPolarChart.data.labels[3] = "Canvas";
			myPolarChart.data.labels[4] = "Caesar";
			myPolarChart.data.datasets[0].backgroundColor[0] = "rgba(26, 123, 186, 1)"; //scribd
			myPolarChart.data.datasets[0].backgroundColor[1] = "rgba(240, 125, 0, 1)"; //chegg
			myPolarChart.data.datasets[0].backgroundColor[2] = "rgba(62, 122, 171, 1)"; //piazza
			myPolarChart.data.datasets[0].backgroundColor[3] = "rgba(214, 64, 39, 1)"; //canvas
			myPolarChart.data.datasets[0].backgroundColor[4] = "rgba(78, 42, 132, 1)"; //caesar

			myPolarChart.update();
			 document.getElementById('school').className = "btn button btn-active";
		}
		else if (category == "Entertainment") {
			myBarChart.data.datasets[0].data[0] = 50;
			myBarChart.data.datasets[0].data[1] = 70;
			myBarChart.data.datasets[0].data[2] = 40;
			myBarChart.data.datasets[0].data[3] = 25;
			myBarChart.data.datasets[0].data[4] = 25;
			myBarChart.data.labels[0] = "YouTube";
			myBarChart.data.labels[1] = "Netflix";
			myBarChart.data.labels[2] = "HBO";
			myBarChart.data.labels[3] = "Vine";
			myBarChart.data.labels[4] = "Vimeo";
//insert background color like this for bar chart:  backgroundColor[i] where i is the index of data
//			myBarChart.data.datasets[0].backgroundColor[0] = "rgba(187, 0, 0, 1)"; youtube

			myBarChart.update();
			myPolarChart.data.datasets[0].data[0] = 40;
			myPolarChart.data.datasets[0].data[1] = 25;
			myPolarChart.data.datasets[0].data[2] = 10;
			myPolarChart.data.datasets[0].data[3] = 12;
			myPolarChart.data.datasets[0].data[4] = 13;
			myPolarChart.data.labels[0] = "YouTube";
			myPolarChart.data.labels[1] = "Netflix";
			myPolarChart.data.labels[2] = "HBO";
			myPolarChart.data.labels[3] = "Vine";
			myPolarChart.data.labels[4] = "Vimeo";
			//insert background color like this for polar chart:  backgroundColor[i] where i is the index of data
			//			myBarChart.data.datasets[0].backgroundColor[0] = "rgba(187, 0, 0, 1)"; youtube

			myPolarChart.update();
				 document.getElementById('entertainment').className = "btn button btn-active";
		}
		else if (category == "News") {
			myBarChart.data.datasets[0].data[0] = 30;
			myBarChart.data.datasets[0].data[1] = 30;
			myBarChart.data.datasets[0].data[2] = 24;
			myBarChart.data.datasets[0].data[3] = 22;
			myBarChart.data.datasets[0].data[4] = 37;
			myBarChart.data.labels[0] = "CNN";
			myBarChart.data.labels[1] = "Daily";
			myBarChart.data.labels[2] = "NY Times";
			myBarChart.data.labels[3] = "Guardian";
			myBarChart.data.labels[4] = "Axios";
			//insert background color like this for bar chart:  backgroundColor[i] where i is the index of data
			//			myBarChart.data.datasets[0].backgroundColor[0] = "rgba(187, 0, 0, 1)";

			myBarChart.update();
			myPolarChart.data.datasets[0].data[0] = 20;
			myPolarChart.data.datasets[0].data[1] = 30;
			myPolarChart.data.datasets[0].data[2] = 15;
			myPolarChart.data.datasets[0].data[3] = 20;
			myPolarChart.data.datasets[0].data[4] = 15;
			myPolarChart.data.labels[0] = "CNN";
			myPolarChart.data.labels[1] = "Daily";
			myPolarChart.data.labels[2] = "NY Times";
			myPolarChart.data.labels[3] = "Guardian";
			myPolarChart.data.labels[4] = "Axios";
			//insert background color like this for polar chart:  backgroundColor[i] where i is the index of data
			//			myBarChart.data.datasets[0].backgroundColor[0] = "rgba(187, 0, 0, 1)";

			myPolarChart.update();
			document.getElementById('news').className = "btn button btn-active";
		}
		else if (category == "Shopping") {
			myBarChart.data.datasets[0].data[0] = 60;
			myBarChart.data.datasets[0].data[1] = 35;
			myBarChart.data.datasets[0].data[2] = 24;
			myBarChart.data.datasets[0].data[3] = 22;
			myBarChart.data.datasets[0].data[4] = 37;
			myBarChart.data.labels[0] = "Amazon";
			myBarChart.data.labels[1] = "EBay";
			myBarChart.data.labels[2] = "CraigsList";
			myBarChart.data.labels[3] = "Alibaba";
			myBarChart.data.labels[4] = "Taobao";
			//insert background color like this for bar chart:  backgroundColor[i] where i is the index of data
			//			myBarChart.data.datasets[0].backgroundColor[0] = "rgba(187, 0, 0, 1)";

			myBarChart.update();
			myPolarChart.data.datasets[0].data[0] = 25;
			myPolarChart.data.datasets[0].data[1] = 25;
			myPolarChart.data.datasets[0].data[2] = 18;
			myPolarChart.data.datasets[0].data[3] = 20;
			myPolarChart.data.datasets[0].data[4] = 12;
			myPolarChart.data.labels[0] = "Amazon";
			myPolarChart.data.labels[1] = "EBay";
			myPolarChart.data.labels[2] = "CraigsList";
			myPolarChart.data.labels[3] = "Alibaba";
			myPolarChart.data.labels[4] = "Taobao";
			//insert background color like this for polar chart:  backgroundColor[i] where i is the index of data
			//			myBarChart.data.datasets[0].backgroundColor[0] = "rgba(187, 0, 0, 1)";

			myPolarChart.update();
			 document.getElementById('shopping').className = "btn button btn-active";
		}
}

//onload:
updateChart();

//////////////////////////////////////////////////////////////

//onclick event for the menu of categories
document.getElementById('socialMedia').onclick = function() {
category = 'Social Media';
updateChart();
};

document.getElementById('school').onclick = function() {
category = 'School';
updateChart();
};

document.getElementById('entertainment').onclick = function() {
category = 'Entertainment';
updateChart();
};

document.getElementById('news').onclick = function() {
category = 'News';
updateChart();
};

document.getElementById('shopping').onclick = function() {
category = 'Shopping';
updateChart();
};


///////////////////////////////////////////////////////////////////

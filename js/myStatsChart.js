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

var ctx2 = document.getElementById("polarChart").getContext("2d");
var myPolarChart = new Chart(ctx2, {
	type: 'polarArea',
	data: data2

});


function initBar() {
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
	myBarChart.update();
}
}

initBar();
//updateData();
//////////////////////////////////////////////////////////////

//onclick event for the menu of categories
document.getElementById('socialMedia').onclick = function() {
setAllButtonDefault();
category = 'Social Media';
//localStorage.setItem("category", 'Social Media');
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
//			myBarChart.data.datasets[0].backgroundColor[0] = "rgba(78, 45, 131, 1)";

myPolarChart.data.datasets[0].data[0] = 60;
myPolarChart.data.datasets[0].data[1] = 35;
myPolarChart.data.datasets[0].data[2] = 40;
myPolarChart.data.datasets[0].data[3] = 22;
myPolarChart.data.datasets[0].data[4] = 37;
myPolarChart.data.labels[0] = "Facebook";
myPolarChart.data.labels[1] = "Instagram";
myPolarChart.data.labels[2] = "Twitter";
myPolarChart.data.labels[3] = "GroupMe";
myPolarChart.data.labels[4] = "Douban";
//insert background color like this for polar chart:  backgroundColor[i] where i is the index of data
//			myPolarChart.data.datasets[0].backgroundColor[0] = "rgba(78, 45, 131, 1)";

document.getElementById('socialMedia').className = "btn button btn-active";
myPolarChart.update();
myBarChart.update();
};

document.getElementById('school').onclick = function() {
setAllButtonDefault();
category = 'School';
//localStorage.setItem("category", 'School');
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
myPolarChart.data.datasets[0].data[0] = 30;
myPolarChart.data.datasets[0].data[1] = 35;
myPolarChart.data.datasets[0].data[2] = 40;
myPolarChart.data.datasets[0].data[3] = 32;
myPolarChart.data.datasets[0].data[4] = 34;
myPolarChart.data.labels[0] = "Scribd";
myPolarChart.data.labels[1] = "Chegg";
myPolarChart.data.labels[2] = "Piazza";
myPolarChart.data.labels[3] = "Canvas";
myPolarChart.data.labels[4] = "Caesar";
 document.getElementById('school').className = "btn button btn-active";
 myPolarChart.update();
 myBarChart.update();
};

document.getElementById('entertainment').onclick = function() {
setAllButtonDefault();
category = 'Entertainment';
//localStorage.setItem("category", 'Entertainment');
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
myPolarChart.data.datasets[0].data[0] = 50;
myPolarChart.data.datasets[0].data[1] = 70;
myPolarChart.data.datasets[0].data[2] = 40;
myPolarChart.data.datasets[0].data[3] = 25;
myPolarChart.data.datasets[0].data[4] = 25;
myPolarChart.data.labels[0] = "YouTube";
myPolarChart.data.labels[1] = "Netflix";
myPolarChart.data.labels[2] = "HBO";
myPolarChart.data.labels[3] = "Vine";
myPolarChart.data.labels[4] = "Vimeo";
	 document.getElementById('entertainment').className = "btn button btn-active";
	 myPolarChart.update();
	 myBarChart.update();
 };

document.getElementById('news').onclick = function() {
setAllButtonDefault();
category = 'News';
//localStorage.setItem("category", 'News');
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
myPolarChart.data.datasets[0].data[0] = 30;
myPolarChart.data.datasets[0].data[1] = 30;
myPolarChart.data.datasets[0].data[2] = 24;
myPolarChart.data.datasets[0].data[3] = 22;
myPolarChart.data.datasets[0].data[4] = 37;
myPolarChart.data.labels[0] = "CNN";
myPolarChart.data.labels[1] = "Daily";
myPolarChart.data.labels[2] = "NY Times";
myPolarChart.data.labels[3] = "Guardian";
myPolarChart.data.labels[4] = "Axios";
document.getElementById('news').className = "btn button btn-active";
myPolarChart.update();
myBarChart.update();
};

document.getElementById('shopping').onclick = function() {
setAllButtonDefault();
category = 'Shopping';
//localStorage.setItem("category", 'Shopping');
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
myPolarChart.data.datasets[0].data[0] = 60;
myPolarChart.data.datasets[0].data[1] = 35;
myPolarChart.data.datasets[0].data[2] = 24;
myPolarChart.data.datasets[0].data[3] = 22;
myPolarChart.data.datasets[0].data[4] = 37;
myPolarChart.data.labels[0] = "Amazon";
myPolarChart.data.labels[1] = "EBay";
myPolarChart.data.labels[2] = "CraigsList";
myPolarChart.data.labels[3] = "Alibaba";
myPolarChart.data.labels[4] = "Taobao";
 document.getElementById('shopping').className = "btn button btn-active";
 myPolarChart.update();
 myBarChart.update();
};


///////////////////////////////////////////////////////////////////

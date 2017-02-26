//variable to keep track of which category
var category;
//check local storage
if (localStorage.getItem("category")) {
	category = localStorage.getItem("category");
}
else {
	category = "Social Media";
}


function setAllButtonDefault() {
  document.getElementById('socialMedia').className = "btn button";
  document.getElementById('school').className = "btn button";
  document.getElementById('entertainment').className = "btn button";
  document.getElementById('news').className = "btn button";
  document.getElementById('shopping').className = "btn button";
}

document.getElementById('socialMedia').onclick = function() {
	category = 'Social Media';
       localStorage.setItem("category", 'Social Media');	
};

document.getElementById('socialMedia').onclick = function() {
        category = 'Social Media';
       localStorage.setItem("category", 'Social Media');
};
document.getElementById('socialMedia').onclick = function() {
        category = 'Social Media';
       localStorage.setItem("category", 'Social Media');
};
document.getElementById('socialMedia').onclick = function() {
        category = 'Social Media';
       localStorage.setItem("category", 'Social Media');
};
document.getElementById('shopping').onclick = function() {
        category = 'Shopping';
       localStorage.setItem("category", 'Shopping');
};

/////////////////////////////////////////////////////////////////////
var socialMediaData = {
    datasets: [{
      data: [60, 35, 24, 40, 30, 22],
      backgroundColor: [
            "rgba(59, 89, 152, 1)",  //Facebook
            "rgba(187, 0, 0, 1)",   //YouTube
            "rgba(62, 122, 171, 1)", //Piazza
            "rgba(214, 64, 39, 1)", //Canvas
            "rgba(78, 45, 131, 1)", //Caesar
            "rgba(241, 241, 241, 1)",  //Gmail
            //  "rgba(18, 86, 136, 1)",  //Instagram
            //  "rgba(85, 172, 238, 1)",  //Twitter
        		]
		}],
  labels: ["Facebook", 'YouTube', 'Piazza', 'Canvas','Caesar', 'Gmail']
};

var schoolData = {
    datasets: [{
      data: [60, 35, 24, 40, 30, 22],
      backgroundColor: [
            "rgba(59, 89, 152, 1)",  //Facebook
            "rgba(187, 0, 0, 1)",   //YouTube
            "rgba(62, 122, 171, 1)", //Piazza
            "rgba(214, 64, 39, 1)", //Canvas
            "rgba(78, 45, 131, 1)", //Caesar
            "rgba(241, 241, 241, 1)",  //Gmail
            //  "rgba(18, 86, 136, 1)",  //Instagram
            //  "rgba(85, 172, 238, 1)",  //Twitter
                        ]
                }],
  labels: ["Facebook", 'YouTube', 'Piazza', 'Canvas','Caesar', 'Gmail']
};

var entertainmentData = {
    datasets: [{
      data: [60, 35, 24, 40, 30, 22],
      backgroundColor: [
            "rgba(59, 89, 152, 1)",  //Facebook
            "rgba(187, 0, 0, 1)",   //YouTube
            "rgba(62, 122, 171, 1)", //Piazza
            "rgba(214, 64, 39, 1)", //Canvas
            "rgba(78, 45, 131, 1)", //Caesar
            "rgba(241, 241, 241, 1)",  //Gmail
            //  "rgba(18, 86, 136, 1)",  //Instagram
            //  "rgba(85, 172, 238, 1)",  //Twitter
                        ]
                }],
  labels: ["Facebook", 'YouTube', 'Piazza', 'Canvas','Caesar', 'Gmail']
};

var newsData = {
    datasets: [{
      data: [60, 35, 24, 40, 30, 22],
      backgroundColor: [
            "rgba(59, 89, 152, 1)",  //Facebook
            "rgba(187, 0, 0, 1)",   //YouTube
            "rgba(62, 122, 171, 1)", //Piazza
            "rgba(214, 64, 39, 1)", //Canvas
            "rgba(78, 45, 131, 1)", //Caesar
            "rgba(241, 241, 241, 1)",  //Gmail
            //  "rgba(18, 86, 136, 1)",  //Instagram
            //  "rgba(85, 172, 238, 1)",  //Twitter
                        ]
                }],
  labels: ["Facebook", 'YouTube', 'Piazza', 'Canvas','Caesar', 'Gmail']
};

var shoppingData = {
    datasets: [{
      data: [60, 35, 24, 40, 30, 22],
      backgroundColor: [
            "rgba(59, 89, 152, 1)",  //Facebook
            "rgba(187, 0, 0, 1)",   //YouTube
            "rgba(62, 122, 171, 1)", //Piazza
            "rgba(214, 64, 39, 1)", //Canvas
            "rgba(78, 45, 131, 1)", //Caesar
            "rgba(241, 241, 241, 1)",  //Gmail
            //  "rgba(18, 86, 136, 1)",  //Instagram
            //  "rgba(85, 172, 238, 1)",  //Twitter
                        ]
                }],
  labels: ["Facebook", 'YouTube', 'Piazza', 'Canvas','Caesar', 'Gmail']
};


var data;
setAllButtonDefault();
/*  select dataset based on category clicked */
if (category == "Social Media") {
   data = socialMediaData;
   document.getElementById('socialMedia').className = "btn button btn-active";
   localStorage.setItem("category", 'Social Media');
}else if (category == "School") {
   data = schoolData;
   document.getElementById('school').className = "btn button btn-active";
      localStorage.setItem("category", 'School');
}else if (category == "Entertainment") {
   data = entertainmentData;
   document.getElementById('entertainment').className = "btn button btn-active";
      localStorage.setItem("category", 'Entertainment');
}else if (category == "News") {
   data = newsData;
   document.getElementById('news').className = "btn button btn-active";
      localStorage.setItem("category", 'News');
}else if (category == "Shopping") {
   data = shoppingData;
     document.getElementById('shopping').className = "btn button btn-active";
       localStorage.setItem("category", 'Shopping');
}


///////////////////////////////////////////////////////////////////


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
            "rgba(59, 89, 152, 1)",
            "rgba(187, 0, 0, 1)",
            "rgba(62, 122, 171, 1)",
            "rgba(214, 64, 39, 1)",
            "rgba(78, 45, 131, 1)",
            "rgba(241, 241, 241, 1)",

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

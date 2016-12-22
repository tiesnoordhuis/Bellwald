/*
comments

8-12-2016
geschreven door Ties Noordhuis

*/
/*variable*/

var n = 0;

function setGalerijStyle(n) {
  if (n == 1) {
    document.getElementById('myCarousel').style.display = "block";
    document.getElementById('setGalerijStyleSlideshow').className = "btn btn-default btnFotos active";
    document.getElementById('myGrid').style.display = "none";
    document.getElementById('setGalerijStyleGrid').className = "btn btn-default btnFotos";
  }
  else if (n == 2) {
    document.getElementById('myCarousel').style.display = "none";
    document.getElementById('setGalerijStyleSlideshow').className = "btn btn-default btnFotos";
    document.getElementById('myGrid').style.display = "block";
    document.getElementById('setGalerijStyleGrid').className = "btn btn-default btnFotos active";
  }
  else {
    window.alert("fout in setGalerijStyle");
  }
}

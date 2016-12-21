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
    document.getElementById('myGrid').style.display = "none";
  }
  else if (n == 2) {
    document.getElementById('myCarousel').style.display = "none";
    document.getElementById('myGrid').style.display = "block";
  }
  else {
    window.alert("fout in setGalerijStyle");
  }
}

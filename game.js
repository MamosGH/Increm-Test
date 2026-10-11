var pts = 0;
var clickVal = 1;

function plusPts() {
    pts += clickVal;
    document.getElementById("ptsVal").innerHTML = pts.toString();
}

function x2() {
  if (pts >= 10) {
    clickVal *= 2;
    pts -= 10;
  } else {
    pts = pts;
} document.getElementById("ptsVal").innerHTML = pts.toString();
}

function x3() {
  if (pts >= 50) {
    clickVal *= 3;
    pts -= 50;
  } else {
    pts = pts;
} document.getElementById("ptsVal").innerHTML = pts.toString();
}

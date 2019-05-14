const getClass = function (h) {
 return document.getElementsByClassName(h)[0];
}
const getID = function (h) {
 return document.getElementById(h);
}
const removeActive = function() {
    getClass("active").setAttribute("class", "no-active");
    getClass("focus").setAttribute("class", "no-focus");
  }
const addActive = function(x) {
  getID("slide"+x).setAttribute("class", "active");
  getID("dot"+x).setAttribute("class", "focus");
}

getID("dot1").onclick = function() {
   removeActive();
   addActive("1");
 }

getID("dot2").onclick = function() {
   removeActive();
   addActive("2");
 }

getID("dot3").onclick = function() {
   removeActive();
   addActive("3");
 }
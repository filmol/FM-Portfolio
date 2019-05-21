
const body = document.querySelector(".container")

// Check if its home page
if (body.classList.contains("home")) {

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
 getID("memoryGame").style.cursor = "pointer";
 getID("memoryGame").onclick =
 function () {window.open("https://filipmoltzer.github.io/FM-Portfolio/Memory_Game/index.html");}
}



else if (body.classList.contains("projects")) {
  const memory_Game = document.getElementById("memoryGame");

  memory_Game.style.cursor = "pointer"

  memory_Game.onclick = function() {
    window.open("https://filipmoltzer.github.io/FM-Portfolio/Memory_Game/index.html");
  };
}


// Check if it's Skills page
else {
const githubLogo = document.getElementById("github-logo");
// Github pointer when hovering.
githubLogo.style.cursor = "pointer";
// Github link to logo, open in new tab
githubLogo.onclick = function() {
    window.open("https://github.com/filipmoltzer","_blank");
};
}

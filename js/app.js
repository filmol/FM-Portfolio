
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
}

// Check if it's Memory Game page
else if (body.classList.contains("memory-game")) {

}

else if (body.classList.contains("projects")) {
  const memoryImg = document.getElementById("memoryImage");

  memoryImg.style.cursor = "pointer"

  memoryImg.onclick = function() {
    window.open("/Users/filipmoltzer/Desktop/UDACITY 2.0/P2 - Memory Game/index.html");
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

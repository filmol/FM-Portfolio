let menu = document.getElementsByClassName("dropbtn")[0]
let counter = 0;

let menuOpen = function () {
  if (counter == 0) {
    document.getElementsByClassName("dropdown-content")[0].style.display = "block";
    counter++;
  }
  else {
    document.getElementsByClassName("dropdown-content")[0].style.display = "none";
    counter=0;
  }
}

menu.addEventListener("click", menuOpen);

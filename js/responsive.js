let menu = document.getElementsByClassName("dropbtn")[0]
let counter = 0;

// Checks if menu is open
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

// Closes Dropdown menu if main is clicked
document.getElementsByClassName("main")[0].addEventListener("click", function() {
  if (counter == 1) {
    document.getElementsByClassName("dropdown-content")[0].style.display = "none";
    counter=0;
  }
  else {
    0;
  }
});

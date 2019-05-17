//array with the card logos
const logo = ["fa fa-anchor", "fa fa-anchor", "fa fa-diamond", "fa fa-diamond", "fa fa-paper-plane-o", "fa fa-paper-plane-o",
              "fa fa-bolt", "fa fa-bolt", "fa fa-cube", "fa fa-cube", "fa fa-leaf", "fa fa-leaf", "fa fa-bicycle",
              "fa fa-bicycle", "fa fa-bomb", "fa fa-bomb"];

const deck = document.querySelector(".deck");

let openCard =[];
let thisCard = null;
let prevCard = null;

let firstClick = true;
let gameDone = 0;
let moves = 0;

const mov = document.querySelector(".moves");
const firstStar = document.querySelector(".first");
const secondStar = document.querySelector(".second");
const removeStar = function(value) {
  value.remove();
}
shuffle(logo); // shuffles the logo array



     // Timer variables
    const timerContainer = document.querySelector(".timer");
    const minuteContainer = document.querySelector(".minutes");
    let minutes = 0;
    let liveTimer, totalSeconds = 0;

    // Add the letter "s" after the seconds value.
    timerContainer.innerHTML = totalSeconds + ' s';

    // Timer func
    function startTimer() {
       liveTimer = setInterval(function() {
           // Increase the totalSeconds by 1
           totalSeconds++;

           // adds one minute and resets seconds
           if (totalSeconds>59) {
             totalSeconds=0;
             minutes++
             minuteContainer.innerHTML =  'Time: ' + minutes + 'm ';
             timerContainer.innerHTML = totalSeconds + ' s';
           }

           else {timerContainer.innerHTML = totalSeconds + ' s';}
       }, 1000);
    }

    function stopTimer() {
       clearInterval(liveTimer);
    }



        //Start & initialize the game
        const startGame = function() {

        for (x=0; x<logo.length; x++) {
          currentLogo = logo[x]

          // creates list with attributes
          // then adds child to list with logo
        const list = document.createElement("li");
        const italic = document.createElement("i");
        list.setAttribute("class", "card");
        italic.setAttribute("class", currentLogo);
        list.appendChild(italic);

        // adds child to the ul .deck
        deck.appendChild(list);
        }
        }
        startGame();

        // restart button func
        document.querySelector(".restart").addEventListener("click", function(){
          location.reload();
          });



  // game functions
  function match() {
    thisCard.classList.add("match");
    prevCard.classList.add("match");
    openCard.length=0;
    gameDone++;
    gameDone===8 ? modal() & stopTimer() : 0
  }

  function modal() {
    let score = minuteContainer.innerHTML + " " + timerContainer.innerHTML;
    let stars = document.querySelector(".stars")

    document.getElementById('time').innerHTML += "Your " + score;
    document.querySelector("#star").appendChild(stars);
    document.getElementById('rating').innerHTML += "Moves: " + moves;

    //access to the modal
    const modal = document.getElementById('myModal');
    modal.style.display = "block";

    //<span> element that closes the modal
    document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none";
    }

    // play again onclick func
    document.getElementsByClassName("playAgain")[0].onclick = function() {
    location.reload();}

  }

  function removeCards() {
    thisCard.classList.remove("show", "open");
    prevCard.classList.remove("show", "open");
  }

  function sameCard () {
    removeCards();
    openCard = [];
    alert("Sorry, can't press the same card twice. \n Try click another card next time");
  }

  function boom() {
    setTimeout(function() { // Delayes the function
      removeCards();
      openCard[1].classList.remove("show", "open"); // prevents a third card to open if pressed.
      openCard = []; //Makes the the card array empty again.
        }, 600);
    }



        // add click event listener to each card
        const cards = document.querySelectorAll(".card");

        for (x=0; x<cards.length; x++) {
          cards[x].addEventListener("click", function(){

            thisCard = this;
            prevCard = openCard[0];

            //check if firstClick
            if (firstClick) {
                  // Timer starts
                  startTimer();
                  firstClick = false;
              }

          // 2nd card open func, check if it's a match?
            if (openCard.length===1) {
              this.classList.add("show","open");
              openCard.push(this);

              // adds a move
              moves++;
              mov.innerHTML = moves;

              //func remove stars when specific amount of moves been made
              moves===10 ? removeStar(firstStar) : moves===14 ? removeStar(secondStar) : 0;

              // Compares the two cards
              this.isSameNode(prevCard) ? sameCard() : this.innerHTML === prevCard.innerHTML ? match() : boom();
            }

            else if (openCard.length===0){
              this.classList.add("show","open");
              openCard.push(this);
          }

          });
        }



           // Shuffle function from http://stackoverflow.com/a/2450976
           function shuffle(array) {
               let currentIndex = array.length,
                   temporaryValue, randomIndex;

               while (currentIndex !== 0) {
                   randomIndex = Math.floor(Math.random() * currentIndex);
                   currentIndex -= 1;
                   temporaryValue = array[currentIndex];
                   array[currentIndex] = array[randomIndex];
                   array[randomIndex] = temporaryValue;
               }

               return array;
           }

const cards = document.querySelectorAll('.bikecard');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


console.log ('.bikecard');
Timer();

function flipCard() {

    if(lockBoard) return;
    if (this === firstCard) return;
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
      
        return;
    } 
        // second click
        hasFlippedCard = false;
        secondCard = this;

        checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.type == secondCard.dataset.type;
    isMatch ? disableCards() : unflipCards();
    
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
  lockBoard = true;

    //not a match
  setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        
        resetBoard();
        }, 1100);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
  function allMatch() {
    
  }

//shuffle cards
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 14);
        card.style.order = randomPos;
    });
})();


//Timer
function Timer() {
  var count = 10, timer = setInterval(function() {
    document.getElementById("countDown").innerHTML=count--;
    if(count == 0) {
    document.getElementById("countDown").innerHTML=0;
      clearInterval(timer);
      alert("timeup");
    } 
  }, 1000);
}

//Congrats message - game over
                          

//Game Reset
function myButton() {
  location.reload();
}

//If second card match with first card it will return from the function
function resetBoard() {
  hasFlippedCard = false;
  lockBoard = false;
  firstCard = null;
  secondCard = null;
}

//Use to shuffle cards - 8 front and 8 back side = 16
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 16);
    card.style.order = randomPos;
  });

})();

cards.forEach(card => card.addEventListener('click', flipCard));

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
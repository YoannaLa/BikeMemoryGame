const cards = document.querySelectorAll('.bikecard');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

console.log ('.bikecard');

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

//shuffle cards
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 14);
        card.style.order = randomPos;
    });
})();

//timer


var seconds = document.getElementsByClassName("timer").textContent;
var countdown = setInterval(function(){
    seconds--;
    document.getElementsByClassName("timer").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);

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
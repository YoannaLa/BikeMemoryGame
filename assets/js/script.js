// cards array with bike images
let card = document.getElementsByClassName("card");

const cardArray=[
    { 
        name:'YellowBike',
        img: 'images/YellowBike.jpg',
    },
    { 
        name:'YellowBike',
        img: 'images/YellowBike.jpg',
    },
    {
        name:'RepsolBike',
        img: 'images/RepsolBike.jpg',
    }, 
    {
        name:'RepsolBike',
        img: 'images/RepsolBike.jpg',
    }, 
    {
        name:'RedBullBike',
        img: 'images/RedBullBike.jpg',
    }, 
    {
        name:'RedBullBike',
        img: 'images/RedBullBike.jpg',
    }, 
    {
        name:'PoliceBike',
        img: 'images/PoliceBike.jpg',
    },  
    {
        name:'PoliceBike',
        img: 'images/PoliceBike.jpg',
    },  
    {
        name:'OrangeBike',
        img: 'images/OrangeBike.jpg',
    },  
    {
        name:'OrangeBike',
        img: 'images/OrangeBike.jpg',
    },  
    {
        name:'GreyBike',
        img: 'images/GreyBike.jpg',
    },  

    {
        name:'GreyBike',
        img: 'images/GreyBike.jpg',
    },  

    {
        name:'BarbieBike',
        img: 'images/BarbieBike.png',
    }, 
    {
        name:'BarbieBike',
        img: 'images/BarbieBike.png',
    }, 
    {
        name:'BrownBike',
        img: 'images/BrownBike.jpg',
    }, 
    
    {
        name:'BrownBike',
        img: 'images/BrownBike.jpg',
    }, 
]


// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementByClassName("myModal-button");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-btn")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (close), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
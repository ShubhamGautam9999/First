// Dynamically adding content to cards

let titlearray = ["Catcher in the rye", "Catch-22", "Lord of the Flies", "Dracula", "Sherlock Holmes"];
let desarray = [
    "A young guy overwhelmed with anxiety, wanted to go far away where there is no one...",
    "An officer who got stuck in the World War II and couldn't make him way home...",
    "A bunch of teenagers who got stuck on an island and for survival, become savages...",
    "Story about few people who save themselves from the terror of Count Dracula who lives in Transalvania and feed on people's blood",
    "Story of world's greatest detective and how he sloves intricate mysteries with his fellow Watson on the streets of London"
];

let dynamic_card = document.querySelector('.cardscontainer');
for(i = titlearray.length - 3; i >= 0; i--){
    let card_fetch = document.querySelector('.cardscontainer').innerHTML;
    dynamic_card.innerHTML = `<div class="cards">
    <img src="images/card1.jpg" class="cards-img-top" alt="...">
    <div class="cards-body">
      <h5 class="cards-title">${titlearray[i]}</h5>
      <p class="cards-text">${desarray[i]}</p>
      <a href="#" class="cardsbtn">Read More</a>
    </div>
  </div>` + card_fetch;
}

// adding images to cards

const bgimg = document.querySelectorAll('.cards img');


bgimg[0].setAttribute("src", "../images/card4.jpg");
bgimg[1].setAttribute("src", "../images/card9.jpg");
bgimg[2].setAttribute("src", "../images/card10.jpg");

// redirecting cards

const redirection = document.querySelectorAll('.cards-body a');

redirection[0].setAttribute('href', '../blogs/blog1.html');
redirection[1].setAttribute('href', '../blogs/blog2.html');
redirection[2].setAttribute('href', '../blogs/blog3.html');

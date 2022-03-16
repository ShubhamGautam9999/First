// Dynamically adding content to blogs

let titlearray = ["The Catcher in the rye", "Catch-22", "Lord of the Flies", "Dracula", "Sherlock Holmes"];
let desarray = [
    "A teenager overwhelmeed by the feelings of anger, frustation, lust, depression, alienation, and anxiety, wanted to go far away where there is no one...",
    "This is the story of an airforce officer who got stuck in the second world war and wanted to go home but because of a certain situation he couldn't do so...",
    "A story about bunch of teenagers who got stuck on an island due to a world war and in order to survive on that island some of them become savages...",
    "Story about few people who save themselves from the terror of Count Dracula who lives in Transalvania and feeds on people's blood...",
    "Story of world's greatest detective and how he sloves intricate mysteries with his fellow Watson on the streets of London..."
];

let dynamic = document.querySelector(".blog-container");
for(i = titlearray.length - 1; i >= 0; i--){
    let fetch = document.querySelector(".blog-container").innerHTML;
    dynamic.innerHTML = `<div class="blog-card" onmousehover="change()" onclick="card_redirect()">
    <div class="blog-body">
        <h1>${titlearray[i]}</h1>
        <p>${desarray[i]}</p>
        <div class="blog-meta">
            <img src="images/author.jpg" alt="#">
            <h2>Author: BookLOG <br> Just now</h2>
        </div>
    </div>
</div>` + fetch;
}


// Redirecting blogs

const redirection = document.querySelectorAll('.blog-card');


redirection[0].addEventListener('click', function card_redirect() {
    window.location.href = '../blogs/blog1.html';
});

redirection[1].addEventListener('click', function card_redirect() {
    window.location.href = '../blogs/blog2.html';
});

redirection[2].addEventListener('click', function card_redirect() {
    window.location.href = '../blogs/blog3.html';
});

redirection[3].addEventListener('click', function card_redirect() {
    window.location.href = '../blogs/blog4.html';
});

redirection[4].addEventListener('click', function card_redirect() {
    window.location.href = '../blogs/blog5.html';
});


let hands = ["rock", "paper", "scissor"];

// Create a function that returns a random item from the array

function randomHand() {
    let randomNumber = Math.floor(Math.random() * 3);
    console.log(hands[randomNumber]);
}
randomHand();
let data = [
    {
        player: "Jane",
        score: 52
    }, 
    {
        player: "Mark",
        score: 41
    }
]

// Fetch the button from the DOM, store it in a variable
const fetchScore = document.getElementById("btn-el");
// Use addEventListener() to listen for button clicks
// Log Jane's score when the button is clicked (via data)
fetchScore.addEventListener("click", function() {
    if(data[0].player === "Jane") {
        console.log(data[0].score);
    }
});
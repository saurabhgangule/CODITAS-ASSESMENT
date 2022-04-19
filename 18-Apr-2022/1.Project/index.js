// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("counter-el");
//console.log(countEl); //Checking for bug

let count = 0;

// Creating increment function to count
function increment() {
    count += 1;
    countEl.innerText = count;
}

// Creating save function to save the count
function save() {
    console.log(count);
}
save();
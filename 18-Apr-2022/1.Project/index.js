let countEl = document.getElementById("counter-el");
let saveEl = document.getElementById("save-el");
//console.log(countEl); //Checking for bug
let count = 0;

// Creating increment function to count
function increment() {
    count += 1;
    countEl.innerText = count;
}

// Creating save function to save the count
function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}
save();
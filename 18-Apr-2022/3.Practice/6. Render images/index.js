// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const divEl = document.getElementById("container");
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
];

function renderImages(images) {
    let imgTags = "";
    for (let index = 0; index < images.length; index++) {
        imgTags += `<img class="team-img" src="${images[index]}">`;
    }
    divEl.innerHTML = imgTags;
}

renderImages(imgs);
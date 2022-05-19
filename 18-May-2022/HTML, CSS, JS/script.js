const leftBtns = document.querySelectorAll('.fa.fa-arrow-right');
const rightSpace = document.querySelector('.right-list');
const leftSpace = document.querySelector('.left-list');
let leftContent = [];
let rightContent = [];

leftBtns.forEach((ele) => {
    ele.addEventListener('click', () => {
        let eachContent = ele.parentElement.textContent;
        ele.parentElement.style.display = 'none';
        leftContent.push(`<li><button class="fa fa-arrow-left"></button> ${eachContent}</li>`);
        return updateRightSpace();
    })
})

function updateRightSpace() {
    let toStr = ``;
    for (let x of leftContent) {
        toStr += x;
    }
    rightSpace.innerHTML = toStr;
}

const heightCounter = document.querySelector('#height-counter');
const weightCounter = document.querySelector('#weight-counter');
const heightPlus = document.querySelector('#height-plus');
const heightMinus = document.querySelector('#height-minus');
const weightPlus = document.querySelector('#weight-plus');
const weightMinus = document.querySelector('#weight-minus');
const bmiValue = document.querySelector('#bmi-value');
const bmiResult = document.querySelector('#bmi-result');
const save = document.querySelector('#save-btn');
const goto = document.querySelector('.go-to');
let height = Number(heightCounter.textContent);
let weight = Number(weightCounter.textContent);
let bmiData = [];

heightPlus.addEventListener('click', () => {
    height = height + 0.1;
    heightCounter.textContent = height.toFixed(1);
    bmiUpdate();
})

heightMinus.addEventListener('click', () => {
    height = height - 0.1;
    if (height < 1) {
        height = 1;
    }
    heightCounter.textContent = height.toFixed(1);
    bmiUpdate();
})

weightPlus.addEventListener('click', () => {
    weight = weight + 1;
    weightCounter.textContent = weight;
    bmiUpdate();
})

weightMinus.addEventListener('click', () => {
    weight = weight - 1;
    if (weight < 1) {
        weight = 1;
    }
    weightCounter.textContent = weight;
    bmiUpdate();
})

function bmiUpdate() {
    let heightInMeter = height*0.3048;
    let bmi = weight/(heightInMeter*heightInMeter);
    bmiValue.textContent = bmi.toFixed(1);

    if (bmi < 19) {
        bmiResult.textContent = 'Underweight';
        bmiResult.style.backgroundColor = 'white';
    } else if (bmi > 18 && bmi < 26) {
        bmiResult.textContent = 'Normal';
        bmiResult.style.backgroundColor = 'lightgreen';
    } else if (bmi > 25 && bmi < 31) {
        bmiResult.textContent = 'Overweight';
        bmiResult.style.backgroundColor = '#ffbf00';
    } else {
        bmiResult.textContent = 'Obese';
        bmiResult.style.backgroundColor = '#FF6461';
    }
}

save.addEventListener('click', () => {
    if (localStorage.data) {
        let oldData = JSON.parse(localStorage.data);
        oldData.push(JSON.stringify({height: heightCounter.textContent, weight: weightCounter.textContent, bmiValue: bmiValue.textContent, bmiResult: bmiResult.textContent}))
        window.localStorage.setItem('data', JSON.stringify(oldData));
    } else {
        bmiData.push(JSON.stringify({height: heightCounter.textContent, weight: weightCounter.textContent, bmiValue: bmiValue.textContent, bmiResult: bmiResult.textContent}));
        window.localStorage.setItem('data', JSON.stringify(bmiData));
    }
    alert('Data Saved');
})

goto.addEventListener('click', () => {
    window.location.href = 'dashboard.html';
})

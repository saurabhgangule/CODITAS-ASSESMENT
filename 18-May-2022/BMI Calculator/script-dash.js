const tbody = document.querySelector('#tbody');
const goto = document.querySelector('.go-to');
let getData = window.localStorage.getItem('data');
let tbodyData = ``;
if (getData) {
    getData = JSON.parse(getData);
    for (let values of getData) {
        let value = JSON.parse(values);
        tbodyData += `<tr><td>${value.height}</td>
                                <td>${value.weight}</td>
                                <td>${value.bmiValue}</td>
                                <td>${value.bmiResult}</td>
                                <td><button class="btn del-btn">Delete</button></td></tr>`
    }
    function displayData() {
        tbody.innerHTML = tbodyData;
    }
    displayData();
}
goto.addEventListener('click', () => {
    window.location.href = 'user.html';
})

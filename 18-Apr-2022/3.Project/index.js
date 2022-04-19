
const saveBtn = document.getElementById("save-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const saveTabBtn = document.getElementById("saveTab-btn");
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
// console.log(ulEl);
let myLeads = [];

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}
function render(leads) {
    let listLinks = "";
    for (let index = 0; index < leads.length; index++) {
        listLinks += `<li><a href="${leads[index]}" target="_blank">${leads[index]}</a></li>`;
    }
    ulEl.innerHTML = listLinks;
}

deleteBtn.addEventListener("dblclick", function() {
    // console.log("dbl clicked...");
    localStorage.clear();
    myLeads = [];
    render(myLeads);
});

saveTabBtn.addEventListener("click", function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads);
    });
});

saveBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    // console.log(myLeads);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
});
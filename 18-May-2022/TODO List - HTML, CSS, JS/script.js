const creatList = () => {
    const leftList = document.querySelector('#left-list');
    leftList.innerHTML = null;
    const rightList = document.querySelector('#right-list');
    rightList.innerHTML = null;

    for (let task of tasks) {
        const li = document.createElement('li');
        const iconBtn = document.createElement('button');
        iconBtn.classList.add('fa');
        
        iconBtn.addEventListener('click', () => { task.isComplete = !task.isComplete; creatList();})

        li.textContent = task.isComplete ? task.task : task.task;
        iconBtn.classList.add(task.isComplete ? 'fa-arrow-left' : 'fa-arrow-right');

        task.isComplete ? li.prepend(iconBtn) : li.append(iconBtn);
        task.isComplete ? rightList.appendChild(li) : leftList.appendChild(li);
    }
}

creatList();

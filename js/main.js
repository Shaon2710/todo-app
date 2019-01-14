const taskList = document.querySelector("#task-list");
const taskList1 = document.querySelector("#task-list1");

taskList.addEventListener('click', (e) => {

    if (e.target.classList.contains('done')) {
        let li = e.target.parentElement;
        li.parentElement.removeChild(li);

        let getTask = li.querySelector(".task-name");
        let task = getTask.textContent;

        let getDate = li.querySelector(".task-date");
        let date = getDate.textContent;

        let liOne = document.createElement('li');
        let taskDate = document.createElement('span');
        let taskName = document.createElement('span');
        let doneBtn = document.createElement('span');

        taskDate.textContent = date;
        taskName.textContent = task;
        doneBtn.textContent = "Undo";

        liOne.classList.add("list-group-item");
        taskDate.classList.add("task-date", "float-left");
        taskName.classList.add("task-name");
        doneBtn.classList.add("done", "btn", "btn-outline-success", "float-right");

        liOne.appendChild(taskDate);
        liOne.appendChild(taskName);
        liOne.appendChild(doneBtn);
        taskList1.appendChild(liOne);
    }
});

taskList1.addEventListener('click', (e) => {
    if (e.target.classList.contains('done')) {
        let li = e.target.parentElement;
        li.parentElement.removeChild(li);

        let getTask = li.querySelector(".task-name");
        let task = getTask.textContent;

        let getDate = li.querySelector(".task-date");
        let date = getDate.textContent;

        let liOne = document.createElement('li');
        let taskDate = document.createElement('span');
        let taskName = document.createElement('span');
        let doneBtn = document.createElement('span');

        taskDate.textContent = date;
        taskName.textContent = task;
        doneBtn.textContent = "Done";

        liOne.classList.add("list-group-item");
        taskDate.classList.add("task-date", "float-left");
        taskName.classList.add("task-name");
        doneBtn.classList.add("done", "btn", "btn-outline-success", "float-right");

        liOne.appendChild(taskDate);
        liOne.appendChild(taskName);
        liOne.appendChild(doneBtn);
        taskList.appendChild(liOne);

    }
});

const addForm = document.forms['add-task-form'];

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let task = addForm.querySelector('input[name="task"]').value;
    let date = addForm.querySelector('input[name="date"]').value;

    console.log(task);
    console.log(date);

    if (task) {

        let li = document.createElement('li');
        let taskDate = document.createElement('span');
        let taskName = document.createElement('span');
        let doneBtn = document.createElement('span');

        taskDate.textContent = date;
        taskName.textContent = task;
        doneBtn.textContent = "done";

        li.classList.add("list-group-item");
        taskDate.classList.add("task-date", "float-left");
        taskName.classList.add("task-name");
        doneBtn.classList.add("done", "btn", "btn-outline-success", "float-right");

        li.appendChild(taskDate);
        li.appendChild(taskName);
        li.appendChild(doneBtn);
        taskList.appendChild(li);

        addForm.reset();
    } else {
        alert("Please add your task");
        addForm.querySelector("input").focus();
    }
});

const searchInput = document.getElementById('serch-input');

searchInput.addEventListener('keyup', (e) => {
    let s = e.target.value.toLowerCase();
    let taks = taskList.querySelectorAll("li");
    let taks1 = taskList1.querySelectorAll("li");

    taks.forEach((t) => {
        let taskContent = t.querySelector('.task-name').textContent.toLowerCase();
        if (taskContent.indexOf(s) != -1) {
            t.style.display = "block";
        } else {
            t.style.display = "none";
        }
    });

    taks1.forEach((t1) => {
        let taskContent1 = t1.querySelector('.task-name').textContent.toLowerCase();
        if (taskContent1.indexOf(s) != -1) {
            t1.style.display = "block";
        } else {
            t1.style.display = "none";
        }
    });
});


(function($) {
    $(function() {
        $('.datepicker').datepicker();
    });
})(jQuery)
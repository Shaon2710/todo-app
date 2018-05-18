const taskList = document.querySelector("#task-list");
const taskList1 = document.querySelector("#task-list1");


taskList.addEventListener('click', function(e) {

    if (e.target.classList.contains('done')) {
        let li = e.target.parentElement;
        let task = li.textContent;

        li.parentElement.removeChild(li);

        let liOne = document.createElement('li');
        let taskName = document.createElement('span');
        let doneBtn = document.createElement('span');

        // assign content
        taskName.textContent = task;
        doneBtn.textContent = "Undo";

        // // Add class
        liOne.classList.add("list-group-item");
        taskName.classList.add("task-name");
        doneBtn.classList.add("done", "btn", "btn-outline-success", "float-right");

        // // append child
        liOne.appendChild(taskName);
        liOne.appendChild(doneBtn);
        taskList1.appendChild(liOne);

    }
});


taskList1.addEventListener('click', function(e) {
    if (e.target.classList.contains('done')) {
        let li = e.target.parentElement;
        li.parentElement.removeChild(li);


        let task = li.textContent;



        let liOne = document.createElement('li');
        let taskName = document.createElement('span');
        let doneBtn = document.createElement('span');

        // assign content
        taskName.textContent = task;
        doneBtn.textContent = "Done";

        // // Add class
        liOne.classList.add("list-group-item");
        taskName.classList.add("task-name");
        doneBtn.classList.add("done", "btn", "btn-outline-success", "float-right");

        // // append child
        liOne.appendChild(taskName);
        liOne.appendChild(doneBtn);
        taskList.appendChild(liOne);

    }
});

const addForm = document.forms['add-task-form'];

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let task = addForm.querySelector('input[name="task"]').value;
    if (task) {
        // Create DOM Element

        let li = document.createElement('li');
        let taskName = document.createElement('span');
        let doneBtn = document.createElement('span');

        // assign content
        taskName.textContent = task;
        doneBtn.textContent = "done";

        // // Add class
        li.classList.add("list-group-item");
        taskName.classList.add("task-name");
        doneBtn.classList.add("done", "btn", "btn-outline-success", "float-right");

        // // append child
        li.appendChild(taskName);
        li.appendChild(doneBtn);
        taskList.appendChild(li);

        addForm.reset();
    } else {
        alert("Please add your task");
        addForm.querySelector("input").focus();
    }

});
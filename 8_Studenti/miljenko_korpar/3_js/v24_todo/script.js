"use strict";

(function() {
    const addButton = document.querySelector(".add-button");
    const removeCompletedTasksButton = document.querySelector(".clear-completed-tasks-btn");

    const allButton = document.querySelector(".all");
    const activeButton = document.querySelector(".active");
    const completedButton = document.querySelector(".completed");

    const todoList = document.querySelector("table");

    function TodoApp() {}

    TodoApp.prototype.createCheckbox = function() {
        const checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.addEventListener("change", (event) => {
            if (event.target === checkbox) {
                event.stopPropagation();
                Array.from(checkbox.parentNode.parentNode.children).find(elem => 
                    elem.classList?.contains("todo-task")
                ).style.textDecoration = checkbox.checked ? "line-through" : "";
            }
        })

        return checkbox;
    }

    TodoApp.prototype.createRemoveButton = function() {
        const removeButton = document.createElement("button");
        removeButton.className = "remove-button";
        removeButton.innerText = "X";

        removeButton.addEventListener("click", (event) => {
            if (event.target === removeButton) {
                event.stopPropagation();
                // alternativa
                // parentNode ili parentElement
                removeButton.parentNode.parentNode.remove();
            }
        })

        return removeButton;
    }

    TodoApp.prototype.addTaskToList = function(text) {
        const input = document.querySelector(".todo-input");
        const taskText = input.value.trim();

        const checkbox = this.createCheckbox();
        const removeButton = this.createRemoveButton();

        const newRow = todoList.insertRow(-1);

        const checkboxCell = newRow.insertCell(0);
        checkboxCell.appendChild(checkbox);
        
        const taskCell = newRow.insertCell(1);
        taskCell.className = "todo-task"
        taskCell.textContent = text;
        
        const removeButtonCell = newRow.insertCell(2);
        removeButtonCell.appendChild(removeButton);

        // alternativa uz koristenje closurea
        // checkbox.addEventListener("change", (event) => {
        //     if (event.target === checkbox) {
        //         event.stopPropagation();
        //         // closure
        //         taskCell.style.textDecoration = checkbox.checked ? "line-through" : "";
        //     }
        // })

        // removeButton.addEventListener("click", (event) => {
        //     if (event.target === removeButton) {
        //         event.stopPropagation();
        //         // closure
        //         newRow.remove();
        //     }
        // })
    }

    TodoApp.prototype.addNewTask = function() {
        const input = document.querySelector(".todo-input");
        const taskText = input.value.trim();

        if (taskText) {
            this.addTaskToList(taskText);
            input.value = ""
        }
    }

    TodoApp.prototype.removeAllCompletedTasks = function() {
        Array.from(todoList.tBodies[0].rows).forEach(row => {
            if (row.firstChild.firstChild.checked) {
                row.remove();
            } 
        });
    }

    TodoApp.prototype.menuOptionSwitchHandler = function(event) {
        const menuButtons = [allButton, activeButton, completedButton];
        const eventButton = menuButtons.find(button => button === event.target);

        if (eventButton) {
            event.stopPropagation();
        }

        let rowTranformator
        if (eventButton === allButton) {
            rowTranformator = row => row.hidden = false
        } else if (eventButton === activeButton) {
            rowTranformator = row => row.hidden = row.firstChild.firstChild.checked
        } else  { // (eventButton === completedButton) 
            rowTranformator = (row) => row.hidden = !row.firstChild.firstChild.checked
        }

        Array.from(todoList.tBodies[0].rows).forEach(rowTranformator);
        menuButtons.forEach(button => {
            button.disabled = button === eventButton
        })
        removeCompletedTasksButton.hidden = eventButton === activeButton;
    }

    TodoApp.prototype.init = function() {
        addButton.addEventListener("click", this.addNewTask.bind(this)); // ili () => this.addNewTask() -> i bind i arrow funkcija rezultra kreiranjem nove funkcije (overhead)
        removeCompletedTasksButton.addEventListener("click", this.removeAllCompletedTasks.bind(this));
        allButton.addEventListener("click", this.menuOptionSwitchHandler.bind(this));
        activeButton.addEventListener("click", this.menuOptionSwitchHandler.bind(this));
        completedButton.addEventListener("click", this.menuOptionSwitchHandler.bind(this));
    }

    window.addEventListener("load", () => {
        new TodoApp().init();
    })
})();
// Function to add a new task
function addTask() {
        const input = document.getElementById("taskInput");
        const taskText = input.value.trim();
        if (taskText === "") return;
        
        const taskList = document.getElementById("taskList");
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <div class="task-options">
                <input type="checkbox" onchange="toggleTaskCompletion(this)">
                <button onclick="editTask(this)">Edit</button>
                <button onclick="deleteTask(this)">X</button>
            </div>
        `;
        taskList.appendChild(li);
        
        input.value = "";
    }
    
    // Function to toggle task completion
    function toggleTaskCompletion(checkbox) {
        const li = checkbox.parentNode.parentNode;
        li.classList.toggle("completed");
    }
    
    // Function to delete a task
    function deleteTask(button) {
        const li = button.parentNode.parentNode;
        li.remove();
    }
    
    // Function to edit a task
    function editTask(button) {
        const li = button.parentNode.parentNode;
        const span = li.querySelector('span');
        const newText = prompt('Enter new task:');
        if (newText !== null && newText !== '') {
            span.textContent = newText;
        }
    }
    
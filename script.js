document.addEventListener('DOMContentLoaded', () => {
    const inputElement = document.getElementById('task-input');
    const addButton = document.getElementById('add-button');
    const todoList = document.getElementById('todo-list');

    // Function to add a new task
    function addTask() {
        const taskText = inputElement.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // 1. Create the list item (<li>)
        const listItem = document.createElement('li');
        
        // Use a unique ID based on a timestamp (good practice)
        const taskId = `task-${Date.now()}`;

        // 2. Add the inner HTML structure for the task
        listItem.innerHTML = `
            <div class="task-content">
                <input type="checkbox" id="${taskId}">
                <label for="${taskId}">${taskText}</label>
            </div>
            <button class="delete-button">Delete</button>
        `;

        // 3. Append the new task to the list
        todoList.appendChild(listItem);

        // 4. Clear the input field
        inputElement.value = '';

        // 5. Add event listener for toggling the completed status
        const checkbox = listItem.querySelector(`#${taskId}`);
        checkbox.addEventListener('change', () => {
            listItem.classList.toggle('completed');
        });

        // 6. Add event listener for deleting the task
        const deleteButton = listItem.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(listItem);
        });
    }

    // Event listener for the "Add" button click
    addButton.addEventListener('click', addTask);

    // Event listener for the 'Enter' key press in the input field
    inputElement.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

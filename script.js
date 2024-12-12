document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let task = document.getElementById('task').value;

    fetch('add_task.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'task=' + encodeURIComponent(task)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Task added successfully');
            fetchTasks(); // Refresh the task list after adding a new task
        } else {
            alert('Error: ' + data.message);
        }
    })
    .catch(error => console.error('Error:', error));
});

// Function to fetch tasks from the database
function fetchTasks() {
    fetch('get_tasks.php')
        .then(response => response.json())
        .then(data => {
            const taskList = document.getElementById('task-list');
            taskList.innerHTML = ''; // Clear current list
            data.forEach(task => {
                const taskDiv = document.createElement('div');
                taskDiv.classList.add('task');
                taskDiv.innerText = task.task_name;
                taskList.appendChild(taskDiv);
            });
        })
        .catch(error => console.error('Error fetching tasks:', error));
}

// Call fetchTasks to load tasks initially
fetchTasks();

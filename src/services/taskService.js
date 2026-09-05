

let tasks = [];
let nextId = 1;

//Create
function createTask(title) {
    const task = new Object();
    task.id = nextId++;
    task.title = title;
    task.completed = false;

    tasks.push(task);
    return task;
};

//Read
function getTaskById(id) {
	return tasks.find((task) => task.id == id);
}
function getAllTask() {
    return tasks;   
};

//Update
function updateTask(id, updates = {}) {
    let taskToUpdate = getTaskById(id);

    if (updates.title != undefined){
        taskToUpdate.title = updates.title;
    }

    if (updates.completed != undefined){
        taskToUpdate.completed = updates.completed;
    }
    tasks =  tasks.splice(id,1);
    tasks.push(taskToUpdate);
    return taskToUpdate;
}
//Delete
function deleteTask(id) {
	const taskToDelete = getTaskById(id);
	tasks.splice(tasks.indexOf(taskToDelete), 1);
	return taskToDelete; // para saber qué borraste
}

module.exports = {
    createTask,
    getTaskById,
    getAllTask,
    updateTask,
    deleteTask
}
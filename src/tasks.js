
let tasks = [];
let nextId = 1;

// Ajouter une tâche
function addTask(title) {
    if (typeof title !== "string" || !title.trim()) {
        throw new Error("Le titre de la tâche est obligatoire.");
    }

    const task = {
        id: nextId++,
        title: title.trim(),
        completed: false
    };

    tasks.push(task);
    return task;
}

// Afficher toutes les tâches
function listTasks() {
    return tasks.map(task => ({ ...task }));
}

// Supprimer une tâche
function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);

    if (index === -1) {
        return false;
    }

    tasks.splice(index, 1);
    return true;
}

// Marquer une tâche comme terminée
function completeTask(id) {
    const task = tasks.find(task => task.id === id);

    if (!task) {
        return false;
    }

    task.completed = true;
    return true;
}

// Exporter les fonctions
module.exports = {
    addTask,
    listTasks,
    deleteTask,
    completeTask
};

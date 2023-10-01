
const db = require("../../data/dbConfig.js");


module.exports = {
    getTasks,
    insertTask,
    getTasksById,
    // update,
    // remove,
    // getProjectActions,
};








function getTasks() {
    return db("tasks")
      .join("projects","projects.project_id", "tasks.project_id")
  }
  


function insertTask(task) {
    return db('tasks')
        .insert(task)
        .then(([id]) => getTasksById(id));
}

function getTasksById(id) {
    return db('tasks').where('task_id', id).first()
}
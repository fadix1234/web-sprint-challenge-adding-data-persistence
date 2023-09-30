// build your `Project` model here
const db = require("../../data/dbConfig.js");

module.exports = {
    getProjects,
    insert,
    // update,
    // remove,
    // getProjectActions,
  };


  function getProjects(){
    return db("projects")
  }

  function insert(project) {
    return db('projects')
      .insert(project)
      .then(([id]) => get(id));
  }
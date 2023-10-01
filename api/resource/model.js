// build your `Resource` model here

const db = require("../../data/dbConfig.js");


module.exports = {
    getResources,
    insert,
    getResourcesById,
    // update,
    // remove,
    // getProjectActions,
  };






function getResources(){
    return db("resources")
  }

  
  function insert(resource) {
    return db('resources')
      .insert(resource)
      .then(([id]) => getResourcesById(id));
  }

  function getResourcesById(id) {
    return db('resources').where('resource_id', id).first()
    }
// build your `/api/projects` router here
const router = require('express').Router()

const Projects = require('./model');

router.get('/', (req, res) => {
Projects.getProjects().then(projects => {
   projects = projects.map(project => {
    if(project.project_completed === 0){
      project.project_completed = false  
    }else{
        project.project_completed = true 
    }
    return project
   })
    res.status(200).json(projects)
}).catch(err => res.status(500).json({message:err.message}))



});


module.exports = router;

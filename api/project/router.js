// build your `/api/projects` router here
const router = require('express').Router()

const Projects = require('./model');

router.get('/', (req, res) => {
    Projects.getProjects().then(projects => {
        projects = projects.map(project => {
            if (project.project_completed === 0) {
                project.project_completed = false
            } else {
                project.project_completed = true
            }
            return project
        })
        res.status(200).json(projects)
    }).catch(err => res.status(500).json({ message: err.message }))



});


router.post('/', (req, res) => {
    const newProject = req.body;  
    if (newProject.project_completed === undefined) {
      newProject.project_completed = false;
    }

    Projects.insert(req.body)
        .then((project) => {
            res.status(201).json(project);

        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
               
            });
        });

});

module.exports = router;

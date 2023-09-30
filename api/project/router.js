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

    console.log(newProject)

    Projects.insert(newProject)
        .then((newProject) => {
            if (newProject.project_completed === 0) {
                newProject.project_completed = false;
            }else {
                newProject.project_completed = true
            }
                res.status(201).json(newProject);

            })
    
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: "There was an error while saving the post to the database"
            });
        });

});

module.exports = router;

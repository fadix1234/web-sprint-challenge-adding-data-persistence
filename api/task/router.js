// build your `/api/tasks` router here

const router = require('express').Router()

const Tasks = require('./model');

router.get('/', (req, res) => {
    Tasks.getTasks().then(tasks => {
        tasks = tasks.map(task => {
            if (task.task_completed === 0) {
                task.task_completed = false
            } else {
                task.task_completed = true
            }
            return task
        })
        res.status(200).json(tasks)
    }).catch(err => res.status(500).json({ message: err.message }))



});


// router.post('/', (req, res) => {
//     const newTask = req.body;
//     console.log(newTask,'WATERMELON')
//     // const { task_name, task_description } = req.body
//     // if (!task_name || !task_description) {
//     //     return res.status(400).json({
//     //         message: "Please provide name and description for the post"
//     //     })
    
//     Tasks.insertTask(newTask)
//       .then(task => {
//         res.status(201).json(task);
//       })
//       .catch(err => res.status(500).json({ message: err.message }));
//   });


router.post('/', (req, res) => {
    const newTask = req.body;

    console.log(newTask)

    Tasks.insertTask(newTask)
        .then((newTask) => {
            if (newTask.task_completed === 0) {
                newTask.task_completed = false;
            }else {
                newTask.task_completed = true
            }
                res.status(201).json(newTask);

            })
    
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: "There was an error while saving the post to the database"
            });
        });

});


module.exports = router;
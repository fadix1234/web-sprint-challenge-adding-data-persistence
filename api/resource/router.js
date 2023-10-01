// build your `/api/resources` router here
const router = require('express').Router()

const Resources = require('./model');



router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => {
            console.log(resources,'APPLE')
            res.status(200).json(resources);
        })
        .catch(err => res.status(500).json({ message: err.message }));
});




router.post('/', (req, res) => {
    const newResource = req.body;
  
    Resources.insert(newResource)
      .then(resource => {
        res.status(201).json(resource);
      })
      .catch(err => res.status(500).json({ message: err.message }));
  });









module.exports = router;
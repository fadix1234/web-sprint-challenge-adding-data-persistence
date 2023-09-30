// build your server here and require it from index.js

const express = require("express");

const projectModel = require('./project/model');
const projectRouter = require('./project/router');

// const resourceModel = require('./resource/model');
// const resourceRouter = require('./resource/router');

// const taskModel = require('./task/model');
// const taskRouter = require('./task/router');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);

// server.use('/api/resource', resourceModel);
// server.use('/api/resource', resourceRouter);


// server.use('/api/task', taskModel);
// server.use('/api/task', taskRouter);

// server.use('*', (req,res) => {
//     res.status(404).json({
//         message: 'not found',
//     })
// })

module.exports = server;

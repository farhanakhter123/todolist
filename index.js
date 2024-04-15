
// const express = require('express')
// const mongoose = require('mongoose')
// const cors = require('cors')
// const TodoModel = require('./Models/Todo')
// // 
// const path = require("path");
// app.get("/", (req, res) => {
// app.use(express.static(path.resolve(__dirname, "todo list", "build")));
// res.sendFile(path.resolve(__dirname, "todo", "build", "index.html"));
// });
// // 


// const app = express()
// app.use(cors(
      
// ))
// app.use(express.json())

// mongoose.connect('mongodb://127.0.0.1:27017/todos')

// app.get('/get', (req, res) => {
//     TodoModel.find()
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })

// app.put('/update/:id', (req, res) => {
//     const {id} = req.params;
//     TodoModel.findByIdAndUpdate({_id: id}, {done: true})
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })

// app.delete('/delete/:id', (req, res) => {
//     const {id} = req.params;
//     TodoModel.findByIdAndDelete({_id: id})
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })

// app.post('/add', (req, res) => {
//     const {task,description} = req.body;
//     TodoModel.create({
//         task: task,
//         description : description,
//     }).then(result => res.json(result))
//     .catch(err => res.json(err))
// })

// app.listen(3001, () => {
//     console.log("Server is Running")

// })



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/Todo');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/todos');

// Define routes after initializing 'app'
app.get('/get', (req, res) => {
    TodoModel.find()
        .then(result => res.json(result))
        .catch(err => res.json(err))
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndUpdate({ _id: id }, { done: true })
        .then(result => res.json(result))
        .catch(err => res.json(err))
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    TodoModel.findByIdAndDelete({ _id: id })
        .then(result => res.json(result))
        .catch(err => res.json(err))
});

app.post('/add', (req, res) => {
    const { task, description } = req.body;
    TodoModel.create({
        task: task,
        description: description,
    }).then(result => res.json(result))
      .catch(err => res.json(err))
});

// Serve static files
const path = require('path');
app.use(express.static(path.resolve(__dirname, 'todo list', 'dist')));
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'todo list', 'dist', 'index.html'));
});

app.listen(3001, () => {
    console.log('Server is Running');
});

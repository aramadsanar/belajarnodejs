const express = require('express');
const app = express();
const bodyparser = require('body-parser');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todolist')
const todoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

const Todo = new mongoose.model('todo', todoSchema);


//const body
var todos = [
    {
        title: 'learn android java programming',
        completed: true
    },
    {
        title: 'go to campus',
        completed: true
    }
]

app.use(bodyparser.json())
app.use(bodyparser.urlencoded())

app.get('/todos', async (req, res) => {
    let result = await Todo.find();

    res.send(result);
});

app.post('/todos', (req, res) => {
    console.log(req.body);

    let todo = new Todo(
        {
            title: req.body.title, 
            completed: req.body.completed
        }
    );
    
    todo.save()
    res.send(todos);
});

app.listen(3000, () => {
    console.log('masuk didalem');
});
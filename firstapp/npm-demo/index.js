var _ = require('underscore');
var result = _.contains([1, 2, 3], 2);
console.log(result);

const express = require('express');
const bodyParser = require('body-parser');
const connect = require('body-parser');
const app = express();
const Joi = require('joi');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const debugstart = require('debug')('app:startup');
const debugdb = require('debug')('db');
console.log(config.get("name"))
console.log(config.get("mail.password"))
//app.use(connect.bodyParser());

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
debugstart('hahahihi');
app.use((req, res, next) => {
    debugstart("maju trus");
    next();
});

app.use(helmet());
if (app.get('env') === 'development')
    app.use(morgan('tiny'));

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];
app.get('/', (req, res) => {
    // res.write('p3k');
    // res.write(req.ip);
    // res.write('haha');
    // res.write('hihi');
    //res.end();
    //res.close();
    res.render('index', {
        title: 'hahahihi',
        message: 'halo'
    })
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id/', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id))
    if (!course) return res.status(404).send('course dne');
    else res.send(course);
});

app.post('/api/courses', (req, res) =>{
    const result = validateCourse(req.body);

    //console.log(result)
    
    if (result.error) {
        return res.status(400).send(result.error.details[0].message);
    }
    const newCourse = {
        id: courses.length+ 1,
        name: req.body['name']
    };

    courses.push(newCourse);
    console.log(req.body)
    res.send(newCourse);
});

app.put('/api/courses/:id', (req, res) => {
    let course = courses.find(c =>  c.id === parseInt(req.params.id))
    
    if (course === null | course === undefined) {
        return res.status(404).send("not found")
    }
    
    const result = validateCourse(req.body);
    if (result.error) {
        return res.status(400).send(result.error.details[0].message)
    }

    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    let course = courses.find(c =>  c.id === parseInt(req.params.id))
    
    if (course === null | course === undefined) {
        return res.status(404).send("not found");
        
    }
    let idx = courses.indexOf(course);

    courses.splice(idx, 1);
    res.send(course);
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`))


function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}
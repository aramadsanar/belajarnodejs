const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

const authorSchema = new mongoose.Schema({
  name: String,
  bio: String,
  website: String
});

const Author = mongoose.model('Author', authorSchema);

const Course = mongoose.model('Course', new mongoose.Schema({
  name: String,
  author: {
    type: [authorSchema],
    required: true
  }
}));

async function createCourse(name, author) {
  const course = new Course({
    name, 
    author
  }); 
  
  const result = await course.save();
  console.log(result);
}

async function addAuthor(courseId, author) {
  const course = await Course.findById(courseId);

  course.author.push(author)
  course.save()
}

async function listCourses() { 
  const courses = await Course.find();
  console.log(courses);
}

async function updateAuthor(courseId) {
  let course = await Course.update({_id: courseId}, {
    $unset: {
      'author.name': ''
    }
  });
  // console.log(course['name'])
  //course.author.name = 'Mosh Hamedani'
  //course.save()
}

async function removeAuthor(courseId, authorId) {
  let course = await Course.findById(courseId)
  console.log(course)
  let author = course.author.id(authorId)

  author.remove();

  course.save()
}
removeAuthor('5c0a2940b8aa6c63a86fe9c7', '5c0a2940b8aa6c63a86fe9c6')
//addAuthor('5c0a2940b8aa6c63a86fe9c7', new Author({name: 'Loli'}))
//createCourse('Node Course', [new Author({ name: 'Mosh' }), new Author({ name: 'Mamad' })]);
//updateAuthor('5c0a2426c8c7f65f6cfff8aa')
// listCourses()
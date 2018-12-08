const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pussy')


let courseSchema = new mongoose.Schema({
    tags: [String],
    date: {
        type: Date,
        default: Date.now()
    },
    name: String,
    author: String,
    isPublished: Boolean,
    price: Number
});


let Course = mongoose.model('pepek', courseSchema);

async function getCourses() {
  return await Course
  .find({ isPublished: true })
  .or([  
    { price: { $gte: 15 } },
    { name: /.*by.*/i }
  ])
  .sort('-price')
  .select('name author price');
}

async function run() {
  console.log('masuk')
  const courses = await getCourses();
  console.log(courses);
}

async function updateCourse(id) {
    //query first
    let targetCourse = await Course.find({_id: id});
    console.log(targetCourse)
    if (!targetCourse) {
      console.log('ga ada')
      return;
    }
    else console.log(targetCourse)
    targetCourse[0].isPublished = true;
    targetCourse[0].author = 'hahahahaha'
    //another approach
    // course.set({
    //     isPublished: true,
    //     author: 'pepek'
    // });
    const result = await targetCourse[0].save();

    console.log(result)
}



async function removeCourse(id) {
  //query first
  const result = await Course.deleteOne({_id: id});
  console.log(result)

}


// getCourses()
removeCourse("5c0230f1c3c8dfbc3cf4edc5");




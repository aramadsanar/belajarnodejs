const p = new Promise(function(resolve, reject) {
    //kick off async work
    setTimeout(() => {
        //resolve(1);
        reject(new Error("error"))
    }, 2000)
    
    
    //

});

p
 .then((result) => {
    console.log(result)
})
 .catch((err) => {
    console.log(err.message)
})
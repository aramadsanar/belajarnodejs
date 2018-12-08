const p = Promise.reject(new Error('error'))

p.catch(error => console.log(error))

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async op 1')
        resolve(1)
    }, 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async op 2')
        reject(new Error('haha'))
        resolve(2)
    }, 2000)
})
Promise.all([p1, p2])
  .then(result => console.log(result))
  .catch(error => console.log(error))
//ref -> consistency
let author = {
    name: 'Mosh'
}

let course = {
    author: 'id'
}

//using embedded docs

let course = {
    author: {
        name: 'Mosh Hamedani'
    }
}

//hybrid
let author = {
    name: 'mosh',
    //50 other props
}


let course = {
    author: {
        id: 'ref',
        name: 'Mosh'
    }
}
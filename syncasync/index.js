console.log('Before');
console.log(getUser(1));
console.log('After');

function getUser(id) {
    setTimeout(()=> {
        console.log('narik data');
        return {
            id: id,
            gitHub: 'mosh'
        };
    }, 2000);
}
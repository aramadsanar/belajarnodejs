console.log('Before');


// getUser(
//     1, 
//     (user) => {
//         console.log('user', user)

//         getRepositories(user.gitHubUsername, (repositories) => {
//             console.log(repositories)

//             getCommits(repositories[0], (commits) => {
//                 console.log(commits)
//             })
//         })
//     }
// )


// getUser(1)
//   .then(user => getRepositories(user.gitHubUsername))
//   .then(repositories => getCommits(repositories))
//   .then(commits => console.log(commits))
//   .catch(err => console.log(err.message))

//async and await approach

async function displayCommits() {
    try {
        const user = await getUser(1);
        const repos = await getRepositories(user.gitHubUsername);
        const commits = await getCommits(repos[0]);
        console.log(commits);
    }
    catch (err) {
        console.log('error', err)
    }
}

displayCommits();

console.log('After');

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('narik data');
            resolve({id: id, gitHub: 'mosh'})
        }, 2000);
    })
}

function getRepositories(gitHubUsername) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('narik repo dari github')
            resolve(['repo 1', 'repo 2', 'repo 3'])
        }, 2000)
    })
}

function getCommits(repoName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('nyari commit dari repo...')
            resolve(['commit a', 'commit b', 'commit c'])
        }, 2000)
    })
}
console.log('Before');


getUser(
    1, 
    displayUser
)

function displayUser(user) {
    console.log('user', user)
    //get the repo

    getRepositories(
        user.gitHubUsername, 
        displayRepositories
    )
}

function displayRepositories(repositories) {
    console.log(repositories)

    getCommits(
        repositories[0], 
        displayCommits
    )
}

function displayCommits(commits) {
    console.log('Commits', commits)
}

console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('narik data');
        callback({id: id, gitHub: 'mosh'})
        
    }, 2000);
}

function getRepositories(gitHubUsername, callback) {
    setTimeout(() => {
        console.log('narik repo dari github')
        callback(['repo 1', 'repo 2', 'repo 3'])
    }, 2000)
     
}

function getCommits(repoName, callback) {
    setTimeout(() => {
        console.log('nyari commit dari repo...')
        callback(['commit a', 'commit b', 'commit c'])
    })
}
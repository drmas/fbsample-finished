

export const getRepos = (username) => {
    var url = `https://api.github.com/users/${username}/repos`;
    return fetch(url)
        .then(res => res.json());
}
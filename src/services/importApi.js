

export function getfilms(name) {
    return fetch("https://developers.themoviedb.org/3/search/search-movies")
    .then(reponse => reponse.json())
}
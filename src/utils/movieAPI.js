const api = "http://omdbapi.com/"
const token = "28560c47"

export const getMovie = (movieTitle) =>
  fetch(`${api}/?apikey=${token}&s=${movieTitle}`)
    .then(res => { 
        return res.json()
    })

export const getInfoMovieById = (omdbId) =>
    fetch(`${api}/?apikey=${token}&i=${omdbId}`)
      .then(res => { 
          return res.json()
      })
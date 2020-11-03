import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import Home from './templates/Home'
import MovieInfo from './templates/MovieInfo'
import * as movieAPI from './utils/movieAPI'
import './App.css';

export default class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      movieInformation: [],
    }
    this.searchMovieById = this.searchMovieById.bind(this)
    this.searchMovieByTitle = this.searchMovieByTitle.bind(this);
  }
  


  searchMovieByTitle(movieTitle, lengthMaxMovies = 6){
    movieAPI.getMovie(movieTitle).then(listMovies => {
      let listMoviesLimit = ''
      let count = 0
      if(!!(listMoviesLimit.includes(this.state.movies) && listMovies.Response !== "False")){
        listMoviesLimit = listMovies.Search.slice(0,lengthMaxMovies)
      }else if(listMovies.Response !== "False"){
        count += lengthMaxMovies
        listMoviesLimit = listMovies.Search.slice(0,lengthMaxMovies+count)
      } else{
        listMoviesLimit = undefined
      }
      this.setState({ movies: listMoviesLimit })
    })
  }

  searchMovieById(id){
    movieAPI.getInfoMovieById(id).then(movieInfo => {
      this.setState({ movieInformation:  movieInfo})
    })
  }

  render(){
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <Home 
              onSearchMovie={this.searchMovieByTitle}
              movies={this.state.movies}
              />
          )}
        />
        <Route
          path="/movie"
          render={() => (
            <MovieInfo onSearchMovieById={this.searchMovieById} movieInfo={this.state.movieInformation}/>
          )}
        />
      </div>
    )
  }
}

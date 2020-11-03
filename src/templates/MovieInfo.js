import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class MovieInfo extends Component{

    componentDidMount(){
        const { onSearchMovieById } = this.props
        const currentURLArray = document.URL.split('/')
        const omdbIdMovie = currentURLArray[currentURLArray.length - 1]
        onSearchMovieById(omdbIdMovie)
      }

    render(){   
        const { movieInfo } = this.props
        return(
            <div className="container">
                <div className="container-movie-info">
                    <div className="image-poster">
                        <div className="image-background" style={{ backgroundImage: `url(${movieInfo.Poster})`}}></div>
                        <img src={movieInfo.Poster}/>
                    </div>
                    <div className="movie-info">
                        <div className="box-info"> <h2>{movieInfo.Title}</h2> </div>
                        <div className="box-info">
                            <p className="firstInformation">{movieInfo.Year}/ Released: {movieInfo.Released}/ {movieInfo.Genre}/ {movieInfo.Language}/ {movieInfo.Type}</p>
                            <p className="firstInformation"><b>Country: </b>{movieInfo.Country}</p>
                            <p className="firstInformation"><b>Rating and awards: </b>{movieInfo.Rated},{movieInfo.Awards}, {movieInfo.Metascore}, {movieInfo.imdbRating}, {movieInfo.imdbVotes}</p>
                            <p className="firstInformation"><b>id: </b> {movieInfo.imdbID}</p>
                            <p className="firstInformation"><b>Director: </b>{movieInfo.Director}</p>
                            <p className="firstInformation"><b>Writer: </b>{movieInfo.Writer}</p>
                            <p className="firstInformation"><b>Casting: </b> {movieInfo.Actors} </p>
                        </div>
                        <div className="box-info"><p><b>Synopsis:</b> <br></br> {movieInfo.Plot}</p></div>
                        <button className="btn-back"><Link to="/">Voltar</Link></button>
                    </div>
                </div>
            </div>
        )
    }
    
}
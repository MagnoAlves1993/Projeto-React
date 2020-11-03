import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Listing extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isHover: false
        }
    
        this.onHoverCard = this.onHoverCard.bind(this);
        this.onLeaveCard = this.onLeaveCard.bind(this);
    }

    onHoverCard(index){
         this.setState(prevState => {
            return { isHover: { ...prevState.isHover, [index]: true } };
          });
    }

    onLeaveCard(){
        this.setState({ isHover:false } );
    }

    render(){
        const { movies } = this.props
        return(
            <div className="container-listing" >
                <h2>Resultado da busca:</h2>
                <div className="grid-listing">
                    {movies.map((movie, index) => (
                        <div 
                            className="card-movie" 
                            key={index}
                            onMouseEnter={() => this.onHoverCard(index)} 
                            onMouseLeave={() => this.onLeaveCard(index)} 
                            >
                            {this.state.isHover[index] && (
                                <div className="tooltip-movie">
                                    <ul>
                                        <li>Title: {movie.Title}</li>
                                        <li>Year: {movie.Year}</li>
                                        <li>Type: {movie.Type}</li>
                                        <li>imdbID: {movie.imdbID}</li>
                                        <li>  <Link
                                            to={`/movie/${movie.imdbID}`}>
                                                + info
                                            </Link></li>
                                    </ul>
                                </div>
                            )}
                            <img src={movie.Poster !== "N/A" ? movie.Poster :  "https://i.pinimg.com/originals/cc/45/ae/cc45aedbe70d506c541a17f74b025b0c.jpg"} />
                        </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    
}
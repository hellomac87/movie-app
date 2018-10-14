import React, { Component } from "react";
import './Movie.css';

class Movie extends Component{
    render(){
        return (
            <div>
                <MoviePoster/>
                <h1>Hello, this is a Moive</h1>
            </div>            
        );
    }
}

class MoviePoster extends Component{
    render(){
        return(
            <img src="https://images-na.ssl-images-amazon.com/images/I/81AJdOIEIhL._SY679_.jpg" />
        );
    }
}

export default Movie;
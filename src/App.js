import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

class App extends Component {
  state = {
    
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        movies: [
          {
            title: "Matrix",
            poster: "https://images-na.ssl-images-amazon.com/images/I/51k1epcewKL.jpg"
          },
          {
            title: "dark knight",
            poster:
              "https://images-na.ssl-images-amazon.com/images/I/81AJdOIEIhL._SY679_.jpg"
          },
          {
            title: "the nun",
            poster:
              "https://pre00.deviantart.net/fd7a/th/pre/f/2017/232/d/1/the_nun__2018____poster_by_netoribeiro89-dbkrvcq.jpg"
          },
          {
            title: "gotham",
            poster:
              "http://images6.fanpop.com/image/photos/40600000/Gotham-Season-4-Poster-gotham-40684106-1080-1350.jpg"
          },
          {
            title: "batman begins",
            poster: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"
          },
        ]
      });
    },3000)
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });

    return movies;
  }
  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'loading...'}
      </div>
    );
  }
}

export default App;

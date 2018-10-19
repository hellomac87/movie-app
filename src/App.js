import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

class App extends Component {
  state = {
    
  }

  componentDidMount(){
    console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating'));
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

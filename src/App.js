import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

const movieTitles = [
  'Matrix',
  'dark knight',
  'the nun',
  'gotham'
]

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/51k1epcewKL.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/81AJdOIEIhL._SY679_.jpg",
  "https://pre00.deviantart.net/fd7a/th/pre/f/2017/232/d/1/the_nun__2018____poster_by_netoribeiro89-dbkrvcq.jpg",
  "http://images6.fanpop.com/image/photos/40600000/Gotham-Season-4-Poster-gotham-40684106-1080-1350.jpg"
];
class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]}/>
        <Movie title={movieTitles[1]} poster={movieImages[1]}/>
        <Movie title={movieTitles[2]} poster={movieImages[2]}/>
        <Movie title={movieTitles[3]} poster={movieImages[3]}/>
      </div>
    );
  }
}

export default App;

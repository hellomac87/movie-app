import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

const movies = [
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
  }
];
class App extends Component {
  state = {
    greeting: 'hello',
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        greeting:'hihi'
      });
    },5000)
  }
  render() {
    return (
      <div className="App">
      {this.state.greeting}
        {
          movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />;
          })
        }
      </div>
    );
  }
}

export default App;

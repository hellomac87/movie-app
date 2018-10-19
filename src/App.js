import React, { Component } from 'react';
import Movie from './Movie';
import './App.css';

class App extends Component {
  state = {
    
  }

  componentDidMount(){
    fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating') // 작업이 완료되면
    .then(response => response.json()) // then을 호출한다. then function 은 1개의 attribute 만을 준다. 이것은 object이다. fetch의 결과물
    .then(json => console.log(json)) // json으로 변환한뒤 호출
    .catch(err => console.log(err)); // fetch 과정에 error 가 있다면 catch 해서 나에게 보여줘
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

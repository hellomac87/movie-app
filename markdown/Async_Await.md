# Async Await

`fetch` 메소드에서 `then`구문을 이어가며 코드를 작성하면
일명 `callback hell`이라고 불리는 것에 빠지게 된다.

`asynchronos`는 이전 작업이 끝나야 다음 작업이 시작되는 형태가 아니다. 순서와 상관없이 진행된다.


```js
componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });

    return movies;
  }

  _getMovies = async () => {
    const movies = await this._callApi();  // this._callApi() 가 싱행되어 완료 된 후에
    console.log(movies);
    this.setState({ // 이 구문이 행된다. 비동기 함수를 동기적으로 실행되게 할 수 있다.
      movies
    });
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating') // 작업이 완료되면
      .then(response => response.json()) // then을 호출한다. then function 은 1개의 attribute 만을 준다. 이것은 object이다. fetch의 결과물
      .then(json => json.data.movies) // json으로 변환한뒤 호출
      .catch(err => console.log(err)); // fetch 과정에 error 가 있다면 catch 해서 나에게 보여줘
  }
```

`_callApi`함수가 실행되어 `완료(성공적 수행이 실패가 아닌)`되기 전까지는 `async await` 구문을 갖는 함수는 실행되지 않는다.

`_callApi`함수가 실행되어 `완료(성공적 수행이 아닌)`되어야만 `async await` 구문을 갖는 함수가 실행되어 값을 반환한다.
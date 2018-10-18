# Loading States

Loading state 에 대해 알아보자

대부분의 경우 우리가 필요한 데이터는 즉시 존재하지는 않는다.

데이터 없이 컴포넌트가 로딩되고 api 요청을 통해 data를 가져와서 state 업데이트를 통해 그려준다.

## 삼항연산자
컴포넌트를 렌더링 하는 부분을 함수로 작성하고
```js
_renderMovies = () => {
    const movies = this.state.movies.map((movie, index) => {
      return <Movie title={movie.title} poster={movie.poster} key={index} />;
    });

    return movies;
  }
```
jsx 내에서 삼항연산자를 작성한다.
```js
{this.state.movies ? this._renderMovies() : 'loading...'}
```
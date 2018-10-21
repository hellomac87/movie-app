# CSS for Movie

css 를 작성해보자

```js
render() {
    const {movies} = this.state;
    return (
      <div className={movies ? "App" : "App__Loading"}>
        {movies ? this._renderMovies() : 'loading...'}
      </div>
    );
  }
```
```js
const {movies} = this.state; 
// 같은 코드
const movies = this.state.movies;
```

```js
<div className={movies ? "App" : "App--Loading"}>
// JSX 에서는 삼항연산자를 사용하여 className 을 동적으로 활용 할 수 있음
```

`LinesEllipsis` 적용
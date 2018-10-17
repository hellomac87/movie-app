# Practicing this setState

`state`를 좀더 연습해보쟝

스테이트에 새로운 내용을 추가해보자
```js
this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "batman begins",
            poster: "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_.jpg"
          }
        ]
      });
```
이 부분에 집중해볼까?
```js
...this.state.movies,
```
> 이전 영화 리스트를 가져왕
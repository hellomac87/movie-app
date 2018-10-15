# Lists with .maps

api에서 받아온 정보를 array로 만들어 react에서 다루기 쉽개 만든다(리액트는 배열을 다루는데 탁월하다).

array의 map 메서드를 사용한당.
```js
movies.map((movie, index) => {
            return <Movie title={movie.title} poster={movie.poster} key={index} />;
          })
```
위 코드를 벗겨내보면 아래처럼 작동하는거시야

```js
{[
    <Movie title={movie[0].title} poster={movie[0].poster} key={index} />,
    <Movie title={movie[1].title} poster={movie[1].poster} key={index} />,
    <Movie title={movie[2].title} poster={movie[2].poster} key={index} />,
    <Movie title={movie[3].title} poster={movie[3].poster} key={index} />
]}
```
하지만 map 메서드를 사용해서 간편하게 할 수 있지.

array 를 맵핑해서 하나의 컴포넌트를 만든다.

> 정렬된 항목을 선택 > 해당 항목들을 매핑 > 우리가 설계한 리스트 만들기 > 쨔잔!
## ref

[https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map ](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
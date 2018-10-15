# Data flow with Props

react 에는 2개의 주요 컨셉이 있다. `state`, `props` 

이 챕터에서는 `props`에 대해 다룬다.

부모 컴포넌트는 칠드런 컴포넌트에 각각 정보를 준다.

`props`를 통해서 준다.

부모 컴포넌트
```js
// ...
const movieTitles = [
  'Matrix',
  'dark knight',
  'the nun',
  'gotham'
]

//...
<Movie title={movieTitles[0]};/>
//...
```
자식 컴포넌트
```js
//...
<h1>{this.props.title}</h1>
//...
```

메인 컴포넌트가 모든 데이터를 갖고있고(한개의 데이터 소스), 각 칠드런 컴포넌트에 정보를 전달함. 이를 통해 강력한 UI 구축 가능
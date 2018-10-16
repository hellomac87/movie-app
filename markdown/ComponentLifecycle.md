# Component Lifecycle

react 컴포넌트는 `여러 기능들을 정해진 순서대로 실행`하는데, 이것이 `Component Lifecylce` 이다.

## render
`componentWillMount()` -> `render()` -> `componentDidMount()`

이 세가지는 component 가 존재하기 시작할때 작동한다.

`componentWillMount` 를 진행할때 api에 작업을 요청한다

## update
`componentWillReceiveProps()` -> `shouldComponentUpdate()` -> `componentWillUpdate()` -> `render()` -> `componentDidUpdate()`

`componentWillReceiveProps()` : 컴포넌트가 새로운 props를 받았다.

`shouldComponentUpdate()` : old props, new props를 살펴본 다음 둘이 다르면 리액트는 업데이트 === true 라고 생각한다.

ex) 

`componentWillUpdate()` 일때 progress bar, progress spin 등을 실행 할 수 있다. 

`componentDidUpdate()` 일때 progress bar, progress spin 등을 숨길 수 있다.

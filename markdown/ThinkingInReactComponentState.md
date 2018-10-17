# Thinking in React Component State

## state

state는 리액트 컴포넌트 안에 있는 오브젝트(객체)다.

`state`가 바뀔 때 마다, 컴포넌트는 `render` 한다.

`state`를 변경할 때, 직접 접근해서 변경해서는 안된다.
```js
this.state.greeting = 'don do this'; // 이렇게 하면 안됨
```
```js
this.setState({
    greeting: 'do this', // 이렇게 작서해야 함
})
```
***왜냐묜?***

직접적으로 `state`를 변경 시에는 render lifecycle이 발동하지 않는다.

> `state 변경`하면 , `reder가 다시 작동`한다. `새로운 state`와 함께
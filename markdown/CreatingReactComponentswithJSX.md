# Creating React Components with JSX

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

```
- react는 ui 라이브러리
- react-dom은 리액트를 웹사이트에 출력(render) 하는 것을 도와주는 모델
- react를 모바일 앱에 올려놓고 싶다면 react-native

## ReactDOM
```js
ReactDOM.render(<App />, document.getElementById('root'));
```
ReactDOM은 1개의 컴포넌트를 지정한 엘리먼트안에 출력(render)한다.

## render

- 컴포넌트는 render가 실행되야야 함
- render 는 JSX를 return 한다.
- 컴포넌트 > render > return > JSX
- JSX는 react로 작성하는 html
# AJAX on React

'react' 에서는 'Ajax' 처리를 어떻게 할까?

우리가 Ajax 에서 신경써야 할 것은 'json'이다.

## json

'JSON, javaScript Object notation' : 오브젝트를 자바스크립트로 작성하는 기법

---

## fetch

### fetch request

사용한 api url `https://yts.am/api/v2/list_movies.json?sort_by=rating`
```js
console.log(fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating'));
```
```
Promise {<pending>}
```
promise 는 무엇일깡?
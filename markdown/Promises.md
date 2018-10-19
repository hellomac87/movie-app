# Promises

`promise`는 새로운 자바스크립트 `컨셉`이다.

`promise`가 쿨한 이유는 `asynchronos programming`때문이다.

## `asynchronos`

`asynchronos`는 무엇일까? ㅎㅎ;

첫번째 라인이 끝나야 두번째 라인이 실행되는 것을 `synchronos(동기)`라 한다.
```js
someFuc1('첫번째 작업'); // 이 작업이 끝나야
someFuc2('두번째 작업'); // 이 작업이 실행되는 것을 동기 라 한다.
```
`promise`는 `asynchronos(비동기)`다.

말인즉슨, 첫번째 라인이 끝나든 말든 두번째 라인을 작업한다는 뜻이다.
```js
someFuc1('첫번째 작업'); // 이 작업이 끝나는 것과 관계 없이
someFuc2('두번째 작업'); // 이 작업이 실행되는 것을 비동기 라 한다.
```
이것이 좋은 이유는 `계속해서 다른 작업을 스케쥴 해 놓을수 있기 떄문`이다.   

그리고 모든 작업들은 다른 작업의 수행과 관계없이 진행된다.

## `시나리오를 잡는 방법`

2가지의 시나리오가 있다면 이를 관리하는 것

`fetch, promise`가 좋은 이유는 좋은 `시나리오`가 생기고, 이를 `관리` 할 수 있기 때문이다.

## promise 의 적용  

```js
fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating') // 작업이 완료되면
    .then(response => console.log(response)) // then을 호출한다. then function 은 1개의 attribute 만을 준다. 이것은 object이다. fetch의 결과물
    .catch(err => console.log(err)); // fetch 과정에 error 가 있다면 catch 해서 나에게 보여줘
```
```
Response {type: "cors", url: "https://yts.am/api/v2/list_movies.json?sort_by=rating", redirected: false, status: 200, ok: true, …}
body: (...)
bodyUsed: false
headers: Headers {}
ok: true
redirected: false
status: 200
statusText: ""
type: "cors"
url: "https://yts.am/api/v2/list_movies.json?sort_by=rating"
__proto__: Response
```


```js
fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating') // 작업이 완료되면
    .then(response => response.json()) // then을 호출한다. then function 은 1개의 attribute 만을 준다. 이것은 object이다. fetch의 결과물
    .then(json => console.log(json)) // json으로 변환한뒤 호출
    .catch(err => console.log(err)); // fetch 과정에 error 가 있다면 catch 해서 나에게 보여줘
```
```
{status: "ok", status_message: "Query was successful", data: {…}, @meta: {…}}
@meta: {server_time: 1539947754, server_timezone: "CET", api_version: 2, execution_time: "0 ms"}
data: {movie_count: 9008, limit: 20, page_number: 1, movies: Array(20)}
status: "ok"
status_message: "Query was successful"
__proto__: Object
```

`promise`는 성공적으로 수행, 혹은 그렇지 않을 경우의 결과물을 `catch`,`then`으로 받아 볼 수 있다.
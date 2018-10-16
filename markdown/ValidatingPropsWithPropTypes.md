# Validating Props with Prop Types

props에 내가 원하는 값(타입)을 출력하려면 어떻게 해야할까?

## Prop Types
```bash
$ yarn add prop-types
```
- 부모 컴포넌트로부터 받은 정보의 종류 (prop 타입)를 체크 할 수 있다.
- 필수 요소 (required) 인지도 체크 할 수 있다.

## error 확인
```
Warning: Each child in an array or iterator should have a unique "key" prop.
```
array 에 있는 각 child 는 반드시 고유한 key prop 을 가져야 한다.

- react는 엘리먼트가 많을 경우 `key` 라는 prop을 줘야한다.
- `key` 는 고유해야한다. unique!


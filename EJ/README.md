# 1강
정리 없음<br/><br/>

# 2강
### 2.1 Before React
- html에서는 바로 변경된 결과 값이 텍스트에 반영되지 않음
    
    ⇒ querySelector로 해당 태그 지정해두고 event함수에서 innerText 변환해주기
    
    +) $변수(가변 변수) 넣어주려면 
    ```javascript 
    span.innerText = `Total clicks: ${counter};`
    ``` 
    다음과 같이 백쿼터 넣어주기 
    
- 먼저 리액트를 사용하기 위해서는
    
    ```html
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    ```
    
    리액트를 먼저 임폴트 시켜줘야 함

### 2.2 Our First React Element
\# 어렵게 코딩하는 법 먼저 실습

- html 코드 직접 작성하지 않고 javascript코드와 react 사용하여 element 생성
- react-dom은 모든 react element들을 HTML body에 둘 수 있도록 함

`React.createElement("html 태그명")` - React JS로 element 생성

- 2번째 argument로 해당 태그의 property들을 둘 수 있음 ex) { id: “sexy-span” }
- 3번째 argument로 들어갈 내용

 \* 위와 같은 방법으로는 이번 강의에서만 사용하고 더 사용 안 할 거라고 함

`ReactDOM.render(A, B)` - A를 B 안에 render

- A : 넣을 element 변수, B : 들어갈 위치의 elementID 변수
- render : React element를 가지고 HTML 만들어 배치하여 사용자에게 보여줌

> 자바스크립트로 시작해 HTML이 되는 것이 이번 강의의 핵심
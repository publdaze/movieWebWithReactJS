# 1강
정리 없음
<br/><br/>

# 2강
## 2.1 Before React
- html에서는 바로 변경된 결과 값이 텍스트에 반영되지 않음
    
    ⇒ querySelector로 해당 태그 지정해두고 event함수에서 innerText 변환해주기
    
    +) $변수(가변 변수) 넣어주려면 다음과 같이 백쿼터 넣어주기
    ```javascript 
    span.innerText = `Total clicks: ${counter};`
    ``` 
    
- 먼저 리액트를 사용하기 위해서는
    ```html
    <script src="https://unpkg.com/react@17.0.2/umd/react.production.min.js"></script>
    <script src="https://unpkg.com/react-dom@17.0.2/umd/react-dom.production.min.js"></script>
    ```
    리액트를 먼저 임폴트 시켜줘야 함

## 2.2 Our First React Element
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

## 2.3 Events in React
- 여러 element render 하고 싶으면 container로 묶기

    ex)
    ```jsx
    const root = document.getElementById("root");
    const span = React.createElement("span", null, "Hello I'm a span");
    const btn = React.createElement("button", null, "Click me");
    const container = React.createElement("div", null, [span, btn]);
    ReactDOM.render(container, root)
    ```
    
- 2번째 argument로 eventListener 줄 수 있음

    ex)
    ```jsx
    { 1st arg, onClick: () => console.log("Click"), 3rd arg }
    ```
    이벤트 앞에 **on**을 붙여야 React JS에 event listener 생성한다고 알려줄 수 있음

> addEventListener 반복하는 대신에 property에서 event를 등록할 수 있음!

## 2.4 Recap
\# 복습
- ReactJS와 React-DOM import 시켜야한다는 것과 각각의 역할
- props로 eventlistener 넣어줄 수 있다는 것

## 2.5 JSX
createElement 대체 ⇒ JSX : JavaScript를 확장한 문법

- 생긴 게 HTML이랑 비슷해서 JSX로 Teact 요소 만드는 게 편함
- 브라우저는 JSX를 이해하지 못하므로 Babel을 통해 변환 해줌(이 방법 느려서 보통 사용 안 할 거임)

    ```jsx
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
    <script type="text/babel">
    // code
    </script>
    ```
    [Babel · The compiler for next generation JavaScript](https://babeljs.io/)

## 2.6 JSX part Two
컴포넌트를 다른 컴포넌트 안에 포함시키기 위해서는 함수로 만들어줘야 함

`() ⇒`(arrow function) 추가해주면 함수됨
```jsx
const Title = () => (
  <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
    Hello I'm a title
  </h3>
);
```
```jsx
function Title() {
	return (
	  <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
	    Hello I'm a title
	  </h3>
	);
}
```
위의 2개 동일

- 컴포넌트 **첫글자 반드시 대문자**로,  태그처럼 적어주면(ex. `<Title />`) 복붙같은 역할

> 직접 만든 컴포넌트를 렌더링해서 다른 곳에서 사용할 때 항상 대문자로 시작해야 함.
<br/><br/>

# 3강
## 3.0 Understanding State
state - 값이 바뀔 데이터 담아 두는데 쓰임

- 중괄호 열어주고 변수 담아주기
- 데이터가 바뀔 때마다 리렌더링 해주기

> 리액트는 UI에서 딱 바뀐 부분만 업데이트 해줌

## 3.1 setState part One
- `React.useState()` - `[data, f]` 배열    
    ```jsx
    const [counter, modifier] = React.useState(0);
    //const counter = data[0] 이런 식으로 일일이 대입 안 해줘도 됨
    ```

## 3.2 setState part Two
왜 위(3.1 code)와 같은 modifier 필요?

→ 어떤 값을 부여하던 modifier 함수는 그 값으로 업데이트하고 리렌더링 일으킴

## 3.3 Recap
- 어플리케이션의 데이터를 바꿀때 modifier 함수로 state를 바꿀때, 컴포넌트 전체가 새로운 값을 가지고 재생성될거임

> state 바뀌면 리렌더링 일어남

## 3.4 State Functions
현재 값을 바탕으로 다음 값을 설정하고 싶다면<br/>
`setCounter(counter + 1);`<br/>
보다<br/>
`setCounter((current) => current + 1);`<br/>
이런 식으로 했을 때 current가 확실히 현재값이라는 걸 보장할 수 있음  
우리가 현재 state를 바탕으로 다음 state를 계산해내고 싶다면 이런식으로 함수를 써야함

state를 세팅해주는 2가지 방법
1. 직접 값을 설정해주는 것 (ex. 원하는 숫자 넣어주기)
2. 함수를 전달하기
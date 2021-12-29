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
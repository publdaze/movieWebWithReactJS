import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // 없애면 새로 고침 됨.
    if (toDo === "") {
      return;
    }
    setToDo(""); // 제출했을 때 비워지도록 함.
    setToDos((currentArray) => [toDo, ...currentArray]);
  };
  console.log(toDos);
  return (
    <div>
      <h1>My to Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo}
          type="text" 
          placeholder="Write your to do..." 
        />
        <button> Add </button>
      </form>
    </div>
  );
}

export default App;
import React, { useCallback, useState } from 'react';
import './App.css';
import Lists from './components/Lists';
import Form from './components/Form';

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState('');

  // 삭제버튼
  const handleClick = useCallback(
    id => {
      let newTodoData = todoData.filter(data => data.id !== id);
      setTodoData(newTodoData);
    },
    [todoData]
  );

  //handleSubmit 함수는, 다른 state도 가지고 있기때문에, prop으로 내려주는게 좋다.
  const handleSubmit = e => {
    e.preventDefault();
    // form 안에서 input을 전송할 때 페이지리로드 되는걸 막아준다.

    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData(prev => [...prev, newTodo]);
    setValue('');
  };

  const handleRemoveClick = () => {
    setTodoData([]);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할 일 목록</h1>
          <button onClick={handleRemoveClick}>Delete All</button>
        </div>
        <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData} />

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}

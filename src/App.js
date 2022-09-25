import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import Form from './components/Form';

export default function App() {
  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState('');

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

  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
        </div>

        <List todoData={todoData} setTodoData={setTodoData} />

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
      </div>
    </div>
  );
}

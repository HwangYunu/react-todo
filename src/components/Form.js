import React from 'react';

export default function Form({ handleSubmit, value, setValue }) {
  const handleChange = e => {
    setValue(e.target.value);
    // 이렇게 함으로써 위 state의 value 안에 값이 담긴다.->newTodo에서 이 값을 사용
  };

  return (
    <form style={{ display: 'flex' }} onSubmit={handleSubmit}>
      <input
        type="text"
        name="value"
        style={{ flex: '10', padding: '5px' }}
        placeholder="해야 할 일을 입력하세요."
        value={value}
        onChange={handleChange}
      />

      <input type="submit" value="입력" className="btn" style={{ flex: '1' }} />
    </form>
  );
}

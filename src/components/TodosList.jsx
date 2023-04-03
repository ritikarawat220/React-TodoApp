import { useState , useEffect } from 'react';
const TodosList = ({ todosProps, setTodos }) => {
    return (
      <ul>
        {todosProps.map((todo) => (
          <TodoItem key={todo.id} itemProp={todo} setTodos={setTodos} />
        ))}
      </ul>
    );
  };
  export default TodosList;
  
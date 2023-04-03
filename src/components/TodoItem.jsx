import { useState , useEffect } from 'react';
const TodoItem = ({ itemProp, handleChange, delTodo }) => {
    
      const handleChange = (id) => {
        setTodos((prevState) =>
          prevState.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          })
        );
      };

      const delTodo = (id) => {
        setTodos([
          ...todos.filter((todo) => {
            return todo.id !== id;
          }),
        ]);
      };

    return (
      <li>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        {itemProp.title}
      </li>
    );
  };
  export default TodoItem;
  
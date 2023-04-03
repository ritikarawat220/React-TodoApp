import { useState , useEffect } from 'react';
const TodoItem = ({ itemProp, handleChange }) => {
    
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

    return (
      <li>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={() => handleChange(itemProp.id)}
        />
        <button>Delete</button>
        {itemProp.title}
      </li>
    );
  };
  export default TodoItem;
  
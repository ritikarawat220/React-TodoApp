import { useState } from 'react';
import styles from '@/styles/TodoItem.module.css';

const TodoItem = ({ itemProp, handleChange, delTodo, setUpdate }) => {
    const [editing, setEditing] = useState(false);
    const handleEditing = () => {
        setEditing(true);
      };
      let viewMode = {};
  let editMode = {};
  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

    const completedStyle = {
        fontStyle: 'italic',
        color: '#595959',
        opacity: 0.4,
        textDecoration: 'line-through',
      };
    
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

      const handleUpdatedDone = (event) => {
        if (event.key === 'Enter') {
          setEditing(false);
        }
      };

    return (
        <li className={styles.item}>
          <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={itemProp.completed}
          onChange={(e) => setUpdate(e.target.value, itemProp.id)}
        />
         <button onClick={handleEditing}>Edit</button>
        <button onClick={() => delTodo(itemProp.id)}>Delete</button>
        <span style={itemProp.completed ? completedStyle : null}></span>
        {itemProp.title}
        </div>
        <input
      type="text"
      value={itemProp.title}
      className={styles.textInput}
      style={editMode}
      onKeyDown={handleUpdatedDone}
    />
    </li>
    );
  };
  export default TodoItem;
  
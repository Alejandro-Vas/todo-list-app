import TodoTextInput from "components/todoTextInput/TodoTextInput";
import useActions from "hooks/useActions";
import { useState } from "react";
import { ITodo } from "../../interfaces/ITodo";

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FC<IProps> = (props) => {
  const { todo } = props;
  const [editing, setEditing] = useState(false);
  const { deleteTodo, editTodo, completeTodo } = useActions();

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleSave = (id: number, title: string) => {
    if (title.length === 0) {
      deleteTodo(id);
    } else {
      editTodo({ id, title });
    }
    setEditing(false);
  };

  let element;
  if (editing) {
    element = (
      <li className="todo-item">
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo)}
        />
        <TodoTextInput
          text={todo.title}
          editing={editing}
          onSave={(title) => handleSave(todo.id, title)}
          onBlur={(title) => handleSave(todo.id, title)}
        />
      </li>
    );
  } else {
    element = (
      <li className="todo-item" onDoubleClick={handleDoubleClick}>
        <input
          className="toggle"
          type="checkbox"
          checked={todo.completed}
          onChange={() => completeTodo(todo)}
        />
        <span>{todo.title}</span>
        <button className="delete" onClick={() => deleteTodo(todo.id)}></button>
      </li>
    );
  }

  return <>{element}</>;
};

export default TodoItem;

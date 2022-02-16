import classnames from "classnames";
import TodoTextInput from "components/todoTextInput/TodoTextInput";
import { useState } from "react";
import { ITodo } from "../../interfaces/ITodo";

interface IProps {
  todo: ITodo;
}

const TodoItem: React.FC<IProps> = (props) => {
  const { todo } = props;

  const [editing, setEditing] = useState(false);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleSave = (id, title) => {
    if (title.length === 0) {
      deleteTodo(id);
    } else {
      editTodo(id, title);
    }
    setEditing(false);
  };

  let element;
  if (editing) {
    element = (
      <TodoTextInput
        text={todo.title}
        editing={editing}
        onSave={(title) => handleSave(todo.id, title)}
      />
    );
  } else {
    element = (
      <div className="view">
        <span onDoubleClick={handleDoubleClick}>{todo.title}</span>
        <button className="destroy" onClick={() => deleteTodo(todo.id)} />
      </div>
    );
  }

  return (
    <li
      className={classnames({
        editing: editing,
      })}
    >
      {element}
    </li>
  );
};

export default TodoItem;

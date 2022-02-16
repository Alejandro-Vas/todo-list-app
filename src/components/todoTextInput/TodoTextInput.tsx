import React, { useState } from "react";
import classnames from "classnames";

interface ITodoTextInput {
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
  onSave: (title: string) => void;
  onBlur?: (title: string) => void;
}

const TodoTextInput: React.FC<ITodoTextInput> = (props) => {
  const { placeholder, editing, newTodo, onSave, text } = props;

  const [todoText, setTodoText] = useState(text);

  const handleSubmit = (e: any) => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      onSave(text);
      if (newTodo) {
        setTodoText("");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!newTodo && e.target.value !== "") {
      onSave(e.target.value);
    }
  };

  return (
    <input
      className={classnames({
        edit: editing,
        "new-todo": newTodo,
      })}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={todoText}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  );
};
export default TodoTextInput;

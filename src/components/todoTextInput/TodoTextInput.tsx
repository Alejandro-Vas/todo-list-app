import React, { useState } from "react";
import useActions from "hooks/useActions";
import classnames from "classnames";

interface ITodoTextInput {
  text?: string;
  placeholder?: string;
  editing?: boolean;
  newTodo?: boolean;
  onSave: (title: string) => void;
}

const TodoTextInput: React.FC<ITodoTextInput> = (props) => {
  const { placeholder, editing, newTodo, onSave } = props;

  const [todoText, setTodoText] = useState("");

  const handleSubmit = (e: any) => {
    const text = e.target.value.trim();
    if (e.which === 13 && text.length !== 0) {
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

  //   const onSave = (newText: string) => {
  //     const randomId = Math.random() * 5000;
  //     addTodo({
  //       userId: randomId,
  //       id: randomId,
  //       title: newText,
  //       completed: false,
  //     });
  //   };

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

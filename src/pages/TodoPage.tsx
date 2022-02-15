import useActions from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";

const TodoPage = () => {
  const { addTodo } = useActions();
  const todo = useTypedSelector((state) => state.todo);
  console.log("todo from selector", todo);

  const newTodo = {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  };
  return (
    <div>
      <div>
        <h2>Todo Page</h2>
      </div>
      <div>
        {todo.map((todo) => {
          return <div key={todo.id + todo.title}>{todo.id}</div>;
        })}
      </div>
      <div>
        <button onClick={() => addTodo(newTodo)} type="button">
          Add todo
        </button>
      </div>
    </div>
  );
};
export default TodoPage;

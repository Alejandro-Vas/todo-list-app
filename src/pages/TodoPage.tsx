import useActions from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import usePagination from "hooks/usePagination";
import Pagination from "components/pagination/Pagination";

const TodoPage = () => {
  const { addTodo } = useActions();
  const todo = useTypedSelector((state) => state.todo);
  console.log(todo);

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: 10,
    count: todo.length,
  });

  console.log("todo from selector", todo);

  const randomId = Math.random() * 5000;

  const newTodo = {
    userId: 1,
    id: randomId,
    title: "fugiat veniam minus " + randomId,
    completed: false,
  };

  return (
    <div>
      <div>
        <h2>Todo Page</h2>
      </div>
      <div>
        {todo.slice(firstContentIndex, lastContentIndex).map((todo) => {
          return (
            <>
              <div key={todo.id}>{todo.title}</div>
              <hr />
            </>
          );
        })}
      </div>
      <div>
        <button onClick={() => addTodo(newTodo)} type="button">
          Add todo
        </button>
        <Pagination
          nextPage={nextPage}
          prevPage={prevPage}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};
export default TodoPage;

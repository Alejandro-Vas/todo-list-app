import useActions from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import usePagination from "hooks/usePagination";
import Pagination from "components/pagination/Pagination";
import TodoTextInput from "components/todoTextInput/TodoTextInput";
import TodoItem from "components/todoItem/TodoItem";

const TodoPage = () => {
  const { addTodo } = useActions();
  const todo = useTypedSelector((state) => state.todo);

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
        <TodoTextInput
          newTodo
          placeholder="What needs to be done?"
          onSave={(title) => {
            if (title.length !== 0) {
              addTodo({
                userId: randomId,
                id: randomId,
                title: title,
                completed: false,
              });
            }
          }}
        />
      </div>
      <div>
        {todo.slice(firstContentIndex, lastContentIndex).map((todo) => {
          return (
            <>
              <TodoItem todo={todo} />
              <hr />
            </>
          );
        })}
      </div>
      <div>
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

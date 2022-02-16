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
    contentPerPage: 15,
    count: todo.length,
  });

  const randomId = Math.random() * 5000;

  return (
    <div>
      <div>
        <TodoTextInput
          newTodo
          placeholder="Add a todo and press Enter..."
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

import useActions from "hooks/useActions";
import { useTypedSelector } from "hooks/useTypedSelector";
import usePagination from "hooks/usePagination";
import Pagination from "components/pagination/Pagination";
import TodoTextInput from "components/todoTextInput/TodoTextInput";
import TodoItem from "components/todoItem/TodoItem";

const TodoPage: React.FC = () => {
  const { addTodo } = useActions();
  const todo = useTypedSelector((state) => state.todo);
  const contentPerPage = 10;

  const {
    firstContentIndex,
    lastContentIndex,
    nextPage,
    prevPage,
    page,
    setPage,
    totalPages,
  } = usePagination({
    contentPerPage: contentPerPage,
    count: todo.length,
  });

  const randomId = Math.random() * 500;

  return (
    <div>
      <div className="new-todo-input-section fade-in">
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
      <div className="todo">
        {todo.slice(firstContentIndex, lastContentIndex).map((todo) => {
          return (
            <div key={todo.id} className="fade-in">
              <TodoItem todo={todo} />
              <hr className="hr" />
            </div>
          );
        })}
      </div>
      {todo.length > contentPerPage ? (
        <div>
          <Pagination
            nextPage={nextPage}
            prevPage={prevPage}
            page={page}
            setPage={setPage}
            totalPages={totalPages}
          />
        </div>
      ) : null}
    </div>
  );
};
export default TodoPage;

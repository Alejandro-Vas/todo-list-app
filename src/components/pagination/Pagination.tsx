interface IProps {
  nextPage: React.MouseEventHandler<HTMLButtonElement>;
  prevPage: React.MouseEventHandler<HTMLButtonElement>;
  page: number;
  setPage: any;
  totalPages: number;
}

const Pagination: React.FC<IProps> = (props) => {
  const { nextPage, prevPage, page, setPage, totalPages } = props;
  return (
    <div className="pagination">
      <p className="text">
        {page}/{totalPages}
      </p>
      <button onClick={prevPage} className={`page ${page === 1 && "disabled"}`}>
        &larr;
      </button>

      {Array.from(Array(totalPages).keys()).map((el) => (
        <button
          onClick={() => setPage(el + 1)}
          key={el}
          className={`page ${page === el + 1 ? "active" : ""}`}
        >
          {el + 1}
        </button>
      ))}
      <button
        onClick={nextPage}
        className={`page ${page === totalPages && "disabled"}`}
      >
        &rarr;
      </button>
    </div>
  );
};
export default Pagination;

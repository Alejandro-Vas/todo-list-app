import { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import useActions from "./../../hooks/useActions";
import { MainPage, TodoPage } from "pages";
import axios from "axios";

import NavBar from "components/navBar/NavBar";
import Header from "components/header/Header";

const App: React.FC = () => {
  const { setInitTodo } = useActions();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/todos?_limit=20"
      );
      setInitTodo(result.data);
    };
    fetchData();
  }, [setInitTodo]);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Router>
          <NavBar />
          <div>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="todo" element={<TodoPage />} />
              <Route path="*" element={<MainPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </div>
  );
};

export default App;

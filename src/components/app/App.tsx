import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { MainPage, TodoPage } from "pages";

import NavBar from "components/navBar/NavBar";

import "./App.scss";
import Header from "components/header/Header";

const App: React.FC = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Router>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="todo" element={<TodoPage />} />
              <Route path="*" element={<MainPage />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
};

export default App;

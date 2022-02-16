import React from "react";
import logo from "../resources/img/logo.png";

const MainPage: React.FC = () => {
  return (
    <div>
      <div>
        <div>
          <img src={logo} alt="app-logo" />
        </div>
        <h3>This is todo-list with features:</h3>
        <ul className="features-list">
          <li className="features-list__item">add todo</li>
          <li className="features-list__item">delete todo</li>
          <li className="features-list__item">edit todo</li>
        </ul>
      </div>
    </div>
  );
};

export default MainPage;

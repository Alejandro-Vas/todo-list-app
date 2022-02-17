import logo from "../resources/img/logo.png";

const MainPage: React.FC = () => {
  return (
    <div className="description">
      <div className="description__item ">
        <h2>APP FEATURES</h2>
        <ul className="features-list">
          <li className="features-list__item">
            Loading data from JSONPlaceholder
          </li>
          <li className="features-list__item">Adding todo</li>
          <li className="features-list__item">Deleting todo</li>
          <li className="features-list__item">Editing todo</li>
          <li className="features-list__item">Pagination</li>
        </ul>
      </div>
      <div className="description__item description__item_img">
        <img src={logo} alt="app-logo" />
      </div>
    </div>
  );
};

export default MainPage;

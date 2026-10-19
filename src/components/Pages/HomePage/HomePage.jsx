import Form from "./Form";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="with-nav radial-bg flex-center min-vh-100">
      <nav className="project-nav">
        <div className="project-nav__links-wrapper">
          <Link to="/">Форма добавления заявок</Link>
          <Link to="/table">Таблица с заявками</Link>
        </div>
      </nav>
      <div className="white-plate white-plate--payment">
        <div className="container-fluid">
          <div className="white-plate__header text-center">
            <p className="white-plate__logo">
              <span>Форма</span> заявок
            </p>
          </div>
          <div className="white-plate__line-between white-plate__line-between--main"></div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default HomePage;

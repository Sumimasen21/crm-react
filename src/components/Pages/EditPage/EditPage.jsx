import EditForm from "./EditForm";
import { Link } from "react-router-dom";


export default function EditPage() {
  return (
    <div className="with-nav">
      <nav className="project-nav">
        <div className="project-nav__links-wrapper">
          <Link to="/">Форма добавления заявок</Link>
          <Link to="/table">Таблица с заявками</Link>
        </div>
      </nav>

      <div className="form-wrapper">
        <div className="container-fluid">
          <div className="row justify-content-between align-items-center mb-3">
            <div className="col">
              <div className="admin-heading-1">Работа с заявкой</div>
            </div>
            <div className="col text-right">
              <Link to="/table" className="btn btn-link">
                Вернуться назад
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <EditForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import FilterForm from "./FilterForm";
import RequestsTable from "./RequestsTable";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";

export default function TablePage() {
  return (
    <div className="with-nav dashboard">
      <nav className="project-nav">
        <div className="project-nav__links-wrapper">
          <Link to="/">Форма добавления заявок</Link>
          <Link to="/table">Таблица с заявками</Link>
        </div>
      </nav>
      <SideBar />
      <div className="main-wrapper">
        <div className="container-fluid">
          <div className="admin-heading-1">Все заявки</div>
          <FilterForm />
          <RequestsTable />
        </div>
      </div>
    </div>
  );
}

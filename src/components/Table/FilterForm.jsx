import { useContext } from "react";
import { AppContext } from "../../App";
export default function FilterForm({}) {
  const { statusFilter, setStatusFilter, productFilter, setProductFilter } =
    useContext(AppContext);

  const handleStatusClick = (e, status) => {
    e.preventDefault();
    setStatusFilter(status);
  };

  return (
    <form>
      <div className="row mb-3 justify-content-start">
        <div className="col-auto">
          <div id="topStatusBar" className="btn-group" role="group">
            <button
              className={`btn ${statusFilter === "all" ? "btn-dark" : "btn-light"}`}
              onClick={(e) => handleStatusClick(e, "all")}
            >
              Все
            </button>
            <button
              className={`btn ${statusFilter === "new" ? "btn-dark" : "btn-light"}`}
              onClick={(e) => handleStatusClick(e, "new")}
            >
              Новые
            </button>
            <button
              className={`btn ${statusFilter === "inwork" ? "btn-dark" : "btn-light"}`}
              onClick={(e) => handleStatusClick(e, "inwork")}
            >
              В работе
            </button>
            <button
              className={`btn ${statusFilter === "complete" ? "btn-dark" : "btn-light"}`}
              onClick={(e) => handleStatusClick(e, "complete")}
            >
              Завершенные
            </button>
          </div>
        </div>

        <div className="col-auto ml-auto mr-3">
          <select
            className="custom-select"
            id="productSelect"
            value={productFilter}
            onChange={(e) => setProductFilter(e.target.value)}
          >
            <option value="all">Все продукты</option>
            <option value="course-html">Курс по верстке</option>
            <option value="course-js">Курс по JavaScript</option>
            <option value="course-vue">Курс по VUE JS</option>
            <option value="course-php">Курс по PHP</option>
            <option value="course-wordpress">Курс по WordPress</option>
          </select>
        </div>
      </div>
    </form>
  );
}

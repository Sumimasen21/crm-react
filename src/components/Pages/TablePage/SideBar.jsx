import { useCRM } from "../../../providers/AppProvider";
import avatar from "../../../assets/img/avatar.jpg";

export default function SideBar() {
  const { requests, statusFilter, setStatusFilter } = useCRM();

  const newRequestsCount = requests.filter(
    (req) => req.status === "new",
  ).length;
  const inWorkRequestsCount = requests.filter(
    (req) => req.status === "inwork",
  ).length;
  const completeRequestsCount = requests.filter(
    (req) => req.status === "complete",
  ).length;

  const handleFilterClick = (e, status) => {
    e.preventDefault();
    setStatusFilter(status);
  };

  return (
    <div className="left-panel blue-skin">
      <div className="left-panel__logo">
        <div className="left-panel__logo-title">CRM заявки</div>
        <div className="left-panel__logo-subtitle">
          учебный проект webcademy
        </div>
      </div>

      <div className="left-panel__user clearfix">
        <div className="left-panel__user-photo">
          <img src={avatar} alt="Avatar" />
        </div>
        <div className="left-panel__user-name">
          Скворцов <br />
          Александр
        </div>
      </div>

      <div className="left-panel__navigation">
        <div className="left-panel__navigation-title">Заявки</div>
        <ul>
          <li>
            <button
              className={statusFilter === "all" ? "active" : ""}
              onClick={(e) => handleFilterClick(e, "all")}
            >
              Все вместе
            </button>
          </li>

          <li>
            <button
              href="#"
              className={statusFilter === "new" ? "active" : ""}
              onClick={(e) => handleFilterClick(e, "new")}
            >
              Новые
              {newRequestsCount > 0 && (
                <div className="badge" id="badge-new">
                  {newRequestsCount}
                </div>
              )}
            </button>
          </li>

          <li>
            <button
              href="#"
              className={statusFilter === "inwork" ? "active" : ""}
              onClick={(e) => handleFilterClick(e, "inwork")}
            >
              В работе
              {inWorkRequestsCount > 0 && (
                <div className="badge" id="badge-inwork">
                  {inWorkRequestsCount}
                </div>
              )}
            </button>
          </li>

          <li>
            <button
              href="#"
              className={statusFilter === "complete" ? "active" : ""}
              onClick={(e) => handleFilterClick(e, "complete")}
            >
              Завершенные
              {completeRequestsCount > 0 && (
                <div className="badge" id="badge-complete">
                  {completeRequestsCount}
                </div>
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

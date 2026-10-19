import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const productsMap = {
  "course-html": "Курс по верстке",
  "course-js": "Курс по JavaScript",
  "course-vue": "Курс по VUE JS",
  "course-php": "Курс по PHP",
  "course-wordpress": "Курс по WordPress",
};

const statusMap = {
  new: { name: "Новая", class: "badge-danger" },
  inwork: { name: "В работе", class: "badge-warning" },
  complete: { name: "Завершена", class: "badge-success" },
};

export default function TableRow({ request, onDeleteRequest }) {
  const productName = productsMap[request.product] || request.product;
  const statusInfo = statusMap[request.status] || statusMap.new;

  const handleDeleteClick = (e) => {
    e.preventDefault();

    if (window.confirm("Вы действительно хотите удалить эту заявку?")) {
      toast.promise(onDeleteRequest(request.id), {
        loading: "Удаление заявки...",
        success: "Заявка успешно удалена! 🗑️",
        error: "Не удалось удалить заявку. ❌",
      });
    }
  };

  return (
    <tr>
      <th scope="row">{request.numberId}</th>
      <td>{request.date}</td>
      <td>{productName}</td>
      <td>{request.name}</td>
      <td>{request.email}</td>
      <td>{request.phone}</td>
      <td>
        <div className={`badge badge-pill ${statusInfo.class}`}>
          {statusInfo.name}
        </div>
      </td>
      <td>
        <div className="d-flex flex-column align-items-start">
          <Link to={`/edit/${request.id}`} className="mb-1">
            Редактировать
          </Link>

          <button
            onClick={handleDeleteClick}
            className="btn btn-link text-danger p-0 m-0 btn-delete-hover"
            style={{
              textDecoration: "none",
              fontSize: "13px",
              lineHeight: "1",
            }}
          >
            Удалить
          </button>
        </div>
      </td>
    </tr>
  );
}

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { API_URL } from "../../../utils/constants";
import { useCRM } from "../../../providers/AppProvider";

export default function EditForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { handleUpdateRequest, handleDeleteRequest } = useCRM();

  const [numberId, setNumberId] = useState("");
  const [date, setDate] = useState("");
  const [product, setProduct] = useState("course-html");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("new");

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Заявка не найдена на сервере");
        }
        return res.json();
      })
      .then((data) => {
        setNumberId(data.numberId);
        setDate(data.date);
        setProduct(data.product);
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone);
        setStatus(data.status);
      })
      .catch((err) => {
        console.error("Ошибка при получении заявки с сервера:", err);
        toast.error("Не удалось загрузить данные заявки ❌");
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedRequest = {
      id,
      numberId,
      date,
      product,
      name,
      email,
      phone,
      status,
    };

    toast.promise(handleUpdateRequest(updatedRequest), {
      loading: "Сохранение изменений...",
      success: () => {
        setTimeout(() => navigate("/table"), 1500);
        return "Изменения успешно сохранены! 🎉";
      },
      error: "Не удалось сохранить изменения. ❌",
    });
  };

  const handleDelete = (e) => {
    e.preventDefault();

    if (
      window.confirm("Вы действительно хотите безвозвратно удалить эту заявку?")
    ) {
      toast.promise(handleDeleteRequest(id), {
        loading: "Удаление заявки...",
        success: () => {
          setTimeout(() => navigate("/table"), 1500);
          return "Заявка была успешно удалена. 🗑️";
        },
        error: "Ошибка при удалении заявки. ❌",
      });
    }
  };

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div className="card mb-4">
        <div className="card-header">Данные о заявке</div>
        <div className="card-body">
          <div className="row mb-3">
            <div className="col-md-2">
              <strong>ID:</strong>
            </div>
            <div className="col">
              Заявка №<span id="number">{numberId}</span>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Дата создания:</strong>
            </div>
            <div className="col" id="date">
              {date}
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Продукт:</strong>
            </div>
            <div className="col">
              <select
                id="product"
                className="custom-select"
                value={product}
                onChange={(e) => setProduct(e.target.value)}
              >
                <option value="course-html">Курс по верстке</option>
                <option value="course-js">Курс по JavaScript</option>
                <option value="course-vue">Курс по VUE JS</option>
                <option value="course-php">Курс по PHP</option>
                <option value="course-wordpress">Курс по WordPress</option>
              </select>
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Имя:</strong>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Email:</strong>
            </div>
            <div className="col">
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Телефон:</strong>
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="row mb-3">
            <div className="col-md-2">
              <strong>Статус заявки:</strong>
            </div>
            <div className="col">
              <select
                className="custom-select"
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="new">Новая</option>
                <option value="inwork">В работе</option>
                <option value="complete">Завершена</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-between">
        <div className="col">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleDelete}
          >
            Удалить заявку
          </button>
        </div>
        <div className="col text-right">
          <button type="submit" className="btn btn-primary">
            Сохранить изменения
          </button>
        </div>
      </div>
    </form>
  );
}

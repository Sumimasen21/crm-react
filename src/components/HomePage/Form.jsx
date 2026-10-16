import { useState, useEffect } from "react";
import getRandomData from "../../assets/data";
import NotificationWindow from "../NotificationWindow";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("course-html");

  const { handleAddRequest } = useContext(AppContext);

  const setupRandomData = () => {
    const randomItem = getRandomData();
    setName(randomItem.name);
    setPhone(randomItem.phone);
    setEmail(randomItem.email);
    setProduct(randomItem.product);
  };

  useEffect(() => {
    setupRandomData();
  }, []);

  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddRequest({
      name,
      phone,
      email,
      product,
    });

    setupRandomData();
    setShowNotification(true);
  };

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <label>Ваши данные:</label>

        <div className="form-group">
          <input
            id="name"
            type="text"
            className="form-control"
            placeholder="Имя и Фамилия"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            id="phone"
            type="text"
            className="form-control"
            placeholder="Телефон"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            id="email"
            type="email"
            className="form-control"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="product">Продукт:</label>
          <select
            id="product"
            className="form-control"
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

        <div className="form-group">
          <button type="submit" className="btn btn-lg btn-primary btn-block">
            Оформить заявку
          </button>
        </div>
      </form>
      {showNotification && (
        <NotificationWindow
          message="Заявка успешно добавлена в CRM!"
          type="success"
          onClose={() => setShowNotification(false)}
        />
      )}
    </>
  );
}

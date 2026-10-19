import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center not-found-container">
      <div className="text-center not-found-content">
        <h1 className="not-found-title">404</h1>
        <h2 className="mb-3 not-found-subtitle">Страница не найдена</h2>
        <p className="text-muted mb-4">
          Похоже, в поисковой строке указан неверный адрес, или эта страница
          была удалена.
        </p>
        <Link to="/" className="btn btn-primary btn-lg not-found-btn">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div 
      className="d-flex flex-column align-items-center justify-content-center" 
      style={{ minHeight: "100vh", backgroundColor: "#f8f9fa", padding: "20px" }}
    >
      <div className="text-center" style={{ maxWidth: "500px" }}>
        <h1 
          style={{ 
            fontSize: "120px", 
            fontWeight: "800", 
            color: "#094071",
            lineHeight: "1" 
          }}
        >
          404
        </h1>
        <h2 className="mb-3" style={{ color: "#161d1d" }}>Страница не найдена</h2>
        <p className="text-muted mb-4">
          Похоже, в поисковой строке указан неверный адрес, или эта страница была удалена.
        </p>
        <Link to="/" className="btn btn-primary btn-lg" style={{ borderRadius: "30px" }}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
}

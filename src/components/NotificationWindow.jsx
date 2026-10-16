import { useEffect } from "react";

export default function NotificationWindow({
  message,
  type = "success",
  onClose,
}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`toast show align-items-center text-white bg-${type === "success" ? "success" : "danger"} border-0`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style={{
        position: "fixed",
        top: "80px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        minWidth: "320px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        borderRadius: "6px",
        padding: "14px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div className="toast-body mb-0" style={{ fontWeight: "500" }}>
          {message}
        </div>
        <button
          type="button"
          className="btn-close btn-close-white ms-auto"
          onClick={onClose}
          style={{
            background: "none",
            border: "none",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
            paddingLeft: "10px",
          }}
        >
          ×
        </button>
      </div>
    </div>
  );
}

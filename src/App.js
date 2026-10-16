import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import { HomePage, RequestsTablePage, RequestEditPage } from "./functions";

const API_URL = "https://react-server-cl5d.onrender.com/applications";

export const AppContext = createContext(null);

function App() {
  const [requests, setRequests] = useState([]);
  const [statusFilter, setStatusFilter] = useState(() => {
    return localStorage.getItem("crm_status_filter") || "all";
  });
  const [productFilter, setProductFilter] = useState(() => {
    return localStorage.getItem("crm_product_filter") || "all";
  });

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setRequests(data))
      .catch((err) => console.error("Ошибка загрузки данных:", err));
  }, []);
  useEffect(() => {
    localStorage.setItem("crm_status_filter", statusFilter);
  }, [statusFilter]);
  useEffect(() => {
    localStorage.setItem("crm_product_filter", productFilter);
  }, [productFilter]);

  const handleAddRequest = (newRequestData) => {
    let nextId = 1;
    if (requests.length > 0) {
      const ids = requests
        .map((req) => Number(req.numberId))
        .filter((id) => !isNaN(id));
      nextId = ids.length > 0 ? Math.max(...ids) + 1 : 1;
    }

    const newRequest = {
      ...newRequestData,
      numberId: nextId,
      date: new Date().toLocaleDateString("ru-RU"),
      status: "new",
    };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRequest),
    })
      .then((res) => res.json())
      .then((createdRequest) => {
        setRequests([...requests, createdRequest]);
      });
  };

  const handleUpdateRequest = (updatedRequest) => {
    fetch(`${API_URL}/${updatedRequest.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRequest),
    })
      .then((res) => res.json())
      .then((data) => {
        setRequests(requests.map((req) => (req.id === data.id ? data : req)));
      })
      .catch((err) => console.error("Ошибка при обновлении заявки:", err));
  };

  const handleDeleteRequest = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          setRequests(requests.filter((req) => req.id !== id));
        }
      })
      .catch((err) => console.error("Ошибка при удалении заявки:", err));
  };

  return (
    <AppContext.Provider
      value={{
        requests,
        handleAddRequest,
        handleUpdateRequest,
        handleDeleteRequest,
        statusFilter,
        setStatusFilter,
        productFilter,
        setProductFilter,
      }}
    >
      <Router basename="/crm-react">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/table" element={<RequestsTablePage />} />
          <Route path="/edit/:id" element={<RequestEditPage />} />
        </Routes>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

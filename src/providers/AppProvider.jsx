import { createContext, useContext, useState, useEffect, useMemo } from "react";
import { API_URL } from "../utils/constants";
const AppContext = createContext(null);

export function AppProvider({ children }) {
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

    return fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newRequest),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка сервера"); // Если сервер ответил ошибкой (например, 500)
        return res.json();
      })
      .then((createdRequest) => {
        setRequests([...requests, createdRequest]);
        return createdRequest;
      });
  };

  const handleUpdateRequest = (updatedRequest) => {
    return fetch(`${API_URL}/${updatedRequest.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedRequest),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка при обновлении на сервере");
        return res.json();
      })
      .then((data) => {
        setRequests(requests.map((req) => (req.id === data.id ? data : req)));
        return data;
      })
      .catch((err) => {
        console.error("Ошибка при обновлении заявки:", err);
        throw err;
      });
  };

  const handleDeleteRequest = (id) => {
    return fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка при удалении на сервере");
        setRequests(requests.filter((req) => req.id !== id));
      })
      .catch((err) => {
        console.error("Ошибка при удалении заявки:", err);
        throw err;
      });
  };

  const contextValue = useMemo(
    () => ({
      requests,
      handleAddRequest,
      handleUpdateRequest,
      handleDeleteRequest,
      statusFilter,
      setStatusFilter,
      productFilter,
      setProductFilter,
    }),
    [requests, statusFilter, productFilter],
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useCRM() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useCRM должен использоваться внутри AppProvider");
  }
  return context;
}

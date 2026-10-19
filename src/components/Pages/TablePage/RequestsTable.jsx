import TableRow from "./TableRow";
import { useCRM } from "../../../providers/AppProvider";
import { useMemo } from "react";

export default function RequestsTable() {
  const { requests, statusFilter, productFilter, handleDeleteRequest } =
    useCRM();

  const filteredRequests = useMemo(() => {
    return requests.filter((req) => {
      const matchStatus = statusFilter === "all" || req.status === statusFilter;
      const matchProduct =
        productFilter === "all" || req.product === productFilter;
      return matchStatus && matchProduct;
    });
  }, [requests, statusFilter, productFilter]);

  if (filteredRequests.length === 0) {
    return (
      <div className="text-center my-5 p-5 bg-light rounded border">
        <h4 className="mb-2">Заявок не найдено 📋</h4>
        <p className="mb-0 fs-14">
          {requests.length === 0
            ? "В базе CRM ещё нет ни одной созданной заявки."
            : "Нет заявок, соответствующих выбранным фильтрам статуса или продукта."}
        </p>
      </div>
    );
  }

  return (
    <table className="table fs-14">
      <thead>
        <tr>
          <th>ID</th>
          <th>дата</th>
          <th>продукт</th>
          <th>имя</th>
          <th>email</th>
          <th>телефон</th>
          <th>статус</th>
          <th></th>
        </tr>
      </thead>
      <tbody id="tbody">
        {filteredRequests.map((request) => (
          <TableRow
            key={request.id}
            request={request}
            onDeleteRequest={handleDeleteRequest}
          />
        ))}
      </tbody>
    </table>
  );
}

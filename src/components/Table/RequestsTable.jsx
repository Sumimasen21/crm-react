import TableRow from "./TableRow";
import { useContext } from "react";
import { AppContext } from "../../App";

export default function RequestsTable() {
  const { requests, statusFilter, productFilter, handleDeleteRequest } =
    useContext(AppContext);

  const filteredRequests = requests.filter((req) => {
    const matchStatus = statusFilter === "all" || req.status === statusFilter;
    const matchProduct =
      productFilter === "all" || req.product === productFilter;
    return matchStatus && matchProduct;
  });

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

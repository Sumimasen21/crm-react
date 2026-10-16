import FilterForm from "./FilterForm";
import RequestsTable from "./RequestsTable";

export default function TablePage() {
  return (
    <div className="main-wrapper">
      <div className="container-fluid">
        <div className="admin-heading-1">Все заявки</div>
        <FilterForm />
        <RequestsTable />
      </div>
    </div>
  );
}

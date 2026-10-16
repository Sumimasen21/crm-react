import Navigation from "./components/Navigation";
import Card from "./components/HomePage/Card";
import Sidebar from "./components/Table/SideBar";
import TablePage from "./components/Table/TablePage";
import EditPage from "./components/Edit/EditPage";

function HomePage() {
  return (
    <div className="with-nav radial-bg flex-center min-vh-100">
      <Navigation />
      <Card />
    </div>
  );
}

function RequestsTablePage() {
  return (
    <div className="with-nav dashboard">
      <Navigation />
      <Sidebar />
      <TablePage />
    </div>
  );
}

function RequestEditPage() {
  return (
    <div className="with-nav">
      <Navigation />
      <EditPage />
    </div>
  );
}

export { HomePage, RequestsTablePage, RequestEditPage };

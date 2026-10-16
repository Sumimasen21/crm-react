import Navigation from "./components/Navigation";
import Card from "./components/HomePage/Card";
import Sidebar from "./components/Table/SideBar";
import TablePage from "./components/Table/TablePage";
import EditPage from "./components/Edit/EditPage";
import useBodyClass from "./assets/hooks/useBodyClass";

function HomePage() {
  useBodyClass("with-nav radial-bg flex-center");
  return (
    <>
      <Navigation />
      <Card />
    </>
  );
}

function RequestsTablePage() {
  useBodyClass("with-nav body--dashboard");

  return (
    <>
      <Navigation />
      <Sidebar />
      <TablePage />
    </>
  );
}

function RequestEditPage() {
  useBodyClass("with-nav");
  return (
    <>
      <Navigation />
      <EditPage />
    </>
  );
}

export { HomePage, RequestsTablePage, RequestEditPage };

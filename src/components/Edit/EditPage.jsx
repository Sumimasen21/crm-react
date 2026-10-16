import EditHeader from "./EditHeader";
import EditForm from "./EditForm";

export default function EditPage() {
  return (
    <div className="form-wrapper">
      <div className="container-fluid">
        <EditHeader />
        <div className="row">
          <div className="col">
            <EditForm />
          </div>
        </div>
      </div>
    </div>
  );
}

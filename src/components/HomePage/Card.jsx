import Header from "./Header";
import Form from "./Form";

const Card = () => {
  return (
    <div className="white-plate white-plate--payment">
      <div className="container-fluid">
        <Header />
        <div className="white-plate__line-between white-plate__line-between--main"></div>
        <Form />
      </div>
    </div>
  );
};

export default Card;

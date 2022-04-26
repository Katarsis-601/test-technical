import { Link } from "react-router-dom";

export default function CardList(props) {
  return (
    <div className="card">
      <div className="img-title">
        <img src={props.image} alt="restaurant image" />
        <h4 className="restaurant-title">{props.name}</h4>
      </div>
      <div className="rating">
        <p>{props.reviews}</p>
      </div>
      <div className="status-type">
        <div className="type-cost">
          <p className="type">{props.restType}</p>
          <p className="cost">{props.cost}</p>
        </div>
        <p className="status">tes</p>
      </div>
      <Link
        to={`/detail/:${props.name}`}
        className="detail"
        children="Learn More"
      />
    </div>
  );
}

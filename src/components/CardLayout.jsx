import { Link } from "react-router-dom";
import { valueContext } from "./api-context";
export default function CardList(props) {
  return (
    <div className="card">
      <div className="img-title">
        <img src={props.image} alt={props.imgid} />
        <h4 className="restaurant-title">{props.name}</h4>
      </div>
      <div className="rating">
        <p>Reviews : {props.reviews}</p>
      </div>
      <div className="status-type">
        <div className="type-cost">
          <p className="type">{props.restType}</p>
          <p className="cost">cost : from {props.cost}</p>
        </div>
        <p className="status">
          Parking :{" "}
          {props.parking.toString() === "true" ? "Available" : "Not Available"}
        </p>
      </div>
      <Link
        to={`/detail/${props.name}`}
        state={{ data: props.data }}
        className="detail"
      >
        Learn More
      </Link>
    </div>
  );
}

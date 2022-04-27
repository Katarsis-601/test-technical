import { Link, useLocation } from "react-router-dom";
export default function Detail() {
  const location = useLocation();
  const data = location.state.data;
  console.log(data);
  return (
    <div className="App">
      <div className="content-detail">
        <img src={data.image} alt={data.imageId} />
        <h4>{data.businessname}</h4>
        <p>Restaurant Type : {data.restauranttype}</p>
        <p>Location : {data.address}</p>
        <p>Phone : {data.phone}</p>
        <p>reviews : {data.reviews}</p>
        <Link to="/" children="Back" className="back-btn" />
      </div>
    </div>
  );
}

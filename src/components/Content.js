import { useEffect, useState } from "react";
import CardList from "./CardLayout";

export default function Content() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const dataAPI = async () => {
      const response = await fetch(
        "https://foodbukka.herokuapp.com/api/v1/restaurant"
      );
      const jsonData = await response.json();
      setData(jsonData.Result);
    };
    dataAPI();
    console.log(data);
  }, []);
  return (
    <div className="content">
      <h2 className="title">All Restaurant</h2>
      <div className="restaurant-list">
        {data.map((data) => {
          return (
            <CardList
              name={data.businessname}
              image={data.image}
              reviews={data.reviews}
              restType={data.restauranttype}
              cost={data.averagecost}
            />
          );
        })}
      </div>
    </div>
  );
}

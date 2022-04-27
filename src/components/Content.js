import { useEffect, useState } from "react";
import CardList from "./CardLayout";
import { useContext } from "react";
import { dataContext } from "./api-context";

export default function Content() {
  const context = useContext(dataContext);
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(3);

  useEffect(() => {
    const dataAPI = async () => {
      const response = await fetch(context.api);
      const jsonData = await response.json();
      setData(jsonData.Result);
    };
    dataAPI();
  }, [context.api]);
  return (
    <>
      <div className="content">
        <h2 className="title">All Restaurant</h2>
        <div className="restaurant-list">
          {data.slice(0, load).map((data) => {
            return (
              <CardList
                key={data.id}
                imgid={data.imageId}
                name={data.businessname}
                image={data.image}
                reviews={data.reviews}
                restType={data.restauranttype}
                cost={data.averagecost}
                parking={data.parkinglot}
                data={data}
              />
            );
          })}
        </div>
        <button
          className="loadMore"
          onClick={() => {
            setLoad(load + 3);
          }}
        >
          Load More
        </button>
      </div>
    </>
  );
}

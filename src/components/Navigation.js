import React, { createContext, useEffect, useRef, useState } from "react";
import { dataContext } from "./api-context";
import Content from "./Content";
import { useContext } from "react";
export default function Nav() {
  const context = useContext(dataContext);
  const parkingFilter = useRef(null);
  const priceFilter = useRef(null);
  const categories = useRef(null);

  const filterByParking = () => {
    context.setApi(
      `https://foodbukka.herokuapp.com/api/v1/restaurant?parkinglot=true`
    );
  };
  const clearFilter = () => {
    parkingFilter.current.checked = false;
    context.setApi("https://foodbukka.herokuapp.com/api/v1/restaurant");
  };
  return (
    <>
      <div className="navigation">
        <div className="filter">
          <h6>Filter By:</h6>
          <div className="parking-status">
            <input
              type="radio"
              name="parking"
              onClick={filterByParking}
              ref={parkingFilter}
            />
            <label htmlFor="parking">Parking Available</label>
          </div>
          <select ref={priceFilter} className="priceFilter">
            <option
              value="https://foodbukka.herokuapp.com/api/v1/restaurant"
              onClick={() => {
                context.setApi(priceFilter.current.value);
              }}
            >
              Price
            </option>
            <option
              value="https://foodbukka.herokuapp.com/api/v1/restaurant?averagecost=700"
              onClick={() => {
                context.setApi(priceFilter.current.value);
              }}
            >
              Less than or equal 700
            </option>
            <option
              value="https://foodbukka.herokuapp.com/api/v1/restaurant?averagecost%3E700"
              onClick={() => {
                context.setApi(priceFilter.current.value);
              }}
            >
              More than 700
            </option>
          </select>
          <select ref={categories} className="categoriesFilter">
            <option
              value="https://foodbukka.herokuapp.com/api/v1/restaurant"
              onClick={() => {
                context.setApi(categories.current.value);
              }}
            >
              Categories
            </option>
            <option
              value="https://foodbukka.herokuapp.com/api/v1/restaurant?restauranttype=bukka"
              onClick={() => {
                context.setApi(categories.current.value);
              }}
            >
              bukka
            </option>
            <option
              value="https://foodbukka.herokuapp.com/api/v1/restaurant?restauranttype=eatery"
              onClick={() => {
                context.setApi(categories.current.value);
              }}
            >
              eatery
            </option>
            <option
              value="https://foodbukka.herokuapp.com/api/v1/restaurant?restauranttype=canteen"
              onClick={() => {
                context.setApi(categories.current.value);
              }}
            >
              canteen
            </option>
          </select>
        </div>
        <button className="clear-now" onClick={clearFilter}>
          Clear Now
        </button>
      </div>
    </>
  );
}

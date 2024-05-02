import React from "react";
import { fetchDataCar } from "../api/FetchDataOfCar";
async function FetchDataComp() {
  const res = await fetchDataCar();
  return (
    <div>
      {res.map((car) => (
        <div key={car._id}>
          <p>{car.name}</p>
          <img src={car.image} alt="" />
          <hr />
        </div>
      ))}
    </div>
  );
}

export default FetchDataComp;

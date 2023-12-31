import axios from "axios";
import React, { useEffect, useState } from "react";

const Fruits = () => {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    axios({
      method: "GET",
      url: "/server/fruits",
    }).then((res) => {
      console.log("response data", res);
      setFruits(res.data);
    });
  }, []);

  return (
    <div>
      Show all fruits here:
      <ul>
        {fruits.map((fruit) => {
          return (
            <li key={fruit.name}>
              <p>{fruit.name}</p>
              <p>{fruit.color}</p>
              <p>{fruit.readyToEat}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Fruits;

import axios from "axios";
import React, { useEffect, useState } from "react";

const Veggies = () => {
  // state (to keep track of veggies)
  const [veggies, setVeggies] = useState([]);
  // useEffect (to make request for veggies)
  useEffect(() => {
    axios({
      method: "GET",
      url: "/server/veggies",
    }).then((res) => {
      console.log("response data", res.data);
      setVeggies(res.data);
    });
  }, []);

  return (
    <div>
      {/* {map to show veggies} */}
      {veggies.map((veggie) => {
        return <div key={veggie._id}>{veggie.name}</div>;
      })}
    </div>
  );
};

export default Veggies;

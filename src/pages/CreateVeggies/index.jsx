import axios from "axios";
import React, { useState } from "react";

const CreateVeggies = () => {
  // state with name
  const [veggieData, setVeggieData] = useState({
    name: "",
    color: "",
    readyToEat: false,
    age: 0,
    isHealthy: false,
  });
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!veggieData.name || !veggieData.color) {
      setError("404 not found");
      return;
    }
    console.log(veggieData);
    axios({
      method: "POST",
      url: "/server/veggies",
      data: veggieData, // YOU WILL FIND THIS DATA IN ***req.body*** OF THE ROUTE
    }).then((response) => {
      console.log(response);
      setVeggieData({
        name: "",
        color: "",
        readyToEat: false,
        age: 0,
        isHealthy: false,
      });
      setError("");
    });
  };
  // handleSubmit that will post
  return (
    <div>
      {/* input */}
      <div>
        <h1>New Veggie page</h1>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={veggieData.name}
            onChange={(e) =>
              setVeggieData({ ...veggieData, name: e.target.value })
            }
          />
          <br />
          Color:{" "}
          <input
            type="text"
            name="color"
            value={veggieData.color}
            onChange={(e) =>
              setVeggieData({ ...veggieData, color: e.target.value })
            }
          />
          <br />
          Is Ready To Eat:{" "}
          <input
            type="checkbox"
            name="readyToEat"
            value={veggieData.readyToEat}
            onChange={(e) =>
              setVeggieData({
                ...veggieData,
                readyToEat: !veggieData.readyToEat,
              })
            }
          />
          <br />
          Age:
          <input
            type="number"
            name="age"
            value={veggieData.age}
            onChange={(e) =>
              setVeggieData({ ...veggieData, age: +e.target.value })
            }
          />
          <br />
          Is Ready To Eat:{" "}
          <input
            type="checkbox"
            name="isHealthy"
            value={veggieData.isHealthy}
            onChange={(e) =>
              setVeggieData({
                ...veggieData,
                isHealthy: !veggieData.isHealthy,
              })
            }
          />
          <br />
          <button>Create Fruit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateVeggies;

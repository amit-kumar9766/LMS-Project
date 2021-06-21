import React, { useEffect, useState } from "react";
import axios from "axios";
import { Signup } from "./Authentication/Signup";

const App = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/user`);
      if (response?.data) {
        setData(response?.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="app">
      <Signup />
      {data}
    </div>
  );
};

export default App;

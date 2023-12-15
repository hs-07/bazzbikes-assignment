import React, { useEffect } from "react";
import { Table, Search } from "./components";
import { GetData } from "./middleware/api";

const App = () => {
  const getDummyData = async () => {
    try {
      const res = await GetData();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      await getDummyData();
    };
    loadData();
  });

  return (
    <div>
      <Search />
      <Table />
    </div>
  );
};

export default App;

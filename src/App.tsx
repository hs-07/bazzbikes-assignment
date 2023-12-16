import React, { useEffect, useState } from "react";

import { Table, Search } from "./components";
import { GetData } from "./middleware/api";
import { DataType } from "./types";

const App = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getDummyData = async () => {
    try {
      const res = await GetData();
      if (res.statusCode === 200) {
        const dataArray: DataType[] = JSON.parse(res.body);
        setData(dataArray);
        setIsLoading(false);
        console.log(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadData = async () => {
      getDummyData();
    };

    loadData();
  }, []);

  return (
    <div className="flex items-center flex-col">
      <Search />
      {isLoading ? <p>Loading...</p> : <Table rows={data} />}
    </div>
  );
};

export default App;

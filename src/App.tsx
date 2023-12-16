import React, { useEffect, useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Table, Search } from "./components";
import { GetData } from "./middleware/api";
import { DataType } from "./types";

const App = () => {
  const [data, setData] = useState<DataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredData, setFilteredData] = useState<DataType[]>([]);

  const getDummyData = async () => {
    try {
      const res = await GetData();
      if (res.statusCode === 200) {
        const dataArray: DataType[] = JSON.parse(res.body);
        setFilteredData(dataArray);
        setData(dataArray);
        setIsLoading(false);
      } else {
        toast.warning("Unable to load data");
      }
    } catch (error) {
      toast.error("Error");
    }
  };

  const handleSearch = (searchTerm: string) => {
    const filtered = data.filter((item) =>
      String(item.id).toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    const loadData = async () => {
      getDummyData();
    };

    loadData();
  }, []);

  return (
    <div className="flex items-center flex-col">
      <Search onSearch={handleSearch} />
      {isLoading ? <p>Loading...</p> : <Table rows={filteredData} />}
      <ToastContainer />
    </div>
  );
};

export default App;

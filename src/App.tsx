import React from "react";
import "./App.css";
import { useTags } from "./api/api";
import DataTable from "./components/DataTable";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const { data, isLoading, isError } = useTags();

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <Error message="An error occurred while fetching data. Please try again later." />
    );
  if (!data) return <Error message="Data is null or undefined!" />;

  return (
    <div className="App">
      <h1>Stackoverflow Tags Viewer</h1>
      <DataTable data={data} />
    </div>
  );
}

export default App;

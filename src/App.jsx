import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  const [ searchText,setSearchText]= useState({});
  return (
    <div className="grid-container">
      <Header />
      <Sidebar data={setSearchText}/>
      <Home data={searchText}/>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Timeline from './dashboard/timeline/Timeline';
import PieChart from "./dashboard/PieChart";

import './App.css';

function App() {
  const [data, setData] = useState();
  const isLoading = !data || data.length < 1;

  useEffect(() => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => data.expense.sort((a, b) => 
          a.date.localeCompare(b.date, undefined, {numeric: true, sensitivity: 'base'})
        ))
        .then(data => setData(data))
}, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Timeline data={data} isLoading={isLoading}/>} />
        <Route path="details" element={<PieChart data={data} isLoading={isLoading}/>} />
      </Routes>
    </div>
  );
}

export default App;

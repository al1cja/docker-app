import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Timeline from './dashboard/timeline/Timeline';
import PieChart from "./dashboard/PieChart";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Timeline/>} />
        <Route path="details" element={<PieChart />} />
      </Routes>
    </div>
  );
}

export default App;

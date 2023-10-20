import React from "react";
import {  Routes,  Route   } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import Header from './components/dashboard/Header'
import './assests/style.css';


function App() {

  

  return (
    <div className="App">
      <Header></Header>
      <Dashboard></Dashboard>
      
    <Routes>
      <Route path="Dashboard" element={Dashboard} />
    </Routes>

    </div>
  );
}

export default App;

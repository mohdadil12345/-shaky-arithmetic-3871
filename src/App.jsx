import React from 'react';
import Navbar from './components/Navbar';


import "../src/App.css"
import AllRoutes from './components/AllRoutes';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div>
      <Navbar />
      <Dashboard/>
      <AllRoutes/>

    </div>
  );
}

export default App;

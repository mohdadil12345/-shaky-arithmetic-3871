import React from 'react';
import Navbar from './components/Navbar';


import "../src/App.css"
import AllRoutes from './components/AllRoutes';
import Dashboard from './components/Dashboard';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Dashboard/>
      <AllRoutes/>
      <Footer/>
      <Toaster/>

    </div>
  );
}

export default App;

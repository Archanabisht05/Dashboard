import '../App.css';
import Sidebar from './Sidebar'
import React from 'react'
import { Routes, Route} from "react-router-dom";
import Dashboard from '../Pages/Dashboard'
import UserProfile from '../Pages/UserProfile'

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>

    </>
  );
}

export default App;

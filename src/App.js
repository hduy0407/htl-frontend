import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Booking from "./app/Book";
import About from "./app/About";
import Login from "./app/Login";
import Register from "./app/Register";
import AdminPage from "./app/AdminPage";
import StaffPage from "./app/StaffPage";
import ConfirmationPage from "./app/ConfirmationPage";


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminpage" element={<AdminPage />} />
          <Route path="/staffpage" element={<StaffPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
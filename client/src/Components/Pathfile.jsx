import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import BookNow from "../Pages/BookNow/BookNow";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignIn";
import OTP from "../Pages/Verification/Verification";

export default function () {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/booknow" element={<BookNow />}></Route>
          <Route exact path="/login" element={<LogIn />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/otp" element={<OTP />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

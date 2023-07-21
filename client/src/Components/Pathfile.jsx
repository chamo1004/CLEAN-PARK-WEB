import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import AboutUs from "../Pages/About/Aboutmain";
import BookNow from "../Pages/BookNow/BookNow";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignIn";
import Verification from "../Pages/Verification/Verification";
import Profile01 from "../Pages/Profile/Profile01/Profile01";


export default function () {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/aboutus" element={<AboutUs />}></Route>
          <Route exact path="/booknow" element={<BookNow />}></Route>
          <Route exact path="/login" element={<LogIn />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/verification" element={<Verification />}></Route>
          <Route exact path="/profile01" element={<Profile01 />}></Route>
        
        </Routes>
      </Router>
    </div>
  );
}

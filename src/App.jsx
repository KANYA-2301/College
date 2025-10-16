import React from "react";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/NavigationBar.jsx";

import Faculty from "./pages/Faculty";
import FacultyDetail from "./pages/FacultyDetail";
import Contact from "./pages/Contact";
import HowToApply from "./pages/HowToApply";
import Blog from "./pages/Blog";
import SinglePost from "./pages/SinglePost";
import Teachers from "./pages/Teachers";
import ErrorPage from "./pages/Error";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Academics from "./pages/Academics.jsx";
import AcademicDetail from "./pages/ACademicDetail.jsx";

const App = () => {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/academic-detail" element={<AcademicDetail />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/faculty-detail" element={<FacultyDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how-to-apply" element={<HowToApply />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/single-post" element={<SinglePost />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;

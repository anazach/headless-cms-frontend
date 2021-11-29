import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/nav/Navbar";
import Frontpage from "./views/frontpage/Frontpage";
import Projects from "./views/projects/Projects";
import ProjectPage from "./views/projects/ProjectPage";
import Career from "./views/career/Career";
import About from "./views/about/About";
import Blog from "./views/blog/Blog";
import ContactPage from "./views/contact/ContactPage";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<Frontpage />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/projects/:id" element={<ProjectPage />} />
      <Route path="/career" element={<Career />} />
      <Route exact path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  </Router>
);
export default App;

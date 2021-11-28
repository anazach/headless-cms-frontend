import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Frontpage from './views/frontpage/Frontpage';
import About from './views/about/About';
import Projects from './views/projects/Projects'
import ProjectPage from './views/projects/ProjectPage'
import ContactPage from './views/contact/ContactPage'
import Blog from './views/blog/Blog'
import Career from './views/career/Career'

    const App = () => (
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Frontpage/>}/> 
          <Route  path="/projects" element={<Projects/>}/>
          <Route  path="/projects/:id" element={<ProjectPage/>}/>
          <Route exact path="/about" element={<About/>}/> 
          <Route  path="/contact" element={<ContactPage/>}/>
          <Route  path="/blog" element={<Blog/>}/>
          <Route  path="/career" element={<Career/>}/>
        </Routes>
      </Router>
    );
    export default App;
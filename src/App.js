import { NavBar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.css';
import {Footer} from './components/pages/Footer'
import {ProjectGallery} from './components/pages/ProjectGallery'
import {Contact} from './components/pages/Contact'
import {Banner} from './components/Banner'

function App() {
  return (
    <Router>
    <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Banner />} />
      <Route path="project-gallery" element={<ProjectGallery/>} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer/>
    </div>
   </Router>
   

  );
}


export default App;

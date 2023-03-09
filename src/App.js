import { NavBar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.css';
import {Footer} from './components/pages/Footer'
import {ProjectGallery} from './components/pages/ProjectGallery'
import {Contact} from './components/pages/Contact'
import {Banner} from './components/Banner'
import {CV} from './components/pages/CV';

function App() {
  return (
    <Router>
    <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Banner />} />
      <Route path="project-gallery" element={<ProjectGallery/>} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cv" element={<CV/>}/>
    </Routes>
    <Footer/>
    </div>
   </Router>
   

  );
}


export default App;

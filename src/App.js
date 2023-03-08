import { NavBar } from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/styles.css';
import {Home} from './components/pages/Home'
import {ProjectGallery} from './components/pages/ProjectGallery'
import {Contact} from './components/pages/Contact'
import {Banner} from './components/Banner'

function App() {
  return (
   <>
   <Router>
   <div>
   <NavBar/>
   <Banner/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="project-gallery" element={<ProjectGallery />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
    </div>
   </Router>
   
   

    
   </>
  );
}


export default App;

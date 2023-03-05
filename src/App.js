import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import ProjectGallery from './components/pages/ProjectGallery';
import Research from './components/pages/Research';
import './styles/style.css'

function App() {
  return (
    <Router> {/* Main Router that wraps everything */ }
      <div>
      <NavTabs/>
        {/* Insert Nav tabs component here inside the Router but outside of the Routes */}
        <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/project-gallery" element={<ProjectGallery/>} />
        <Route path="/research" element={<Research/>} />
        {/* Define routes using the route component to render different pages */ }
        {/* Define default route that will render home component */}
        </Routes>
      </div>
    </Router>
  
  );
}

export default App;

import { NavLink} from "react-router-dom";


function NavTabs() {
    return(
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}> Home </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="project-gallery" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Project Gallery</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="research" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Research</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="contact" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link' }>Contact</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="social-media" className={({isActive}) => isActive ? 'nav-link active' : 'nav-link' }>Social Media</NavLink>
            </li>
        </ul>
    )
}


export default NavTabs
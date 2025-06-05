import logo from "../../assets/logo.png"
import "./Header.scss"
import { NavLink, useLocation } from "react-router-dom"
import { Link } from 'react-router-dom'

function Header () {
    const location = useLocation()
    function setIsActive(event) {
        document.querySelectorAll("nav a").forEach(element => {
            element.classList.remove('active');
        });
        event.target.classList.add('active');
    } 

    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo"/>
            <nav className="link">
                {location.pathname !== '/' && (
                    <NavLink to="/">
                        Accueil
                    </NavLink>
                )}
                <a href="/#about" onClick={setIsActive}>
                À propos
                </a>
                <NavLink to="/project" className={({ isActive }) => isActive ? "active" : ""}>
                    Projets
                </NavLink>
                <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>
                    Compétences
                </NavLink>
                <a href="/#contact" onClick={setIsActive}>
                Me contacter
                </a>
            </nav>
        </header>
    )
}

export default Header
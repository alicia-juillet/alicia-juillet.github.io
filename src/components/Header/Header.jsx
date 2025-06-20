import { useState } from "react"
import logo from "../../assets/logo.webp"
import "./Header.scss"

function Header () {
    const [isOpen, setIsOpen] = useState(false)

    function setIsActive(event) {
        document.querySelectorAll("nav a").forEach(element => {
            element.classList.remove('active');
        });
        event.target.classList.add('active');
        setIsOpen(false)
    } 

    function logoClick() {
        document.querySelectorAll("nav a").forEach(element => {
            element.classList.remove('active');
        });
        window.scrollTo({ top:0, behavior: 'smooth'})
        window.history.pushState(null, '', '/')
        setIsOpen(false)
    }

    return (
        <header className="header">
            <img src={logo} alt="Alicia Juillet développeuse web" className="logo" onClick={logoClick}/>

            <div className={`burger ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={`link ${isOpen ? "open" : ""}`}>
                <a href="#about" onClick={setIsActive}>
                À propos
                </a>
                <a href="#projects" onClick={setIsActive}>
                Projets
                </a>
                <a href="#skills" onClick={setIsActive}>
                Compétences
                </a>
                <a href="#footer" onClick={setIsActive}>
                Me contacter
                </a>
            </nav>
        </header>
    )
}

export default Header
import logo from "../../assets/logo.png"
import "./Header.scss"

function Header () {
    function setIsActive(event) {
        document.querySelectorAll("nav a").forEach(element => {
            element.classList.remove('active');
        });
        event.target.classList.add('active');
    } 

    function logoClick() {
        document.querySelectorAll("nav a").forEach(element => {
            element.classList.remove('active');
        });
        window.scrollTo({ top:0, behavior: 'smooth'})
        window.history.pushState(null, '', '/')
    }

    return (
        <header className="header">
            <img src={logo} alt="logo" className="logo" onClick={logoClick}/>
            <nav className="link">
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
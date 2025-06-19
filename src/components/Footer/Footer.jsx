import "./Footer.scss"

function Footer() {
    return(
        <section id="footer">
            <h2>Me contacter</h2>
            <div className="contact-content">
                <div className="contact-item">
                    <i className="fas fa-envelope"></i>
                    <p>aliciajuillet0409@gmail.com</p>
                </div>
                <div className="contact-item">
                    <i className="fa-solid fa-mobile-screen"></i>
                    <p>+33 6 73 66 11 83</p>
                </div>
                <div className="contact-item">
                    <i className="fa-brands fa-linkedin"></i>
                    <a href="linkedin">www.linkedin.com/in/alicia-juillet</a>
                </div>
            </div>
        </section>
    )
}
export default Footer
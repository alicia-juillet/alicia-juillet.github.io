import "./Skills.scss"
import accessibilityImg from "../../assets/accessibility.png"
import seoImg from "../../assets/seo.png"

function Skills() {
    return (
        <section id="skills">
            <h2>Mes compétences</h2>
            <div className="skills-category">
                <h3>Frontend</h3>
                <div className="skills-icons">
                    <i className="devicon-html5-plain colored" title="HTML5"></i>
                    <i className="devicon-css3-plain colored"title="CSS3"></i>
                    <i className="devicon-javascript-plain colored"title="JavaScript"></i>
                    <i className="devicon-react-plain colored"title="React"></i>   
                </div>
            </div>
            <div className="skills-category">
                <h3>Backend</h3>
                <div className="skills-icons">
                    <i className="devicon-nodejs-plain colored" title="Node.js"></i>
                    <i className="devicon-express-original colored" title="Express.js"></i>
                    <i className="devicon-mongodb-plain colored" title="MongoDB"></i>
                </div>
            </div>
            <div className="skills-category">
                <h3>Outils d'assistance & de productivité</h3>
                <div className="skills-icons">
                    <i className="devicon-git-plain colored" title="Git"></i>
                    <i className="devicon-github-original colored" title="GitHub"></i>
                    <i className="devicon-vscode-plain colored" title="VS Code"></i>
                    🧠 ChatGPT (optimisation, génération de code, reformulation, veille technique)
                </div>
            </div>
            <div className="skills-category">
                <h3>Autres compétences</h3>
                <div className="skills-icons">
                    <img src={accessibilityImg} alt="accessibility"/>
                    <img src={seoImg} alt="seo"/> 
                </div>
            </div>   
        </section>
    )
}

export default Skills;
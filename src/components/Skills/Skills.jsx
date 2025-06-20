import "./Skills.scss"
import accessibilityImg from "../../assets/accessibility.webp"
import seoImg from "../../assets/seo.webp"

function Skills() {
    return (
        <section id="skills">
            <h2>Mes compétences</h2>
            <div className="skills-category">
                <div className="skills-content">
                    <h3>Frontend</h3>
                    <div className="skills-icons">
                        <i className="devicon-html5-plain colored" title="HTML5"></i>
                        <i className="devicon-css3-plain colored"title="CSS3"></i>
                        <i className="devicon-javascript-plain colored"title="JavaScript"></i>
                        <i className="devicon-react-plain colored"title="React"></i> 
                        <i className="devicon-sass-plain colored" title="SASS"></i>  
                    </div>
                </div>
           
                <div className="skills-content">
                    <h3>Backend</h3>
                    <div className="skills-icons">
                        <i className="devicon-nodejs-plain colored" title="Node.js"></i>
                        <i className="devicon-express-original" title="Express.js"></i>
                        <i className="devicon-mongodb-plain colored" title="MongoDB"></i>
                    </div>
                </div>
           
                <div className="skills-content">
                    <h3>Outils d'assistance & de productivité</h3>
                    <div className="skills-icons">
                        <i className="devicon-git-plain colored" title="Git"></i>
                        <i className="devicon-github-original" title="GitHub"></i>
                        <i className="devicon-vscode-plain colored" title="VS Code"></i>
                        
                    </div>
                </div>

                <div className="skills-content">
                    <h3>Autres compétences</h3>
                    <div className="skills-icons">
                        <img src={accessibilityImg} alt="accessibility"/>
                        <img src={seoImg} alt="seo"/> 
                    </div>
                </div>
            </div>   
        </section>
    )
}

export default Skills;
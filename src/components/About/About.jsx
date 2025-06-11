import "./About.scss"
import imgAbout from "../../assets/about-me.webp"

function About () {
    return (
        <section id="about">
            <h2>À propos de moi</h2>
            <div className="all-about-me">
                <div className="about-me">
                    <img src={ imgAbout} alt="about-me" className="img-about"/>
                    <div className="text-about">
                        <p>Alicia Juillet</p>
                        <p>35 ans</p>
                        <p>Développeuse web front-end junior</p>
                    </div>    
                </div>
                <div className="about-description">
                    <p>Depuis toujours, je suis passionnée par les jeux vidéo et la création sous toutes ses formes,<br/> que ce soit par le dessin ou toute autre activité artistique.<br/>
                    C'est donc tout naturellement que, pour ma reconversion professionnelle, j'ai choisi la voie <br/>du développement web.<br/><br/>
                    Pouvoir créer un site web responsive, dynamique et interactif, en partant de rien,<br/> me procure une satisfaction profonde et constante.<br/><br/>
                    Après une formation complète et plusieurs projets réalisés, je suis aujourd'hui <br/>
                    à la recherche d'une alternance ou d'un poste salarié pour continuer à progresser dans un <br/>environnement stimulant.<br/><br/>
                    Dynamique, créative et toujours de bonne humeur, je suis prête à contribuer à des projets <br/>
                    utiles et innovants, au service des utilisateurs.
                    </p>
                </div>
            </div>    
        </section>
    )
}

export default About
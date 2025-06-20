import "./Projects.scss"
import { useState } from "react"
import bookiPreview from "../../assets/images/booki-preview.webp"
import sophieBluelPreview from "../../assets/images/sophie-bluel-preview.webp"
import ninaCarducciPreview from "../../assets/images/nina-carducci-preview.webp"
import kasaPreview from "../../assets/images/kasa-preview.webp"
import monVieuxGrimoirePreview from "../../assets/images/mon-vieux-grimoire-preview.webp"
import accessibilityIcon from "../../assets/accessibility.webp";
import seoIcon from "../../assets/seo.webp";


const projects = [
  {
    id: "booki",
    name: "Booki",
    preview: bookiPreview,
    github: "https://github.com/alicia-juillet/Booki-starter-pack.git",
    description: "Site vitrine d’agence de voyage – intégration HTML/CSS à partir d’une maquette Figma.",
    technos: ["devicon-html5-plain", "devicon-css3-plain"]
  },
  {
    id: "sophie-bluel",
    name: "Sophie Bluel",
    preview: sophieBluelPreview,
    github: "https://github.com/alicia-juillet/Portfolio-architecte-sophie-bluel.git",
    description: "Application de galerie photo – développement front-end en JavaScript avec gestion d’API.",
    technos:["devicon-javascript-plain"],
  },
  {
    id: "nina-carducci",
    name: "Nina Carducci",
    preview: ninaCarducciPreview,
    github: "https://github.com/alicia-juillet/Nina-Carducci-Dev.git",
    description:"Optimisation SEO et amélioration de l’accessibilité d’un site existant",
    technosImage: [accessibilityIcon, seoIcon]
  },
  {
    id: "kasa",
    name: "Kasa",
    preview: kasaPreview,
    github: "https://github.com/alicia-juillet/location-immobiliere-kasa.git",
    description:"Application de location immobilière – développement d’une SPA avec React.",
    technos: ["devicon-react-plain", "devicon-sass-plain"]
  },
  {
    id: "mon-vieux-grimoire",
    name: "Mon vieux grimoire",
    preview: monVieuxGrimoirePreview,
    github: "https://github.com/alicia-juillet/backend.git",
    description:"API REST pour la gestion de livres – back-end en Node.js avec MongoDB.",
    technos: ["devicon-nodejs-plain", "devicon-express-original", "devicon-mongodb-plain"]
  },
];

function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [animatePreview, setAnimatePreview] = useState(false);

  const handleProjectClick = (project) => {
    setAnimatePreview(false)
    setTimeout(() => {
      setActiveProject(project)
      setAnimatePreview(true)
    }, 50)
  }

  return (
    <section id="projects">
      <h2>Mes projets</h2>
      <div className="project-content">
        <div className="project-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${activeProject.id === project.id ? "active" : ""}`}
              onClick={() => handleProjectClick(project)}
            >
            <p>{project.name}</p>
            </div>
          ))}
        </div>
        <div className="project-and-technos">

          <div className={`project-preview ${animatePreview ? "fade" : ""}`}>
            <img src={activeProject.preview} alt={`Aperçu de ${activeProject.name}`} />
          </div>
          <div className="project-infos">
            <p className="project-description">{activeProject.description}</p>
          
            <div className="lang-and-link">

          <div className={`project-technos ${animatePreview ? "fade" : ""}`}>
            {activeProject.technos &&
              activeProject.technos.map((iconClass, index) => (
                <i key={index} className={`${iconClass} colored`}></i>
            ))}

            {activeProject.technosImage &&
              activeProject.technosImage.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Techno spécifique ${index + 1}`}
                  className="custom-technos-image"
                />
            ))}
          </div>
        
          <div className={`project-link ${animatePreview ? "fade" : ""}`}>
              <a href={activeProject.github} target="_blank" rel="noopener noreferrer">
                <i className="devicon-github-original colored"></i>
                Voir sur GitHub
              </a>
          </div>
          </div>
        </div>
          
      </div>
    </div>
      
      


    </section>
  );
}

export default ProjectsSection;

import "./Projects.scss"
import { useState } from "react"
import bookiLogo from "../../assets/images/Booki.png"
import bookiPreview from "../../assets/images/booki-preview.png"
import sophieBluelLogo from "../../assets/images/sophie-bluel.png"
import sophieBluelPreview from "../../assets/images/sophie-bluel-preview.png"
import ninaCarducciLogo from "../../assets/images/Nina-Carducci.png"
import ninaCarducciPreview from "../../assets/images/nina-carducci-preview.png"
import kasaLogo from "../../assets/images/Kasa.png"
import kasaPreview from "../../assets/images/kasa-preview.png"
import monVieuxGrimoireLogo from "../../assets/images/Mon-vieux-grimoire.png"
import monVieuxGrimoirePreview from "../../assets/images/mon-vieux-grimoire-preview.png"
import accessibilityIcon from "../../assets/accessibility.png";
import seoIcon from "../../assets/seo.png";


const projects = [
  {
    id: "booki",
    name: "Booki",
    logo: bookiLogo,
    preview: bookiPreview,
    github: "https://github.com/alicia-juillet/Booki-starter-pack.git",
    description: "Site vitrine d’agence de voyage – intégration HTML/CSS à partir d’une maquette Figma.",
    technos: ["devicon-html5-plain", "devicon-css3-plain"]
  },
  {
    id: "sophie-bluel",
    name: "Sophie Bluel",
    logo: sophieBluelLogo,
    preview: sophieBluelPreview,
    github: "https://github.com/alicia-juillet/Portfolio-architecte-sophie-bluel.git",
    description: "Application de galerie photo – développement front-end en JavaScript avec gestion d’API.",
    technos:["devicon-javascript-plain"],
  },
  {
    id: "nina-carducci",
    name: "Nina Carducci",
    logo: ninaCarducciLogo,
    preview: ninaCarducciPreview,
    github: "https://github.com/alicia-juillet/Nina-Carducci-Dev.git",
    description:"Optimisation SEO et amélioration de l’accessibilité d’un site existant",
    technosImage: [accessibilityIcon, seoIcon]
  },
  {
    id: "kasa",
    name: "Kasa",
    logo: kasaLogo,
    preview: kasaPreview,
    github: "https://github.com/alicia-juillet/location-immobiliere-kasa.git",
    description:"Application de location immobilière – développement d’une SPA avec React.",
    technos: ["devicon-react-plain", "devicon-sass-plain"]
  },
  {
    id: "mon-vieux-grimoire",
    name: "Mon vieux grimoire",
    logo: monVieuxGrimoireLogo,
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
      <div className="project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${activeProject.id === project.id ? "active" : ""}`}
            onClick={() => handleProjectClick(project)}
          >
            <img src={project.logo} alt={`Logo ${project.name}`} />
          </div>
        ))}
      </div>
      <div className="project-and-technos">

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
        <div className="project-center">
          <div className={`project-preview ${animatePreview ? "fade" : ""}`}>
            <img src={activeProject.preview} alt={`Aperçu de ${activeProject.name}`} />
          </div>

          
          <p className="project-description">{activeProject.description}</p>
        </div>
        <div className={`project-link ${animatePreview ? "fade" : ""}`}>
            <a href={activeProject.github} target="_blank" rel="noopener noreferrer">
              <i className="devicon-github-original colored"></i>
              Voir sur GitHub
            </a>
          </div>
          
      </div>
      
      


    </section>
  );
}

export default ProjectsSection;

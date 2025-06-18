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
    technos: ["devicon-html5-plain", "devicon-css3-plain"]
  },
  {
    id: "sophie-bluel",
    name: "Sophie Bluel",
    logo: sophieBluelLogo,
    preview: sophieBluelPreview,
    github: "https://github.com/alicia-juillet/Portfolio-architecte-sophie-bluel.git",
    technos:["devicon-javascript-plain"],
  },
  {
    id: "nina-carducci",
    name: "Nina Carducci",
    logo: ninaCarducciLogo,
    preview: ninaCarducciPreview,
    github: "https://github.com/alicia-juillet/Nina-Carducci-Dev.git",
    technosImage: [accessibilityIcon, seoIcon]
  },
  {
    id: "kasa",
    name: "Kasa",
    logo: kasaLogo,
    preview: kasaPreview,
    github: "https://github.com/alicia-juillet/location-immobiliere-kasa.git",
    technos: ["devicon-react-plain", "devicon-sass-plain"]
  },
  {
    id: "mon-vieux-grimoire",
    name: "Mon vieux grimoire",
    logo: monVieuxGrimoireLogo,
    preview: monVieuxGrimoirePreview,
    github: "https://github.com/alicia-juillet/backend.git",
    technos: ["devicon-nodejs-plain", "devicon-express-original", "devicon-mongodb-plain"]
  },
];

function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="projects">
      <h2>Mes projets</h2>
      <div className="project-grid">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`project-card ${activeProject.id === project.id ? "active" : ""}`}
            onClick={() => setActiveProject(project)}
          >
            <img src={project.logo} alt={`Logo ${project.name}`} />
          </div>
        ))}
      </div>
      <div className="project-and-technos">

        <div className="project-technos">
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

        <div className="project-preview">
          <img src={activeProject.preview} alt={`Aperçu de ${activeProject.name}`} />
        </div>

          <div className="project-link">
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

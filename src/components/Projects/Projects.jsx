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


const projects = [
  {
    id: "booki",
    name: "Booki",
    logo: bookiLogo,
    preview: bookiPreview,
  },
  {
    id: "sophie-bluel",
    name: "Sophie Bluel",
    logo: sophieBluelLogo,
    preview: sophieBluelPreview,
  },
  {
    id: "nina-carducci",
    name: "Nina Carducci",
    logo: ninaCarducciLogo,
    preview: ninaCarducciPreview,
  },
  {
    id: "kasa",
    name: "Kasa",
    logo: kasaLogo,
    preview: kasaPreview,
  },
  {
    id: "mon-vieux-grimoire",
    name: "Mon vieux grimoire",
    logo: monVieuxGrimoireLogo,
    preview: monVieuxGrimoirePreview,
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

      <div className="project-preview">
        <img src={activeProject.preview} alt={`Aperçu de ${activeProject.name}`} />
      </div>
    </section>
  );
}

export default ProjectsSection;

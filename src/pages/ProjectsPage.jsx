import ProjectList from "../components/ProjectList";
import ProjectData from "../datas/ProjectData";
import "../style/ProjectsPage.scss";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h1>Mes Projets</h1>
      <ProjectList projects={ProjectData} />
    </div>
  );
};

export default ProjectsPage;

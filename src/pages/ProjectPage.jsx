import { useParams } from "react-router-dom";
import ProjectData from "../components/ProjectData";

function ProjectPage() {
  const { id } = useParams();
  const ChosenProject = ProjectData.find(
    (project) => project.id === parseInt(id)
  );

  return (
    <section className="ProjectPageComponent">
      <h1>Projet {id} </h1>

      <p>Description: {ChosenProject.description}</p>
    </section>
  );
}

export default ProjectPage;

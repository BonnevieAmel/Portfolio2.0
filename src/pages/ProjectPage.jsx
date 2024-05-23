import { useParams } from "react-router-dom";
import ProjectData from "../datas/ProjectData";

function ProjectPage() {
  const { id } = useParams();
  const ChosenProject = ProjectData.find(
    (project) => project.id === parseInt(id)
  );

  return (
    <section className="ProjectPageComponent">
      <h1>Projet {id} </h1>
      <img src={ChosenProject.image} alt={ChosenProject.name} />
      <p>Description: {ChosenProject.description}</p>
      <a target="blank" href={ChosenProject.link}>
        {" "}
        Repo GitHub
      </a>
      <a target="blank" href={ChosenProject.deploy}>
        {" "}
        Site Deployé{" "}
      </a>
    </section>
  );
}

export default ProjectPage;

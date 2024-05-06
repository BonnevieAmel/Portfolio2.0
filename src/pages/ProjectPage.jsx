import { useParams } from "react-router-dom";

function ProjectPage() {
  const { id } = useParams();

  return (
    <section className="ProjectPageComponent">
      <h1>ProjectPage {id} </h1>
    </section>
  );
}

export default ProjectPage;

import ProjectCard from "./ProjectCard";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => (
  <div className="project-list">
    {projects.map((project) => (
      <Link key={project.id} to={`/ProjectPage/${project.id}`}>
        <ProjectCard project={project} />
      </Link>
    ))}
  </div>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProjectList;

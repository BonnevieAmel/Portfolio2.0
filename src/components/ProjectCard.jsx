import PropTypes from "prop-types";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <img src={project.image} alt={project.name} />
    <h2>{project.name}</h2>
  </div>
);

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;

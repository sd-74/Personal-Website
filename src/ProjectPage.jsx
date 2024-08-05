import { Projects } from "./ProjectData";
import ProjectCard from "./ProjectCard";

const ProjectPage = () => {
    const projects = Projects;

    return (
        <div className="py-12 flex-col">
            <h1 className="text-5xl font-bold text-primary text-center mb-2">
                Projects
            </h1>
            <h2 className="text-2xl  text-secondary text-center">
                A list of things I've worked on...
            </h2>
            <div className="flex-col md:grid md:grid-cols-3 gap-2 pt-8">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} displayDate={false}/>
                ))}
            </div>
        </div>
    );
};

export default ProjectPage;
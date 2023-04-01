import { Link } from 'react-router-dom';

interface projectList {
  projects: project[];
}

interface project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  link?: string;
}

const ProjectList = (props: projectList) => {
  return (
    <div className="">
      {props.projects.map((project) => (
        <div
          key={project.id}
          className="flex flex-col rounded-3xl border-slate-600 p-16 md:flex-row md:space-x-12"
        >
          <div className="flex justify-center md:w-1/2">
            <img
              className="h-64 w-64"
              src={project.image}
              alt={project.title}
            />
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="mb-4 text-3xl font-bold">{project.title}</h1>
            <p className="text-lg md:text-left">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-2 p-1 md:justify-start">
              {project.tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded bg-slate-200 p-2 text-gray-600"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 p-1 md:justify-start">
              <Link to={project.github} target="_blank">
                <button className="rounded bg-slate-800 p-2 text-white hover:bg-slate-600">
                  GitHub
                </button>
              </Link>
              {project.link && (
                <Link to={project.link} target="_blank">
                  <button className="rounded bg-slate-800 p-2 text-white hover:bg-slate-600">
                    Visit Project
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;

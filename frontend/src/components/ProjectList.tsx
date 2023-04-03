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
    <main>
      {props.projects.map((project) => (
        <div
          key={project.id}
          className="my-6 flex flex-col rounded-md bg-sky-200 bg-opacity-50 p-4 shadow-lg drop-shadow-xl md:flex-row md:space-x-12"
        >
          <div className="mt-2 flex justify-center rounded-md border border-slate-300 shadow-lg md:w-2/5">
            <img
              className="h-64 w-64"
              src={project.image}
              alt={project.title}
            />
          </div>
          <div className="mt-4 flex flex-col text-center md:w-3/5 md:text-left">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
            <p className="flex flex-1 md:text-left">{project.description}</p>
            <div className="flex flex-wrap justify-center gap-2 py-1 pr-1 md:justify-start">
              {project.tags.map((tag) => (
                <div
                  key={tag}
                  className="rounded bg-slate-200 p-2 text-sm text-gray-600 drop-shadow-sm"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 py-2 pr-2 md:justify-start">
              <Link to={project.github} target="_blank">
                <button className="rounded bg-slate-800 p-2 px-4 text-white transition-all duration-200 ease-linear hover:bg-slate-600">
                  GitHub
                </button>
              </Link>
              {project.link && (
                <Link to={project.link} target="_blank">
                  <button className="rounded bg-slate-800 p-2 px-4 text-white transition-all duration-200 ease-linear hover:bg-slate-600">
                    Visit Project
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default ProjectList;

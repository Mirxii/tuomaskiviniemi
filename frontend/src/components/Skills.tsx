const LANGUAGES = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Java',
  'C++',
  'Python',
];

const FRAMEWORKS = [
  'React',
  'React Native',
  'Node.js',
  'Express',
  'TailwindCSS',
  'Jest',
];

const DATABASES = ['MySQL', 'PostgreSQL'];

const TOOLS = ['Git', 'GitHub Actions', 'Docker', 'Jira', 'Vite', 'Cypress'];

const OTHERS = ['Agile', 'Scrum', 'Linux', 'Prometheus', 'Grafana'];

const Skills = () => {
  return (
    <section className="m-auto flex h-screen max-w-xl snap-start flex-col justify-center bg-white p-12 md:max-w-6xl md:flex-row">
      <div className="mx-auto flex justify-center md:my-auto md:w-1/2">
        <h1 className="text-3xl font-bold">Skills</h1>
      </div>
      <div className="mx-auto mt-12 flex flex-col text-center md:my-auto md:w-3/5 md:text-left">
        <div className="">
          <h1 className="text-xl">Programming Languages</h1>
          <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
          <div className="flex flex-wrap justify-center gap-2 py-1 pr-1 md:justify-start">
            {LANGUAGES.map((language) => (
              <div
                key={language}
                className="rounded bg-slate-200 p-2 text-sm text-gray-600 drop-shadow-sm"
              >
                {language}
              </div>
            ))}
          </div>

          <h1 className="mt-4 text-xl">Frameworks</h1>
          <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
          <div className="flex flex-wrap justify-center gap-2 py-1 pr-1 md:justify-start">
            {FRAMEWORKS.map((framework) => (
              <div
                key={framework}
                className="rounded bg-slate-200 p-2 text-sm text-gray-600 drop-shadow-sm"
              >
                {framework}
              </div>
            ))}
          </div>

          <h1 className="mt-4 text-xl">Databases</h1>
          <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
          <div className="flex flex-wrap justify-center gap-2 py-1 pr-1 md:justify-start">
            {DATABASES.map((database) => (
              <div
                key={database}
                className="rounded bg-slate-200 p-2 text-sm text-gray-600 drop-shadow-sm"
              >
                {database}
              </div>
            ))}
          </div>

          <h1 className="mt-4 text-xl">Tools</h1>
          <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
          <div className="flex flex-wrap justify-center gap-2 py-1 pr-1 md:justify-start">
            {TOOLS.map((tool) => (
              <div
                key={tool}
                className="rounded bg-slate-200 p-2 text-sm text-gray-600 drop-shadow-sm"
              >
                {tool}
              </div>
            ))}
          </div>

          <h1 className="mt-4 text-xl">Other</h1>
          <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
          <div className="flex flex-wrap justify-center gap-2 py-1 pr-1 md:justify-start">
            {OTHERS.map((other) => (
              <div
                key={other}
                className="rounded bg-slate-200 p-2 text-sm text-gray-600 drop-shadow-sm"
              >
                {other}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

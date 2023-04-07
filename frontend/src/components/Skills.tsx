const skillsList = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Java',
  'C++',
  'Python',
  'React',
  'React Native',
  'Node.js',
  'Express',
  'TailwindCSS',
  'Jest',
  'Cypress',
  'MySQL',
  'PostgreSQL',
  'Git',
  'GitHub Actions',
  'Docker',
  'Vite',
  'Linux',
  'Prometheus',
  'Grafana',
];

const Skills = () => {
  return (
    <section className="m-auto flex h-screen max-w-xl snap-start flex-col justify-center bg-white p-12 md:max-w-6xl md:flex-row">
      <div className="mx-auto flex justify-center md:my-auto md:w-1/2">
        <h1 className="text-2xl font-bold lg:text-3xl">Skills</h1>
      </div>
      <div className="mx-auto mt-4 flex flex-col text-center md:my-auto md:mt-12 md:w-3/5 md:text-left">
        <div className="">
          <h1 className="lg:text-xl">Technologies</h1>
          <hr className="mx-auto my-2 h-0.5 w-5/6 bg-gradient-to-r from-slate-50 via-slate-300 to-slate-50 md:mx-0 md:from-slate-300 md:via-slate-300" />
          <div className="flex flex-wrap justify-center gap-2 py-1 pr-1 md:justify-start">
            {skillsList.map((skill) => (
              <div
                key={skill}
                className="rounded bg-slate-200 p-2 text-sm text-gray-600 drop-shadow-sm"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

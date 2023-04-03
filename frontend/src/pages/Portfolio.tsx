import ProjectList from '../components/ProjectList';

const PROJECTS = [
  {
    id: '1',
    title: 'Todo App',
    description:
      'A Simple todo app, implementing CRUD operations and authentication.',
    tags: ['React', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
    image: ' ',
    github: 'https://github.com/Mirxii/todo-app',
    link: 'https://todo-app-mirxii.onrender.com/',
  },
  {
    id: '2',
    title: 'My Portfolio',
    description:
      'The page you are currently on. Static website for my portfolio and resume. Built with React and TailwindCSS. Deployed to Vercel with a custom domain.',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    image: ' ',
    github: 'https://github.com/Mirxii/tuomaskiviniemi',
    link: 'https://tuomaskiviniemi.com/',
  },
  {
    id: '3',
    title: 'Weather App',
    description:
      'A simple weather app for Mobile, fetching data from OpenWeatherMap API.',
    tags: ['React Native', 'OpenWeatherMap API'],
    image: ' ',
    github: 'https://github.com/Mirxii/NativeWeather-App',
  },
];

const Portfolio = () => {
  return (
    <div className="mx-auto max-w-xl px-4 pt-28 md:max-w-6xl">
      <ProjectList projects={PROJECTS} />
    </div>
  );
};

export default Portfolio;

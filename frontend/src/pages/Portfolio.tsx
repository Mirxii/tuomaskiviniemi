import ProjectList from '../components/ProjectList';

const PROJECTS = [
  {
    id: '1',
    title: 'Todo App',
    description:
      'A Simple todo app, implementing CRUD operations and authentication.',
    tags: ['React', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
    github: 'https://github.com/Mirxii/todo-app',
    link: 'https://todo-app-mirxii.onrender.com/',
  },
  {
    id: '2',
    title: 'My Portfolio',
    description: 'My portfolio website, built with React and TailwindCSS.',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
    github: 'https://github.com/Mirxii/tuomaskiviniemi',
    link: 'https://tuomaskiviniemi.vercel.app/',
  },
  {
    id: '3',
    title: 'Weather App',
    description:
      'A simple weather app for Mobile, fetching data from OpenWeatherMap API.',
    tags: ['React Native', 'OpenWeatherMap API'],
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
    github: 'https://github.com/Mirxii/NativeWeather-App',
  },
];

const Portfolio = () => {
  return (
    <div className="max-3-3xl md:max-6xl mx-auto px-4 pt-28">
      <ProjectList projects={PROJECTS} />
    </div>
  );
};

export default Portfolio;

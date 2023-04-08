import ProjectList from '../components/ProjectList';

import todos_app from '../assets/todos_app.png';
import portfolio from '../assets/portfolio.png';
import weather_app from '../assets/weather_app.png';

const PROJECTS = [
  {
    id: '1',
    title: 'Marketplace App',
    description:
      'Current WIP, a marketplace app for buying and selling second hand items.',
    tags: ['React', 'TypeScript', 'Node.js', 'Express', 'Prisma', 'PostgreSQL'],
    image: ' ',
    github: 'https://github.com/Mirxii/wearywears',
  },
  {
    id: '2',
    title: 'Todo App',
    description:
      'A simple todo app, implementing basic CRUD functionality for todos and users, also includes JWT-based authentication.',
    tags: ['React', 'JavaScript', 'Node.js', 'Express', 'MySQL'],
    image: todos_app,
    github: 'https://github.com/Mirxii/todo-app',
    link: 'https://todo-app-mirxii.onrender.com/',
  },
  {
    id: '3',
    title: 'My Portfolio',
    description:
      'The page you are currently on. Static website for my portfolio and resume. Built with React and TailwindCSS. Deployed to Vercel with a custom domain.',
    tags: ['React', 'TailwindCSS'],
    image: portfolio,
    github: 'https://github.com/Mirxii/tuomaskiviniemi',
    link: 'https://tuomaskiviniemi.com/',
  },
  {
    id: '4',
    title: 'Weather App',
    description:
      'A very simple weather app for mobile, able to lookup current weather or a 4-day forecast based on city input or location services, fetching data from OpenWeatherMap API.',
    tags: ['React Native', 'OpenWeatherMap API'],
    image: weather_app,
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

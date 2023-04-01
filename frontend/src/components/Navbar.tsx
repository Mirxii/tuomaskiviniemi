import { Link } from 'react-router-dom';

import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const Navbar = () => {
  return (
    <div className="fixed flex w-full bg-white bg-opacity-50 p-4 text-lg shadow-md  backdrop-blur-sm">
      <div className="flex w-3/4 items-center justify-center gap-2">
        <Link
          className="rounded-lg px-2 py-1 transition duration-200 hover:bg-slate-200 hover:bg-opacity-50 hover:text-sky-900 hover:shadow-md"
          to="/"
        >
          Home
        </Link>
        <Link
          className="rounded-lg px-2 py-1 transition duration-200 hover:bg-slate-200 hover:bg-opacity-50 hover:text-sky-900 hover:shadow-md"
          to="/portfolio"
        >
          Portfolio
        </Link>
      </div>
      <div className="flex w-1/4 items-center justify-center gap-3">
        <Link
          className="duration-100 ease-in-out hover:-translate-y-0.5"
          to="https://github.com/Mirxii"
          target={'_blank'}
        >
          <img className="h-8 w-8" src={github} alt="GitHub" />
        </Link>
        <Link
          className="duration-100 ease-in-out hover:-translate-y-0.5"
          to="https://www.linkedin.com/in/tuomas-kiviniemi-755572172/"
          target={'_blank'}
        >
          <img className="h-8 w-8" src={linkedin} alt="LinkedIn" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

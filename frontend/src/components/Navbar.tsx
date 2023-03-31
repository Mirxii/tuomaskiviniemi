import { Link } from 'react-router-dom';

import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';

const Navbar = () => {
  return (
    <div className="flex p-6 text-lg shadow-md ">
      <div className="flex w-3/4 items-center justify-center">
        <nav>
          <Link
            className="rounded-md px-2 hover:bg-green-500 hover:bg-opacity-40 hover:text-gray-800"
            to="/"
          >
            Home
          </Link>
          <Link
            className="rounded-md px-2 hover:bg-green-500 hover:bg-opacity-40 hover:text-gray-800"
            to="/portfolio"
          >
            Portfolio
          </Link>
        </nav>
      </div>
      <div className="flex w-1/4 justify-center">
        <nav className="flex">
          <Link
            className="px-2 duration-100 ease-in-out hover:-translate-y-0.5"
            to="https://github.com/Mirxii"
            target={'_blank'}
          >
            <img className="h-8 w-8" src={github} alt="GitHub" />
          </Link>
          <Link
            className="px-2 duration-100 ease-in-out hover:-translate-y-0.5"
            to="https://www.linkedin.com/in/tuomas-kiviniemi-755572172/"
            target={'_blank'}
          >
            <img className="h-8 w-8" src={linkedin} alt="LinkedIn" />
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

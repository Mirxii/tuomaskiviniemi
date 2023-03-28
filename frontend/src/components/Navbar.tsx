import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="flex p-4 justify-center shadow-md text-lg">
        <Link
          className="px-2 rounded-md hover:bg-green-500 hover:text-gray-800 hover:bg-opacity-40 hover:cursor-pointer"
          to="/"
        >
          Home
        </Link>
        <Link
          className="px-2 rounded-md hover:bg-green-500 hover:text-gray-800 hover:bg-opacity-40 hover:cursor-pointer"
          to="/portfolio"
        >
          Portfolio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

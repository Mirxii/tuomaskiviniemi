import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center p-4 text-lg shadow-md">
        <Link
          className="rounded-md px-2 hover:cursor-pointer hover:bg-green-500 hover:bg-opacity-40 hover:text-gray-800"
          to="/"
        >
          Home
        </Link>
        <Link
          className="rounded-md px-2 hover:cursor-pointer hover:bg-green-500 hover:bg-opacity-40 hover:text-gray-800"
          to="/portfolio"
        >
          Portfolio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

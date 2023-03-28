import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="flex p-4 justify-center shadow-md text-lg">
        <Link className="px-2" to="/">
          Home
        </Link>
        <Link className="px-2" to="/portfolio">
          Portfolio
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import PropTypes from "prop-types";
import logo from "../../public/logo.png";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaBars } from "react-icons/fa6";

// eslint-disable-next-line react/prop-types
const Nabvar = ({coin}) => {
  return (
    <div className="py-3 sticky backdrop-filter backdrop-blur-lg bg-opacity-50 bg-sky-100">
      <nav className="w-11/12 mx-auto flex justify-between items-center mt-2">
        <div className="flex justify-between items-center space-x-3">
            <div>
            <div className="dropdown md:hidden ">
            <div tabIndex="0" role="button" >
            <FaBars />
            </div>
            <ul
              tabIndex="0"
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li>
                <a className="font-semibold text-gray-500">Home</a>
              </li>
              <li>
                <a className="font-semibold text-gray-500">Fixture</a>
              </li>
              <li>
                <a className="font-semibold text-gray-500">Teams</a>
              </li>
              <li>
                <a className="font-semibold text-gray-500">Schedules</a>
              </li>
            </ul>
          </div>
            </div>
          <img src={logo} alt="" />
        </div>

        <div className="hidden md:flex justify-between items-center space-x-9 ">
          <p className="font-semibold text-gray-600">Home</p>
          <p className="font-semibold text-gray-500">Fixture</p>
          <p className="font-semibold text-gray-500">Teams</p>
          <p className="font-semibold text-gray-500">Schedules</p>
          <div className="flex p-2 border space-x-1 items-center rounded-lg font-semibold">
            <p>{coin} coin</p>
            <p className="text-yellow-400 text-xl">
              <AiFillDollarCircle />
            </p>
          </div>
        </div>

        <div className="md:hidden flex p-2 border space-x-1 items-center rounded-lg font-semibold">
          <p>coin</p>
          <p className="text-yellow-400 text-xl">
            <AiFillDollarCircle />
          </p>
        </div>
      </nav>
    </div>
  );
};

Nabvar.propTypes = {
  Nabvar: PropTypes.object.isRequired,
};

export default Nabvar;

import { NavLink } from "react-router-dom";
import "./Header.css";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <header className="p-4 bg-orange-500 text-white flex flex-col sm:flex-row justify-between items-center">
      <div className="mb-2 sm:mb-0">
        <a href="/" className="text-4xl font-semibold">
          Zamazon
        </a>
      </div>
      <div className="flex justify-center items-center w-full sm:w-1/4 bg-white rounded-md">
        <input
          type="search"
          className="p-3 rounded-md w-full outline-none border-none text-gray-600 placeholder:text-gray-400"
          placeholder="search anything.."
        />
        <CiSearch
          size={50}
          className="text-orange-500 cursor-pointer hover:text-orange-300 transition-colors border-l border-orange-300 p-2 "
        />
      </div>
      <div className="flex justify-center items-center mt-4 sm:mt-0">
        <NavLink className="p-2 rounded-md" to={"/"}>
          Home
        </NavLink>
        <NavLink className="p-2 rounded-md" to={"/a"}>
          Link A
        </NavLink>
        <NavLink className="p-2 rounded-md" to={"/b"}>
          Link B
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

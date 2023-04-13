import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = ({ pathname }) => {
  return (
    <div className="bg-gradient-to-tl from-zinc-800 via-zinc-900 to-zinc-950 shadow-md sticky h-[70px] top-0 z-50 px-24 py-4">
      <div className="flex justify-between items-center h-full">
        <div>
          <Link to="/">
            <h1 className="text-lg md:text-2xl font-medium font-title">
              Project Pilot
            </h1>
          </Link>
        </div>
        <ul className="flex items-center">
          <li
            className={`text-slate-300 text-lg mx-4 ${
              pathname === "/home" && "font-medium text-white"
            }`}
          >
            <Link to="/home">Home</Link>
          </li>
          <li
            className={`text-slate-300 ${
              pathname.includes("projects") && "font-medium text-white"
            } text-lg mx-4 `}
          >
            <Link to="/projects">Projects</Link>
          </li>
          <li
            className={`text-slate-300 ${
              pathname.includes("profile") && "font-medium text-white"
            } text-lg mx-4`}
          >
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full">
            <img
              className="w-6 h-6 object-cover rounded-full"
              src="https://media.istockphoto.com/id/1204374053/photo/profile-side-view-portrait-of-his-he-nice-attractive-skilled-focused-serious-guy-writing.jpg?s=612x612&w=0&k=20&c=ohF7qYstx9E6eJXpcQUtxFJCx9jjRBHilXcFehoOGyU="
              alt=""
            />
          </div>
          <p className="text-white mx-2 font-sans">Gyanendra</p>
          <IoIosArrowDown className="text-white" />
        </div>
      </div>
    </div>
  );
};
export default Navbar;

import { NavLink } from "react-router-dom";

function Navbar() {

  return (
    <nav className="flex text-white text-xl font-bold bg-sky-200 gap-4 p-5">
      <NavLink to="/" className={({ isActive }) =>
        `hover:text-blue-400 ${isActive ? "text-blue-400" : ""}`
      }
      > Home </NavLink>

      <NavLink to="/login" className={({ isActive }) =>
        `hover:text-blue-400 ${isActive ? "text-blue-400" : ""}`
      }
      > Login </NavLink>

      <NavLink to="/fav" className={({ isActive }) =>
        `hover:text-blue-400 ${isActive ? "text-blue-400" : ""}`
      }
      > Favourites </NavLink>
    </nav>
    
  );
}

export default Navbar; 
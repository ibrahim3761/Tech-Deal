import React, { useContext } from "react";
import userIcon from "../../assets/user.png";
import { Link, NavLink } from "react-router"; // Fix the router import
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext); // useContext instead of "use"

  const links = (
    <>
      <li className="lg:mr-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
              : "text-gray-700 hover:text-green-500 pb-1"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="lg:mr-4">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
              : "text-gray-700 hover:text-green-500 pb-1"
          }
        >
          About
        </NavLink>
      </li>
      <li className="lg:mr-4">
        <NavLink
          to="/my-profile"
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-green-500 text-green-600 font-semibold pb-1"
              : "text-gray-700 hover:text-green-500 pb-1"
          }
        >
          My profile
        </NavLink>
      </li>
    </>
  );

  const handleLogout = () => {
    logOut()
      .then(() => console.log("User logged out"))
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Tech Deal
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end space-x-2">
          <div
            className="tooltip tooltip-bottom"
            data-tip={user?.displayName || "Guest"}
          >
            <img
              src={user?.photoURL ? user.photoURL : userIcon}
              alt="user"
              className="w-10 h-10 rounded-full cursor-pointer"
            />
          </div>
          {user ? (
            <button onClick={handleLogout} className="btn bg-black text-white">
              Log Out
            </button>
          ) : (
            <Link to="/login" className="btn bg-black text-white">
              Log In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

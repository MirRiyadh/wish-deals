import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="bg-gray-200 shadow-lg text-black uppercase mb-3">
      <div className="navbar  lg:w-3/4 m-auto">
        <div className="navbar-start w-12/12">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black "
            >
              <li>
                <Link to="/home">Home</Link>
              </li>

              <li tabIndex={0}>
                <a className="justify-between">
                  <a to="/products">Products</a>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-slate-200">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/advertised">Advertised</Link>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>

              {user?.uid ? (
                <>
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>

                  <hr />
                  <div className="mt-2">
                    <button
                      onClick={handleLogout}
                      className="px-4 py-1 bg-slate-200 rounded-md hover:bg-slate-300 font-semibold uppercase"
                    >
                      Logout
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl pl-0">
            {/* <img src={logo} className="w-32 h-6 md:w-52  md:h-8" /> */}
          </Link>
        </div>

        {/* navbar center */}
        <div className="navbar-center hidden lg:flex ">
          <ul className="menu menu-horizontal p-0 font-semibold">
            <li>
              <Link to="/">Home</Link>
            </li>

            <li className="dropdown dropdown-hover ">
              <label tabIndex={0} className=" m-1">
                <Link to="/products">Products</Link>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-black"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/advertised">Advertised</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {user?.uid ? (
              <>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/register">Register</Link>
              </li>
            )}
          </ul>
        </div>

        {/* //user display option */}
        <div className="navbar-end">
          {user?.uid ? (
            <>
              <div>
                <button
                  onClick={handleLogout}
                  className="px-2 py-1 bg-slate-100 rounded-md hover:bg-amber-400 font-semibold text-black hover:text-white uppercase"
                >
                  Logout
                </button>
              </div>
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar ml-1"
                id="user-container"
              >
                <span id="user-text">{user?.displayName}</span>
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </label>
            </>
          ) : (
            <>
              <Link to="/login">
                <button className="px-4 py-1 bg-slate-100 rounded-md hover:bg-slate-300 mr-3 text-black">
                  Login
                </button>
              </Link>
              <div className="p-2 bg-white rounded-full">
                <FaUser className="text-black"></FaUser>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

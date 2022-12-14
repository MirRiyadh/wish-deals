import React, { useContext } from "react";
import { FaRegHeart, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import "./Navbar.css";
import logo from "../../assests/logo/logo.png";
import Loading from "../Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import useBuyer from "../../hooks/useBuyer";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const [isBuyer] = useBuyer(user?.email);
  const [isAdmin] = useAdmin(user?.email);

  const handleLogout = () => {
    logOut()
      .then(() => {
        localStorage.removeItem("accessToken");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const {
    data: wishlists,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["wishlist"],
    queryFn: async () => {
      const res = await fetch(
        `https://react-assignment-twelve-server.vercel.app/wishlist?email=${user?.email}`,
        {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await res.json();

      return data;
    },
  });

  refetch(wishlists);

  if (isLoading) {
    return <Loading></Loading>;
  }

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
                <Link to="/">Home</Link>
              </li>

              <li tabIndex={0}>
                <Link className="justify-between">
                  <Link to="/products">Products</Link>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </Link>
                <ul className="p-2 bg-slate-200">
                  <li>
                    <Link to="/categories/apple">Apple</Link>
                  </li>
                  <li>
                    <Link to="/categories/samsung">Samsung</Link>
                  </li>
                  <li>
                    <Link to="/categories/oneplus">One Plus</Link>
                  </li>
                  <li>
                    <Link to="/categories/huawei">Huawei</Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/blog">Blog</Link>
              </li>

              {user?.uid ? (
                <>
                  {isBuyer ? (
                    <>
                      <li>
                        <Link to="/wishlist">Wishlist</Link>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <Link to="/dashboard">Dashboard</Link>
                      </li>

                      <li>
                        <Link to="/my-products">My Products</Link>
                      </li>
                    </>
                  )}

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
            <img
              src={logo}
              alt="logo"
              className="w-28 h-6 md:w-48 2xl:w-56 md:h-8"
            />
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
                  <Link to="/categories/apple">Apple</Link>
                </li>
                <li>
                  <Link to="/categories/samsung">Samsung</Link>
                </li>
                <li>
                  <Link to="/categories/oneplus">One Plus</Link>
                </li>
                <li>
                  <Link to="/categories/huawei">Huawei</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>
            {user?.uid ? (
              <>
                {isBuyer ? (
                  <>
                    {isAdmin ? (
                      <>
                        <li>
                          <Link to="/wishlist">Wishlist</Link>
                        </li>
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to="/wishlist">Wishlist</Link>
                        </li>
                        <li>
                          <Link to="/dashboard">Dashboard</Link>
                        </li>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/my-products">My Products</Link>
                    </li>
                    <li>
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                  </>
                )}
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
          <Link to="/wishlist">
            <div className="mr-3 cursor-pointer ">
              <p className="mt-[-11px] ml-[-15px] absolute  rounded-full w-[22px] h-[22px] text-white bg-red-400 font-bold">
                {wishlists?.length}
              </p>{" "}
              <FaRegHeart className="text-2xl" />
            </div>
          </Link>

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

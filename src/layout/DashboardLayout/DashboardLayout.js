import React, { useContext } from "react";
import { BsSliders } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import Navbar from "../Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile  md:w-10/12 lg:w-10/12  m-auto bg-slate-200">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />

        <div className="drawer-content ">
          <label
            htmlFor="dashboard-drawer"
            className="btn btn-info drawer-button lg:hidden ml-[80%] md:ml-[80%] mb-2"
          >
            <div className="flex justify-end">
              <BsSliders className="text-xl text-white "></BsSliders>
            </div>
          </label>
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-72 bg-sky-300 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Orders</Link>
            </li>

            <li>
              <Link to="users">User List</Link>
            </li>
            <li>
              <Link to="buyers">Buyers</Link>
            </li>
            <li>
              <Link to="sellers">Sellers</Link>
            </li>

            {isAdmin && (
              <>
                <li>
                  <Link to="sellers">Seeeeeeeee</Link>
                </li>
              </>
            )}

            <li>
              <Link to="add-products">Add Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

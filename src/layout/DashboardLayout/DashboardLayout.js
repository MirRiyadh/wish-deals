import React, { useContext } from "react";
import { BsSliders } from "react-icons/bs";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import useBuyer from "../../hooks/useBuyer";
import useSeller from "../../hooks/useSeller";
import Navbar from "../Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  console.log(isAdmin);

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

            {isAdmin && (
              <>
                <li className="bg-white mb-3 font-semibold hover:bg-slate-50  rounded-md">
                  <Link to="users">User List</Link>
                </li>
                <li className="bg-white mb-3 font-semibold hover:bg-slate-50  rounded-md">
                  <Link to="buyers">Buyers</Link>
                </li>
                <li className="bg-white mb-3 font-semibold hover:bg-slate-50  rounded-md">
                  <Link to="sellers">Sellers</Link>
                </li>
                <li className="bg-white mb-3 font-semibold hover:bg-slate-50  rounded-md">
                  <Link to="/dashboard">My Orders</Link>
                </li>
                <li className="bg-white mb-3 font-semibold hover:bg-slate-50  rounded-md">
                  <Link to="wish-list">Wishlist</Link>
                </li>
                <li className="bg-white mb-3 font-semibold hover:bg-slate-50  rounded-md">
                  <Link to="add-products">Add Products</Link>
                </li>
              </>
            )}
            {isSeller && (
              <>
                <li className="bg-white mb-3 font-semibold hover:bg-slate-50  rounded-md">
                  <Link to="/dashboard">My Orders</Link>
                </li>
                <li className="bg-white mb-3 font-semibold hover:bg-slate-50  rounded-md">
                  <Link to="add-products">Add Products</Link>
                </li>
              </>
            )}
            {isBuyer && (
              <>
                <li className="bg-white mb-3 font-semibold hover:bg-slate-50  rounded-md">
                  <Link to="/dashboard">My Orders</Link>
                </li>
                <li className="bg-white mb-3 font-semibold hover:bg-slate-50  rounded-md">
                  <Link to="wish-list">Wishlist</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

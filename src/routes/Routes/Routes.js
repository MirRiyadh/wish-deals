import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Categories from "../../pages/Categories/Categories";
import AddProducts from "../../pages/Dashboards/AddProducts/AddProducts";
import Buyers from "../../pages/Dashboards/Buyers/Buyers";
import Dashboard from "../../pages/Dashboards/Dashboard/Dashboard";
import Sellers from "../../pages/Dashboards/Sellers/Sellers";
import Users from "../../pages/Dashboards/Users/Users";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import ShopCategories from "../../pages/Home/ShopCategories/ShopCategories";
import Login from "../../pages/Login/Login";
import MyOrders from "../../pages/MyOrders/MyOrders";
import Products from "../../pages/Products/Products";
import Register from "../../pages/Regsiter/Regsiter";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/categories/:id",
        element: <Categories></Categories>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      {
        path: "/displayProducts/:id",
        element: <ShopCategories></ShopCategories>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },

      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog></Blog>
          </PrivateRoute>
        ),
      },
    ],
  },
  { path: "*", element: <ErrorPage></ErrorPage> },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "/dashboard",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/dashboard/users",
        element: (
          <PrivateRoute>
            <Users></Users>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/buyers",
        element: <Buyers></Buyers>,
      },
      {
        path: "/dashboard/sellers",
        element: <Sellers></Sellers>,
      },
      {
        path: "/dashboard/add-products",
        element: <AddProducts></AddProducts>,
      },
    ],
  },
]);

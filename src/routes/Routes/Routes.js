import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main/Main";
import Blog from "../../pages/Blog/Blog";
import Categories from "../../pages/Categories/Categories";
import AddProducts from "../../pages/Dashboards/AddProducts/AddProducts";
import Buyers from "../../pages/Dashboards/Buyers/Buyers";
import Dashboard from "../../pages/Dashboards/Dashboard/Dashboard";
import Payment from "../../pages/Dashboards/Dashboard/Payment";
import Sellers from "../../pages/Dashboards/Sellers/Sellers";
import Users from "../../pages/Dashboards/Users/Users";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home";
import ShopCategories from "../../pages/Home/ShopCategories/ShopCategories";
import Login from "../../pages/Login/Login";
import MyProduct from "../../pages/My Product/MyProduct";
import MyOrders from "../../pages/MyOrders/MyOrders";
import Products from "../../pages/Products/Products";
import Register from "../../pages/Regsiter/Regsiter";
import Wishlist from "../../pages/Wishlist/Wishlist";
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
        path: "/my-products",
        element: <MyProduct></MyProduct>,
      },
      {
        path: "/wishlist",
        element: <Wishlist></Wishlist>,
      },
      {
        path: "/categories/:id",
        element: <Categories></Categories>,
        loader: async ({ params }) =>
          fetch(
            `https://react-assignment-twelve-server.vercel.app/categories/${params.id}`
          ),
      },
      {
        path: "/displayProducts/:id",
        element: <ShopCategories></ShopCategories>,
        loader: async ({ params }) =>
          fetch(
            `https://react-assignment-twelve-server.vercel.app/products/${params.id}`
          ),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "wishlist/payment/:id",
        element: <Payment></Payment>,
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/wishlist/payment/${params.id}`),
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
          <AdminRoute>
            <Users></Users>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/buyers",
        element: (
          <AdminRoute>
            <Buyers></Buyers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/sellers",
        element: (
          <AdminRoute>
            <Sellers></Sellers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-products",
        element: <AddProducts></AddProducts>,
      },
      {
        path: "/dashboard/wish-list",
        element: <Wishlist></Wishlist>,
      },
    ],
  },
]);

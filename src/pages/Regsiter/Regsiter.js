import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AuthContext } from "../../firebase/AuthProvider";
import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";

const Regsiter = () => {
  const { createUser, providerSignIn, updateUserProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [showPass, setshowPass] = useState(false);

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const photo = form.photo.files[0];
    const email = form.email.value;
    const password = form.password.value;
    const fullName = firstName + " " + lastName;
    const option = form.option.value;
    console.log(option);

    const formData = new FormData();
    formData.append("image", photo);

    const url = `https://api.imgbb.com/1/upload?key=79f5d4f1a6b1a5ca81ef432ce75e7d59`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (password.length < 6) {
          setError("password must be 6 character");
          return;
        }

        if (!/(?=.*[A-Z].*[0-9])/.test(password)) {
          setError("First type atleast one uppercase, Then atleast one number");
          return;
        }

        createUser(email, password)
          .then((result) => {
            // Signed in
            const user = result.user;
            console.log(user);
            form.reset();
            // navigate("/login");
            updateUserProfile(fullName, data.data.display_url)
              .then(() => {})
              .catch((error) => console.error(error));
          })
          .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
            console.error(error);
          });
      })
      .catch((err) => console.log(err));
  };

  const handleAccepted = (event) => {
    setAccepted(event.target.checked);
  };

  const handleShowPass = (event) => {
    setshowPass(event.target.checked);
  };

  //Google signin provider
  const handleGoogleSignIn = () => {
    providerSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //Facebook signin provider
  const handleFacebookSignIn = () => {
    providerSignIn(facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })

      .catch((error) => {
        console.error(error);
      });
  };

  //Github signin provider
  const handleGithubSignIn = () => {
    providerSignIn(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/");
      })

      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:w-9/12 lg:m-auto">
      <div className="p-6 m-auto">{/* <img src={image} alt="photo" /> */}</div>
      <div className="relative flex flex-col justify-center md:my-8 lg:my-4 lg:min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto  bg-white rounded-md shadow-xl lg:max-w-md">
          <h1 className="text-3xl font-semibold text-center text-sky-500 uppercase">
            Register
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2 text-left">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-800"
              >
                First Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="firstName"
              />
            </div>

            <div className="mb-2 text-left">
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-800"
              >
                Last Name
              </label>
              <input
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="lastName"
              />
            </div>

            <div className="mb-2 text-left">
              <label
                htmlFor="photoUpload"
                className="block text-sm font-semibold text-gray-800"
              >
                Upload Photo
              </label>
              <input
                required
                type="file"
                className="mt-2 bg-white"
                name="photo"
              />
            </div>

            <div className="mb-2 text-left">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="email"
                required
              />
            </div>

            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800 text-left"
              >
                Password
              </label>

              {showPass ? (
                <input
                  type="text"
                  required
                  className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-sky-400 focus:ring-sky-200  focus:outline-none focus:ring focus:ring-opacity-40"
                  name="password"
                />
              ) : (
                <input
                  type="password"
                  required
                  className="block w-full px-4 py-2 mt-2  bg-white border rounded-md focus:border-sky-400 focus:ring-sky-200  focus:outline-none focus:ring focus:ring-opacity-40"
                  name="password"
                />
              )}
            </div>

            <div className="my-4">
              <select name="option" className="select select-bordered w-full ">
                <option defaultValue="Buyer">Buyer</option>
                <option>Seller</option>
              </select>
            </div>

            <div className="text-left">
              <span className="text-red-600 text-xs">{error}</span>
            </div>

            <div className="text-left">
              {" "}
              <p href="#" className="">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="mr-2 text-xs"
                  onClick={handleShowPass}
                />
                <span className="text-md">Show password</span>{" "}
              </p>
            </div>

            <div className="text-left">
              {" "}
              <span href="#" className="">
                <input
                  onClick={handleAccepted}
                  type="checkbox"
                  name="checkbox"
                  id=""
                  className="mr-2 text-md"
                />
                Accept{" "}
                <Link
                  to="/terms"
                  className="text-md hover:underline text-sky-600"
                >
                  terms and conditions
                </Link>
              </span>
            </div>

            <div className="mt-6">
              {accepted ? (
                <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-600 rounded-md hover:bg-sky-500 focus:outline-none focus:bg-sky-600">
                  Register
                </button>
              ) : (
                <button
                  className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-300 rounded-md hover:bg-sky-300 focus:outline-none focus:bg-sky-300"
                  disabled
                >
                  Register
                </button>
              )}
            </div>
          </form>

          {/* social icon part */}
          <div className="flex mt-4 gap-x-2 justify-center">
            <button
              type="button"
              className="flex items-center justify-center w-2/12 p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-sky-200"
              onClick={handleGoogleSignIn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
            <button
              className="flex items-center justify-center w-2/12 p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-sky-200"
              onClick={handleGithubSignIn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
              </svg>
            </button>
            <button
              className="flex items-center justify-center w-2/12 p-2 border border-gray-600 rounded-md focus:ring-2 focus:ring-offset-1 focus:ring-sky-200"
              onClick={handleFacebookSignIn}
            >
              <FaFacebookF />
            </button>
          </div>

          <p className="mt-8 text-xs font-light text-center text-gray-700">
            {" "}
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-purple-600 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Regsiter;

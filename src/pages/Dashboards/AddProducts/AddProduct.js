import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../firebase/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);

  const imageHostKey = process.env.REACT_APP_imageHostKey;

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const phoneName = form.phoneName.value;
    const photo = form.photo.files[0];
    const ram = form.ram.value;
    const camera = form.camera.value;
    const processor = form.processor.value;
    const option = form.option.value;
    const condition = form.condition.value;
    const number = form.number.value;
    const location = form.location.value;
    const price = form.price.value;
    const purchase = form.purchase.value;
    const duration = form.duration.value;
    const message = form.message.value;
    console.log(
      phoneName,
      ram,
      camera,
      processor,
      condition,
      number,
      price,
      duration,
      message,
      purchase,
      location,
      option
    );

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    const post_date = `${date}.${month}.${year}`;

    const formData = new FormData();
    formData.append("image", photo);

    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const products = {
            category_name: option,
            condition_type: condition,
            mobile_number: number,
            location: location,
            description: message,
            purchase_year: purchase,
            price: price,
            used_duration: duration,
            verified: true,
            user_role: "seller",
            email: user?.email,
            date: post_date,
            seller_img: user?.photoURL,
            seller_name: user?.displayName,

            phone_details: {
              phone_name: phoneName,
              phone_img: data.data.display_url,
              phone_ram: ram,
              phone_camera: camera,
              phone_processor: processor,
            },
          };

          // save products information
          fetch("https://react-assignment-twelve-server.vercel.app/products", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(products),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              toast.success(`Product added successfully`, 5000);
              navigate("/my-products");
            });
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-1 lg:w-10/12 lg:m-auto
    py-10"
    >
      <div className="relative flex flex-col justify-center md:my-8 lg:my-4 lg:min-h-screen overflow-hidden">
        <div className="w-full p-6 m-auto  bg-white rounded-md shadow-xl lg:max-w-md">
          <h1 className="text-3xl font-semibold text-center text-amber-500 uppercase">
            Add Your Product
          </h1>
          <form className="mt-6" onSubmit={handleSubmit}>
            <div className="mb-2 text-left">
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-800"
              >
                Phone Name
              </label>
              <input
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="phoneName"
              />
            </div>
            <div className="mb-2 text-left">
              <label
                htmlFor="ram"
                className="block text-sm font-semibold text-gray-800"
              >
                Ram / Rom
              </label>
              <input
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="ram"
              />
            </div>
            <div className="mb-2 text-left">
              <label
                htmlFor="camera"
                className="block text-sm font-semibold text-gray-800"
              >
                Camera
              </label>
              <input
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="camera"
              />
            </div>
            <div className="mb-2 text-left">
              <label
                htmlFor="processor"
                className="block text-sm font-semibold text-gray-800"
              >
                Processor
              </label>
              <input
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="processor"
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
                htmlFor="processor"
                className="block text-sm font-semibold text-gray-800"
              >
                Price
              </label>
              <input
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="price"
              />
            </div>

            <div className="my-4">
              <h1 className="text-left font-semibold mb-1 text-sm">
                Select Categories
              </h1>
              <select
                name="option"
                className="select select-bordered w-full"
                required
              >
                <option defaultValue="Buyer">apple</option>
                <option>samsung</option>
                <option>oneplus</option>
                <option>huawei</option>
              </select>
            </div>

            <div className="my-4">
              <h1 className="text-left font-semibold mb-1 text-sm">
                Select Condition
              </h1>
              <select
                name="condition"
                className="select select-bordered w-full "
                required
              >
                <option defaultValue="Buyer">excellent</option>
                <option>good</option>
                <option>fair</option>
              </select>
            </div>

            <div className="mb-2 text-left">
              <label
                htmlFor="processor"
                className="block text-sm font-semibold text-gray-800"
              >
                Phone Number
              </label>
              <input
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="number"
              />
            </div>

            <div className="mb-2 text-left">
              <label
                htmlFor="processor"
                className="block text-sm font-semibold text-gray-800"
              >
                Location
              </label>
              <input
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="location"
              />
            </div>

            <div className="mb-2 text-left">
              <label
                htmlFor="processor"
                className="block text-sm font-semibold text-gray-800"
              >
                Purchase Year
              </label>
              <input
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="purchase"
              />
            </div>

            <div className="mb-2 text-left">
              <label
                htmlFor="processor"
                className="block text-sm font-semibold text-gray-800"
              >
                Used Duration
              </label>
              <input
                required
                type="text"
                className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"
                name="duration"
              />
            </div>

            <textarea
              className="textarea textarea-bordered h-40 w-full"
              placeholder="Product Description"
              name="message"
              required
            ></textarea>

            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-sky-600 rounded-md hover:bg-sky-500 focus:outline-none focus:bg-sky-600">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;

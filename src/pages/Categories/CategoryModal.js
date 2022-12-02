import React, { useContext } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";

const CategoryModal = ({ appointment, setAppointment }) => {
  const { price, phone_details, _id, bookedId } = appointment;

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleBookNow = (event) => {
    event.preventDefault();
    const form = event.target;
    const location = form.location.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();

    const post_time = `${date}.${month}.${year}`;

    const orders = {
      item_name: phone_details.phone_name,
      price: price,
      buyer_name: name,
      email: email,
      mobile_number: phone,
      meet_location: location,
      message: message,
      date: post_time,
      bookedId: _id,
    };

    fetch("https://react-assignment-twelve-server.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orders),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setAppointment(null);
          toast.success("Order confirmed");
          navigate("/products");
        } else {
          toast.error(data.message);
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="category-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="category-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl font-bold text-rose-500 capitalize mb-5">
            {phone_details?.phone_name}
          </h3>
          <div className="text-left font-semibold bg-stone-100 py-3 pl-2 rounded-lg ">
            <h4 className="ml-2"> {price}/-</h4>
          </div>

          <form
            onSubmit={handleBookNow}
            className="grid grid-cols-1 gap-3 mt-2"
          >
            <input
              name="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your Name"
              className="input w-full input-bordered capitalize"
            />
            <input
              name="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />

            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <input
              name="location"
              type="text"
              placeholder="Meeting Location"
              className="input w-full input-bordered"
            />

            <textarea
              className="textarea textarea-bordered h-40"
              placeholder="Message for Seller"
              name="message"
            ></textarea>

            <br />
            {user?.uid ? (
              <>
                {bookedId ? (
                  <>
                    <input
                      className="bg-gray-300 py-2 text-lg w-full cursor-pointer rounded-lg shadow-md font-semibold "
                      type="submit"
                      disabled
                      value="Already Booked"
                    />
                  </>
                ) : (
                  <>
                    <input
                      className="bg-sky-300 hover:bg-sky-400 py-2 text-lg w-full cursor-pointer rounded-lg shadow-md font-semibold "
                      type="submit"
                      value="Submit"
                    />{" "}
                  </>
                )}
              </>
            ) : (
              <>
                <div>
                  <Link to="/login">
                    <button className="bg-amber-300 hover:bg-amber-400 w-full py-3 capitalize font-semibold text-lg ">
                      Please Login First
                    </button>{" "}
                  </Link>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default CategoryModal;

import React, { useContext } from "react";
import toast from "react-hot-toast";
import { FaHandHolding } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../firebase/AuthProvider";

const BookModal = ({ appointment, setTreatment, selectedDate, refetch }) => {
  // treatment is just another name of appointmentOptions with name, slots, _id
  // const { name: treatmentName, slots, price } = treatment;
  const { condition_type, location, price, phone_details, used_duration } =
    appointment;

  const { user } = useContext(AuthContext);

  const handleBookNow = (event) => {
    event.preventDefault();
    const form = event.target;
    const location = form.location.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const message = form.message.value;

    const booking = {
      item_name: phone_details.phone_name,
      price: price,
      buyer_name: name,
      email: email,
      mobile_number: phone,
      meet_location: location,
      message: message,
    };
    console.log(booking);

    // TODO: send data to the server
    // and once data is saved then close the modal
    // and display success toast
    // fetch("http://localhost:5000/bookings", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   // body: JSON.stringify(booking),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.acknowledged) {
    //       setTreatment(null);
    //       toast.success("Booking confirmed");
    //       refetch();
    //     } else {
    //       toast.error(data.message);
    //     }
    //   });
  };

  return (
    <>
      <input type="checkbox" id="bookNow-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="bookNow-modal"
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
                <input
                  className="bg-sky-300 hover:bg-sky-400 py-2 text-lg w-full cursor-pointer rounded-lg shadow-md font-semibold "
                  type="submit"
                  value="Submit"
                />
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

export default BookModal;

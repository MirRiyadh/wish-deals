import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../../layout/Loading/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_PAYMENT_KEY);

console.log(stripePromise);

const Payment = () => {
  const payment = useLoaderData();
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  return (
    <div className="w-11/12 md:w-10/12 lg:w-8/12 m-auto text-left pb-96 pt-5">
      <h1 className="text-2xl font-semibold  capitalize">
        Payment for {`${payment.name} ${payment.ram}`}
      </h1>
      <h3 className="text-xl capitalize">Price : {`${payment.price}`}</h3>
      <h3 className="text-xl capitalize">
        Condition : {`${payment.condition_type}`}
      </h3>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm payment={payment} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;

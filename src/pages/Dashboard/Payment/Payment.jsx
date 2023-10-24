import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

//Todo: publish key?

const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK)
function Payment() {
  return (
    <div className="w-full">
        <SectionTitle subHeading= 'Please process the payment' heading= "Payment"></SectionTitle>
        <Elements stripe={stripePromise}>
            <CheckOut></CheckOut>
            </Elements>
    </div>
  )
}

export default Payment;
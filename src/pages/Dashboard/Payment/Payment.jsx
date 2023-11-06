
import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../components/SectionTitle';
import CheckOutForm from './CheckOutForm';
import { Elements } from '@stripe/react-stripe-js';
import useCart from '../../../hooks/useCart';
// TODO : publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);
function Payment() {
  const [cart]= useCart();
  const total = cart.reduce((sum,item)=>sum + item.price,0);
  const price = parseFloat(total.toFixed(2));
  return (
    <div className='w-full'>
      <SectionTitle  subHeading= 'Please Process ' heading= 'Payment'></SectionTitle>
      <Elements stripe={stripePromise}>
      <CheckOutForm cart={cart} price={price}></CheckOutForm>
      </Elements>
    </div>
  )
}

export default Payment;
import {useStripe,CardElement,useElements} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";

import './CheckOutForm.css'

function CheckOutForm({price, cart}) {
  const stripe = useStripe();
  const {user}=useAuth();
  const elements = useElements();
  const [cardError, setCardError]= useState('');
  const [axiosSecure]=useAxiosSecure();
  const [clientSecret, setClientSecret]= useState('')
  const [processing, setProcessing]= useState(false);
  const [transactionId, setTransactionId]= useState('');


  useEffect(()=>{
    if(price > 0){
      axiosSecure.post('/create-payment-intent', {price})
        .then(res => {
          console.log(res.data)
          setClientSecret(res.data.clientSecret);
        })
    }
  },[])

  const handleSubmit = async(event)=>{
    event.preventDefault();
    if(!stripe || !elements){
      return;
    }
    const card = elements.getElement(CardElement);
    

    if (card === null) {
      return;
    }
   
    const {error,}= await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if(error){
      console.log(error)
      setCardError(error.message)
    }else{
      setCardError('');
      // console.log('Payment method', paymentMethod)
    }
      setProcessing(true);
    const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
     clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );
    if(confirmError){
      console.log(confirmError)
    }
    console.log('payment intent', paymentIntent)
    
    setProcessing(false);
    if(paymentIntent.status === 'succeeded'){
      setTransactionId(paymentIntent.id);
      // save payment infor to the server
      const payment = {
        email: user?.email, 
        transactionId:paymentIntent.id,
        price,
        date: new Date(),
        status: 'service pending', 
        quantity: cart.length,
        menuItems: cart.map(item=> item.menuItemId),
        cartItems: cart.map(item=> item._id), 
        itemNames: cart.map(item => item.name)
      
      }
      axiosSecure.post('/payments', payment)
      .then(res =>{
        console.log(res.data)
        if(res.data.insertedId){
          // display confirm
        }
      })
    }

  }
  return (
    <>
    <form className="w-2/3 m-8" onSubmit={handleSubmit}>
    <CardElement
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
    <button className="btn btn-primary mt-4 btn-sm" type="submit" disabled={!stripe || ! clientSecret || processing}>
      Pay
    </button>
  </form>
  {
    cardError && <p className="text-red-500 ml-4">{cardError}</p>
  }
  {
    transactionId && <p className="text-green-500">Transation completed with transactionId : {transactionId}</p>
  }
    </>
  )
}

export default CheckOutForm;
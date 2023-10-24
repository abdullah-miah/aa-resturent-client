import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";


function CheckOut() {
    const stripe = useStripe()
    const elements = useElements();
  
     const handleSubmit =async(event)=>{
        event.preventDefault();
        if(!stripe || elements){
            return
        }
        const card = elements.getElement(CardElement);
        
        if(card === null){
            return
        }
        console.log(card);
        const {error, paymentMethod}= await stripe.createPaymentMethod({
            type:'card',
            card
        })
        if(error){
            console.log('error', error)
        }else{
            console.log('paymentMethod', paymentMethod)
        }
     }

  return (
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
    <button className="btn  btn-primary btn-sm mt-4" type="submit" disabled={!stripe}>
      Pay
    </button>
  </form>
  )
}

export default CheckOut;
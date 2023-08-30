
import { loadStripe } from '@stripe/stripe-js';

export const chackout =async ({lineItems}) => {
    let stripePromise =null
    const getstripe =()=>{
        if(!stripePromise){
            stripePromise =loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY)
        }
        return stripePromise
    }
    const stripe =await getstripe()
    await stripe.redirectToCheckout({
        mode: "payment",
        lineItems,
        successUrl: `${window.location}?success=true`,
        cancelUrl: window.location.origin,
      });
};

export default chackout;
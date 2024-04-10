
import { useSelector } from "react-redux"
import { CheckoutForm ,SectionTitle ,CartTotals } from "../components"
import {toast} from 'react-toastify'
import { redirect } from "react-router-dom"
import axios from "axios"



export const loader = (store) => () =>{
  const user = store.getState().userState.user
  if(!user){
    toast.warn('You must be logged in to checkout');
    return redirect('/login')
  }
   if (user.role === 'admin') {
    toast.warn('Admins are not allowed to checkout');
    return redirect('/');
  }
  return null;
}





const Checkout = () => {
  const cartTotal = useSelector((state)=>state.cartState.cartTotal)
  console.log(cartTotal);
  const cartItems=useSelector((state)=>state.cartState.cartItems)
  console.log(cartItems);
  if(cartTotal === 0 || cartTotal <=0){
    return <SectionTitle text='Your Cart is Empty'/>
  }
  return (
    <>
    <SectionTitle text='place your order'/>
    <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
      <CheckoutForm />
      <CartTotals/>
    </div>
    </>
  )
}
export default Checkout
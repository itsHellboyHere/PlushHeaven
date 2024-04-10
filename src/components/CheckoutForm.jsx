import { Form,redirect } from "react-router-dom"
import Forminput from "./Forminput"
import SubmitBtn from "./SubmitBtn"

import { customFetch ,formatPrice } from "../utils"
import { toast } from "react-toastify"
import { clearCart } from "../features/cart/cartSlice"
import axios from "axios"

export const action =(store ,queryClient) => async ({request})=>{
  const formData = await request.formData()
  const {name,address}  = Object.fromEntries(formData)
  const user = store.getState().userState.user;
  const {cartItems,orderTotal ,numItemsInCart ,shipping,tax} =store.getState().cartState
  console.log(tax);
  const info ={
    items:cartItems ,shippingFee:shipping,tax,name,address
  }

  try {
    const response = await customFetch.post("/api/v1/orders",info,
    {withCredentials:true})
    
    console.log(response);
    queryClient.removeQueries(['orders'])
    store.dispatch(clearCart())
    toast.success('order placed successfully')
    return redirect('/orders/showAllMyOrders');
  } catch (error) {
  
    const errorMessage = error?.response?.data?.msg || 'there was an error placing your order'
    toast.error(errorMessage);
    
    if(error?.response?.status ===401 || 403){
      return redirect(
        '/login'
      )
    }
    return null;
  }
   
} 
const CheckoutForm = () => {
  return (
    <Form method="POST" className="
    flex flex-col gap-y-4">
      <h4 className="font-medium text-xl capitalize">shipping information</h4>
      <Forminput label= 'first name' name='name' type='text'/>
      <Forminput label= 'address' name ='address' type='text' />
      <div className="mt-4">
        <SubmitBtn text='place your order'/>
      </div>
    </Form>
  )
}
export default CheckoutForm
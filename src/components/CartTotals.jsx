import { useSelector } from "react-redux"
import { formatPrice } from "../utils";
import { toast } from "react-toastify"
import { redirect } from "react-router-dom"

const CartTotals = () => {
    // console.log(useSelector((state) => state.cartState));
    const {cartTotal , shipping ,tax , orderTotal} =useSelector((state)=>state.cartState);
    console.log(shipping);
   
  return (
    <div className="card bg-base-200">
        <div className="card-body">
            {/* SUBTOTAL */} 
            <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>Subtotal</span>
                <span className="font-medium">{formatPrice(cartTotal)}</span>
            </p>
            {/* SHIPPING */} 
            <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>Shipping</span>
                <span className="font-medium">{formatPrice(shipping)}</span>
            </p>
            {/* TAX */} 
            <p className="flex justify-between text-xs border-b border-base-300 pb-2">
                <span>Tax</span>
                <span className="font-medium">{formatPrice(tax)}</span>
            </p>
            {/* ORDER TOTAL */} 
            <p className="flex justify-between text-sm mt-4  pb-2">
                <span>Order Total</span>
                <span className="font-medium">{formatPrice(orderTotal)}</span>
            </p>
        </div>
    </div>
  )
}
export default CartTotals
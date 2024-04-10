import { useSelector } from "react-redux"
import {toast} from 'react-toastify'
import { redirect } from "react-router-dom"


//  export const loader = (store) => () =>{
//   const user = store.getState().userState.user
//   console.log(user.role);
//   if(!user){
//     toast.warn('You must be logged in');
//     return redirect('/login')
//   }
//    if (user.role !== 'admin') {
//     toast.warn('Only Admin is allowed to createProduct');
//     return redirect('/');
//   }
//   return null;
// }

const ProductCreate = () => {

 
  return (
    <div>ProductsCreate</div>
  )
}
export default ProductCreate
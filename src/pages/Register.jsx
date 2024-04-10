import {Forminput,SubmitBtn}  from "../components"
import { Form ,Link, redirect } from "react-router-dom"
// import { customFetch } from "../utils"
import { toast } from "react-toastify"
import axios from "axios"


export const action = async ({request})=>{
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  console.log(data);
  try {
    const response = await axios.post('https://e-commerce-api-nqfv.onrender.com/api/v1/auth/register',data)
    console.log(response);
    toast.success('Account Created Successfully')
    return redirect('/login')
  } catch (error) {
    console.log(error.response.data.msg);
    const errorMessage = error?.response?.data?.msg || 'please double check your credentials'
    toast.error(errorMessage);
     return null;
  }
 
}

const Register = () => {
  return (
    <section className="h-screen grid place-items-center ">
      <Form method="post" className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4">
        <h4 className="text-center text-3xl font-bold"> Register</h4>
        <Forminput type ='text' label='name' name='name'  />
        <Forminput type ='email' label='email' name='email'  />
        <Forminput type ='password' label='password' name='password'  />
        <div className="mt-4">
          <SubmitBtn text='register'></SubmitBtn>
        </div>
        <p className="text-center ">
            Already a member? <Link to='/login' className="ml-2 link link-hover link-primary capitalize">
              login
              </Link>
          </p>
      </Form>

    </section>
  )
}
export default Register
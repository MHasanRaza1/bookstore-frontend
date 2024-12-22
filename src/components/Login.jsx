import React from 'react'
import { Link } from 'react-router'
import { useForm } from "react-hook-form"
import { postData } from '../api/axios'
import toast from 'react-hot-toast'

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit = async (data) => {
        const {email,password} = data;
        const userInfo = {
            email: email,
            password: password
        }
        await postData('/users/login',userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('User successfully login!');
                document.getElementById("my_modal_3").close()
                window.location.reload();
            }
            localStorage.setItem("user",JSON.stringify(res.data.user));
        }).catch((err)=>{
            console.log(err)
            toast.error('Error:',err);
        })
    }
    return (
        <div className='dark:bg-slate-900 dark:text-white'>
            <dialog id="my_modal_3" className="modal ">
                <div className="modal-box dark:bg-slate-900 dark:text-white">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={() => document.getElementById("my_modal_3").close()}
                        >✕</button>
                    
                    <h3 className="font-bold text-lg">Login</h3>
                    {/* Email */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br />
                        <input
                            type="email"
                            placeholder='Enter your email'
                            {...register("email", { required: true })}
                            className='w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' />
                            <br />{errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    {/* Password */}
                    <div className='mt-4 space-y-2'>
                        <span>Password</span><br />
                        <input
                            type="password"
                            placeholder='Enter your password'
                            {...register("password", { required: true })}
                            className='w-full px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' />
                            <br />{errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    {/* Button */}
                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Login</button>
                        <p>Not registered? <Link to="/signup" className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                    </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login
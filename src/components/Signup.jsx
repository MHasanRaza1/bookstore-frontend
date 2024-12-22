import React from 'react'
import { Link } from 'react-router'
import { useForm } from "react-hook-form"
import { postData } from '../api/axios'
import toast from 'react-hot-toast'

const Signup = () => {
    const {
            register,
            handleSubmit,
            watch,
            formState: { errors },
          } = useForm()
    
    const onSubmit = async (data) => {
        const {fullname,email,password} = data;
        const userInfo = {
            fullname: fullname,
            email: email,
            password: password
        }
        await postData('/users/signup',userInfo)
        .then((res)=>{
            console.log(res.data)
            if(res.data){
                toast.success('User successfully created!');
            }
            localStorage.setItem("user",JSON.stringify(res.data.user));
        }).catch((err)=>{
            toast.error('Error:',err);
        })
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <div id="my_modal_3" className="border-[2px] shadow-md rounded-md p-5">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className="font-bold text-lg">SignUp</h3>
                    {/* Email */}
                    <div className='mt-4 space-y-2'>
                        <span>Email</span><br />
                        <input
                            type="email"
                            placeholder='Enter your email'
                            {...register("email", { required: true })}
                            className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' />
                            <br />{errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    {/* Name */}
                    <div className='mt-4 space-y-2'>
                        <span>Name</span><br />
                        <input
                            type="text"
                            placeholder='Enter your fullname'
                            {...register("fullname", { required: true })}
                            className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' />
                            <br />{errors.fullname && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    {/* Password */}
                    <div className='mt-4 space-y-2'>
                        <span>Password</span><br />
                        <input
                            type="password"
                            placeholder='Enter your password'
                            {...register("password", { required: true })}
                            className='w-80 px-3 py-1 border rounded-md outline-none dark:bg-slate-900 dark:text-white' />
                            <br />{errors.password && <span className='text-sm text-red-500'>This field is required</span>}
                    </div>
                    {/* Button */}
                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>Signup</button>
                        <p>Have account? <Link to="/" className='underline text-blue-500 cursor-pointer'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
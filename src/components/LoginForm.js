import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: "", password: ""
    })

    const [showPassword, setShowPassword] = useState(false);
    const changeHandler = (event) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }
    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");

    }
    return (
        <div >
            <form
                className='flex flex-col w-full gap-y-4 top-6'
                onSubmit={submitHandler}>
                <label className='w-full'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sub className='text-pink-200'>*</sub></p>
                    <input className='w-full bg-richblack-700 rounded-[0.5rem] text-richblack-5 p-[12px]' type="text" placeholder='Enter Email' required value={formData.email} onChange={changeHandler} name="email" />
                </label>
                <label className='w-full relative'>
                    <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Password <sub className='text-pink-200'>*</sub></p>
                    <input className='w-full bg-richblack-700 rounded-[0.5rem] text-richblack-5 p-[12px]' type={showPassword ? ("text") : ("Password")} placeholder='Enter Password' required value={formData.password} onChange={changeHandler} name="password" />
                    <span className='absolute right-3 top-[39px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                        {
                            showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                        }
                    </span>
                    <Link to="#">
                        <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>Forgot password</p>
                    </Link>
                </label>
                <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Sign In</button>
            </form>
        </div>
    )
}

export default LoginForm
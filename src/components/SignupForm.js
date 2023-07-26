import React, { useState } from 'react'
import { toast } from 'react-hot-toast'

import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

const SignupForm = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [accountType, setAccountType] = useState("student")
    const changeHandler = (event) => {
        setFormData((prevData) => (
            {
                ...prevData,
                [event.target.name]: event.target.value
            }
        ))
    }
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const submitHandler = (event) => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password do not match!");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        const finalData = {
            ...accountData,
            accountType
        }
        console.log('Printing Final Account Data', finalData)
        navigate("/dashboard");
    }
    return (
        <div>
            <div className='flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max'>
                <button className={`${accountType === "student" ? "bg-richblack-900 text-richblack-5" : " bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccountType("student")}>Student</button>
                <button className={`${accountType === "instructor" ? "bg-richblack-900 text-richblack-5" : " bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`} onClick={() => setAccountType("instructor")}>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                {/* First and Last Name */}
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>First Name<sup className='text-pink-200'>*</sup></p>

                        <input
                            className='w-full bg-richblack-700 rounded-[0.5rem] text-richblack-5 p-[12px]'
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={changeHandler}
                            required
                            placeholder='Enter first name'
                        />
                    </label>
                    <label className='w-full'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Last Name<sup className='text-pink-200'>*</sup></p>

                        <input
                            className='w-full bg-richblack-700 rounded-[0.5rem] text-richblack-5 p-[12px]'
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={changeHandler}
                            required
                            placeholder='Enter last name'
                        />
                    </label>
                </div>
                {/* Email */}
                <div className='mt-[20px]'>
                    <label className='w-full mt-[20px]'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Email Address<sup className='text-pink-200'>*</sup></p>

                        <input
                            className='w-full bg-richblack-700 rounded-[0.5rem] text-richblack-5 p-[12px]'
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={changeHandler}
                            required
                            placeholder='Enter email address'
                        />
                    </label>
                </div>

                {/* password and confirm password */}
                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Create Password <sup className='text-pink-200'>*</sup></p>

                        <input
                            className='w-full bg-richblack-700 rounded-[0.5rem] text-richblack-5 p-[12px]'
                            type={showPassword ? ("text") : ("password")}
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                            required
                            placeholder='Enter Password'
                        />
                        <span className='absolute right-3 top-[39px] cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                            {
                                showPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>
                    </label>
                    <label className='w-full relative'>
                        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375rem]'>Confirm Password<sup className='text-pink-200'>*</sup></p>

                        <input
                            className='pr-10 w-full bg-richblack-700 rounded-[0.5rem] text-richblack-5 p-[12px]'
                            type={showConfirmPassword ? ("text") : ("password")}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            required
                            placeholder='Enter Confirm Password'
                        />
                        <span className='absolute right-3 top-[39px] cursor-pointer' onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {
                                showConfirmPassword ? (<AiOutlineEye fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />)
                            }
                        </span>
                    </label>
                </div>
                <button className='w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>Create Account</button>
            </form>
        </div>
    )
}

export default SignupForm
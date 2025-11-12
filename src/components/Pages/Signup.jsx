import React from 'react'
import { signup } from '../../features/authSlice';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

const Signup = () => {
    let {register,reset,handleSubmit}=useForm();
    
    let dispatch =useDispatch();



    let onsubmit = (data)=>{

        dispatch(signup(data))
        reset()

    }   
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col justify-center items-center px-4">
      
      {/* Header */}
      <div className="text-center mb-8 ">
        <h1 className="font-bold text-3xl text-gray-800 mb-5">Create your account</h1>
        <p className="text-gray-600 mt-1">
          Get started with our platform by creating a new account.
        </p>
      </div>

      {/* Form Container */}
      <form onSubmit={handleSubmit(onsubmit)}
      className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <p className="text-gray-500 text-sm mt-1">Sign up to get started </p>
        </div>

        {/* Full Name */}
        <div>
          <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
            Full Name
          </label>
          <input
          {...register("name",{required:true})}

            id="name"
            type="text"
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
            Email
          </label>
          <input
            {...register("email",{required:true})}

            id="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-gray-700 font-medium mb-1">
            Password
          </label>
          <input
          {...register("password",{required:true})}

            id="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Signup Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Sign Up
        </button>


        {/* Footer Text */}
        <p className="text-center text-sm text-gray-500 mt-2">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </a>
        </p>
      </form>
     
    </div>
  )
}

export default Signup
'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';


const LoginPage = () => {

  const {register,handleSubmit,formState:{
    errors
  }} = useForm()

  const handleLoginFun = async (datum) => {
      
    const {email, password} = datum;

      console.log(datum);

      const {data,error} = await authClient.signIn.email({
    email: email, // required
    password: password, // required
    rememberMe: true,
    callbackURL: "/",
      })

      console.log(data,error);

  }

    return (
        <div className="container mx-auto min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white w-full max-w-md p-8 rounded-md shadow">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Login your account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFun)}>
          {/* Email */}
          <div>
            <label className="block text-xl mb-1">Email address</label>
            <input
              type="email"
              name='email'
              {...register("email",{required: "email is required"})}
              placeholder="Enter your email address"
              className="w-full px-3 py-2 border rounded bg-gray-100 focus:outline-none"
            />
            {
              errors.email && <p className='text-pink-600'>{errors.email.message}</p>
            }
          </div>

          {/* Password */}
          <div>
            <label className="block text-xl mb-1">Password</label>
            <input
              type="password"
              name='password'
              {...register("password",{required:"password is required"})}
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded bg-gray-100 focus:outline-none"
            />
            {
              errors.password && <p className="text-red-500 ">{errors.password.message}</p>
            }
            {/* {errors.password && errors.password.type === "password is required" && (
              <p className='text-red-300'>{errors.password.message}</p>
            )} */}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm mt-4">
          Don’t Have An Account?{" "}
      <Link href={'/register'}><span className="text-red-500 cursor-pointer">Register</span> </Link>    
        </p>
      </div>
    </div>
    );
};

export default LoginPage;
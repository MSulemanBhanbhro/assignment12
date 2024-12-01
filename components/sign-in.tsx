"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { signIn } from "next-auth/react";

export default function SignIn() {
  return (

    <>
      <div className='flex justify-center items-center`'>
        <Image src={'/suleman.png'} width={200} height={200} alt='suleman logo' />

      </div>

      <div className='w-[400px] h-[500px]  m-auto mt-[40px] rounded-[20px] bg-[#F8F8F8] '>

        <div className='p-[20px]'>
          <h1 className='text-[30px] text-center text-black font-bold'>Create an Account</h1>


          <div>
            <input type="text" placeholder='Email Address*' className='w-full h-[50px] bg-white rounded-[5px] border mt-[20px] px-[20px] outline-none' />
          </div>
          <div className='my-[20px]'>
            <button className='text-[18px] text-white  bg-[#0E9272] w-full h-[50px] rounded-[5px]'>Continue</button>
          </div>
          <div className='text-center text-black text-[15px]'>
            <p>Already have an account? <Link href={'/login'} className='text-[#0E9272]'>Login</Link></p>
          </div>
          <div className='flex items-center justify-center gap-3 my-6'>
            <div className='h-[1px] w-full  bg-[#0E9272]'></div>
            <p className='text-black text-sm'>OR</p>
            <div className='h-[1px] w-full bg-[#0E9272]'></div>
          </div>

          <div className='my-[20px]'>
            <button onClick={() => signIn("github")} className='text-[18px]  px-4 text-black bg-white border  hover:bg-[#E5E5E5] w-full h-[50px] rounded-[5px]'>Continue with Github</button>
          </div>

          <div className='my-[20px]'>
            <button className='text-[18px]  px-4 text-black bg-white border  hover:bg-[#E5E5E5] w-full h-[50px] rounded-[5px]'>Continue with Google</button>
          </div>

        </div>
      </div>

    </>

  );
}



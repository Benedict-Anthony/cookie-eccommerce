import React from 'react';
import loginImage from "../assets/login.jpg"
import { Button } from '../components/Button';

import { MdOutlineFacebook } from "react-icons/md"
import { AiFillGoogleCircle } from "react-icons/ai"
import { FaEnvelope } from "react-icons/fa"

const SignIn = () => {
    return (
        <main className="container mx-auto px-3 ptop">

            <h2 className="text-xl text-center mb-5 text-secondary">Login to continue</h2>

            <section className="flex flex-col justify-center items-center md:flex-row-reverse  gap-10  relative">
                <div className="w-full absolute top--1 z--10 showcaseimg ">
                    <img src={loginImage} alt="Login in to continue" className='w-full rounded-md opacity-90' />
                </div>

                <form className="w-full bg-gray-100 rounded-sm py-4 px-2 drop-shadow-md md:w-[30rem]">
                    <div className='flex flex-col justify-start items-start mb-5'>
                        <label htmlFor="email" className='text-xl mb-2 text-orange inline-block'>Email</label>
                        <input type="text" className="drop-shadow-lg px-2 py-3 w-full rounded-md outline-0 text-md" />
                    </div>

                    <div className='flex flex-col justify-start items-start'>
                        <label htmlFor="email" className='text-xl mb-2 text-orange inline-block'>Password</label>
                        <input type="password" className="drop-shadow-lg px-2 py-3 w-full rounded-md outline-0 text-md" />
                    </div>

                    <div>
                        <Button text={"Login"} />
                    </div>

                    <div className="w-full bg-gray-900 h-[1px] mt-10 opacity-25"></div>
                    {/* <h2 className="text-xl mb-5 text-secondary">Continue with</h2> */}


                    <a href="/" className="inline-flex justify-center gap-3 items-center p-3 text-center text-xl text-white  bg-secondary rounded-md w-full mx-auto my-4 hover:bg-white:hover:text-orange">Continue with email <FaEnvelope /></a>

                    <div className="flex justify-center items-center gap-10 mt-5">
                        <a href={"https://facebook.com/"} target="_blank" rel="noreferrer" ><MdOutlineFacebook className="text-3xl text-orange hover:text-secondary cursor-pointer" /></a>
                        <a href={"https://google.com"} target="_blank" rel="noreferrer" ><AiFillGoogleCircle className="text-3xl text-orange hover:text-secondary cursor-pointer" /></a>
                    </div>
                </form>
            </section>
        </main>
    )
}

export default SignIn
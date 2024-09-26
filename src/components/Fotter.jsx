import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


const Fotter = () => {
    return (
        <div className='bg-gray-700 px-[5%]  pb-3 lg:px-[10%]'>
            {/* Coloumns of fotter */}
            <div className='text-white flex md:flex-row md:justify-between flex-col gap-8 pt-20 pb-10 text-sm '>

                <div className='sm:w-[250px] text-center mx-auto'>
                    <h1 className='text-white text-2xl mb-4'>Join our Website</h1>
                    <p className='text-sm'>Drop your email below to get update about us, lastest offers, tips, and more!</p>
                    <div className='flex items-center gap-2 pr-2 bg-white mt-4 rounded overflow-hidden'>
                        <input type="email" placeholder='Enter your email' className='p-2 text-black  text-xs w-full outline-none' />
                        <FaArrowRight size={'18px'} color='black' className='cursor-pointer'/>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-y-8 lg:gap-16 md:gap-7 md:flex '>
                    <div>
                        <h1 className='font-semibold text-lg mb-3'>Product Links</h1>
                        <p>Categories</p>
                        <p>New Arrival</p>
                        <p>Features</p>
                        <p>Collections</p>
                    </div>

                    <div>
                        <h1 className='font-semibold text-lg mb-3'>Company</h1>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Contact</p>
                        <p>Services</p>
                    </div>

                    <div>
                        <h1 className='font-semibold text-lg mb-3'>Support</h1>
                        <p>Support Center</p>
                        <p>FAQ</p>
                        <p>Privacy Policy</p>
                        <p>Term of</p>
                        <p>Service</p>
                    </div>

                    <div>
                        <h1 className='font-semibold text-lg mb-5'>Get in Touch</h1>
                        <div className='flex space-x-5'>
                            <BsInstagram size={'20px'} className='cursor-pointer hover:text-gray-400'/>
                            <BsTwitterX size={'20px'} className='cursor-pointer hover:text-gray-400'/>
                            <FaFacebookSquare size={'20px'} className='cursor-pointer hover:text-gray-400'/>
                        </div>
                    </div>

                </div>
            </div>

            <p className='text-center text-xs text-white'>Copyright © 2024 All Right Reseved</p>
        </div>
    )
}

export default Fotter;
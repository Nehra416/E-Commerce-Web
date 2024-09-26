import React from 'react'
import cartPicture from '../Img/cartPicture.png'
import phone from "../Img/phone1.png"
import { SiTicktick } from "react-icons/si";


const Cart = () => {
    return (
        <div className='bg-gray-100 w-full top-0'>
            {/* <div className='flex flex-col gap-2 bg-white mx-[2vw] py-[6vh] shadow-sm justify-center items-center absolute w-[96vw] top-[15vh]'>
                <img src={cartPicture} alt="Cart Image" className='h-44 mb-2' />
                <span className='text-xl'>Your cart is empty!</span>
                <span className='text-sm'>Add items to it now</span>
                <button className='px-5 rounded-sm shadow-sm text-white bg-[#0088ff] hover:bg-[#2298ff] py-1 mt-3'>Shop now</button>
            </div> */}

            <div>
                <div className='flex gap-2 pt-[14vh] pb-20'>
                    <div>
                        {
                            [1, 2, 3, 4,].map((item, index) => {
                                return (
                                    <div className='flex gap-5 mx-[2vw] shadow-md bg-white p-4 py-3 w-[65vw] mb-2 rounded-md'>
                                        <img src={phone} alt="Product_Img" className='h-36' />
                                        <div className='flex flex-col gap-3'>
                                            <span className='hover:text-blue-500 cursor-pointer truncate '>Nothing Phone (2a) 5G (Black, 128 GB)</span>
                                            <span className='font-medium text-lg'>₹23,999</span>
                                            <div className='flex gap-2 items-center'>
                                                <button className='w-8 h-8 border flex items-center justify-center text-2xl bg-gray-50 cursor-pointer rounded-full'>-</button>
                                                <span className='border px-3 py-1'>1</span>
                                                <button className='w-8 h-8 border flex items-center justify-center text-2xl bg-gray-50 cursor-pointer rounded-full'>+</button>
                                                <span className='ml-5 cursor-pointer hover:text-blue-500 font-medium'>REMOVE</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <div>
                        <div className='bg-white w-[30vw] mr-2 shadow-md h-[65vh] fixed top-[14vh]  right-0 rounded-md'>
                            <div>
                                <div className='text-xl font-medium text-gray-500 border-b p-3 border-gray-300'>PRICE DETAILS</div>
                                <div className='my-4 mx-3 pb-3 flex flex-col border-b-2 border-dotted gap-3'>
                                    <div className='flex justify-between'>
                                        <span>Price (4 items)</span>
                                        <span>₹48,998</span>
                                    </div>
                                    <div className='flex justify-between'>
                                        <span>Delivery Charges</span>
                                        <span className='text-green-500'><span className='text-gray-500 mr-1 text-sm'>₹120</span>Free</span>
                                    </div>
                                </div>
                                <div className='m-4 pb-3 flex justify-between text-lg font-medium border-b-2 border-dotted'>
                                    <span>Total Amount</span>
                                    <span>₹40,606</span>
                                </div>
                            </div>

                            <div className='flex mt-[25vh] ml-[2vw] items-center gap-2'>
                                <SiTicktick size={'60px'} />
                                <span className='text-gray-500 font-medium lg:text-base text-sm'>Safe and Secure Payments.Easy returns.100% Authentic products.</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='flex justify-end px-4 py-3 bg-white fixed bottom-0 w-[65vw] shadow-2xl shadow-black ml-[2vw] rounded-md'>
                    <button className='bg-orange-600 hover:bg-orange-700 text-white px-9 font-medium py-2 rounded-sm shadow'>PLACE ORDER</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
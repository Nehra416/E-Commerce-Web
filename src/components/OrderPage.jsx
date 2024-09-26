import React, { useState } from 'react'
import { Button } from './ui/button'
import { TiTick } from "react-icons/ti";
import { FaBell, FaRegBell, FaStar } from 'react-icons/fa';
import { TbTruckDelivery } from 'react-icons/tb';
import { CiStar } from 'react-icons/ci';
import iphone from '../Img/iphone.png'
import { SiTicktick } from 'react-icons/si';

const OrderPage = () => {
    const [quantity, setQuantity] = useState(1);

    const increment = () => {
        setQuantity(quantity + 1);
    };

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    return (
        <div className=' bg-gray-100 pb-5 h-[100vh] flex'>

            {/* for Mobile number */}
            <div>
                <div className='w-[64vw] mx-[2vw] pt-[14vh] '>

                    {/* when phone number is already field */}
                    <div className='flex justify-between items-center px-3 py-2 bg-white border rounded'>
                        <div className='flex items-center gap-3'>
                            <span className='text-sm bg-gray-200 w-5 h-5 flex justify-center items-center rounded-sm'>1</span>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium flex gap-2 items-center text-gray-500'>LOGIN <span className=' text-blue-500'><TiTick /></span></span>
                                <span className='text-xs pl-2'>+918950400416</span>
                            </div>
                        </div>
                        <Button variant="outline" >CHANGE</Button>
                    </div>

                    {/* when user want to change phone number */}
                    {/* <div className='rounded overflow-hidden bg-white'>
                    <div className='flex gap-3 items-center bg-black px-3 py-2'>
                        <span className='text-sm bg-white w-5 h-5 flex justify-center items-center rounded-sm'>1</span>
                        <span className='font-medium text-white'>LOGIN</span>
                    </div>
                    <div className=' px-4 py-3 flex justify-between'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-gray-500 font-medium '>Phone : <span className='text-black pl-2'>+918950400416</span></p>
                            <p className='text-blue-400 cursor-pointer hover:text-blue-500'>Logout & SignIn in another account</p>
                            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-sm mt-2">CONTINUE CHECKOUT</Button>
                        </div>
                        <div className='text-sm flex flex-col gap-2 mr-[2vw]'>
                            <p className='text-gray-500'>Advantage of our secure login</p>
                            <p className='flex items-center gap-2'><TbTruckDelivery size={'18px'} /> Easily Track Orders, Hassle free Returns</p>
                            <p className='flex items-center gap-2'><FaRegBell size={'18px'} /> Get Relevent Alerts and Recommendation</p>
                            <p className='flex items-center gap-2'><CiStar size={'18px'} /> Wishlist, Reviews Ratind and More.</p>
                        </div>
                    </div>
                    <p className='text-gray-500 pt-2 pb-3 px-4 text-sm'>Please note that upon clicking "Logout" you will lose all items in cart and wil and will be reidrect to home page</p>
                </div> */}
                </div>

                {/* For Address */}
                <div className='w-[64vw] mx-[2vw] mt-3 rounded overflow-hidden border'>
                    {/* old address */}
                    <div className='flex justify-between items-center py-2 px-3 bg-white  rounded'>
                        <div className='flex items-center gap-3'>
                            <span className='text-sm bg-gray-200 w-5 h-5 flex justify-center items-center rounded-sm'>2</span>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium flex gap-2 items-center text-gray-500'>DELIVERY ADDRESS <span className=' text-blue-500'><TiTick /></span></span>
                                <span className='text-xs pl-2 max-w-[45vw] '><span className='font-medium text-sm pr-2'>Username</span>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum blanditiis suscipit assumenda tempore. Ullam eum voluptatum incidunt omnis quidem mollitia.</span>
                            </div>
                        </div>
                        <Button variant="outline" >CHANGE</Button>
                    </div>

                    {/* add new address or update */}
                    {/* <div>
                    <div className='flex gap-3 items-center bg-black px-3 py-2'>
                        <span className='text-sm bg-white w-5 h-5 flex justify-center items-center rounded-sm'>2</span>
                        <span className='font-medium text-white'>DELIVERY ADDRESS</span>
                    </div>
                    <div className='bg-white grid grid-cols-2 gap-x-3 gap-y-3 py-4 px-[4vw] text-gray-600'>
                        <input type="text" placeholder='Name' className='border px-2 py-1 outline-gray-500 rounded-sm border-gray-400 ' />
                        <input type="text" placeholder='10-digit mobile number' className='border px-2 py-1 outline-gray-500 rounded-sm border-gray-400 ' />
                        <input type="text" placeholder='Pincode' className='border px-2 py-1 outline-gray-500 rounded-sm border-gray-400 ' />
                        <input type="text" placeholder='Locality' className='border px-2 py-1 outline-gray-500 rounded-sm border-gray-400 ' />
                        <textarea placeholder='Adress (Area and Street)' className='col-span-2 w-full border px-2 py-1 outline-gray-500 rounded-sm border-gray-400 ' />
                        <input type="text" placeholder='City/District/Town' className='border px-2 py-1 outline-gray-500 rounded-sm border-gray-400 ' />
                        <input type="text" placeholder='State' className='border px-2 py-1 outline-gray-500 rounded-sm border-gray-400 ' />
                        <input type="text" placeholder='Landmark (Optional)' className='border px-2 py-1 outline-gray-500 rounded-sm border-gray-400 ' />
                        <input type="text" placeholder='Alternate Phone (Optional)' className='border px-2 py-1 outline-gray-500 rounded-sm border-gray-400 ' />
                    </div>
                    <div className='bg-white px-[4vw] '>
                        <span className='text-gray-500 text-sm'>Adress Type</span>
                        <div className='flex gap-[4vw] text-sm pt-2'>
                            <div className='flex gap-2 items-center'>
                                <input type="radio" id="home" name="addressType" value="home" checked />
                                <label for="home">Home (All day delivery)</label>
                            </div>
                            <div className='flex gap-2 items-center'>
                                <input type="radio" id="work" name="addressType" value="work" />
                                <label for="work">Work (Delivery between 10 AM - 5 PM)</label>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white px-[4vw] py-4'>
                        <Button className="px-4 py-1 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-sm mx-[4vw]">SAVE AND DELIVERY HERE</Button>
                        <Button variant="outline" >CANCEL</Button>
                    </div>
                </div> */}
                </div>

                {/* For Order */}
                <div className='w-[64vw] mx-[2vw] mt-3 rounded border overflow-hidden'>
                    <div className='flex justify-between items-center py-3 px-3 bg-white  rounded '>
                        <div className='flex items-center gap-3'>
                            <span className='text-sm bg-gray-200 w-5 h-5 flex justify-center items-center rounded-sm'>3</span>
                            <div className='flex flex-col gap-1'>
                                <span className='font-medium flex gap-2 items-center text-gray-500'>ORDER SUMMARY<span className=' text-blue-500'><TiTick /></span></span>
                                <span className='text-xs pl-2 max-w-[45vw] font-medium'>1 Item</span>
                            </div>
                        </div>
                        <Button variant="outline" >CHANGE</Button>
                    </div>

                    {/* <div className='flex gap-3 items-center bg-black px-3 py-2'>
                    <span className='text-sm bg-white w-5 h-5 flex justify-center items-center rounded-sm'>3</span>
                    <span className='font-medium text-white'>ORDER SUMMARY</span>
                </div>
                <div className='flex gap-[3vw] px-[2vw] py-3 bg-white'>
                    <div className='flex justify-center items-center w-28 h-32 overflow-hidden rounded bg-white'>
                        <img src={iphone} alt="product_img" className=' h-32 rounded object-contain' />
                    </div>
                    <div className='flex flex-col gap-1 flex-grow'>
                        <span>Apple iphone 15 (Black, 128 GB)</span>
                        <div className='flex justify-between '>
                            <span className='text-gray-500'>Seller: NGVIVR RETAILS</span>
                            <span className='text-xs w-48 pt-1 font-medium'>Delivered by Mon Sep 28 | <span className='text-green-400'>₹40 </span></span>
                        </div>
                        <span className='font-medium'>₹63000</span>
                        <div className='flex gap-4 items-center mt-2'>
                            <div className="flex items-center border rounded-md overflow-hidden shadow-md w-40 ">
                                <button onClick={decrement} className="bg-gray-600 text-white w-1/3 px-3 py-1 hover:bg-gray-700 transition">-</button>
                                <span className="w-1/3 text-lg text-center">{quantity}</span>
                                <button onClick={increment} className="bg-gray-600 text-white w-1/3 px-3 py-1 hover:bg-gray-700 transition" >+</button>
                            </div>
                            <span className='font-medium text-base cursor-pointer'>REMOVE</span>
                        </div>
                    </div>
                </div> */}
                </div>

                {/* Payment Options */}
                <div className='w-[64vw] mx-[2vw] mt-3 rounded overflow-hidden'>
                    {/* <div className='flex justify-between items-center py-3 px-3 bg-white border rounded '>
                    <div className='flex items-center gap-3'>
                        <span className='text-sm bg-gray-200 w-5 h-5 flex justify-center items-center rounded-sm'>4</span>
                        <span className='font-medium flex gap-2 items-center text-gray-500'>PAYMENT OPTIONS</span>
                    </div>
                </div> */}

                    <div className='flex gap-3 items-center bg-black px-3 py-2'>
                        <span className='text-sm bg-white w-5 h-5 flex justify-center items-center rounded-sm'>4</span>
                        <span className='font-medium text-white'>PAYMENT OPTIONS</span>
                    </div>
                    {/* design of payment */}
                    <div>

                    </div>
                </div>
            </div>

            {/* right side  */}
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
                        <div className='text-lg text-green-600 mx-4'>Your Total Saving on this order ₹5,400</div>
                    </div>

                    <div className='flex mt-[13vh] ml-[2vw] items-center gap-2'>
                        <SiTicktick size={'60px'} />
                        <span className='text-gray-500 font-medium lg:text-base text-sm'>Safe and Secure Payments.Easy returns.100% Authentic products.</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default OrderPage
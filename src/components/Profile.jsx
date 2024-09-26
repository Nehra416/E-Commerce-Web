import React, { useState } from 'react'
import profile from '../Img/profile.png'
import { IoPerson, IoStar } from 'react-icons/io5'
import { FaCircle, FaPowerOff } from 'react-icons/fa6'
import { Button } from './ui/button'
import { CiMenuKebab } from 'react-icons/ci'
import iphone from '../Img/iphone.png'
import product5 from '../Img/product5.png'
import product1 from '../Img/product1.png'
import cartPicture from '../Img/cartPicture.png'
import { MdDelete } from 'react-icons/md'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const Profile = () => {
    const [open, setOpen] = useState('profile')

    return (
        <div className='pt-[14vh] px-[3vw] bg-gray-100 flex gap-4 pb-[10vh]'>

            {/* left side bar */}
            <div className=' w-[25vw]'>
                <div className='flex items-center bg-white p-3 rounded-sm gap-3 border'>
                    <img src={profile} alt="Dp" className='w-10 h-10 rounded-full bg-gray-200' />
                    <span className='font-semibold text-lg truncate'>Username</span>
                </div>
                {/* information */}
                <div className='p-3 bg-white mt-3 rounded-sm border'>
                    <div className='flex gap-2  border-b-2 pb-3 mb-1'>
                        <IoPerson size={'22px'} className='text-gray-700' />
                        <span className='text-gray-500 font-medium cursor-default'>ACCOUNT SETTINGS</span>
                    </div>
                    <p className={`px-3 py-2 text-lg hover:bg-gray-100 cursor-pointer rounded-sm mt- ${open === 'profile' && 'bg-gray-100'}`} onClick={() => setOpen('profile')}>Profile Information</p>
                    <p className={`px-3 py-2 text-lg hover:bg-gray-100 cursor-pointer rounded-sm mt-  ${open === 'address' && 'bg-gray-100'}`} onClick={() => setOpen('address')}>Manage Address</p>
                    <p className={`px-3 py-2 text-lg hover:bg-gray-100 cursor-pointer rounded-sm mt-  ${open === 'orders' && 'bg-gray-100'}`} onClick={() => setOpen('orders')}>My Orders</p>
                    <p className={`px-3 py-2 text-lg hover:bg-gray-100 cursor-pointer rounded-sm mt-  ${open === 'wishlist' && 'bg-gray-100'}`} onClick={() => setOpen('wishlist')}>My Wishlist</p>
                </div >

                {/* logut */}
                <Dialog Dialog >
                    <DialogTrigger>
                        <div className=' bg-white mt-3 rounded-sm border'>
                            <div className='flex gap-2 items-center px-3 py-2  cursor-pointer rounded-sm hover:bg-gray-200'>
                                <FaPowerOff size={'20px'} />
                                <p className='text-lg '>Logout</p>
                            </div>
                        </div>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you sure ?</DialogTitle>
                            <DialogDescription>
                                <div className='flex gap-4 justify-center mt-3'>
                                    <Button className="bg-red-600 hover:bg-red-700 text-white font-medium text-lg px-5">Yes</Button>
                                    <Button className="bg-gray-200 hover:bg-gray-300 font-medium text-lg px-5 text-black hover: ">NO</Button>
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog >

            </div >

            {/* Right side content */}
            
            <div div className='bg-white flex-grow py-4 px-5 rounded border' >
                {/* <div className='flex-grow px-2 '> */}

                {/* Profile Information */}
                {
                    open === 'profile' &&
                    <>
                        <div>
                            <h1 className='text-xl font-semibold cursor-default'>Personal Information <span className='text-blue-400 text-base cursor-pointer ml-5'>Edit</span></h1>
                            <div className='flex gap-3 mt-4 '>
                                <input type="text" placeholder='First Name' className='border border-gray-300 outline-gray-500 text-sm p-2 rounded-sm disabled:cursor-not-allowed w-1/3' disabled />
                                <input type="text" placeholder='Last Name' className='border border-gray-300 outline-gray-500 text-sm p-2 rounded-sm disabled:cursor-not-allowed w-1/3' disabled />
                                <Button className=" rounded-sm px-4 hover:bg-blue-700 bg-blue-600">Save</Button>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <p className='text-lg'>Your Gender</p>
                            <div className='flex gap-[4vw] text-base pt-2 '>
                                <div className='flex gap-2 items-center '>
                                    <input type="radio" id="male" name="gender" value="male" className='peer' disabled />
                                    <label for="male" className='peer-disabled:text-gray-500'>Male</label>
                                </div>
                                <div className='flex gap-2 items-center'>
                                    <input type="radio" id="female" name="gender" value="female" className='peer' disabled />
                                    <label for="female" className='peer-disabled:text-gray-500'>Female</label>
                                </div>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <h1 className='text-xl font-semibold cursor-default'>Email Address <span className='text-blue-400 text-base cursor-pointer ml-5'>Edit</span></h1>
                            <div className='flex gap-3 mt-3 items-center max-w-64'>
                                <input type="text" value={'deepaknehra416@gmail.com'} className='border border-gray-300 outline-gray-500 p-2 rounded-sm disabled:cursor-not-allowed disabled:text-gray-400 text-sm w-full' disabled />
                                <Button className=" rounded-sm px-4 hover:bg-blue-700 bg-blue-600">Save</Button>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <h1 className='text-xl font-semibold cursor-default'>Phone Number <span className='text-blue-400 text-base cursor-pointer ml-5'>Edit</span></h1>
                            <div className='flex gap-3 mt-3 items-center'>
                                <input type="text" value={'+918950400416'} className='border border-gray-300 outline-gray-500 p-2 rounded-sm disabled:cursor-not-allowed text-sm disabled:text-gray-400' disabled />
                                <Button className=" rounded-sm px-4 hover:bg-blue-700 bg-blue-600">Save</Button>
                            </div>
                        </div>

                        <div className='mt-5'>
                            <span className='text-xl font-medium text-gray-600'>Important Notice:</span>
                            <p className='text-sm text-gray-500 my-2 pl-3'>Deleting your account is a permanent action and cannot be reversed. All your order history, saved items, and account information will be lost.</p>
                            <p className='text-lg cursor-pointer  text-red-600 font-medium'>Delte Account</p>
                        </div>

                    </>


                }

                {/* Manage Address */}

                {
                    open === 'address' &&
                    <>
                        <div className=''>
                            <p className='text-xl font-medium'>Manage Addresses</p>
                            <div className='border rounded-sm p-3 mt-4'>
                                <div>
                                    <div className='flex justify-between items-center'>
                                        <span className='bg-gray-200 text-gray-400 text-xs px-1 py-[2px] font-medium rounded-sm'>HOME</span>
                                        <span><CiMenuKebab size={'20px'} className='cursor-pointer' /></span>
                                    </div>
                                    <p className='font-medium my-2'>Deepak Nehra <span className='ml-4'>8950400416</span></p>
                                </div>
                                <div className='text-sm mr-[4vw]'>
                                    <span>near water box and near sarav harayna gharamin bank, </span>
                                    <span>Hisar Subdistrict, </span>
                                    <span>Hisar District, </span>
                                    <span>Haryana - </span>
                                    <span className='font-semibold'>125004</span>
                                </div>
                            </div>


                            <div className='bg-blue-50 rounded mt-3 shadow-sm border'>
                                <span className='font-medium px-[4vw] pt-3 block'>Edit Address</span>
                                <div className='grid grid-cols-2 gap-x-3 gap-y-3 pb-4 px-[4vw] text-gray-600 mt-3'>
                                    <input type="text" placeholder='Name' className='border px-2 py-1 outline-gray-400 rounded-sm border-gray-400 ' />
                                    <input type="text" placeholder='10-digit mobile number' className='border px-2 py-1 outline-gray-400 rounded-sm border-gray-400 ' />
                                    <input type="text" placeholder='Pincode' className='border px-2 py-1 outline-gray-400 rounded-sm border-gray-400 ' />
                                    <input type="text" placeholder='Locality' className='border px-2 py-1 outline-gray-400 rounded-sm border-gray-400 ' />
                                    <textarea placeholder='Adress (Area and Street)' className='col-span-2 w-full border px-2 py-1 outline-gray-400 rounded-sm border-gray-400 ' />
                                    <input type="text" placeholder='City/District/Town' className='border px-2 py-1 outline-gray-400 rounded-sm border-gray-400 ' />
                                    <input type="text" placeholder='State' className='border px-2 py-1 outline-gray-400 rounded-sm border-gray-400 ' />
                                    <input type="text" placeholder='Landmark (Optional)' className='border px-2 py-1 outline-gray-400 rounded-sm border-gray-400 ' />
                                    <input type="text" placeholder='Alternate Phone (Optional)' className='border px-2 py-1 outline-gray-400 rounded-sm border-gray-400 ' />
                                </div>

                                <div className=' px-[4vw] '>
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
                                <div className='px-[4vw] py-4'>
                                    <Button className="px-4 py-1 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-sm mx-[4vw]">SAVE</Button>
                                    <Button variant="outline" >CANCEL</Button>
                                </div>

                            </div>
                        </div>
                    </>
                }

                {/* my orders */}

                {/* if no product is purchase in past */}
                {/* <div className='bg-white rounded overflow-hidden border shadow-md'>
                    <div className='flex flex-col gap-2 py-[8vh] shadow-sm justify-center items-center'>
                        <img src={cartPicture} alt="Cart Image" className='h-44 mb-2' />
                        <span className='text-xl'>You don't have purchase anything yet!</span>
                        <span className='text-sm'>Let's do Shopping </span>
                        <button className='px-5 rounded-sm shadow text-white bg-[#0088ff] hover:bg-[#2298ff] py-1 mt-3'>Shop now</button>
                    </div>
                </div> */}

                {/* If product is purchase in past */}
                {
                    open === 'orders' &&
                    <>
                        {
                            [1, 2, 3, 4, 5].map((item, index) => {
                                return (
                                    <div className='bg-white border rounded hover:shadow-lg p-3 mb-3'>
                                        <div className='flex justify-between gap-'>
                                            <div className='flex justify-center items-center w-20 h-20 overflow-hidden rounded bg-white'>
                                                <img src={iphone} alt="product_img" className=' h-20 rounded object-contain' />
                                            </div>
                                            <div className='max-w-80'>
                                                <span className='text-sm'>Apple iphone 15 (Black, 128 GB)</span>
                                                <p className='text-gray-500 font-medium'>Apple</p>
                                            </div>
                                            <span className='font-medium'>₹63000</span>
                                            <div className='flex flex-col gap-2'>
                                                {/* <div className='w-3 h-3 rounded-full bg-green-600'></div> */}
                                                <div className='flex gap-1 items-center text-sm'><FaCircle size={'10px'} className='text-green-500' /> Delivered on Oct 01, 2024</div>
                                                <span className='text-xs'>Your item has been deliverd</span>
                                                <span className='text-blue-500 text- flex gap-1 items-center cursor-pointer'><IoStar />Rate & Review Product</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </>
                }


                {/* if no item is added to the wishlist */}
                {/* <div className='bg-white rounded overflow-hidden border shadow-md'>
                    <div className='flex flex-col gap-2 py-[8vh] shadow-sm justify-center items-center'>
                        <img src={cartPicture} alt="Cart Image" className='h-44 mb-2' />
                        <span className='text-xl'>Empty Wishlist</span>
                        <span className='text-sm'>You have no items in your wishlist. Start adding! </span>
                        <button className='px-5 rounded-sm shadow text-white bg-[#0088ff] hover:bg-[#2298ff] py-1 mt-3'>Shop now</button>
                    </div>
                </div> */}

                {/* show wishlist product */}
                <div className='bg-white shadow-md rounded-sm overflow-hidden'>

                    {/* products */}
                    {
                        open === 'wishlist' &&
                        <>
                            <div className='p-4 border-b'>
                                <span className='text-lg font-medium '>My Wishlist (1)</span>
                            </div>

                            {
                                [1, 2, 3, 4, 5, 6].map((item, index) => {
                                    return (
                                        <div className='flex gap-[3vw] px-[2vw] py-3 bg-white border-b cursor-pointer hover:drop-shadow-xl '>
                                            <div className='flex justify-center items-center w-20 h-20 overflow-hidden rounded bg-white'>
                                                <img src={iphone} alt="product_img" className=' h-20 rounded object-contain' />
                                            </div>
                                            <div className='flex flex-col gap-1 flex-grow'>
                                                <span>Apple iphone 15 (Black, 128 GB)</span>
                                                <div className='flex justify-between '>
                                                    <span className='text-gray-500 text-sm'>Seller: NGVIVR RETAILS</span>
                                                    <MdDelete size={'22px'} className='text-gray-500 hover:text-gray-600 cursor-pointer' />
                                                </div>
                                                <span className='font-medium'>₹63000</span>

                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </>
                    }

                </div>

            </div >

        </div >
    )
}

export default Profile
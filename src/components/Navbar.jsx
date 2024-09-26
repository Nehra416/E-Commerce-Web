import React, { useState } from 'react'
import { IoSearch, IoShirtOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { RiDashboardFill, RiDashboardLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

import { CalendarIcon } from "@radix-ui/react-icons"

import { Button } from "@/components/ui/button"
import { HoverCard, HoverCardContent, HoverCardTrigger, } from "@/components/ui/hover-card"
import { TbJacket } from 'react-icons/tb';
import { PiBeltBold, PiPantsDuotone } from 'react-icons/pi';
import { GiConverseShoe, GiLargeDress } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip"

const Navbar = () => {
    const [sideMenu, setSideMenu] = useState(false)
    const [search, setSearch] = useState(false)
    const navigate = useNavigate()
    const category = [
        { img: <TbJacket size={'25px'} />, text: 'Jacket' },
        { img: <IoShirtOutline size={'25px'} />, text: 'Shirt' },
        { img: <PiPantsDuotone size={'25px'} />, text: 'Pants' },
        { img: < GiConverseShoe size={'25px'} />, text: 'Shoes' },
        { img: <GiLargeDress size={'25px'} />, text: 'Dress' },
        { img: <PiBeltBold size={'25px'} />, text: 'Accesories' },
    ]

    return (
        <>
            {/* this navbar is rendered above the the md screen sizes... */}
            <div className='hidden md:flex justify-around items-center py-2 text-sm font-medium fixed top-0 left-0 right-0 bg-white shadow z-10'>
                <div className='cursor-pointer' onClick={() => navigate('/')}>logo</div>
                <div className='flex space-x-8'>
                    {/* <span className='cursor-pointer hover:text-gray-600 hover:underline'>Categories</span> */}
                    <HoverCard>
                        <HoverCardTrigger asChild>
                            <span className='cursor-pointer hover:text-gray-600 hover:underline'>Categories</span>
                        </HoverCardTrigger>
                        <HoverCardContent className="py-2 px-0">
                            <div className='flex flex-col gap-2'>
                                {
                                    category.map((item, index) => (
                                        <div key={index} className='flex gap-2 items-center hover:bg-gray-200 cursor-pointer text-lg w-full px-4 py-2'>
                                            {item.img}
                                            <span>{item.text}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </HoverCardContent>
                    </HoverCard>

                    <span className='cursor-pointer hover:text-gray-600 hover:underline'>New Arrival</span>
                    <span className='cursor-pointer hover:text-gray-600 hover:underline'>Features</span>
                    <span className='cursor-pointer hover:text-gray-600 hover:underline'>Collections</span>
                </div>
                <div className='flex space-x-4 items-center'>
                    {
                        search && <input type="text" placeholder='Search' className='px-2 border-gray-200 border-2 rounded-md' />
                    }
                    <IoSearch onClick={() => setSearch(!search)} size={'18px'} className='cursor-pointer hover:text-gray-600' />
                    <IoCartOutline size={'18px'} className='cursor-pointer hover:text-gray-600' onClick={() => navigate('/cart')} />
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <button><RiDashboardFill size={'18px'} className='cursor-pointer hover:text-gray-600' /></button>
                                {/* <button><RiDashboardLine size={'18px'} className='cursor-pointer hover:text-gray-600'  /></button> */}
                            </TooltipTrigger>
                            <TooltipContent className="bg-gray-50">
                                <p className='text-black '>Admin Dashboard</p>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                    {/* <RiDashboardFill size={'18px'} className='cursor-pointer hover:text-gray-600' onClick={() => navigate('/cart')} /> */}
                    {/* <button className='bg-gray-700 hover:bg-gray-800 rounded py-1 px-3 text-white font-medium' onClick={() => navigate('/signin')}>Login</button> */}
                    <Button variant="outline" className='rounded py-1 px-3 font-medium' onClick={() => navigate('/profile')}>Account</Button>
                </div>
            </div>

            {/* this navbar is render for small screens */}
            <div className='flex md:hidden justify-between px-3 items-center py-2 text-sm font-medium'>
                <div className='cursor-pointer'>logo</div>
                <div>
                    <div className='flex space-x-4'>
                        <IoSearch size={'18px'} className='cursor-pointer hover:text-gray-600' />
                        <IoCartOutline size={'18px'} className='cursor-pointer hover:text-gray-600' />
                        {
                            sideMenu ?
                                <RxCross1 size={'18px'} className='z-10' onClick={() => setSideMenu(false)} />
                                : <FiMenu size={'18px'} className='z-10' onClick={() => setSideMenu(true)} />
                        }
                    </div>
                    {/* show this div click on menu button */}
                    <div className={`flex flex-col gap-3 text-lg font-normal fixed bg-white w-[40vw] h-screen shadow-lg pl-[5%] pr-3 pt-[3%] right-0 ${sideMenu ? 'flex' : 'hidden'}`}>
                        <span>Categories</span>
                        <span>New Arrival</span>
                        <span>Features</span>
                        <span>Collections</span>
                        <button className='bg-gray-700 rounded py-1 px-0 text-white font-medium'>Login</button>
                        <span className='text-gray-500 text-xs mt-4 text-center'>@ E-Commerce web...</span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar
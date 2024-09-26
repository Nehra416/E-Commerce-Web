import React from 'react'
import product5 from '../Img/product5.png'
import product1 from '../Img/product1.png'
import product13 from '../Img/product13.png'
import { GoTrophy } from "react-icons/go";
import { TbTruckDelivery } from 'react-icons/tb';
import { LuGift } from 'react-icons/lu';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { MdLockPerson, MdOutlineElectricBolt } from "react-icons/md";
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from './ui/button';
import { IoCartOutline } from 'react-icons/io5';
import profile from '../Img/profile.png';
import { BiSolidOffer } from 'react-icons/bi';

const ProductDetails = () => {
    return (
        <div className='bg-gray-100 py-[14vh] '>
            <div className='flex gap-5 mx-[2vw]'>

                {/* left side small images */}
                <div className='flex gap-4'>
                    <Carousel opts={{ align: "start", }}
                        orientation="vertical"
                        className="w-full max-w-xs"
                    >
                        <CarouselContent className="mt-10  h-[70vh]">
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                                <CarouselItem key={index} className="pt-1 md:basis-10 ">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex items-center justify-center p-1">
                                                <img src={product5} alt="product" className='h-20 rounded' />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="my-10" />
                        <CarouselNext className="my-10" />
                    </Carousel>

                    {/* Main big image */}
                    <img src={product5} alt="product_img" className='h-[80vh] rounded max-w-[40vw]' />
                </div>

                {/* Product Informations */}
                <div className='bg-white border rounded pt-4 flex-grow relative overflow-y-auto  h-[80vh] max-w-[45vw]' style={{ scrollbarWidth: 'thin' }}>

                    {/* brand & name of product */}
                    <div className='px-4'>
                        <h1 className='text-gray-400 font-medium text-xl flex justify-between '>REDTAPE <span className='text-sm text-green-400 '>In stock</span></h1>
                        <p className='text-lg font-medium'>Purple Warm linen</p>
                    </div>

                    {/* rate & rating */}
                    <div className='flex px-4 py-1 gap-[10vw] items-center'>
                        <span className='font-medium text-xl text-gray-400'>$150</span>
                        <div className='flex gap-2 text-2xl transition-all items-center duration-100'>
                            <span className='text-sm font-medium'>Rating</span>
                            <span className='text-yellow-400'>★</span>
                            <span className='text-yellow-400'>★</span>
                            <span className='text-yellow-400'>★</span>
                            <span className='text-yellow-400'>★</span>
                            <span className='text-gray-200'>★</span>
                            {/* <span className='text-xs font-medium pl-3'>(4 Start & 10 reivews)</span> */}
                        </div>
                    </div>

                    {/* features of company */}
                    <div className='flex gap-[2vw] items-center px-4 mt-3'>
                        <span className='flex flex-col items-center justify-center text-xs font-medium'><GoTrophy size={'22px'} className='' />Top Brand</span>
                        <span className='flex flex-col items-center justify-center text-xs font-medium'><TbTruckDelivery size={'24px'} className='' />Safe Delivery</span>
                        <span className='flex flex-col items-center justify-center text-xs font-medium'><BiSolidOffer size={'24px'} className='' />Special offers</span>
                        <span className='flex flex-col items-center justify-center text-xs font-medium'><FaClockRotateLeft size={'20px'} className='mb-1' />1 week return</span>
                        <span className='flex flex-col items-center justify-center text-xs font-medium'><MdLockPerson size={'22px'} className='' />secure transition</span>
                    </div>

                    {/* Desciption of product */}
                    <div className='px-4 mt-3'>
                        <span className='text-sm font-medium'>Details about the product</span>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem officia quos non asperiores dolor totam sint consequuntur optio provident alias, nobis quam dolores dolorum necessitatibus ab inventore aut magnam doloribus. Illum possimus necessitatibus odio commodi ipsam? Eveniet impedit reprehenderit commodi?</p>
                    </div>

                    {/* reivews */}
                    <div className='px-4 my-3'>
                        <span className='text-sm font-medium'>Reviews</span>

                        {/* 1st user review */}
                        <div className='flex gap-2 text-xs my-2'>
                            <img src={profile} alt="DP" className='w-8 h-8 rounded-full bg-gray-100 mt-2' />
                            <div className='bg-gray-200 rounded-md p-2 max-w-'>
                                <div className='flex gap-3 justify-between items-center'>
                                    <span className=''>Username</span>
                                    <div className='flex gap-1 text-base transition-all items-center duration-100'>
                                        <span className='text-yellow-400'>★</span>
                                        <span className='text-yellow-400'>★</span>
                                        <span className='text-yellow-400'>★</span>
                                        <span className='text-yellow-400'>★</span>
                                        <span className='text-white'>★</span>
                                    </div>
                                </div>
                                <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat unde quisquam voluptatibus dolores debitis ut repellendus aliquid facilis hic quos! </p>
                            </div>
                        </div>

                        {/* 2nd user review */}
                        <div className='flex gap-2 text-xs my-2'>
                            <img src={profile} alt="DP" className='w-8 h-8 rounded-full bg-gray-100 mt-2' />
                            <div className='bg-gray-200 rounded-md p-2 max-w-'>
                                <div className='flex gap-3 justify-between items-center'>
                                    <span className=''>Username</span>
                                    <div className='flex gap-1 text-base transition-all items-center duration-100'>
                                        <span className='text-yellow-400'>★</span>
                                        <span className='text-yellow-400'>★</span>
                                        <span className='text-yellow-400'>★</span>
                                        <span className='text-white'>★</span>
                                        <span className='text-white'>★</span>
                                    </div>
                                </div>
                                <p className='text-gray-600'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat unde quisquam voluptatibus dolores debitis ut repellendus aliquid facilis hic quos! </p>
                            </div>
                        </div>

                        {/* input field for review */}
                        <div className='flex gap-1'>
                            <input type="text" placeholder='Write Your Review...' className='border-gray-300 outline-gray-400 font-medium py-1 px-2 text-sm text-gray-500 border-2 rounded w-full' />
                            <Button className="bg-teal-300 hover:bg-teal-400 ">Send</Button>
                        </div>
                    </div>

                    {/* add to cart and order button */}
                    <div className='sticky bottom-0 w-full'>
                        <Button className="w-1/2 rounded-none bg-slate-500 hover:bg-slate-600 py-4 text-lg"><IoCartOutline className='mr-2' />Add to Cart</Button>
                        <Button className="w-1/2 rounded-none bg-orange-500 hover:bg-orange-600 py-4 text-lg"><MdOutlineElectricBolt className='mr-2' />Order Now</Button>
                    </div>
                </div>
            </div>

            {/* related products */}
            <div className='mx-[2vw]'>
                <h2 className='text-gray-600 hover:text-black cursor-default font-medium text-xl mt-12'>Related Products</h2>
                <div className='grid grid-cols-4 gap-y-10 gap-x-2 mt-4'>
                    {
                        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
                            return (
                                <div key={index} className='flex justify-between gap-2 items-center font-medium pr-2 py-2 cursor-pointer rounded-md hover:shadow-lg drop-shadow-xl transition-all duration-100 group '>
                                    <div className='flex justify-center items-center w-28 h-32 overflow-hidden rounded bg-white'>
                                        <img src={product1} alt="product_img" className=' h-32 rounded object-contain' />
                                    </div>
                                    <div className="flex flex-col flex-grow max-w-36 gap-2">
                                        <span className='mt-2 text-xs truncate'>Purple Warm linen </span>
                                        <span className='text-sm text-gray-400'>$150</span>
                                        <div className='flex gap-2 group-hover:text-xl transition-all duration-100'>
                                            <span className='text-yellow-400'>★</span>
                                            <span className='text-yellow-400'>★</span>
                                            <span className='text-yellow-400'>★</span>
                                            <span className='text-yellow-400'>★</span>
                                            <span className='text-gray-200'>★</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
import React from 'react'
import { GiClothes, GiConverseShoe, GiLargeDress } from 'react-icons/gi';
import { CiMobile3, CiStar } from "react-icons/ci";
import { IoIosLaptop } from "react-icons/io";
import { IoShirtOutline } from 'react-icons/io5';
import { PiBeltBold, PiHeartBreakBold, PiPantsDuotone } from 'react-icons/pi';
import { TbJacket, TbTruckDelivery } from "react-icons/tb";
// import images of products
import product1 from '../Img/product1.png'
import product2 from '../Img/product2.png'
import product3 from '../Img/product3.png'
import product4 from '../Img/product4.png'
import product5 from '../Img/product5.png'
import product6 from '../Img/product6.png'
import product7 from '../Img/product7.png'
import product8 from '../Img/product8.png'
import product9 from '../Img/product9.png'
import product10 from '../Img/product10.png'
import product11 from '../Img/product11.png'
import product12 from '../Img/product12.png'
import product13 from '../Img/product13.png'
import myntra from '../Img/myntra1.png'
import { FaRegCreditCard } from 'react-icons/fa6';
import { BiSupport } from 'react-icons/bi';
import { FaAmazon } from 'react-icons/fa';
import { SiFlipkart } from "react-icons/si";
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


const HomePage = () => {
    const category = [
        { img: <TbJacket size={'50px'} />, text: 'Jacket' },
        { img: <IoShirtOutline size={'50px'} />, text: 'Shirt' },
        // { img: <GiClothes size={'50px'} />, text: 'For Men' },
        { img: <PiPantsDuotone size={'50px'} />, text: 'Pants' },
        // { img: <IoIosLaptop size={'50px'} />, text: 'Laptop' },
        { img: < GiConverseShoe size={'50px'} />, text: 'Shoes' },
        // { img: < CiMobile3 size={'50px'} />, text: 'Phones' },
        { img: <GiLargeDress size={'50px'} />, text: 'Dress' },
        { img: <PiBeltBold size={'50px'} />, text: 'Accesories' },
    ]

    const newArrival = [
        { img: product2, title: 'Purple Warm Jacket Purple Warm Jacket Purple Warm Jacket', price: '$150', },
        { img: product3, title: 'Purple Warm Jacket', price: '$150', },
        { img: product2, title: 'Purple Warm Jacket', price: '$150', },
        { img: product4, title: 'Purple Warm Jacket', price: '$150', }
    ]

    const featured = [
        { img: product5, title: 'Purple Warm linen', price: '$150', },
        { img: product2, title: 'Purple Warm linen', price: '$150', },
        { img: product3, title: 'Purple Warm linen', price: '$150', },
        { img: product4, title: 'Purple Warm linen', price: '$150', },
        { img: product1, title: 'Purple Warm linen', price: '$150', },
        { img: product6, title: 'Purple Warm linen', price: '$150', },
        { img: product7, title: 'Purple Warm linen', price: '$150', },
        { img: product8, title: 'Purple Warm linen', price: '$150', },
        { img: product9, title: 'Purple Warm linen', price: '$150', },
        { img: product10, title: 'Purple Warm linen', price: '$150', },
        { img: product11, title: 'Purple Warm linen', price: '$150', },
        { img: product8, title: 'Purple Warm linen', price: '$150', },
    ]

    const popular = [
        { img: product5, title: 'Purple Warm linen', price: '$150', },
        { img: product12, title: 'Purple Warm linen', price: '$150', },
        { img: product3, title: 'Purple Warm linen', price: '$150', },
        { img: product4, title: 'Purple Warm linen', price: '$150', },
        { img: product2, title: 'Purple Warm linen', price: '$150', },
        { img: product13, title: 'Purple Warm linen', price: '$150', },
        { img: product7, title: 'Purple Warm linen', price: '$150', },
        { img: product12, title: 'Purple Warm linen', price: '$150', },
        { img: product9, title: 'Purple Warm linen', price: '$150', },
    ]

    const chooseUs = [
        { img: <TbTruckDelivery size={'42px'} />, title: 'Free Delivery', msj: 'This free shipping only for selected region' },
        { img: <FaRegCreditCard size={'42px'} />, title: 'Payment Method', msj: 'This free shipping only for selected region' },
        { img: <PiHeartBreakBold size={'42px'} />, title: 'Warranty', msj: 'This free shipping only for selected region' },
        { img: <BiSupport size={'42px'} />, title: 'Contact Support', msj: 'This free shipping only for selected region' },
    ]

    return (
        <div className=' mt-[10vh]'>
            {/* Categories Section */}
            <div className='flex flex-col gap-4 mx-[7vw]'>
                <div className='flex justify-between'>
                    <span className='text-2xl font-bold'>Categories</span>
                    <span className='text-sm cursor-pointer'>view all</span>
                </div>
                <div className='flex gap-3 justify-around'>
                    {
                        category.map((item, index) => {
                            return (
                                <div key={index} className='bg-gray-100 p-5 flex justify-center items-center rounded cursor-pointer hover:text-gray-500 '>
                                    <div className='flex flex-col items-center'>
                                        {item.img}
                                        <span className='text-sm text-gray-400'>{item.text}</span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* New Arrivals */}
            <div className='mt-[10vh] mx-[7vw]'>
                <div className='flex justify-between'>
                    <span className='text-2xl font-bold'>New Arrivals</span>
                    <span className='text-sm cursor-pointer'>view all</span>
                </div>
                <div className='flex justify-between gap-4 mt-4'>
                    <div className='flex gap-3 w-1/2 bg-gray-100 rounded-sm px-4 py-3 cursor-pointer'>
                        <img src={product1} alt="product_img" className='h-96 rounded' />
                        <div className='flex flex-col justify-center items-center font-medium'>
                            <span>Purple Warm Jacket</span>
                            <span className='text-sm text-gray-400'>$299</span>
                            <button className='bg-gray-700 hover:bg-gray-800 mt-3 py-1 px-3 text-white font-medium'>Add to Cart</button>
                        </div>
                    </div>
                    <div className='w-1/2 text-center'>
                        <div className='grid grid-cols-2 gap-x-3 gap-y-4'>
                            {
                                newArrival.map((item, index) => {
                                    return (
                                        <div key={index} className='flex flex-col justify-center items-center font-medium bg-gray-100 p-4 text-sm  cursor-pointer rounded-sm group'>
                                            <img src={item.img} alt="product_img" className='h-24 rounded group-hover:animate-bounce' />
                                            <span className='mt-2 truncate w-full'>{item.title}</span>
                                            <span className='text-sm text-gray-400'>{item.price}</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured products */}
            <div className='mt-[10vh] mx-[7vw]'>
                <div className='flex justify-between'>
                    <span className='text-2xl font-bold'>Featured Products</span>
                    <span className='text-sm cursor-pointer'>view all</span>
                </div>
                <div className='grid grid-cols-4 gap-x-10 gap-y-4 mt-4'>
                    {
                        featured.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col items-center font-medium h-64 px-0 py-4 cursor-pointer rounded-sm border-gray-400 hover:border-2 group '>
                                    <img src={item.img} alt="product_img" className='h-32 rounded ' />
                                    <span className='mt-2'>{item.title}</span>
                                    <span className='text-sm text-gray-400'>{item.price}</span>
                                    <button className='bg-gray-800 group-hover:block hidden mt-1 py-1 px-3 text-white font-medium'>Add to Cart</button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Winter Collections */}
            <div className='mt-[10vh] '>
                <div className='text-2xl font-bold mx-[7vw]'>Winter Collections</div>
                <div className='h-64 bg-[#393D46] mt-4 px-[3vw] py-[3vh]'>
                    <Carousel
                        opts={{ align: "start", }}
                        plugins={[
                            Autoplay({ delay: 2500, }),
                        ]}
                        className="w-full px-[5vw]"
                    >
                        <CarouselContent>
                            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center h-[40vh]">
                                                <img src={product10} alt="Product" className='h-[40vh] p-3 w-full' />
                                            </CardContent>
                                        </Card>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="mx-[5vw]" />
                        <CarouselNext className="mx-[5vw]" />
                    </Carousel>

                </div>
            </div>

            {/* Popular this week */}
            <div className='mt-[10vh] mx-[7vw]'>
                <div className='flex justify-between'>
                    <span className='text-2xl font-bold'>Popular this week</span>
                    <span className='text-sm cursor-pointer'>view all</span>
                </div>
                <div className='grid grid-cols-3 gap-14 mt-4'>
                    {
                        popular.map((item, index) => {
                            return (
                                <div key={index} className='flex justify-between items-center font-medium pr-2 py-2 cursor-pointer rounded-md hover:shadow-lg drop-shadow-xl transition-all duration-100 group '>
                                    <img src={item.img} alt="product_img" className=' h-32 aspect-square rounded ' />
                                    <div className="flex flex-col gap-2">
                                        <span className='mt-2'>{item.title}</span>
                                        <span className='text-sm text-gray-400'>{item.price}</span>
                                        <div className='flex gap-2 group-hover:text-2xl transition-all duration-100'>
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

            {/* Why Choose Us */}
            <div className='mt-[10vh] mx-[7vw]'>
                <span className='text-2xl font-bold'>Why Choose Us</span>
                <div className='grid grid-cols-4 gap-x-10 gap-y-4 mt-4 px-5 py-5 bg-gray-100 rounded-sm'>
                    {
                        chooseUs.map((item, index) => {
                            return (
                                <div key={index} className='flex flex-col items-center justify-center font-medium cursor-pointer group px-2'>
                                    <span className='group-hover:border-none border-2 rounded-full p-3 box-content'>{item.img}</span>
                                    <span className='text-xl font-medium text-gray-700 pt-2'>{item.title}</span>
                                    <span className='text-xs text-gray-400 text-center pt-2'>{item.msj}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Sponsors */}
            <div className='my-[10vh] mx-[7vw]'>
                <span className='text-2xl font-bold'>Sponsors</span>
                <div>
                    <div className='flex justify-around items-center gap-x-8 mt-4 font-bold text-4xl text-gray-400'>
                        <span className='flex items-end gap-2'><FaAmazon />Amazon</span>
                        <span className='flex items-end gap-2'><SiFlipkart />Flipkart</span>
                        <img src={myntra} alt="myntra_logo" className='w-32' />
                        <span>QuickDrop</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HomePage
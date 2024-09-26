import React from 'react'
import product1 from '../Img/product1.png'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Slider } from './ui/slider'


const ProductShow = () => {
    return (
        <div className='my-[14vh] ml-[2vw] flex gap-3'>
            {/* Show products */}
            <div className='grid grid-cols-4 gap-3 w-[70vw]'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => {
                        return (
                            <div key={index} className='border py-2 bg-gray-50 w-44 rounded hover:drop-shadow-lg'>
                                <div className='flex justify-center items-center p-1'>
                                    <img src={product1} alt="product" className='h-40 rounded' />
                                </div>
                                <div className='pl-4 pr-1 mt-2 flex flex-col gap-1'>
                                    <h1 className='font-medium text-gray-500'>Redtape</h1>
                                    <h1 className='truncate text-sm'>Purple Warm linen</h1>
                                    <p className='font-medium'>$150</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* Filter on product */}
            <div>
                <div className="w-[25vw] mr-[2vw] p-3 rounded bg-gray-50 border border-gray-300 shadow-md ">
                    <h3 className="text-lg font-semibold mb-2">Filter Products</h3>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Category</AccordionTrigger>
                            <AccordionContent><input type="checkbox" className="mr-2 " />Clothing</AccordionContent>
                            <AccordionContent><input type="checkbox" className="mr-2" />Electronics</AccordionContent>
                            <AccordionContent><input type="checkbox" className="mr-2" />Home & Garden</AccordionContent>
                            <AccordionContent><input type="checkbox" className="mr-2" />Sports</AccordionContent>
                        </AccordionItem>
                    </Accordion>

                    <div className="mt-3">
                        <h4 className="font-medium mb-2">Price Range</h4>
                        {/* <input type="range" min="0" max="1000" className="w-full" /> */}
                        <Slider defaultValue={[0]} max={10000} step={1} />
                           
                    </div>

                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Brand</AccordionTrigger>
                            <AccordionContent><input type="checkbox" className="mr-2" />Redtape</AccordionContent>
                            <AccordionContent><input type="checkbox" className="mr-2" />Spyker</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>

            </div>
        </div>
    )
}

export default ProductShow
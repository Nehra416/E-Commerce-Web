import React from 'react'
import { FaBoxOpen } from 'react-icons/fa'
import { RiDashboardFill } from 'react-icons/ri'

const Dashboard = () => {
    return (
        <div className='py-[14vh] bg-gray-100 h-screen'>
            <div className='w-[25vw] bg-white ml-[2vw] rounded-sm'>
                <p className='flex gap-3 items-center p-3 border-b text-xl'><RiDashboardFill size={'22px'} /> Dashboard</p>
                <p className='flex gap-3 items-center text-xl px-3 py-2'><FaBoxOpen size={'22px'} /> Products</p>
                <div className='pb-3 '>
                    <p className='hover:bg-gray-50 pl-12 pr-1 py-2 cursor-pointer'>Product list</p>
                    <p className='hover:bg-gray-50 pl-12 pr-1 py-2 cursor-pointer'>Order</p>
                    <p className='hover:bg-gray-50 pl-12 pr-1 py-2 cursor-pointer'>Add Product</p>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
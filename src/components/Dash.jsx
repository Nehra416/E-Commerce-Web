import React, { useState } from 'react';

// Dummy data
const initialProducts = [
    { id: 1, name: "Product 1", price: 100, stock: 20 },
    { id: 2, name: "Product 2", price: 150, stock: 30 },
    { id: 3, name: "Product 3", price: 200, stock: 15 },
];

const initialOrders = [
    { id: 1, customer: "John Doe", total: 250, status: "Shipped" },
    { id: 2, customer: "Jane Smith", total: 400, status: "Processing" },
];

const Dash = () => {
    const [products, setProducts] = useState(initialProducts);
    const [orders, setOrders] = useState(initialOrders);

    const handleDeleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className="flex h-screen bg-gray-100 pt-[14vh]">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <div className="p-5">
                    <h2 className="text-2xl font-semibold">Dashboard</h2>
                </div>
                <nav className="mt-10">
                    <ul>
                        <li className="p-4 hover:bg-gray-200">
                            <a href="#">Products</a>
                        </li>
                        <li className="p-4 hover:bg-gray-200">
                            <a href="#">Orders</a>
                        </li>
                        <li className="p-4 hover:bg-gray-200">
                            <a href="#">Customers</a>
                        </li>
                        <li className="p-4 hover:bg-gray-200">
                            <a href="#">Analytics</a>
                        </li>
                        <li className="p-4 hover:bg-gray-200">
                            <a href="#">Settings</a>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 p-6">
                {/* Header */}
                <header className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-semibold">Dashboard Overview</h1>
                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                        Add Product
                    </button>
                </header>

                {/* Analytics Cards */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold">Total Sales</h3>
                        <p className="text-2xl">$10,000</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold">Total Orders</h3>
                        <p className="text-2xl">{orders.length}</p>
                    </div>
                    <div className="bg-white p-4 rounded shadow">
                        <h3 className="font-semibold">New Customers</h3>
                        <p className="text-2xl">50</p>
                    </div>
                </div>

                {/* Products Table */}
                <div className="bg-white rounded shadow mb-6">
                    <h2 className="p-4 text-xl font-semibold border-b">Product List</h2>
                    <table className="min-w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4">Product Name</th>
                                <th className="py-2 px-4">Price</th>
                                <th className="py-2 px-4">Stock</th>
                                <th className="py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id} className="border-b">
                                    <td className="py-2 px-4">{product.name}</td>
                                    <td className="py-2 px-4">${product.price}</td>
                                    <td className="py-2 px-4">{product.stock}</td>
                                    <td className="py-2 px-4">
                                        <button className="text-blue-500 hover:underline">Edit</button>
                                        <button
                                            className="text-red-500 hover:underline ml-4"
                                            onClick={() => handleDeleteProduct(product.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Orders Table */}
                <div className="bg-white rounded shadow">
                    <h2 className="p-4 text-xl font-semibold border-b">Order List</h2>
                    <table className="min-w-full">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="py-2 px-4">Customer</th>
                                <th className="py-2 px-4">Total</th>
                                <th className="py-2 px-4">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(order => (
                                <tr key={order.id} className="border-b">
                                    <td className="py-2 px-4">{order.customer}</td>
                                    <td className="py-2 px-4">${order.total}</td>
                                    <td className="py-2 px-4">{order.status}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dash;

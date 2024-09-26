import React, { useState } from 'react'
import { LuLoader } from 'react-icons/lu'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [loading, setLoading] = useState(false)

    const handleInput = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const handleSignUp = async (e) => { e.preventDefault() };

    return (
        <div className='flex justify-center items-center px-3 mt-[10vh]'>
            <form onSubmit={handleSignUp} className='shadow-xl drop-shadow max-w-sm flex flex-col gap-2 p-8 rounded-md'>

                {/* form to take the user details from the client */}
                <div className='text-center'>
                    <h1 className='font-bold text-xl'>LOGO</h1>
                    <p className='text-sm font-medium my-2'>"Join us for exclusive deals and exciting updates— Sign up today!"</p>
                </div>
                <div>
                    <h1 className='font-semibold'>Username</h1>
                    <input type="text"
                        className='border-2 w-full rounded-md h-8 pl-2 font-medium my-2'
                        onChange={handleInput} value={input.username} name='username' required />
                </div>
                <div>
                    <h1 className='font-semibold'>Email</h1>
                    <input type="email"
                        className='border-2 w-full rounded-md h-8 pl-2 font-medium my-2'
                        onChange={handleInput} value={input.email} name='email' required />
                </div>
                <div>
                    <h1 className='font-semibold'>Password</h1>
                    <input type="password"
                        className='border-2 w-full rounded-md h-8 pl-2 font-medium my-2'
                        onChange={handleInput} value={input.password} name='password' required />
                </div>

                {/* display loading on the signup */}
                {
                    loading ? (
                        <Button>
                            <LuLoader className='animate-spin mr-3 text-xl' />
                            Please Wait...
                        </Button>

                    ) : (
                        <Button type='submit' className="bg-blue-500 hover:bg-blue-600">SignUp</Button>
                    )
                }

                {/* link to send the user to the signin page if he already created a account */}
                <span className='text-center'>Already have an Account? <Link to="/signin" className="text-blue-500 hover:underline cursor-pointer">SignIn</Link></span>
            </form>

        </div>
    )
}

export default SignUp
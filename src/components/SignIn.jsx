import React, { useState } from 'react'
import { Button } from './ui/button';
import { LuLoader } from "react-icons/lu";
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [input, setInput] = useState({
    email: "",
    password: ""
  })

  const [loading, setLoading] = useState(false)

  const handleSignIn = async (e) => { e.preventDefault() }

  // handle the signIn form submission
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }
  return (
    <div className='flex justify-center items-center px-3 mt-[10vh]'>
      <form onSubmit={handleSignIn} className='shadow-xl drop-shadow max-w-sm flex flex-col gap-4 p-8 rounded-md'>

        <div className='text-center'>
          <h1 className='font-semibold text-xl'>Logo</h1>
          <p className='text-sm font-medium my-2'>Sign in to track your orders, and enjoy a seamless shopping experience.</p>
        </div>

        {/* takes the user's data from the client for signin */}
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
            <Button type='submit' className="bg-blue-500 hover:bg-blue-600">SignIn</Button>
          )
        }

        {/* link to send the user to the signup page if he can't created a account */}
        <span className='text-center'>Don't have an Account? <Link to="/signup" className="text-blue-500 hover:underline cursor-pointer">SignUp</Link></span>
      </form>

    </div>
  )
}

export default SignIn




// import React from 'react'

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"

// const SignIn = () => {
//   return (
//     <div className='flex justify-center items-center h-screen mt-[6vh]'>
//       <Tabs defaultValue="account" className="w-[400px]">
//         <TabsList className="grid w-full grid-cols-2">
//           <TabsTrigger value="account">LogIn</TabsTrigger>
//           <TabsTrigger value="password">SignUp</TabsTrigger>
//         </TabsList>
//         <TabsContent value="account">
//           <Card>
//             <CardHeader>
//               <CardTitle>LogIn</CardTitle>
//               <CardDescription>
//                 Sign in to track your orders, and enjoy a seamless shopping experience.
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <div className="space-y-1">
//                 <Label htmlFor="email">Email</Label>
//                 <Input id="email" defaultValue="" />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="password">Password</Label>
//                 <Input id="password" defaultValue="" />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button>LogIn</Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//         <TabsContent value="password">
//           <Card>
//             <CardHeader>
//               <CardTitle>SignUp</CardTitle>
//               <CardDescription>
//                 "Join us for exclusive deals and exciting updates— Sign up today!"
//               </CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-2">
//               <div className="space-y-1">
//                 <Label htmlFor="name">Name</Label>
//                 <Input id="name" type="text" />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="new">Email</Label>
//                 <Input id="email" type="email" />
//               </div>
//               <div className="space-y-1">
//                 <Label htmlFor="password">Password</Label>
//                 <Input id="password" type="password" />
//               </div>
//             </CardContent>
//             <CardFooter>
//               <Button>Save password</Button>
//             </CardFooter>
//           </Card>
//         </TabsContent>
//       </Tabs>
//     </div>
//   )
// }

// export default SignIn
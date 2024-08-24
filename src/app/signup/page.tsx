"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";

export default function SignUp(){
    const router = useRouter()

    const [user,setUser] = useState({
        email: '',
        password: '',
        username: ''
    })

    const [buttonDisabled, setButtonDisabled] = React.useState(false)

    const [loading, setLoading] = React.useState(false)

    const onSignup = async()=>{

        try {
            setLoading(true)
            const response = await axios.post('/api/users/signup/', user)
            console.log('Sign up success')
            router.push('/login')
        } 
        catch(error:any){

            toast.error(error.message)
            console.log('Sign up failed')
        } 
        finally{
            setLoading(false)
        }
    } 

    useEffect(()=>{
        if(user.email.length > 0 && user.password.length >0 && user.username.length>0 ){
            setButtonDisabled(false)
        } 
        else setButtonDisabled(true)
    }, [user])


    return(
        <div className="text-black">
            <div className="flex mt-8 max-w-md w-11/2 min-h-[500px] bg-white place-self-center mx-auto rounded-lg flex-col p-7 gap-3">
                <h1 className="text-center font-semibold">{loading ? 'Please wait...': 'Sign Up'}</h1>

                <label htmlFor="username">Username:</label>
                <input 
                id="username"
                type="text" 
                value={user.username}
                onChange={(e)=> setUser({...user, username:e.target.value})}
                className="border border-blue-400 px-2 py-4 rounded outline-none"
                />

                <label htmlFor="email">Email:</label>
                <input 
                id="email"
                value={user.email}
                type="email"
                onChange={(e)=>setUser({...user,email:e.target.value})}
                className="border border-blue-400 px-2 py-4 rounded outline-none"
                />

                <label htmlFor="password">Password:</label>
                <input 
                type="password"
                id="password"
                value={user.password}
                onChange={(e)=>setUser({...user,password:e.target.value})}
                className="border border-blue-400 px-2 py-4 rounded outline-none"
                />

        <button
          onClick={onSignup}
          className={`px-2 py-4 rounded-full mt-8 ${buttonDisabled ? 'disabled-button' : 'enabled-button'}`}
          disabled={buttonDisabled} 
        >
          Sign Up
        </button>
                <Link href='/login' className="text-center">Already have an account ? log in</Link>
            </div>

        </div>
    )
} 
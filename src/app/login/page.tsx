"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function LoginPage(){

    
    const [user,setUser] = useState({
        email: '',
        password: '',
    })

    const router = useRouter()
    //disabling button
    const [buttonDisabled, setButtonDisabled] = React.useState(false)
    //showing process
    const [loading, setLoading] = React.useState(false)

    //log in logic
    const onLogin = async()=>{
        try{
            setLoading(true)
            const response = await axios.post('/api/users/login', user)
            console.log('Log in successfully')
            toast.success('Login success')
            router.push('/profile')
        }
        catch(error:any){
            console.log('Login failed', error.message)
        }
        finally{
            setLoading(false)
        }
    }


    useEffect(()=>{
        if(user.email.length > 0 && user.password.length ){
            setButtonDisabled(false)
        } 
        else setButtonDisabled(true)
    }, [user])

    
    return(
        <div className="">
            <div className="text-black">
            <div className="flex mt-8 max-w-md w-11/2 min-h-[500px] bg-white place-self-center mx-auto rounded-lg flex-col p-7 gap-3">
                <h1 className="text-center font-semibold">{loading ? 'Please wait...': 'Log in'}</h1>

              
                {/**  <label htmlFor="username">Username:</label>
                <input 
                id="username"
                type="text" 
                value={user.username}
                onChange={(e)=> setUser({...user, username:e.target.value})}
                className="border border-blue-400 px-2 py-4 rounded outline-none"
                /> */}

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
                onClick={onLogin}
                className={`px-2 py-4 rounded-full mt-8 ${buttonDisabled ? 'disabled-button' : 'enabled-button'}`}
                disabled={buttonDisabled} >
                Log in
                </button>

                <Link href='/signup' className="text-center">Click here to sign up</Link>

                <Link href='/profile'>Go to profile</Link>
            </div>

        </div>
        </div>
    )
}
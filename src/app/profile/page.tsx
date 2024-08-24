'use client'
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"

export default function Profile(){

    const router = useRouter()
    const logout =async ()=>{
        try{

            await axios.get('/api/users/logout')

            toast.success('logout success')

            router.push('/login')

        }catch(error:any){
            console.log(error.message)

            toast.error(error.message)
        }
    }


    return(
        <div className="flex flex-col gap-4 p-4">
            <h1>Profile</h1>
            <hr />
            <p>Profile Page</p>
            <hr />
            <button 
            onClick={logout}
             className="bg-blue-400 p-4 rounded-full w-[100px]">Log out</button>
        </div>
    )
}
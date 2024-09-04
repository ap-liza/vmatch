'use client'

import axios from "axios"
import { useEffect, useState } from "react"

export default function UserProfile({ params }: { params: { id: string } }) {
    const [userData, setUserData] = useState<any>(null)

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const res = await axios.get(`/api/users/${params.id}`)
                setUserData(res.data)
            } catch (error:any) {
                console.error('Failed to fetch user data:', error.message)
            }
        }

        fetchUserData()
    }, [params.id])

    return (
        <div className="flex flex-col gap-4 p-4">
            <h1>Profile of User {params.id}</h1>
            {userData ? (
                <>
                    <h2>Welcome, {userData.firstName}</h2>
                    <p>Email: {userData.email}</p>
                    {/* Display more user details here */}
                </>
            ) : (
                <p>Loading user data...</p>
            )}
        </div>
    )
}

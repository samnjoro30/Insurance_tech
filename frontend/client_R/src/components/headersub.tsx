

import { useState, useEffect} from 'react';
import axiosInstance from './axiosInstance';

interface User{
    name: string;
    email: string;
}

export default function HeaderUser (){
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchHeader = async() =>{
            try{
                const res = await axiosInstance.get("/header/user");
                setUser(res.data);

            }catch(err){
                const error = err instanceof Error ? err : new Error(String(err))
                console.error("Error fetching user details:", error.message)
            }finally{
                setLoading(false)
            }
        }
        fetchHeader()
    }, []);

    return(
        <div>
            <div>
                <h1> Profile overview</h1>
                {loading && <p>Loading user Info ...</p>}
                {user && (
                    <div>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </div>
                )}

            </div>
        </div>
    )
}
import { useState } from 'react';
import axiosInstance from './axiosInstance';


const Login = () => {
    const [message, setMessage ] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    
    const HandleSubmit = async () => {
        setLoading(true);
        setMessage('');
        try{
            const res = await axiosInstance.post("/auth/login");
            const Data = res.data.access_token
            sessionStorage.setItem('user', JSON.stringify(Data));
            setMessage(res.data.message || 'login sucessfull');
        }catch(err){
            const error = err instanceof Error ? err : Error(String(err));

        }finally{

        }
    }

    return(
        <div>
            <form onSubmit={HandleSubmit}>
                <div>
                    <input
                      name=""
                      value=""
                      className=""
                    />
                </div>
                <div>
                    <input
                      name=""
                      value=""
                      className=""
                    />
                </div>
            </form>
        </div>
    )

}

export default Login;
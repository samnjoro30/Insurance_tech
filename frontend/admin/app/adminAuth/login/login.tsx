"use client"

import { useState } from 'react';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react';

interface FormData {
    email: string;
    workId: string;
    password: string;
}

export default function Adminlogin (){
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [formData, setFormData] = useState<FormData>({
        email: '',
        workId: '',
        password: '',
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;
        setFormData(prev => ({ ...prev, [name]: value}))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try{
            "use server"
            const res = await axios.post("admin/login", formData)
            setFormData(res.data.message);
        }catch(err){

        }finally{

        }
    }

    return(
        <div>
            <div> 
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input
                          type=""
                          name=""
                          value=""
                          onChange={handleChange}
                          required
                        />
                    </div>
                    <div>
                        <label>WorkId</label>
                        <input
                          type=""
                          name=""
                          value=""
                          onChange={handleChange}
                          required
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                          type=""
                          name=""
                          value=""
                          onChange={handleChange}
                          required
                        />
                        <span
                          onClick = {() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff /> : <Eye/> }
                        </span>
                    </div>
                    <button
                       type="submit"
                    >
                        {loading ? 'loging..' : 'login'}
                    </button>
                </form>
            </div>

        </div>
    )

}
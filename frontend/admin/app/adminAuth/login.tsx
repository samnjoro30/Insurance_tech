"use client"

import { useState } from 'react';
import axios from 'axios';

interface FormData {
    email: string;
    workId: string;
    password: string;
}

export default function Adminlogin (){
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        email: '',
        workId: '',
        password: '',
    })

    const handleSubmit = async () => {

        try{
            const res = await axios.post("admin/login", formData)
        }catch(err){

        }finally{

        }
    }

    return(
        <div>

        </div>
    )

}
import { useState } from 'react';
import axios from 'axios';

interface FormData {
    email: string;
    otp: string;
}

const Verification = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormData>({
        email: '',
        otp: ''
    });
    const [message, setMessage] = useState<string>(''); 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage(''); // Clear previous message

        try {
            const res = await axios.post('/verify', formData); 
            setMessage(res.data.message || 'Verification successful');
        } catch (error: any) {
            setMessage(
                error.response?.data?.message || 'Verification failed. Please try again.'
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>OTP:</label>
                    <input
                        type="text"
                        name="otp"
                        value={formData.otp}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Verifying...' : 'Verify'}
                </button>
            </form>

            {message && (
                <p style={{ marginTop: '1rem', color: message.toLowerCase().includes('fail') ? 'red' : 'green' }}>
                    {message}
                </p>
            )}
        </div>
    );
};

export default Verification;

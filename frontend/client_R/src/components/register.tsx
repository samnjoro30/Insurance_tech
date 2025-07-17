import React, { useState } from 'react';
import axiosInstance from './axiosInstance';


import './styles.css/register.css';

interface FormData {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone_number: string;
  password: string;
  //confirmPassword: string;
}
interface RegisterProps {
  initialMode: 'login' | 'register';
}
const Register: React.FC<RegisterProps> = ({ initialMode }) => {
  const [isLogin, setIsLogin] = useState(initialMode === 'login');
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone_number: '',
    password: '',
    //confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const endpoint = isLogin ? '/login' : '/register';
      const response = await axiosInstance.post(`/auth${endpoint}`, formData);

      console.log(isLogin ? 'Login successful' : 'Registration successful', response.data);

      setFormData({
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        phone_number: '',
        password: '',
        //confirmPassword: ''
      });

      alert(isLogin ? 'Login successful!' : 'Registration successful!');
      setTimeout(() => {
        // Navigate('/dash')
      })
    } catch (error: any) {
      console.error('Authentication error:', error);
      alert(`Authentication failed: ${error.response?.data?.message || 'Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        {/* Sign In or Sign Up Form */}
        <div className="auth-form">
          {/* <h2 className="text-3xl font-bold mb-6">{isLogin ? 'Sign In' : 'Sign Up'}</h2> */}
          <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>

          <p className="text-sm mb-4">or use your email {isLogin ? 'to sign in' : 'to register'}</p>

          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
               // className="w-full p-2 mb-4 border rounded bg-gray-100"
                required
              />
            )}

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="John"
               // className="w-full p-2 mb-4 border rounded bg-gray-100"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="simiyu"
               // className="w-full p-2 mb-4 border rounded bg-gray-100"
                required
              />

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              //className="w-full p-2 mb-4 border rounded bg-gray-100"
              required
            />


            <input 
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="07XXXXXXXX"
              required
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              // className="w-full p-2 mb-4 border rounded bg-gray-100"
              required
            />
            {/* <input
              type="Password"
              name="confirmPassword"
              value={formData.username}
              onChange={handleChange}
               // className="w-full p-2 mb-4 border rounded bg-gray-100"
              required
            /> */}

            {isLogin && (
              <a href="#" className="text-sm text-blue-500 mb-4 block">Forgot Your Password?</a>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-700 text-white py-2 rounded mt-2 hover:bg-purple-800 transition"
            >
              {loading ? 'Loading...' : isLogin ? 'Sign In' : 'Sign Up'}
            </button>
          </form>
        </div>
        {/* Toggle Panel */}
        <div className="Welcome_text">
          <h2 className="Head">
            {isLogin ? 'Hello, Friend!' : 'Welcome Back!'}
          </h2>
          <p className="mb-6">
            {isLogin
              ? 'Register with your personal details to use all of site features'
              : 'To keep connected with us please login with your personal info'}
          </p>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="button"
          >
            {isLogin ? 'Sign Up' : 'Sign In'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React, { useState } from 'react';
import axios from 'axios';
import './styles.css/register.css';

interface FormData {
  username: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    password: ''
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
      const response = await axios.post(`http://localhost:5000/api/auth${endpoint}`, formData);

      console.log(isLogin ? 'Login successful' : 'Registration successful', response.data);

      setFormData({
        username: '',
        email: '',
        password: ''
      });

      alert(isLogin ? 'Login successful!' : 'Registration successful!');
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

          <div className="auth-social">
            <button className="border p-2 rounded"><i>G+</i></button>
            <button className="border p-2 rounded"><i>f</i></button>
            <button className="border p-2 rounded"><i>GH</i></button>
            <button className="border p-2 rounded"><i>in</i></button>
          </div>

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
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              //className="w-full p-2 mb-4 border rounded bg-gray-100"
              required
            />

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              // className="w-full p-2 mb-4 border rounded bg-gray-100"
              required
            />

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

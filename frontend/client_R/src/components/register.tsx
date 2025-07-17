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
  const [step, setStep] = useState<number>(1);
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
      <div className="auth-form">
        <h2>{isLogin ? 'Sign In' : 'Sign Up'}</h2>
        <p className="text-sm mb-4">
          {isLogin
            ? 'Use your email and password to sign in'
            : 'Fill in your details to register'}
        </p>

        <form onSubmit={handleSubmit}>
          {/* LOGIN FORM */}
          {isLogin && (
            <>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Password
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>
              <a href="#" className="text-sm text-blue-500 mb-4 block">
                Forgot your password?
              </a>
              <button
                className="submit-button"
                type="submit"
                disabled={loading}
              >
                {loading ? 'login ...' : 'sign in'}
              </button>
            </>
          )}

          {/* REGISTER FORM - Step 1 */}
          {!isLogin && step === 1 && (
            <>
              <label>
                Username:
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                First Name:
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Last Name:
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </label>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="next"
              >
                Next
              </button>
            </>
          )}

          {/* REGISTER FORM - Step 2 */}
          {!isLogin && step === 2 && (
            <>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Phone Number:
                <input
                  type="text"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </label>

              <div className="flex gap-4 mt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="next bg-gray-500 hover:bg-gray-600"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="submit-button"
                >
                  {loading ? 'Submitting...' : 'Sign Up'}
                </button>
              </div>
            </>
          )}
        </form>
      </div>

      {/* Welcome/Toggle Panel */}
      <div className="Welcome_text">
        <h2 className="Head">
          {isLogin ? 'Hello, Friend!' : 'Welcome Back!'}
        </h2>
        <p className="mb-6">
          {isLogin
            ? 'Register to start using the platform'
            : 'Log in to continue'}
        </p>
        <button
          onClick={() => {
            setIsLogin(!isLogin);
            setStep(1); // Reset step on mode switch
          }}
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

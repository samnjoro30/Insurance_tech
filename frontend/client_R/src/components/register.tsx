import React, { useState } from 'react';
import axios from 'axios';
import './styles.css/register.css'

interface FormData{
    username: string;
    email: string;
    password: string;
}
const Register: React.FC = () => {
    const [isLogin, setIsLogin] = useState(true);
    const[loading, setLoading] = useState<boolean>(false);
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

    const handleSubmit = async (e: React.FormEvent) =>{
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
    } catch (error) {
      console.error('Authentication error:', error);
      //alert(`Authentication failed: ${error.response?.data?.message || 'Please try again.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="form-box">
        <div className="header-auth">
          <h2 className="title animation" style={{ "--i": 17, "--j": 0 } as React.CSSProperties}>
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className="toggle-text">
            {isLogin ? 'Need an account?' : 'Have an account?'}{' '}
            <button
              type="button"
              className="toggle-form-btn"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <div className="input-box animation" style={{ "--i": 18, "--j": 0 } as React.CSSProperties}>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <label>Username</label>
              <i className="bx bxs-user"></i>
            </div>
          )}

          <div className="input-box animation" style={{ "--i": 19, "--j": 1 } as React.CSSProperties}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
            <i className="bx bxs-envelope"></i>
          </div>

          <div className="input-box animation" style={{ "--i": 20, "--j": 2 } as React.CSSProperties}>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
            />
            <label>Password</label>
            <i className="bx bxs-lock-alt"></i>
          </div>

          <button
            type="submit"
            className="auth-btn animation"
            style={{ "--i": 21, "--j": 3 } as React.CSSProperties}
            disabled={loading}
          >
            {loading ? (
              <span>Processing...</span>
            ) : (
              <span>{isLogin ? 'Log In' : 'Sign Up'}</span>
            )}
          </button>
        </form>

        <div className="divider animation" style={{ "--i": 22, "--j": 4 } as React.CSSProperties}>
          <span>OR</span>
        </div>

        <div className="social-login animation" style={{ "--i": 23, "--j": 5 } as React.CSSProperties}>
          <button type="button" className="social-btn facebook">
            <i className="bx bxl-facebook"></i> Continue with Facebook
          </button>
          <button type="button" className="social-btn google">
            <i className="bx bxl-google"></i> Continue with Google
          </button>
        </div>

        <div className="auth-footer animation" style={{ "--i": 24, "--j": 6 } as React.CSSProperties}>
          <p>Help, Friend!</p>
          <p>
            {isLogin
              ? 'Register with your personal details to see all of the features.'
              : 'Login to access your account.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
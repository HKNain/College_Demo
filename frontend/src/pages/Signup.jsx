import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import {api} from "../utils/axios.js"
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate()
  const [role, setRole] = useState(''); 
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    securityKey: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
    if (e.target.value !== 'Admin') {
      setFormData((prev) => ({ ...prev, securityKey: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = { ...formData, role }; 
  

  try {
    const response = await api.post('/api/auth/signup', dataToSend);
    console.log('Signup successful:', response.data);

   
    
    
    setFormData({
      email: '',
      password: '',
      securityKey: '',
    }),
    setRole('')

    navigate('/')
  } catch (error) {
    console.log('Error in signUp:', error.response?.data || error.message);
  }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-950">
      <Navbar/>
      <form
        onSubmit={handleSubmit}
        className="bg-purple-500 p-8 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Signup</h2>

        <label className="block mb-2">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mt-1"
          />
        </label>

        <label className="block mb-2">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full border p-2 rounded mt-1"
          />
        </label>

        <label className="block mb-4">
          Role <span className="text-gray-300">(optional)</span>:
          <select
            value={role}
            onChange={handleRoleChange}
            className="w-full border p-2 rounded mt-1"
          >
            <option value="">Select role</option>
            <option value="user">User</option>
            <option value="Admin">Admin</option>
          </select>
        </label>

        {role === 'Admin' && (
          <label className="block mb-4">
            Security Key:
            <input
              type="text"
              name="securityKey"
              value={formData.securityKey}
              onChange={handleChange}
              required
              className="w-full border p-2 rounded mt-1"
            />
          </label>
        )}

        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded hover:bg-gray-500 transition"
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;

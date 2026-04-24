
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-[3rem] shadow-2xl shadow-blue-100/50 w-full max-w-4xl overflow-hidden flex flex-col md:flex-row border border-gray-50">
        
        {/* الجزء الأيسر: ترحيبي */}
        <div className="md:w-1/2 bg-[#eff6ff] p-12 flex flex-col justify-center items-center text-center">
          <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-lg mb-8">
            <img src="Photos/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
          </div>
          <h2 className="text-3xl font-black text-[#1e293b] mb-4">Join Our Community</h2>
          <p className="text-[#64748b] font-medium leading-relaxed">
            Create an account to start tracking your mental well-being and access personalized support.
          </p>
        </div>

        {/* الجزء الأيمن: الفورم */}
        <div className="md:w-1/2 p-12 lg:p-16">
          <h3 className="text-2xl font-black text-[#1e293b] mb-8">Sign Up</h3>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-[10px] font-black text-[#94a3b8] uppercase tracking-widest ml-1 mb-2 block">Full Name</label>
              <input 
                type="text" 
                className="w-full bg-[#f1f5f9] rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                placeholder="Mazen Mohamed"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="text-[10px] font-black text-[#94a3b8] uppercase tracking-widest ml-1 mb-2 block">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-[#f1f5f9] rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                placeholder="example@mail.com"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <label className="text-[10px] font-black text-[#94a3b8] uppercase tracking-widest ml-1 mb-2 block">Password</label>
              <input 
                type="password" 
                className="w-full bg-[#f1f5f9] rounded-2xl py-4 px-6 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all font-medium"
                placeholder="••••••••"
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <button 
              onClick={() => navigate('/library')}
              className="w-full bg-[#2563eb] text-white py-4.5 rounded-2xl font-black text-lg shadow-xl shadow-blue-100 hover:bg-blue-700 hover:-translate-y-1 transition-all mt-4"
            >
              Create Account
            </button>
          </form>

          {/* التعديل هنا: يوجه لصفحة الـ Login */}
          <p className="text-center mt-8 text-sm font-bold text-[#94a3b8]">
            Already have an account? <Link to="/login" className="text-[#2563eb] hover:underline">Log In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

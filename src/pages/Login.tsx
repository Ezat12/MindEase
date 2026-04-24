import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6">
      <div className="bg-white rounded-[3rem] shadow-2xl shadow-blue-100/50 w-full max-w-4xl overflow-hidden flex flex-col md:flex-row border border-gray-50">
        
        {/* الجزء الأيسر: ترحيب بالعودة */}
        <div className="md:w-1/2 bg-[#f0f9ff] p-12 flex flex-col justify-center items-center text-center">
          <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-lg mb-8">
            <img src="Photos/logo.png" alt="Logo" className="w-16 h-16 object-contain" />
          </div>
          <h2 className="text-3xl font-black text-[#1e293b] mb-4">Welcome Back!</h2>
          <p className="text-[#64748b] font-medium leading-relaxed">
            We're glad to see you again. Continue your journey towards mental clarity.
          </p>
        </div>

        {/* الجزء الأيمن: فورم تسجيل الدخول */}
        <div className="md:w-1/2 p-12 lg:p-16">
          <h3 className="text-2xl font-black text-[#1e293b] mb-8">Login</h3>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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
              <div className="flex justify-between items-center mb-2">
                <label className="text-[10px] font-black text-[#94a3b8] uppercase tracking-widest ml-1 block">Password</label>
                <a href="#" className="text-[10px] font-bold text-blue-500 hover:underline">Forgot?</a>
              </div>
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
              Sign In
            </button>
          </form>

          <p className="text-center mt-10 text-sm font-bold text-[#94a3b8]">
            New to MindEcho? <Link to="/signup" className="text-[#2563eb] hover:underline">Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6">
      <div className="absolute top-0 w-full px-10 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
           <img src="Photos/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
           <span className="font-black text-xl tracking-tight text-[#1e293b]">MINDECHO</span>
        </div>
        <button className="text-sm font-bold text-[#64748b] hover:text-[#2563eb] transition-all">Help Center</button>
      </div>

      {/* الكارت الرئيسي (Main Card) */}
      <div className="bg-white rounded-[3rem] shadow-2xl shadow-blue-100/50 w-full max-w-5xl overflow-hidden flex flex-col md:flex-row border border-gray-50">
        
        {/* الجزء الشمال: الصورة (اللوجو الكبير) */}
        <div className="md:w-1/2 bg-[#eff6ff] p-12 flex items-center justify-center">
          <div className="relative w-full max-w-[350px]">
             <div className="bg-white rounded-[2.5rem] shadow-2xl p-12 flex items-center justify-center">
                <img 
                  src="Photos/logo.png" 
                  alt="MindEcho Logo" 
                  className="w-full h-auto object-contain"
                />
             </div>
             <div className="absolute -right-4 -bottom-4 w-full h-full border-2 border-blue-100 rounded-[2.5rem] -z-10"></div>
          </div>
        </div>

        {/* الجزء اليمين: الترحيب والأزرار */}
        <div className="md:w-1/2 p-16 flex flex-col justify-center">
          <span className="bg-blue-50 text-[#2563eb] w-fit px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest mb-6">
            Step 01
          </span>
          
          <h1 className="text-5xl font-black text-[#1e293b] leading-[1.1] mb-6">
            Welcome to <br /> <span className="text-[#2563eb]">MINDECHO</span>
          </h1>
          
          <p className="text-lg text-[#64748b] font-medium leading-relaxed mb-10">
            Track your mood and get personalized support. Let's start your journey to mental clarity and emotional resilience.
          </p>

          <div className="flex flex-col gap-4">
            {/* التعديل هنا: يفتح صفحة الـ Login */}
            <button 
              onClick={() => navigate('/login')} 
              className="bg-[#2563eb] text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-blue-200 hover:bg-blue-700 hover:-translate-y-1 transition-all"
            >
              Login
            </button>
            <button 
              onClick={() => navigate('/signup')} 
              className="bg-white text-[#2563eb] border-2 border-[#f1f5f9] py-5 rounded-2xl font-black text-lg hover:border-blue-200 transition-all shadow-sm active:scale-95"
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>

      {/* Footer بسيط */}
      <div className="mt-12 text-center">
         <div className="flex gap-8 justify-center mb-4 text-[13px] font-bold text-[#94a3b8]">
            <a href="#" className="hover:text-[#2563eb]">Privacy Policy</a>
            <a href="#" className="hover:text-[#2563eb]">Terms of Service</a>
            <a href="#" className="hover:text-[#2563eb]">Contact Support</a>
         </div>
         <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            © 2026 MINDECHO. All rights reserved. • Health for Everyone
         </p>
      </div>
    </div>
  );
};

export default Welcome;

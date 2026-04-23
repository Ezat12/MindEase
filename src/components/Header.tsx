import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchTerm, setSearchTerm }) => {
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Library', path: '/library' },
    { name: 'Journal', path: '/journal' },
    { name: 'Community', path: '/community' },
  ];

  return (
    <header className="flex items-center justify-between px-10 py-5 bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="flex items-center gap-12">
        {/* اللوجو */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 flex items-center justify-center overflow-hidden rounded-xl">
            <img src="Photos/logo.png" alt="MindEcho Logo" className="w-full h-full object-contain" />
          </div>
          <h1 className="text-2xl font-black tracking-tight text-[#1e293b]">MINDECHO</h1>
        </div>

        {/* الروابط */}
        <nav className="hidden md:flex gap-9 text-[15px] font-bold text-[#64748b]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors relative ${
                location.pathname === link.path 
                ? 'text-[#2563eb] after:absolute after:bottom-[-25px] after:left-0 after:w-full after:h-1 after:bg-[#2563eb] after:rounded-t-full' 
                : 'hover:text-[#1e293b]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>

      {/* البحث والبروفايل */}
      <div className="flex items-center gap-7">
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Search everything..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="bg-[#f1f5f9] rounded-full py-3 px-12 text-sm focus:outline-none w-80 shadow-inner focus:ring-2 focus:ring-blue-100 transition-all" 
          />
          <span className="absolute left-5 top-3.5 text-gray-400">🔍</span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-[10px] font-black text-[#1e293b]">Mazen Mohamed</p>
            <p className="text-[8px] font-bold text-green-500 uppercase">Online</p>
          </div>
          <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-md cursor-pointer hover:scale-110 transition-transform">
            <img src="https://api.dicebear.com/8.x/lorelei/svg?seed=Mazen" alt="profile" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1e293b] flex flex-col">
      {/* الـ Header الثابت لـ MINDECHO */}
      <header className="flex items-center justify-between px-8 py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
        <div className="flex items-center gap-8">
          <h1 className="text-2xl font-bold text-[#2563eb] tracking-tighter">MINDECHO</h1>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-[#64748b]">
            <Link to="/" className="hover:text-[#2563eb]">Home</Link>
            <Link to="/library" className="hover:text-[#2563eb]">Library</Link>
            <Link to="/journal" className="hover:text-[#2563eb]">Journal</Link>
          </nav>
        </div>
        {/* باقي الـ Header (البحث والبروفايل) */}
      </header>

      {/* هنا بيتغير المحتوى حسب الصفحة */}
      <main className="flex-1 overflow-y-auto">
        <Outlet />
      </main>

      {/* الـ Music Player الثابت تحت */}
      <footer className="h-24 border-t border-gray-100 px-8 flex items-center justify-between bg-white/80 backdrop-blur-md">
         {/* كود الـ Player هنا */}
      </footer>
    </div>
  );
};

export default MainLayout;

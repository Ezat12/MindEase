import React, { useState, useRef } from 'react';

// تعريف أنواع البيانات
interface JournalPost {
  id: number;
  content: string;
  mood: string;
  date: string;
}

interface Echo {
  id: number;
  title: string;
  img: string;
}

const Journal = () => {
  // State لليوميات
  const [entry, setEntry] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('Joy');
  const [history, setHistory] = useState<JournalPost[]>([]);

  // State للصور (Happy Echoes)
  const [echoes, setEchoes] = useState<Echo[]>([
    { id: 1, title: "Sunset calm", img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400" }
  ]);

  // State للـ Modal ورفع الصور
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [tempTitle, setTempTitle] = useState('');
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const emojis = [
    { char: '😊', label: 'Joy' },
    { char: '❤️', label: 'Loved' },
    { char: '⭐', label: 'Proud' },
    { char: '✨', label: 'Inspired' },
    { char: '🌿', label: 'Calm' },
  ];

  // دالة حفظ 
  const handleSaveEntry = () => {
    if (!entry.trim()) {
      alert("Please write something first! ✨");
      return;
    }
    const newPost: JournalPost = {
      id: Date.now(),
      content: entry,
      mood: selectedEmoji,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
    };
    setHistory([newPost, ...history]);
    setEntry('');
    alert(`Your ${selectedEmoji} reflection saved!`);
  };

  // دا مع رفع الملفات
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempImage(reader.result as string);
        setIsModalOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  
  const saveNewEcho = () => {
    if (tempImage) {
      const newEcho = { id: Date.now(), title: tempTitle || "Moment", img: tempImage };
      setEchoes([newEcho, ...echoes].slice(0, 4));
      setIsModalOpen(false);
      setTempImage(null);
      setTempTitle('');
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fc] font-sans text-[#1e293b] pb-20 relative">
      <main className="max-w-6xl mx-auto pt-16 px-6">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-[#1e293b]">My Space</h1>
          <p className="text-lg text-[#64748b] mt-2">Welcome back, Mazen. How is your heart today?</p>
        </div>

        <div className="grid grid-cols-1 gap-16">
          
          {/* 1. Main Journal Card */}
          <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-10 relative">
            <div className="flex justify-between items-center mb-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-xl">✍️</div>
                <h3 className="text-2xl font-bold">Daily Journal</h3>
              </div>
              <div className="bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                Mood: {selectedEmoji}
              </div>
            </div>

            <div className="bg-[#f0f4ff]/50 border border-blue-50 rounded-[2rem] p-8 mb-8">
              <span className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">Prompt of the day</span>
              <p className="text-xl font-medium text-[#475569] mt-3 italic">"What made you smile today? Write your reflections here..."</p>
            </div>

            <textarea
              value={entry}
              onChange={(e) => setEntry(e.target.value)}
              placeholder="Type your heart out..."
              className="w-full h-48 text-xl font-medium outline-none leading-relaxed bg-transparent resize-none placeholder:text-gray-200"
            />

            <div className="flex flex-col sm:flex-row justify-between items-center mt-8 pt-8 border-t border-gray-50 gap-6">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Stickers:</span>
                <div className="flex gap-3">
                  {emojis.map((emoji) => (
                    <button key={emoji.label} onClick={() => setSelectedEmoji(emoji.label)} className={`text-2xl transition-all hover:scale-125 ${selectedEmoji === emoji.label ? '' : 'grayscale opacity-30'}`}>{emoji.char}</button>
                  ))}
                </div>
              </div>
              <button onClick={handleSaveEntry} className="bg-[#2563eb] text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">Save Entry</button>
            </div>
          </div>

          {/* 2. Happy Echoes Section */}
          <div className="space-y-6">
            <div className="flex justify-between items-center px-2">
              <div>
                <h3 className="text-2xl font-bold text-[#1e293b]">Your Happy Echoes</h3>
                <p className="text-sm text-gray-400 mt-1">Capture moments that light up your day.</p>
              </div>
              <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept="image/*" />
              <button onClick={() => fileInputRef.current?.click()} className="bg-white border-2 border-dashed border-gray-200 text-gray-500 px-6 py-3 rounded-2xl font-bold text-sm hover:border-blue-400 hover:text-blue-500 transition-all flex items-center gap-2">
                <span>+</span> Add Photo
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {echoes.map((echo) => (
                <div key={echo.id} className="group">
                  <div className="aspect-square bg-white p-3 rounded-[2rem] shadow-sm border border-gray-50 group-hover:shadow-md transition-all">
                    <img src={echo.img} alt={echo.title} className="w-full h-full object-cover rounded-[1.5rem]" />
                  </div>
                  <p className="text-center mt-3 text-sm font-medium text-[#64748b] italic line-clamp-1 px-2">"{echo.title}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Journal History (سجل التدوينات) */}
          {history.length > 0 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
              <h3 className="text-2xl font-bold px-2">Recent Reflections</h3>
              <div className="space-y-6">
                {history.map((post) => (
                  <div key={post.id} className="bg-white/60 backdrop-blur-sm p-8 rounded-[2rem] border border-white shadow-sm flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{emojis.find(e => e.label === post.mood)?.char}</span>
                        <span className="font-bold text-sm text-gray-500">{post.date}</span>
                      </div>
                      <span className="text-[10px] font-black bg-blue-50 text-blue-500 px-3 py-1 rounded-full uppercase tracking-widest">{post.mood}</span>
                    </div>
                    <p className="text-lg font-medium text-[#475569] leading-relaxed">{post.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </main>

      {/* Upload Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white rounded-[3rem] p-10 max-w-md w-full shadow-2xl animate-in zoom-in duration-300">
            <h3 className="text-2xl font-black mb-6">Describe this moment</h3>
            <div className="aspect-video rounded-3xl overflow-hidden mb-6 border-4 border-gray-50 shadow-inner">
              <img src={tempImage!} alt="Preview" className="w-full h-full object-cover" />
            </div>
            <input 
              type="text" 
              placeholder="e.g., A peaceful morning walk..."
              className="w-full p-5 bg-gray-50 rounded-2xl border-2 border-gray-100 focus:border-blue-500 outline-none font-bold mb-8"
              value={tempTitle}
              onChange={(e) => setTempTitle(e.target.value)}
              autoFocus
            />
            <div className="flex gap-4">
              <button onClick={() => setIsModalOpen(false)} className="flex-1 py-4 font-bold text-gray-400">Cancel</button>
              <button onClick={saveNewEcho} className="flex-[2] bg-[#2563eb] text-white py-4 rounded-2xl font-black shadow-lg">Add Moment</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Journal;

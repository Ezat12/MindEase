import React, { useState, useRef } from 'react';

// تعريف أنواع البيانات لضمان دقة الكود (TypeScript)
interface Reply {
  id: number;
  user: string;
  text: string;
  likes: number;
}

interface Post {
  id: number;
  user: string;
  time: string;
  status: string;
  content: string;
  likes: number;
  image: string | null;
  avatar: string;
  replies: Reply[];
}

const Community = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  // 1. حالات التخزين (States)
  const [postText, setPostText] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [commentTexts, setCommentTexts] = useState<{ [key: number]: string }>({});
  
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      user: "Ahmed Salama",
      time: "2H AGO",
      status: "FEELING PEACEFUL",
      content: "بجد فرق معايا جداً في هدوء MINDECHO. اليوم بدأت أول تمرين تأمل من مكتبة الـ Neutral mood. أنصحكم تجربوا تمارين الـ",
      likes: 24,
      image: null,
      avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=Ahmed",
      replies: [
        { id: 101, user: "Sara Hassan", text: "فعلاً التمارين دي بتغير المود تماماً!", likes: 3 }
      ]
    },
    {
      id: 2,
      user: "Sara Hassan",
      time: "5H AGO",
      status: "FEELING HOPEFUL",
      content: "الكتابة فعلاً Journal تخطيت اليوم نوبة قلق كانت صعبة بفضل كتابة مذكراتي.",
      likes: 18,
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=500",
      avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=Sara",
      replies: []
    }
  ]);

  // 2. وظائف المنشورات (Posts)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => setSelectedImage(event.target?.result as string);
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSharePost = () => {
    if (!postText.trim() && !selectedImage) return;

    const newPost: Post = {
      id: Date.now(),
      user: "Mazen Mohamed",
      time: "JUST NOW",
      status: "FEELING GOOD",
      content: postText,
      likes: 0,
      image: selectedImage,
      avatar: "https://api.dicebear.com/8.x/lorelei/svg?seed=Mazen",
      replies: []
    };

    setPosts([newPost, ...posts]);
    setPostText('');
    setSelectedImage(null);
  };

  const handleLikePost = (id: number) => {
    setPosts(posts.map(p => p.id === id ? { ...p, likes: p.likes + 1 } : p));
  };

  // 3. وظائف التعليقات (Comments & Replies)
  const handleAddComment = (postId: number) => {
    const text = commentTexts[postId];
    if (!text?.trim()) return;

    const newReply: Reply = {
      id: Date.now(),
      user: "Mazen Mohamed",
      text: text,
      likes: 0
    };

    setPosts(posts.map(post => 
      post.id === postId ? { ...post, replies: [...post.replies, newReply] } : post
    ));
    setCommentTexts({ ...commentTexts, [postId]: '' });
  };

  const handleLikeComment = (postId: number, replyId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          replies: post.replies.map(r => r.id === replyId ? { ...r, likes: r.likes + 1 } : r)
        };
      }
      return post;
    }));
  };

  return (
    <div className="flex-1 bg-[#fcfdfe] p-10 overflow-y-auto pb-32">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
        
        {/* المجموعات */}
        <aside className="col-span-3">
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50 sticky top-0">
            <h3 className="font-black text-xl mb-8">Support Groups</h3>
            <div className="space-y-6">
              {['Anxiety Warriors', 'Daily Zen', 'Student Stress'].map(group => (
                <div key={group} className="flex items-center gap-4 group cursor-pointer hover:bg-gray-50 p-2 rounded-xl transition-all">
                  <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">🧡</div>
                  <span className="font-bold text-gray-700 group-hover:text-blue-600">{group}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>

        <main className="col-span-6 space-y-8">
          {/* صندوق كتابة المنشور */}
          <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
            <div className="flex gap-4">
              <img src="https://api.dicebear.com/8.x/lorelei/svg?seed=Mazen" className="w-12 h-12 rounded-full border" alt="me" />
              <div className="flex-1">
                <textarea 
                  value={postText}
                  onChange={(e) => setPostText(e.target.value)}
                  placeholder="What's on your mind, Mazen?"
                  className="w-full bg-gray-50 rounded-3xl p-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-100 resize-none h-24 font-medium"
                />
                {selectedImage && (
                  <div className="relative mt-4 inline-block">
                    <img src={selectedImage} className="w-32 h-32 object-cover rounded-2xl border-2 border-white shadow-md" alt="preview" />
                    <button onClick={() => setSelectedImage(null)} className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-[10px]">✕</button>
                  </div>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center mt-6 border-t pt-6">
              <div className="flex gap-3">
                <button className="p-3 bg-orange-50 rounded-xl hover:bg-orange-100 transition-colors">😊</button>
                <label className="p-3 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
                  📷 <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
                </label>
              </div>
              <button onClick={handleSharePost} className="bg-[#2563eb] text-white px-10 py-3.5 rounded-2xl font-black shadow-lg hover:bg-blue-700 transition-all active:scale-95">Share Post</button>
            </div>
          </div>

          {/* قائمة المنشورات */}
          {posts.map(post => (
            <div key={post.id} className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-50">
              {/* رأس المنشور */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex gap-4">
                  <img src={post.avatar} className="w-12 h-12 rounded-full border" alt="user" />
                  <div>
                    <h4 className="font-black text-[#1e293b]">{post.user}</h4>
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{post.time}</span>
                  </div>
                </div>
                <span className="bg-green-50 text-green-600 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-wider">{post.status}</span>
              </div>
              
              <p className="text-[#64748b] leading-relaxed font-medium mb-6 text-right" dir="rtl">{post.content}</p>
              {post.image && <img src={post.image} className="w-full h-64 object-cover rounded-[2rem] mb-6 shadow-sm" alt="post" />}

              {/* أزرار التفاعل */}
              <div className="flex gap-6 border-t border-gray-50 pt-6">
                <button onClick={() => handleLikePost(post.id)} className="flex items-center gap-2 text-gray-400 hover:text-red-500 font-bold transition-all active:scale-125">❤️ <span>{post.likes}</span></button>
                <button className="flex items-center gap-2 text-gray-400 hover:text-blue-500 font-bold transition-colors">💬 <span>{post.replies.length}</span></button>
              </div>

              {/* قسم التعليقات  */}
              <div className="mt-8 space-y-4">
                {post.replies.map(reply => (
                  <div key={reply.id} className="bg-gray-50 p-5 rounded-[1.5rem] flex justify-between items-start group">
                    <div>
                      <span className="font-black text-xs text-blue-600 block mb-1">{reply.user}</span>
                      <p className="text-sm text-gray-600 font-medium">{reply.text}</p>
                    </div>
                    <button 
                      onClick={() => handleLikeComment(post.id, reply.id)}
                      className="text-[11px] font-black text-gray-400 hover:text-red-500 flex items-center gap-1.5 transition-colors"
                    >
                      ❤️ {reply.likes > 0 && reply.likes}
                    </button>
                  </div>
                ))}

                {/* عمل تعليق*/}
                <div className="flex gap-3 mt-6">
                  <input 
                    type="text"
                    value={commentTexts[post.id] || ''}
                    onChange={(e) => setCommentTexts({ ...commentTexts, [post.id]: e.target.value })}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddComment(post.id)}
                    placeholder="Write a supportive reply..."
                    className="flex-1 bg-gray-50 border-none rounded-2xl px-6 py-3 text-sm focus:ring-2 focus:ring-blue-100"
                  />
                  <button onClick={() => handleAddComment(post.id)} className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-xs font-black hover:bg-blue-700 transition-all active:scale-95 shadow-md">Reply</button>
                </div>
              </div>
            </div>
          ))}
        </main>

        {/* التريندات */}
        <aside className="col-span-3 space-y-8">
          <div className="bg-blue-50 p-8 rounded-[2.5rem] border border-blue-100">
            <h4 className="font-black text-[#1e293b] mb-2">Live Support Session</h4>
            <p className="text-blue-600 text-xs font-bold mb-6">Starting in 45 minutes</p>
            <button className="w-full bg-white py-3.5 rounded-2xl font-black text-blue-600 shadow-sm hover:shadow-md transition-all">Join Webinar</button>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Community;

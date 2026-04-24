
export interface MediaItem {
  id: number;
  mood: 'joy' | 'anger' | 'disgust' | 'fear' | 'neutral' | 'sadness' | 'surprise';
  title: string;
  type: 'Video' | 'Audio' | 'Article';
  duration: string;
  thumbnail: string;
  url: string;
  description: string;
}

export const mediaData: MediaItem[] = [
  // --- JOY ---
  {
    id: 101, mood: 'joy', title: "The Science of Happiness", type: 'Video', duration: "15:20",
    thumbnail: "https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Explore the biological secrets behind a lasting smile."
  },
  {
    id: 102, mood: 'joy', title: "Morning Sunshine Vibes", type: 'Audio', duration: "1:20:00",
    thumbnail: "https://images.pexels.com/photos/374703/pexels-photo-374703.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Upbeat music to keep your energy high all day long."
  },
  {
    id: 103, mood: 'joy', title: "The Gratitude Journaling", type: 'Article', duration: "4 min read",
    thumbnail: "https://images.pexels.com/photos/636243/pexels-photo-636243.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Small habits that shift your mindset toward positivity."
  },

  // --- ANGER ---
  {
    id: 104, mood: 'anger', title: "Control the Inner Fire", type: 'Video', duration: "12:00",
    thumbnail: "https://images.pexels.com/photos/1312488/pexels-photo-1312488.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Techniques for emotional regulation and calm focus."
  },
  {
    id: 105, mood: 'anger', title: "Stoic Philosophy Lessons", type: 'Audio', duration: "25:00",
    thumbnail: "https://images.pexels.com/photos/4000421/pexels-photo-4000421.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Ancient wisdom for modern-day stress management."
  },
  {
    id: 106, mood: 'anger', title: "Heavy Bass Relief", type: 'Audio', duration: "45:00",
    thumbnail: "https://images.pexels.com/photos/1763071/pexels-photo-1763071.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Intense music to vent and release pent-up energy."
  },

  // --- SADNESS ---
  {
    id: 107, mood: 'sadness', title: "The Power of Vulnerability", type: 'Video', duration: "18:30",
    thumbnail: "https://images.pexels.com/photos/247195/pexels-photo-247195.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Why embracing your feelings is a sign of strength."
  },
  {
    id: 108, mood: 'sadness', title: "Rainy Night Reflections", type: 'Audio', duration: "2:00:00",
    thumbnail: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Soft ambient jazz for deep, quiet thinking."
  },
  {
    id: 109, mood: 'sadness', title: "Finding Light in Darkness", type: 'Article', duration: "10 min read",
    thumbnail: "https://images.pexels.com/photos/208052/pexels-photo-208052.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "How to navigate hard times and emerge stronger."
  },

  // --- FEAR ---
  {
    id: 110, mood: 'fear', title: "Defeating Social Anxiety", type: 'Video', duration: "22:00",
    thumbnail: "https://images.pexels.com/photos/1556706/pexels-photo-1556706.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Practical steps to face your fears with confidence."
  },
  {
    id: 111, mood: 'fear', title: "Safe Space Soundscapes", type: 'Audio', duration: "60:00",
    thumbnail: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Nature sounds that signal safety to your brain."
  },
  {
    id: 112, mood: 'fear', title: "The Courage Stories", type: 'Audio', duration: "30:00",
    thumbnail: "https://images.pexels.com/photos/631477/pexels-photo-631477.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Inspiring podcasts about overcoming the impossible."
  },

  // --- DISGUST ---
  {
    id: 113, mood: 'disgust', title: "Mental Space Cleaning", type: 'Video', duration: "10:00",
    thumbnail: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Declutter your mind and environment for clarity."
  },
  {
    id: 114, mood: 'disgust', title: "Boundaries & Health", type: 'Article', duration: "6 min read",
    thumbnail: "https://images.pexels.com/photos/236164/pexels-photo-236164.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "How to filter out toxicity from your social circle."
  },
  {
    id: 115, mood: 'disgust', title: "Pure Nature Visuals", type: 'Video', duration: "15:40",
    thumbnail: "https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Connecting with the raw and natural world."
  },

  // --- NEUTRAL ---
  {
    id: 116, mood: 'neutral', title: "Deep Work Concentration", type: 'Audio', duration: "3:00:00",
    thumbnail: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Minimalist lo-fi for maximum productivity."
  },
  {
    id: 117, mood: 'neutral', title: "The Planet Earth Docs", type: 'Video', duration: "50:00",
    thumbnail: "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Grounding visuals that show the big picture."
  },
  {
    id: 118, mood: 'neutral', title: "The Daily Habit Loop", type: 'Article', duration: "5 min read",
    thumbnail: "https://images.pexels.com/photos/1036622/pexels-photo-1036622.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Finding balance in the small things you do every day."
  },

  // --- SURPRISE ---
  {
    id: 119, mood: 'surprise', title: "Amazing Brain Facts", type: 'Video', duration: "11:20",
    thumbnail: "https://images.pexels.com/photos/356079/pexels-photo-356079.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Shocking truths about how you perceive reality."
  },
  {
    id: 120, mood: 'surprise', title: "Experimental Beats", type: 'Audio', duration: "20:00",
    thumbnail: "https://images.pexels.com/photos/3784566/pexels-photo-3784566.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Unique soundscapes to spark your curiosity."
  },
  {
    id: 121, mood: 'surprise', title: "The Life Pivot", type: 'Article', duration: "7 min read",
    thumbnail: "https://images.pexels.com/photos/1054974/pexels-photo-1054974.jpeg?auto=compress&cs=tinysrgb&w=600", url: "#",
    description: "Embracing the unexpected twists in your journey."
  }
];

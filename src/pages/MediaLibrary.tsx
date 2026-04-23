import React, { useState } from 'react';
import { mediaData } from '../data/mediaData';
import { MediaCard } from '../components/MediaCard';

export const MediaLibrary = () => {
  const [activeMood, setActiveMood] = useState('all');

  const filteredMedia = activeMood === 'all' 
    ? mediaData 
    : mediaData.filter(item => item.mood === activeMood);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Media Library</h1>
      
      
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
        {['all', 'joy', 'anger', 'fear', 'sadness', 'neutral', 'disgust', 'surprise'].map(mood => (
          <button
            key={mood}
            onClick={() => setActiveMood(mood)}
            className={`px-4 py-2 rounded-full capitalize ${
              activeMood === mood ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-600'
            }`}
          >
            {mood}
          </button>
        ))}
      </div>

      {/* Grid Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedia.map(item => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

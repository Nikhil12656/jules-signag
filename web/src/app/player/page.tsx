'use client';

import { useEffect, useState } from 'react';

export default function PlayerPage() {
  const [pairingCode, setPairingCode] = useState('');
  const [isPaired, setIsPaired] = useState(false);
  const [currentMedia, setCurrentMedia] = useState<string | null>(null);

  useEffect(() => {
    // Generate a random pairing code on mount
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setPairingCode(code);

    // In a real app, we would establish a Supabase Realtime connection here
    // to listen for pairing events and schedule updates.
  }, []);

  const handleFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  if (!isPaired) {
    return (
      <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white font-sans">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Screen Player</h1>
          <p className="text-xl text-gray-400 mb-8">Enter this code in your dashboard to pair this device</p>

          <div className="bg-gray-800 p-8 rounded-lg shadow-2xl border border-gray-700">
            <span className="text-6xl font-mono tracking-widest font-bold text-blue-400">
              {pairingCode}
            </span>
          </div>

          <div className="mt-12">
            <button
              onClick={handleFullscreen}
              className="text-gray-500 hover:text-white transition-colors"
            >
              Enter Fullscreen
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Player Rendering Area */}
      {currentMedia ? (
        <div className="w-full h-full">
          {/* Example media rendering (image/video/widget) */}
          <img src={currentMedia} alt="Currently playing" className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="text-white text-2xl font-light">
          Waiting for content...
        </div>
      )}
    </div>
  );
}

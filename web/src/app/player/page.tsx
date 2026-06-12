'use client';

import { useEffect, useState } from 'react';
import { MonitorPlay, Maximize2, Loader2 } from 'lucide-react';
import Image from 'next/image';

export default function PlayerPage() {
  const [pairingCode, setPairingCode] = useState('');
  const [isPaired, setIsPaired] = useState(false);
  const [currentMedia, setCurrentMedia] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(true);

  useEffect(() => {
    // Simulate connection delay
    const connectionTimer = setTimeout(() => {
      setIsConnecting(false);
      // Generate a random pairing code on mount
      const code = Math.random().toString(36).substring(2, 8).toUpperCase();
      setPairingCode(code);
    }, 1500);

    // In a real app, we would establish a Supabase Realtime connection here
    // to listen for pairing events and schedule updates.

    return () => clearTimeout(connectionTimer);
  }, []);

  const handleFullscreen = () => {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
  };

  if (!isPaired) {
    return (
      <div className="min-h-screen bg-slate-900 flex flex-col font-sans selection:bg-blue-500/30 selection:text-white">

        {/* Subtle background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="flex-1 flex flex-col items-center justify-center relative z-10 p-6 text-center">

          <div className="bg-white/5 border border-white/10 p-4 rounded-3xl mb-8 backdrop-blur-sm animate-pulse-slow">
            <MonitorPlay className="h-16 w-16 text-blue-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-sm">
            Screen Player
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-lg mx-auto font-medium">
            Enter this pairing code in your SignageSaaS dashboard to register this device.
          </p>

          {isConnecting ? (
            <div className="bg-slate-800/80 backdrop-blur-md p-10 md:p-14 rounded-3xl shadow-2xl border border-slate-700 w-full max-w-md flex flex-col items-center justify-center min-h-[220px]">
               <Loader2 className="h-10 w-10 text-blue-500 animate-spin mb-4" />
               <p className="text-slate-400 font-medium">Connecting to network...</p>
            </div>
          ) : (
            <div className="bg-slate-800/80 backdrop-blur-md p-10 md:p-14 rounded-3xl shadow-2xl border border-slate-700 relative group overflow-hidden w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <span className="text-6xl md:text-7xl font-mono font-bold tracking-[0.25em] text-blue-400 drop-shadow-md relative z-10 ml-4">
                {pairingCode}
              </span>
            </div>
          )}

          <div className="mt-16">
            <button
              onClick={handleFullscreen}
              className="flex items-center text-slate-500 hover:text-white bg-white/5 hover:bg-white/10 px-6 py-3 rounded-full transition-all duration-300 font-medium border border-transparent hover:border-white/10"
            >
              <Maximize2 className="h-4 w-4 mr-2" />
              Enter Fullscreen
            </button>
          </div>
        </div>

        <div className="pb-8 text-center text-slate-600 text-sm font-medium relative z-10">
          Device ID: {Math.random().toString(36).substring(2, 12).toUpperCase()} • Network: Connected
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Player Rendering Area */}
      {currentMedia ? (
        <div className="w-full h-full relative">
          {/* Example media rendering (image/video/widget) */}
          <Image
            src={currentMedia}
            alt="Currently playing"
            fill
            className="object-cover"
            unoptimized // Since this is dynamic user content from unknown sources in the placeholder
          />
        </div>
      ) : (
        <div className="text-white text-2xl font-light">
          Waiting for content...
        </div>
      )}
    </div>
  );
}
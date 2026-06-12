import Link from 'next/link';
import { ArrowRight, MonitorPlay, Layers, Zap, ShieldCheck } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0 flex items-center gap-2">
              <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                <MonitorPlay className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
                SignageSaaS
              </span>
            </div>
            <div className="flex items-center space-x-6">
              <Link href="/login" className="text-slate-600 hover:text-slate-900 text-sm font-medium transition-colors">
                Log in
              </Link>
              <Link href="/signup" className="bg-blue-600 text-white hover:bg-blue-700 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-grow">
        <div className="relative overflow-hidden bg-white">
          <div className="absolute inset-y-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 text-center">
            <h1 className="text-5xl tracking-tight font-extrabold text-slate-900 sm:text-6xl md:text-7xl max-w-4xl mx-auto">
              <span className="block">Enterprise Digital Signage</span>
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mt-2">
                Made Simple
              </span>
            </h1>
            <p className="mt-6 max-w-md mx-auto text-lg text-slate-500 sm:text-xl md:mt-8 md:max-w-3xl">
              Transform your screens into powerful communication tools. Manage content, design multi-zone layouts, and monitor devices globally from one intuitive dashboard.
            </p>
            <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
               <Link href="/signup" className="group flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link href="#demo" className="flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-lg font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all w-full sm:w-auto mt-4 sm:mt-0">
                  Book a Demo
                </Link>
            </div>

            {/* Hero Image Mockup */}
            <div className="mt-20 relative max-w-5xl mx-auto">
               <div className="aspect-[16/9] rounded-2xl bg-slate-900 shadow-2xl border border-slate-800 overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900 flex flex-col items-center justify-center">
                     <MonitorPlay className="h-24 w-24 text-slate-700 mb-4" />
                     <p className="text-slate-500 font-medium">Dashboard Preview</p>
                  </div>
               </div>
               {/* Decorative blurs */}
               <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-500 blur-[100px] opacity-20 rounded-full pointer-events-none"></div>
               <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-500 blur-[100px] opacity-20 rounded-full pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-24 bg-slate-50" id="features">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm">Powerful Capabilities</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Everything you need to scale your screen network
              </p>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                    <Layers className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Advanced Layout Designer</h3>
                  <p className="mt-4 text-slate-500 leading-relaxed">Create engaging displays with our drag-and-drop editor. Support for multiple zones, split screens, and responsive scaling ensures your content looks perfect everywhere.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6">
                    <Zap className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Dynamic App Marketplace</h3>
                  <p className="mt-4 text-slate-500 leading-relaxed">Integrate live data instantly. Choose from over 15+ apps including Weather, Clocks, RSS Feeds, YouTube, Google Slides, and Live KPIs.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-shadow">
                   <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                    <ShieldCheck className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Enterprise Security</h3>
                  <p className="mt-4 text-slate-500 leading-relaxed">Built on a multi-tenant architecture with Row Level Security (RLS). Complete data isolation, role-based access control, and comprehensive audit logs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
           <div className="flex items-center gap-2 mb-8">
              <MonitorPlay className="h-6 w-6 text-blue-500" />
              <span className="text-xl font-bold text-white">
                SignageSaaS
              </span>
            </div>
          <p className="text-center text-sm text-slate-400">
            &copy; {new Date().getFullYear()} SignageSaaS Inc. All rights reserved. Built with Next.js & Supabase.
          </p>
        </div>
      </footer>
    </div>
  );
}

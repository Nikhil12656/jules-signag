'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MonitorPlay, Loader2 } from 'lucide-react';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    fullName: '', companyName: '', email: '', workspaceUrl: '', password: '', confirmPassword: '', agreeTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));

    // Auto-generate workspace URL slug
    if (name === 'companyName' && !formData.workspaceUrl) {
       setFormData(prev => ({
         ...prev,
         workspaceUrl: value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
       }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      console.log('Signup form submitted:', formData);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans selection:bg-blue-100 selection:text-blue-900">

      {/* Brand */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md flex flex-col items-center mb-6">
         <Link href="/" className="flex items-center gap-2 mb-4 group">
            <div className="bg-blue-600 text-white p-2 rounded-xl group-hover:scale-105 transition-transform shadow-md">
              <MonitorPlay className="h-6 w-6" />
            </div>
            <span className="text-2xl font-bold text-slate-900">SignageSaaS</span>
          </Link>
        <h2 className="text-center text-3xl font-extrabold text-slate-900 tracking-tight">
          Create your workspace
        </h2>
        <p className="mt-2 text-center text-sm text-slate-500">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-500 transition-colors">
            Log in instead
          </Link>
        </p>
      </div>

      <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-2xl sm:px-10 border border-slate-100">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-slate-700">Full Name</label>
                <div className="mt-1.5">
                  <input id="fullName" name="fullName" type="text" required placeholder="Alex Johnson" value={formData.fullName} onChange={handleChange} className="appearance-none block w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Work Email</label>
                <div className="mt-1.5">
                  <input id="email" name="email" type="email" required placeholder="alex@acme.com" value={formData.email} onChange={handleChange} className="appearance-none block w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all" />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-slate-700">Company Name</label>
              <div className="mt-1.5">
                <input id="companyName" name="companyName" type="text" required placeholder="Acme Corp" value={formData.companyName} onChange={handleChange} className="appearance-none block w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all" />
              </div>
            </div>

            <div>
              <label htmlFor="workspaceUrl" className="block text-sm font-medium text-slate-700">Workspace URL</label>
              <div className="mt-1.5 flex rounded-lg shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-slate-300 bg-slate-50 text-slate-500 sm:text-sm">
                  app.domain.com/
                </span>
                <input id="workspaceUrl" name="workspaceUrl" type="text" required placeholder="acme-corp" value={formData.workspaceUrl} onChange={handleChange} className="flex-1 appearance-none block w-full px-4 py-2 border border-slate-300 rounded-none rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-2">
               <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700">Password</label>
                  <div className="mt-1.5">
                    <input id="password" name="password" type="password" required value={formData.password} onChange={handleChange} className="appearance-none block w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all" />
                  </div>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700">Confirm Password</label>
                  <div className="mt-1.5">
                    <input id="confirmPassword" name="confirmPassword" type="password" required value={formData.confirmPassword} onChange={handleChange} className="appearance-none block w-full px-4 py-2 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all" />
                  </div>
                </div>
            </div>

            <div className="flex items-start mt-6">
              <div className="flex items-center h-5">
                <input id="agreeTerms" name="agreeTerms" type="checkbox" required checked={formData.agreeTerms} onChange={handleChange} className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300 rounded cursor-pointer mt-0.5" />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="agreeTerms" className="text-slate-600 cursor-pointer">
                  I agree to the <a href="#" className="font-medium text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="font-medium text-blue-600 hover:underline">Privacy Policy</a>.
                </label>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center items-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="animate-spin -ml-1 mr-2 h-4 w-4" />
                    Creating workspace...
                  </>
                ) : (
                  'Create Workspace'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

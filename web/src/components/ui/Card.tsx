import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function Card({ children, className = '', noPadding = false }: CardProps) {
  return (
    <div className={`bg-white shadow-sm border border-slate-200 rounded-xl overflow-hidden ${className}`}>
      {noPadding ? children : <div className="p-5">{children}</div>}
    </div>
  );
}

export function CardHeader({ children, className = '', action }: { children: React.ReactNode, className?: string, action?: React.ReactNode }) {
  return (
    <div className={`px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-slate-50/50 ${className}`}>
      <div className="flex-1">{children}</div>
      {action && <div className="ml-4 flex-shrink-0">{action}</div>}
    </div>
  );
}

export function CardTitle({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <h3 className={`text-lg font-semibold text-slate-900 ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return <p className={`text-sm text-slate-500 mt-1 ${className}`}>{children}</p>;
}

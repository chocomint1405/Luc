import { Link, useLocation } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
// ...existing code...

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Stories', path: '/journey' },
    { name: 'News', path: '/#news' },
    { name: 'Team', path: '/#team' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900 backdrop-blur-md border-b border-sky-100 px-4 md:px-10 lg:px-20 py-4 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-sky-500 text-white p-1.5 rounded-lg flex items-center justify-center">
          <BubbleChart size={24} />
        </div>
        <h1 className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white uppercase italic">NucleUS</h1>
      </Link>
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={cn(
              "text-sm font-semibold transition-colors hover:text-sky-500",
              location.pathname === link.path ? "text-sky-500 dark:text-sky-300" : "text-slate-600 dark:text-slate-200"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
        {/* ...existing code... */}
    </nav>
  );
}

function BubbleChart({ size = 24 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
      <circle cx="12" cy="7" r="2" />
      <path d="M12 9v6" />
      <path d="M8.5 15.5l7-7" />
      <path d="M15.5 15.5l-7-7" />
    </svg>
  );
}

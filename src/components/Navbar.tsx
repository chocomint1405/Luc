import { Link, useLocation, useNavigate } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useState, useEffect, useRef } from 'react';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current) {
        setVisible(false); // lướt xuống → ẩn
      } else {
        setVisible(true); // lướt lên → hiện
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', path: '/about' },
    { name: 'Stories', path: '/journey' },
    { name: 'Forum', path: '/home' },
    { name: 'About Us', path: '/team' },
  ];

  function isActive(link: { path: string }) {
    return location.pathname === link.path;
  }

  const handleNavClick = (link: { path: string }) => {
    navigate(link.path);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "sticky top-0 z-50 bg-white/80 dark:bg-slate-900 backdrop-blur-md border-b border-sky-100 px-4 md:px-10 lg:px-20 py-4 flex items-center justify-between transition-transform duration-300",
      visible ? "translate-y-0" : "-translate-y-full"
    )}>
      {/* phần còn lại giữ nguyên */}
      <Link to="/about" className="flex items-center gap-1">
        <div className="p-1 flex items-center justify-center w-13 h-13">
          <img 
            src="https://res.cloudinary.com/dbife6uva/image/upload/v1774095627/Logo_NucleUS_hackthon_zdd4r4.png" 
            alt="NucleUS Logo" 
            className="w-14 h-14 object-contain"
          />
        </div>
        <h1 className="pr-1 text-2xl font-black tracking-tight bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent italic">
          NucleUS
        </h1>
      </Link>
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleNavClick(link)}
            className={cn(
              "text-sm font-semibold transition-colors hover:text-sky-500 px-4 py-2 rounded-xl border border-sky-200 bg-white/60 dark:bg-slate-800 shadow-sm",
              isActive(link) ? "text-sky-500 dark:text-sky-300 border-sky-500" : "text-slate-600 dark:text-slate-200"
            )}
            style={{ minWidth: '90px', textAlign: 'center' }}
          >
            {link.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
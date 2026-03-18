import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-16 px-4 md:px-10 lg:px-20 border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-sky-500 text-white p-1 rounded flex items-center justify-center">
              <BubbleChart size={20} />
            </div>
            <h1 className="text-xl font-black text-white uppercase italic">NucleUS</h1>
          </div>
          <p className="text-sm leading-relaxed mb-6">
            A student-led project raising global awareness for nuclear medicine's life-saving potential.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-sky-500 transition-colors">
              <Share2 size={18} />
            </a>
            <a href="#" className="hover:text-sky-500 transition-colors">
              <Globe size={18} />
            </a>
            <a href="#" className="hover:text-sky-500 transition-colors">
              <Mail size={18} />
            </a>
          </div>
        </div>
        
        <div>
          <h6 className="text-white font-bold mb-6">Resources</h6>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-sky-500">What is Nuclear Med?</a></li>
            <li><a href="#" className="hover:text-sky-500">Safety Guidelines</a></li>
            <li><a href="#" className="hover:text-sky-500">Career Paths</a></li>
            <li><a href="#" className="hover:text-sky-500">Research Papers</a></li>
          </ul>
        </div>
        
        <div>
          <h6 className="text-white font-bold mb-6">Platform</h6>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-sky-500">About NucleUS</a></li>
            <li><a href="#" className="hover:text-sky-500">Our Story</a></li>
            <li><a href="#" className="hover:text-sky-500">News & Updates</a></li>
            <li><a href="#" className="hover:text-sky-500">Partners</a></li>
          </ul>
        </div>
        
        <div>
          <h6 className="text-white font-bold mb-6">Legal</h6>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-sky-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-sky-500">Terms of Service</a></li>
            <li><a href="#" className="hover:text-sky-500">Medical Disclaimer</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
        <p>© 2026 NucleUS Project. Developed for Global Health Hackathon.</p>
        <p className="flex items-center gap-2">
          Designed with <Heart size={14} className="text-red-500" /> for Humanity.
        </p>
      </div>
    </footer>
  );
}

import { Share2, Globe, Mail, Heart } from 'lucide-react';

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

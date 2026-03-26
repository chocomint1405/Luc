import { Link } from 'react-router-dom';
import { useState } from 'react';
import QAChat from "./QAchat";
import { Mail, Phone,MapPin } from "lucide-react";
export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className="bg-[#0b0f1a] text-slate-300 py-6 px-4 md:px-10 lg:px-20 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-3 md:col-span-3">
          <div className="flex items-center gap-2 mb-1">
            <div className="flex items-center justify-center">
              <img 
            src="https://res.cloudinary.com/dbife6uva/image/upload/v1774095627/Logo_NucleUS_hackthon_zdd4r4.png" 
            alt="NucleUS Logo" 
            className="w-14 h-14 object-contain"
          />
            </div>
           <h1 className="pr-1 text-2xl font-black tracking-tight bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent italic">
  NucleUS
</h1>
          </div>
        <p className="text-[15px] leading-snug text-slate-300 text-justify hyphens-auto">
  A project developed by a team of 1 supervisor and 5 students from the University of Science, VNU-HCM,
  <br />
  for Global HackAtom Vietnam 2026.
</p>

         <div className="flex flex-col gap-4 mt-6">

<div className="text-[15px] flex items-center gap-2">
  <Phone size={18} />
  <span>02838.324468</span>
</div>

<div className="text-[15px] flex items-center gap-2">
  <Mail size={18} />
  <span>nucleus.hcmus@gmail.com</span>
</div>
  <div className="text-[15px] flex items-center gap-2">
  <MapPin size={18} />
  <span>227 Nguyen Van Cu Street, Cho Quan Ward, Ho Chi Minh City, Viet Nam</span>
</div>

</div>
        </div>
        
        <div>
          <h6 className="text-white font-bold mb-6">Resources</h6>
          <ul className="space-y-4 text-sm">
            
            
            <li><a
  href="https://www.hackatom.energy/en/novosti/"
  target="_blankhack"
  className="text-sm text-gray-300 hover:text-sky-500 hover:underline transition-colors"
>
  HackAtom Global News
</a></li>
            <ul>
              <a
  href="https://vlhn-hcmus.com/en/"
  target="_blank"
  className="text-sm text-gray-300 hover:text-sky-500 hover:underline transition-colors"
>
  Nuclear Physics Department @HCMUS
</a>         
  </ul></ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-4 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium">
        <p>© 2026 NucleUS Project • Advancing Nuclear Medicine Awareness.</p>
        <p className="flex items-center gap-2">
        From Vietnam to the world 🌍.
</p>
      </div>
      <QAChat open={open} onClose={() => setOpen(false)} />
    </footer>
  );
}

import { Share2, Globe, Heart } from 'lucide-react';

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

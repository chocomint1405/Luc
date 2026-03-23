import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  PlayCircle, 
  FlaskConical, 
  Target, 
  Eye, 
  Layers, 
  Zap, 
  Activity,
  Search as SearchInsights, 
  Lightbulb, 
  XCircle, 
  CheckCircle, 
  Newspaper, 
  ExternalLink, 
  Send,
  Trophy
} from 'lucide-react';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash && typeof document !== 'undefined') {
      const target = document.querySelector(location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [location.hash]);

  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4 md:px-10 lg:px-20">
        <div className="absolute inset-0 atomic-pattern -z-10 opacity-50"></div>
        <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-600 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
            </span>
            The Future of Diagnostics
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-[1.1] mb-8 max-w-4xl text-slate-900"
          >
            Unveiling the <span className="text-sky-500 italic">Invisible</span> for a Healthier World
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed"
          >
            NucleUS is a medical awareness initiative dedicated to educating the public about the life-saving potential of nuclear medicine and molecular imaging.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button className="bg-sky-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg shadow-sky-200">
              Explore Nuclear Medicine
              <ArrowRight size={20} />
            </button>
            <button className="bg-white border border-slate-200 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
              View Impact Stories
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-20 w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative group cursor-pointer"
          >
            <div className="absolute inset-0 bg-sky-500/20 mix-blend-multiply transition-opacity group-hover:opacity-10"></div>
            <img 
              alt="Futuristic medical imaging interface" 
              className="w-full h-[500px] object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnxRH0SwILzpQG7-A8d4l2h2C1unQOrqIdcI6rfYcrsY4wu4fAvMGHi5WHVnXMcPsoNe48IIyRapPlPNmtOGKZofE7I2TCpBP6p0UYBpNo-XuGOIK5jOINc2HdlFqNMzSRz8_LYdtPAfaNO3rdk9AI17ArDQw2glD6f-xyOmcZCICm9bVQMB8Ids4Niiy_PhfPkXYkicLssVCJgmhfQapDIhLPNr30PHmetOdUSqV8bPFHbs-5_ASPI-rNj70AWpFz7JWrSmpwhV8"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                <PlayCircle size={64} className="text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}

function SearchInsightsIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 8v6" />
      <path d="M8 11h6" />
    </svg>
  );
}

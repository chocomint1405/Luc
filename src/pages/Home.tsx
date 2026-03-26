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
              <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-600"></span>
            </span>
    Welcome to
          </motion.div>
          
       <motion.div>
  <div className="flex items-baseline justify-center gap-1.5">
    <span className="pr-3 text-8xl font-black tracking-tight bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 bg-clip-text text-transparent italic">
      NucleUS
    </span>

    <span className="text-2xl font-bold uppercase tracking-[0.2em] text-primary text-emerald-900">
      Forum
    </span>
  </div>
</motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mb-10 leading-relaxed"
          >
            A platform connecting people to explore and exchange ideas in nuclear medicine and advanced healthcare.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <button
  onClick={() => window.open("https://nucleus-forum.vercel.app", "_blank")}
  className="bg-sky-500 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:-translate-y-1 transition-all shadow-lg shadow-sky-200"
>
  Start now
  <ArrowRight size={20} />
</button>
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

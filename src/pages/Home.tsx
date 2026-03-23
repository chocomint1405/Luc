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

      {/* Science Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row gap-16 items-start">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">The Science of Seeing Within</h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Unlike traditional X-rays that show anatomy, nuclear medicine visualizes how organs and tissues are actually functioning. It uses tiny amounts of radiotracers to detect diseases in their earliest stages.
              </p>
              <div className="grid gap-6">
                <div className="flex gap-4 p-5 rounded-2xl bg-sky-50 border border-sky-100">
                  <div className="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center text-white shrink-0">
                    <FlaskConical size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-slate-900">Radiotracers</h3>
                    <p className="text-sm text-slate-500">Molecules designed to home in on specific cellular activities, carrying a 'signal' back to the detector.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-5 rounded-2xl bg-sky-50 border border-sky-100">
                  <div className="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center text-white shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-slate-900">Molecular Targets</h3>
                    <p className="text-sm text-slate-500">Precision medicine that targets cancer cells directly while sparing healthy surrounding tissue.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col gap-4">
                <Eye size={40} className="text-sky-500" />
                <h4 className="font-bold text-slate-900">PET Imaging</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Positron Emission Tomography provides functional metabolic mapping of organs like the brain and heart.</p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col gap-4">
                <Layers size={40} className="text-sky-500" />
                <h4 className="font-bold text-slate-900">SPECT Scans</h4>
                <p className="text-xs text-slate-500 leading-relaxed">3D imaging that captures internal organ function from multiple angles for higher accuracy.</p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col gap-4">
                <Zap size={40} className="text-sky-500" />
                <h4 className="font-bold text-slate-900">Theranostics</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Combining therapy and diagnostics to treat specific conditions like thyroid cancer.</p>
              </div>
              <div className="p-6 rounded-3xl bg-sky-500 text-white flex flex-col gap-4 justify-center items-center text-center">
                <Activity size={48} />
                <p className="font-bold text-xl">18 Million</p>
                <p className="text-[10px] opacity-80 uppercase tracking-widest font-bold">Procedures Annually</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section (Dark) */}
      <section className="bg-slate-950 py-32 px-4 md:px-10 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-950 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="font-serif italic text-3xl text-sky-400 font-bold mb-4 tracking-wider">Chapter 1: The Human Journey</h2>
            <h3 className="text-5xl md:text-6xl font-black text-white italic tracking-tighter">Life-Saving Stories</h3>
            <p className="mt-6 text-slate-400 max-w-lg mx-auto italic">"A digital storytelling experience through the microscopic cosmos..."</p>
          </div>
          
          <div className="flex flex-col gap-32">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="w-full md:w-1/2">
                <div className="relative bg-slate-900/40 border-4 border-dashed border-sky-500/40 rounded-[3rem] p-12 flex items-center justify-center aspect-square">
                  <div className="text-sky-500 opacity-80">
                    <SearchInsights size={120} />
                    <div className="absolute top-4 right-10 text-white/20 font-serif italic text-4xl transform rotate-12">Target Found</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-sky-400 font-bold font-serif italic text-2xl mb-4 block underline decoration-wavy underline-offset-8">The Tiny Detective</span>
                <h4 className="text-3xl font-black text-white mb-6 leading-tight">Solving the mystery of hidden tumors.</h4>
                <p className="text-slate-400 leading-relaxed text-lg mb-8">
                  Our journey begins with a single molecule. A hero so small, it moves unnoticed through the bloodstream, searching for the tell-tale signals of a hidden enemy. It doesn't just look; it finds.
                </p>
                <button className="bg-sky-500/10 border border-sky-500 text-sky-500 px-6 py-2 rounded-full font-bold hover:bg-sky-500 hover:text-white transition-all">
                  Turn the page
                </button>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center gap-16">
              <div className="w-full md:w-1/2">
                <div className="relative bg-slate-900/40 border-4 border-dashed border-yellow-500/40 rounded-[3rem] p-12 flex items-center justify-center aspect-square">
                  <div className="text-yellow-500 opacity-80">
                    <Lightbulb size={120} />
                    <div className="absolute -bottom-2 left-0 text-white/20 font-serif italic text-4xl transform -rotate-12">Pure Energy</div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <span className="text-yellow-400 font-bold font-serif italic text-2xl mb-4 block underline decoration-wavy underline-offset-8">Glow in the Dark?</span>
                <h4 className="text-3xl font-black text-white mb-6 leading-tight">Debunking myths with inner light.</h4>
                <p className="text-slate-400 leading-relaxed text-lg mb-8">
                  They say you'll glow like a firefly, but the truth is even more magical. While you won't literally light up a room, your inner light becomes visible to the most sensitive eyes science has ever built.
                </p>
                <button className="bg-yellow-500/10 border border-yellow-500 text-yellow-500 px-6 py-2 rounded-full font-bold hover:bg-yellow-500 hover:text-white transition-all">
                  Reveal the truth
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Myth vs Fact */}
      <section className="py-24 bg-slate-900 text-white px-4 md:px-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/20 rounded-full blur-[120px] -mr-48 -mt-48"></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-center text-4xl font-black mb-16">Myth <span className="text-sky-500 italic">vs</span> Fact</h2>
          <div className="space-y-6">
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <XCircle size={24} className="text-red-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2 italic">"The radiation used in medical imaging is extremely dangerous."</h4>
                  <div className="mt-4 pt-4 border-t border-slate-700 flex gap-4">
                    <CheckCircle size={20} className="text-green-500 shrink-0" />
                    <p className="text-slate-300 text-sm">Most diagnostic nuclear medicine procedures expose patients to about the same amount of radiation as a standard CT scan or a few months of natural background radiation.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-colors">
              <div className="flex items-start gap-4">
                <XCircle size={24} className="text-red-500 shrink-0" />
                <div>
                  <h4 className="font-bold text-lg mb-2 italic">"Nuclear medicine is only used to treat cancer."</h4>
                  <div className="mt-4 pt-4 border-t border-slate-700 flex gap-4">
                    <CheckCircle size={20} className="text-green-500 shrink-0" />
                    <p className="text-slate-300 text-sm">Nuclear medicine is vital for diagnosing heart disease, brain disorders like Alzheimer’s, and evaluating lung, kidney, and bone health.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section id="news" className="py-24 px-4 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black mb-12 flex items-center gap-3 text-slate-900">
            <Newspaper size={32} className="text-sky-500" />
            Research & Innovation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { date: 'May 12, 2024', title: 'AI-Enhanced PET Scans: Reducing Scan Time by 50%', excerpt: 'New deep learning algorithms are allowing for crystal clear images with half the traditional dose.' },
              { date: 'May 08, 2024', title: 'Mobile Radio-Pharmacy Units in Rural Areas', excerpt: 'Breaking barriers to healthcare access through decentralized diagnostic isotope production.' },
              { date: 'April 29, 2024', title: 'The Rise of Copper-64 in Cardiology', excerpt: 'How a new isotope is providing unprecedented resolution for coronary artery disease mapping.' }
            ].map((item, i) => (
              <article key={i} className="bg-white p-6 rounded-3xl border border-slate-200 hover:shadow-xl transition-all">
                <span className="text-[10px] font-black uppercase text-sky-500 tracking-widest block mb-4">{item.date}</span>
                <h5 className="font-bold text-lg mb-3 leading-tight hover:text-sky-500 cursor-pointer transition-colors text-slate-900">{item.title}</h5>
                <p className="text-slate-500 text-xs mb-6">{item.excerpt}</p>
                <div className="flex items-center gap-2 text-sky-500 font-bold text-xs uppercase cursor-pointer">
                  Full Report <ExternalLink size={12} />
                </div>
              </article>
            ))}
            <article className="bg-sky-500 p-6 rounded-3xl text-white flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase opacity-80 tracking-widest block mb-4">Newsletter</span>
                <h5 className="font-bold text-xl mb-4 leading-tight">Join the Atomic Intelligence Community</h5>
              </div>
              <div className="relative">
                <input className="w-full bg-white/20 border-none rounded-xl text-xs placeholder:text-white/60 focus:ring-white p-3" placeholder="Email" type="text" />
                <button className="absolute right-1 top-1 bg-white text-sky-500 p-2 rounded-lg">
                  <Send size={16} />
                </button>
              </div>
            </article>
          </div>
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

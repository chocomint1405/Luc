import { motion } from 'motion/react';
import { 
  Droplets, 
  Wind, 
  Search, 
  Heart, 
  Zap, 
  Users, 
  Globe,
  ArrowDown
} from 'lucide-react';

export default function Journey() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-[800px] h-[800px] border border-sky-500/30 rounded-full animate-pulse"></div>
          <div className="absolute w-[600px] h-[600px] border border-sky-500/20 rounded-full animate-pulse delay-700"></div>
          <div className="absolute w-[400px] h-[400px] border border-sky-500/10 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-serif italic text-2xl text-sky-400 mb-6"
          >

          </motion.h4>
          <motion.h1 

            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black italic tracking-tighter mb-8"
          >
            THE HUMAN <span className="text-sky-500">COSMOS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-slate-400 max-w-xl mx-auto italic text-lg"
          >
            "A digital storytelling experience through the microscopic universe of nuclear medicine..."
          </motion.p>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold text-sky-500">Scroll to Begin</span>
            <ArrowDown className="animate-bounce text-sky-500" />
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 px-4 md:px-10 max-w-5xl mx-auto relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-sky-500/20 to-transparent hidden md:block"></div>
        
        <div className="space-y-48">
          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 md:text-right">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sky-400 font-serif italic text-3xl mb-4 block">The Injection</span>
                <h3 className="text-4xl font-black mb-6">The Messenger Departs</h3>
                <p className="text-slate-400 leading-relaxed italic">
                  A single drop, carrying millions of tiny messengers, enters the bloodstream. Each one is a specialized detective, programmed to find what the human eye cannot see.
                </p>
              </motion.div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-950 border-2 border-sky-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
              <Droplets size={20} className="text-sky-500" />
            </div>
                <div className="w-full md:w-1/2">
                  <div className="aspect-square rounded-[3rem] overflow-hidden border-2 border-dashed border-sky-500/30">
                    <img 
                      src="https://drive.google.com/uc?export=view&id=1twNwAbAaYC1CmcC4DZuVuf808DoNw7lo" 
                      alt="mô tả ảnh ủa chưa"
                        className="w-full h-full object-cover"
                   />
                  </div>
                </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sky-400 font-serif italic text-3xl mb-4 block">The Voyage</span>
                <h3 className="text-4xl font-black mb-6">Through the Red Rivers</h3>
                <p className="text-slate-400 leading-relaxed italic">
                  Guided by the heart's rhythm, the tracers navigate the complex network of arteries and veins. They are silent, safe, and purposeful.
                </p>
              </motion.div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-950 border-2 border-sky-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
              <Wind size={20} className="text-sky-500" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-square rounded-[3rem] bg-slate-900/50 border-2 border-dashed border-sky-500/30 flex items-center justify-center">
                <div className="relative">
                  <div className="w-40 h-1 bg-sky-500/50 rounded-full rotate-45"></div>
                  <div className="w-40 h-1 bg-sky-500/30 rounded-full -rotate-45 absolute top-0"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 md:text-right">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sky-400 font-serif italic text-3xl mb-4 block">The Target</span>
                <h3 className="text-4xl font-black mb-6">The Signal Found</h3>
                <p className="text-slate-400 leading-relaxed italic">
                  The tracers reach their destination. They bind to the specific cells, emitting a faint glow that only the most advanced cameras can detect. The invisible becomes visible.
                </p>
              </motion.div>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-950 border-2 border-sky-500 rounded-full flex items-center justify-center z-10 hidden md:flex">
              <Search size={20} className="text-sky-500" />
            </div>
            <div className="w-full md:w-1/2">
              <div className="aspect-square rounded-[3rem] bg-slate-900/50 border-2 border-dashed border-sky-500/30 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-sky-500/10 animate-pulse"></div>
                <div className="w-16 h-16 border-4 border-sky-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters of Healing */}
      <section className="py-32 px-4 md:px-10 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-16 text-center italic tracking-tighter">Chapters of Healing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-slate-950 border border-slate-800 hover:border-sky-500 transition-colors group">
              <Heart size={48} className="text-sky-500 mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold mb-4">The Heart's Rhythm</h4>
              <p className="text-slate-400 text-sm leading-relaxed">How nuclear medicine helps doctors see blood flow to the heart muscle, identifying areas of concern before they become emergencies.</p>
            </div>
            <div className="p-10 rounded-3xl bg-slate-950 border border-slate-800 hover:border-sky-500 transition-colors group">
              <Zap size={48} className="text-sky-500 mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold mb-4">The Brain's Spark</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Visualizing the metabolic activity of the brain to diagnose Alzheimer's, Parkinson's, and other neurological conditions with precision.</p>
            </div>
            <div className="p-10 rounded-3xl bg-slate-950 border border-slate-800 hover:border-sky-500 transition-colors group">
              <Users size={48} className="text-sky-500 mb-8 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl font-bold mb-4">The Human Connection</h4>
              <p className="text-slate-400 text-sm leading-relaxed">Real stories of patients whose lives were transformed by the early detection and targeted treatment made possible by nuclear medicine.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-32 px-4 md:px-10 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-sky-500/5 -z-10"></div>
        <Globe size={120} className="text-sky-500/20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-5xl font-black mb-8 italic tracking-tighter">Join the Global Initiative</h2>
          <p className="text-xl text-slate-400 mb-12 italic">"Because every patient deserves to be seen. Every cell tells a story. Every discovery saves a life."</p>
          <button className="bg-sky-500 text-white px-10 py-5 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl shadow-sky-500/20">
            Support the NucleUS Project
          </button>
        </div>
      </section>
    </div>
  );
}

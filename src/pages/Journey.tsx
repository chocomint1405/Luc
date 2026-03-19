
import { motion } from 'motion/react';
import { 
  Droplets, 
  Wind, 
  Search, 
  Heart, 
  Zap, 
  Users, 
  Globe,
  ArrowDown,
  ArrowUp
} from 'lucide-react';
import { useRef, useState, useEffect } from "react";


export default function Journey() {
  const sectionsRef = useRef([]);
  const [current, setCurrent] = useState(0);

  const scrollToSection = (index) => {
    if (index < 0 || index >= sectionsRef.current.length) return;

    sectionsRef.current[index].scrollIntoView({
      behavior: "smooth",
    });

    setCurrent(index);
  };

  const handleNext = () => scrollToSection(current + 1);
  const handlePrev = () => scrollToSection(current - 1);
  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.code === "Space") {
      e.preventDefault(); // tránh scroll mặc định
      handleNext();
    }

    if (e.code === "ArrowUp") {
      e.preventDefault();
      handlePrev();
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [current]);
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section 
  ref={(el) => (sectionsRef.current[0] = el)} 
  className="relative h-screen flex items-center justify-center overflow-hidden">
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
      <section 
  ref={(el) => (sectionsRef.current[1] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-sky-500/20 to-transparent hidden md:block"></div>
        
        
          {/* Step 1 */}
          <div className="relative flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2 md:text-right">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="text-sky-400 font-serif italic text-3xl mb-4 block">Quá trình tiêm</span>
                <h3 className="text-4xl font-black mb-6">Vui vẻ</h3>
                <p className="text-slate-400 leading-relaxed italic">
                  Hẹ hẹ hẹ
                </p>
              </motion.div>
            </div>
            
             
      <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
 </section>
          {/* Step 2 */}
          <section 
  ref={(el) => (sectionsRef.current[2] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
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
          
            <div className="w-full md:w-3/4 h-[80vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
</section>
{/* Slide 3 */}
        <section 
  ref={(el) => (sectionsRef.current[3] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
          
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
            
           <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
        
      </section>
                {/* Slide 4 */}
          <section 
  ref={(el) => (sectionsRef.current[4] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
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
            
            <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
</section>
{/* Slide 5 */}
        <section 
  ref={(el) => (sectionsRef.current[5] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
          
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
           
           <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="aanhr slide 5" 
      alt=".ssss."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
        
      </section>
      {/*bắt đầu từ đây*/}
      {/* Slide 6 */}
        <section 
  ref={(el) => (sectionsRef.current[6] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-sky-500/20 to-transparent hidden md:block"></div>
        
        
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
            
         <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
 </section>
          {/* Slide 7 */}
          <section 
  ref={(el) => (sectionsRef.current[7] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
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
            <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
            
          </div>
</section>
{/* Slide 8 */}
        <section 
  ref={(el) => (sectionsRef.current[8] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
          
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
            
            <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
        
      </section>
                {/* Slide 9 */}
          <section 
  ref={(el) => (sectionsRef.current[9] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
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
            <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
            
          </div>
</section>
{/* Slide 10 */}
        <section 
  ref={(el) => (sectionsRef.current[10] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
          
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
            
            <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
        
      </section>
       {/* stiếp tuc */}
       {/* Slide 11 */}
      <section 
  ref={(el) => (sectionsRef.current[11] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-sky-500/20 to-transparent hidden md:block"></div>
        
        
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
            
                <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
 </section>
          {/* Step 12 */}
          <section 
  ref={(el) => (sectionsRef.current[12] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
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
            <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
            
          </div>
</section>
{/* Slide 13 */}
        <section 
  ref={(el) => (sectionsRef.current[13] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
          
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
            <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
        
      </section>
                {/* Slide 14 */}
          <section 
  ref={(el) => (sectionsRef.current[14] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
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
           <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
            
          </div>
</section>
{/* Slide 15 */}
        <section 
  ref={(el) => (sectionsRef.current[15] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
          
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
            <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
        
      </section>
      {/*bắt đầu từ đây*/}
      {/* Slide 16 */}
        <section 
  ref={(el) => (sectionsRef.current[16] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky-500/50 via-sky-500/20 to-transparent hidden md:block"></div>
        
        
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
            
                <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
 </section>
          {/* Slide 17 */}
          <section 
  ref={(el) => (sectionsRef.current[17] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
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
           <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
            
          </div>
</section>
{/* Slide 18 */}
        <section 
  ref={(el) => (sectionsRef.current[18] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
          
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
            <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
        
      </section>
                {/* Slide 19 */}
          <section 
  ref={(el) => (sectionsRef.current[19] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
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
            <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
            
          </div>
</section>
{/* Slide 20 */}
        <section 
  ref={(el) => (sectionsRef.current[20] = el)} 
  className="h-screen flex items-center px-4 md:px-10"
>
          
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
            <div className="w-full md:w-3/4 h-[110vh]">
  <div className="rounded-[3rem] overflow-hidden w-full h-full">
    <img 
      src="https://i.pinimg.com/736x/ab/e3/47/abe347b288d9f52d330ebe6051f15cc4.jpg" 
      alt="..."
      className="w-full h-full object-contain"
    />
  </div>
</div>
          </div>
        
      </section>
      {/* slide dư */}
      

      {/* Final Call to Action */}
      
            {/* Nút điều hướng */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-row gap-4 z-50">
  
  {/* Up */}
  <button
    onClick={handlePrev}
    className="w-12 h-12 rounded-full bg-slate-900 border border-sky-500 flex items-center justify-center hover:scale-110 transition"
  >
    <ArrowUp className="text-sky-500" />
  </button>

  {/* Down */}
  <button
    onClick={handleNext}
    className="w-12 h-12 rounded-full bg-slate-900 border border-sky-500 flex items-center justify-center hover:scale-110 transition"
  >
    <ArrowDown className="text-sky-500" />
  </button>

</div>
    </div>
  );
}

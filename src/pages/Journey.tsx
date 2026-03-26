
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

function TypewriterText({ lines, totalDuration, isVisible }) {
  const [displayed, setDisplayed] = useState("");
  const fullText = lines.join("\n");
  const charTime = totalDuration / fullText.length;


  useEffect(() => {
    if (!isVisible) return; // chỉ chạy khi visible
    
    let i = 0;
    setDisplayed(""); // reset lại
    const interval = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(interval);
    }, charTime);
    return () => clearInterval(interval);
  }, [isVisible]); // chạy lại khi isVisible thay đổi

  return (
    <pre className="text-white font-black text-5xl tracking-tighter whitespace-pre-wrap text-center">
      {displayed.split("\n").map((line, index) => (
        <div key={index} className={index === 0 ? "text-sky-400 font-serif italic font-bold text-6xl mb-4 block tracking-widest" : "text-8xl font-black mb-6 tracking-wide"}>
          {line}
        </div>
      ))}
    </pre>
  );
}

function ChatTyper({ text, isVisible }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!isVisible) return;
    let i = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 50); // 50ms mỗi chữ
    return () => clearInterval(interval);
  }, [isVisible]);

  return <span>{displayed}</span>;
}

export default function Journey() {
  const sectionsRef = useRef([]);
  const [current, setCurrent] = useState(0);
  const [chapterVisible, setChapterVisible] = useState(false);
  const [chapter2Visible, setChapter2Visible] = useState(false);

  const scrollToSection = (index) => {
  if (index < 0 || index >= sectionsRef.current.length) return;
  sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });
  setCurrent(index);
  
  if (index === 1) setChapterVisible(true); // index 1 là Chapter section
  else setChapterVisible(false); // reset khi rời đi

  if (index === 5) setChapter2Visible(true);
  else setChapter2Visible(false);
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

  if (typeof window !== 'undefined') {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }
}, [current]);
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      {/* Hero Section */}
      <section 
        ref={(el) => (sectionsRef.current[0] = el)} 
        className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Trong Hero Section, thêm vào trước div gradient */}
<div className="absolute inset-0 z-0">
  <img 
    src="https://www.hhrinstitute.org/wp-content/uploads/Research.jpeg" 
    
    alt="..."
    className="w-full h-full object-cover"
    style={{
      animation: "fadeInOut 11s infinite"
    }}
  />
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent z-[1]"></div>
</div>
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-[800px] h-[800px] border-6 border-white/30 rounded-full animate-pulse"></div>
          <div className="absolute w-[600px] h-[600px] border-6 border-white/20 rounded-full animate-pulse delay-700"></div>
          <div className="absolute w-[400px] h-[400px] border-6 border-white/10 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 -translate-y-20">
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
            THE STORIES <span className="text-sky-500">TITLE</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className=" text-slate-400 max-w-xl mx-auto italic text-lg"
          >
            "The Stories Context"
          </motion.p>

        </div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="absolute bottom-65 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold text-sky-500">Scroll to Begin</span>
            <ArrowDown className="animate-bounce text-sky-500" />
          </motion.div>
      </section>

{/* Chapter Intro */}
<section
  ref={(el) => (sectionsRef.current[1] = el)}
  className="h-screen flex items-center justify-center bg-slate-950"
  
>
  <div className="text-center">
    <TypewriterText 
  lines={["Chapter 1", "The Introduction"]} 
  totalDuration={4000}
  isVisible={chapterVisible}
/>
  </div>
</section>

{/* Timeline Section */}
{/*Slide 1*/}
<section 
  ref={(el) => (sectionsRef.current[2] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6 -translate-y-10"  
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 1: The Introduction
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/Gemini_Generated_Image_j9jn55j9jn55j9jn_wiiina" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-9/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text="Nuclear Tracer is more useful than you think !!!" isVisible={current === 2} />
</div>

  </div>
</section>

{/* Slide 2 */}
<section 
  ref={(el) => (sectionsRef.current[3] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6"
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 1: The Introduction
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/Image2_aciqex" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Bubble chat đè lên góc trái */}
    <div className="absolute left-0 -translate-x-1/2 top-9/10 -translate-y-1/2 
                    bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-br-sm 
                    px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
      <ChatTyper text="Nội dung ngắn gọn slide 2" isVisible={current === 3} />
    </div>

  </div>
</section>

{/* Slide 3 */}
  <section 
  ref={(el) => (sectionsRef.current[4] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6 -translate-y-10"  
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 1: The Introduction
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/Gemini_Generated_Image_j9jn55j9jn55j9jn_wiiina" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-9/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text="Nuclear Tracer is more useful than you think !!!" isVisible={current === 4} />
</div>

  </div>
</section>

{/* Chapter Intro */}
<section
  ref={(el) => (sectionsRef.current[5] = el)}
  className="h-screen flex items-center justify-center bg-slate-950"
  
>
  <div className="text-center">
  {/* Chapter 2 Intro */}
<TypewriterText 
  lines={["Chapter 2", "Chapter 2 title"]} 
  totalDuration={4000}
  isVisible={chapter2Visible}
/>
  </div>
</section>

{/* Slide 4 */}
      <section 
  ref={(el) => (sectionsRef.current[6] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6"
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 2: Title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/Image2_aciqex" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Bubble chat đè lên góc trái */}
    <div className="absolute left-0 -translate-x-1/2 top-9/10 -translate-y-1/2 
                    bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-br-sm 
                    px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
      <ChatTyper text="Nội dung ngắn gọn slide 4" isVisible={current === 6} />
    </div>

  </div>
</section>

{/*Slide 5*/}
      <section 
  ref={(el) => (sectionsRef.current[7] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6 -translate-y-10"  
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 2: The Title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/Gemini_Generated_Image_j9jn55j9jn55j9jn_wiiina" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-9/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text="Nuclear Tracer is more useful than you think !!!" isVisible={current === 7} />
</div>

  </div>
</section>

{/* Slide 6 */}
      <section 
  ref={(el) => (sectionsRef.current[8] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6"
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 2: Title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/Image2_aciqex" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Bubble chat đè lên góc trái */}
    <div className="absolute left-0 -translate-x-1/2 top-9/10 -translate-y-1/2 
                    bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-br-sm 
                    px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
      <ChatTyper text="Nội dung ngắn gọn slide 4" isVisible={current === 8} />
    </div>

  </div>
</section>

{/* Slide 7 */}
      <section 
  ref={(el) => (sectionsRef.current[9] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6"
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 3: Chapter 3 Title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/Image2_aciqex" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Bubble chat đè lên góc trái */}
    <div className="absolute left-0 -translate-x-1/2 top-9/10 -translate-y-1/2 
                    bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-br-sm 
                    px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
      <ChatTyper text="Nội dung ngắn gọn slide 4" isVisible={current === 9} />
    </div>

  </div>
</section>

{/*Slide 8*/}
      <section 
  ref={(el) => (sectionsRef.current[10] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6 -translate-y-10"  
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 3: Chapter 3 Title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/Gemini_Generated_Image_j9jn55j9jn55j9jn_wiiina" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-9/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text="Nuclear Tracer is more useful than you think !!!" isVisible={current === 10} />
</div>

  </div>
</section>

{/* Slide 9 */}
      <section 
  ref={(el) => (sectionsRef.current[11] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6"
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 3: chapter 3  title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/Image2_aciqex" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Bubble chat đè lên góc trái */}
    <div className="absolute left-0 -translate-x-1/2 top-9/10 -translate-y-1/2 
                    bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-br-sm 
                    px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
      <ChatTyper text="Nội dung ngắn gọn slide 4" isVisible={current === 11} />
    </div>

  </div>
</section>

{/* Slide 10 */}
      <section 
  ref={(el) => (sectionsRef.current[12] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6"
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 4: chapter 4 title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/Image2_aciqex" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Bubble chat đè lên góc trái */}
    <div className="absolute left-0 -translate-x-1/2 top-9/10 -translate-y-1/2 
                    bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-br-sm 
                    px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
      <ChatTyper text="Nội dung ngắn gọn slide 4" isVisible={current === 12} />
    </div>

  </div>
</section>

{/*Slide 11*/}
      <section 
  ref={(el) => (sectionsRef.current[13] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6 -translate-y-10"  
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 4: chapter 4 title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/Gemini_Generated_Image_j9jn55j9jn55j9jn_wiiina" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-9/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text="Nuclear Tracer is more useful than you think !!!" isVisible={current === 13} />
</div>

  </div>
</section>

{/* Slide 12 */}
      <section 
  ref={(el) => (sectionsRef.current[14] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6"
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 4: chapter 4 title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/Image2_aciqex" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Bubble chat đè lên góc trái */}
    <div className="absolute left-0 -translate-x-1/2 top-9/10 -translate-y-1/2 
                    bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-br-sm 
                    px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
      <ChatTyper text="Nội dung ngắn gọn slide 4" isVisible={current === 14} />
    </div>

  </div>
</section>

{/* Final Call to Action */}
            {/* Nút điều hướng */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-row gap-4 z-50">
  
  {/* Up */}
  <button
    onClick={handlePrev}
    className="w-10 h-10 rounded-full bg-slate-900 border border-sky-500 flex items-center justify-center hover:scale-110 transition"
  >
    <ArrowUp className="text-sky-500" />
  </button>

  {/* Down */}
  <button
    onClick={handleNext}
    className="w-10 h-10 rounded-full bg-slate-900 border border-sky-500 flex items-center justify-center hover:scale-110 transition"
  >
    <ArrowDown className="text-sky-500" />
  </button>

</div>
    </div>
  );
}

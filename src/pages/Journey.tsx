
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
        <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-transparent"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="w-[800px] h-[800px] border-6 border-sky-500/30 rounded-full animate-pulse"></div>
          <div className="absolute w-[600px] h-[600px] border-6 border-sky-500/20 rounded-full animate-pulse delay-700"></div>
          <div className="absolute w-[400px] h-[400px] border-6 border-sky-500/10 rounded-full animate-pulse delay-1000"></div>
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

      {/* Timeline Section */}
  {/*Slide 1*/}
      <section 
          ref={(el) => (sectionsRef.current[1] = el)} 
          className="h-screen flex items-center"  
      >       
      <div className="relative flex flex-row w-full h-full items-center">
    
        {/* Nửa trái - Text */}
        <div className="w-1/2 flex items-center justify-center px-16">
          <div>
            <span className="text-sky-400 font-serif italic text-3xl mb-4 block">Part I</span>
              <h3 className="text-4xl font-black mb-6">The stories Title 1</h3>
                <p className="text-slate-400 leading-relaxed italic">
          The stories context 1
                </p>
          </div>
        </div>

        {/* Nửa phải - Ảnh sát mép */}
        <div className="w-1/2 h-[80vh] pr-8">
          <div className="rounded-[3rem] overflow-hidden w-full h-full">
            <img 
              src="https://cmed.vn/wp-content/uploads/2024/11/medicine-doctor-stethoscope-using-tablet-with-icon-medical-network-connection-virtual-modern-medical-technology-concept.jpg" 
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      </section>

{/* Slide 2 */}
      <section 
          ref={(el) => (sectionsRef.current[2] = el)} 
          className="h-screen flex items-center"
      >       
        <div className="relative flex flex-row w-full h-full items-center">
    
        {/* Nửa trái - Ảnh sát mép */}
        <div className="w-1/2 h-[80vh] pl-8">
          <div className="rounded-[3rem] overflow-hidden w-full h-full">
            <img 
              src="https://cmed.vn/wp-content/uploads/2024/11/medicine-doctor-stethoscope-using-tablet-with-icon-medical-network-connection-virtual-modern-medical-technology-concept.jpg" 
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Nửa phải - Text */}
        <div className="w-1/2 flex items-center justify-center px-16">
          <div>
            <span className="text-sky-400 font-serif italic text-3xl mb-4 block">Part II</span>
            <h3 className="text-4xl font-black mb-6">The stories Title 2</h3>
            <p className="text-slate-400 leading-relaxed italic">
              The stories context 2
            </p>
          </div>
        </div>

        </div>
      </section>
      
{/* Slide 3 */}
      <section 
          ref={(el) => (sectionsRef.current[3] = el)} 
          className="h-screen flex items-center"
      >       
        <div className="relative flex flex-row w-full h-full items-center">
    
        {/* Nửa trái - Text */}
        <div className="w-1/2 flex items-center justify-center px-16">
          <div>
            <span className="text-sky-400 font-serif italic text-3xl mb-4 block">Part III</span>
            <h3 className="text-4xl font-black mb-6">The stories Title 3</h3>
            <p className="text-slate-400 leading-relaxed italic">
              The stories context 3
            </p>
          </div>
        </div>

        {/* Nửa phải - 3 ảnh */}
        <div className="w-1/2 h-[80vh] pr-8 flex flex-row gap-4">
      
          {/* Chữ nhật cao bên trái */}
          <div className="w-1/2 h-full rounded-[2rem] overflow-hidden">
            <img 
              src="https://oncologybuddies.com/wp-content/uploads/2020/02/Nuclear-Medicine.jpg" 
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cột phải: vuông + chữ nhật nhỏ */}
          <div className="w-1/2 h-full flex flex-col gap-4">
        
            {/* Hình vuông */}
            <div className="w-full aspect-square rounded-[2rem] overflow-hidden">
              <img 
                src="https://d38sso7f6qz01j.cloudfront.net/original_images/nuclear-medicine-1600x732.jpg" 
                alt="..."
                className="w-full h-full object-cover"
              />
            </div>

            {/* Chữ nhật nhỏ bên dưới */}
            <div className="w-full flex-1 rounded-[2rem] overflow-hidden">
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTroWrCT9AnxzrQNHpNXkSSrqTNTUJhlnn6fw&s" 
                alt="..."
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

        </div>
      </section>

{/* Slide 4 */}
      <section 
        ref={(el) => (sectionsRef.current[4] = el)} 
        className="h-screen flex items-center"
      >       
        <div className="relative flex flex-row w-full h-full items-center">
    
        {/* Nửa trái - 3 ảnh */}
        <div className="w-1/2 h-[80vh] pl-8 flex flex-row gap-4">
      
          {/* Chữ nhật cao bên trái */}
          <div className="w-1/2 h-full rounded-[2rem] overflow-hidden">
            <img 
              src="https://www.hhrinstitute.org/wp-content/uploads/Research.jpeg" 
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>

          {/* Cột phải: vuông + chữ nhật nhỏ */}
          <div className="w-1/2 h-full flex flex-col gap-4">
        
            {/* Hình vuông */}
            <div className="w-full aspect-square rounded-[2rem] overflow-hidden">
              <img 
                src="https://d2csxpduxe849s.cloudfront.net/media/E32629C6-9347-4F84-81FEAEF7BFA342B3/D02F34FC-C7D7-469D-B131BED737B5764F/E93DB082-5897-4FA3-AF9CAA63054BC69C/WebsiteJpg_XL-FMEDT_Main%20Visual_Purple_Website.jpg" 
                alt="..."
                className="w-full h-full object-cover"
              />
            </div>

          {/* Chữ nhật nhỏ bên dưới */}
            <div className="w-full flex-1 rounded-[2rem] overflow-hidden">
              <img 
                src="https://api.brusselstimes.com/wp-content/uploads/2020/11/nonim11127shutterstock_280921640.jpg" 
                alt="..."
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

        {/* Nửa phải - Text */}
        <div className="w-1/2 flex items-center justify-center px-16">
          <div>
            <span className="text-sky-400 font-serif italic text-3xl mb-4 block">Part IV</span>
            <h3 className="text-4xl font-black mb-6">The stories Title 4</h3>
            <p className="text-slate-400 leading-relaxed italic">
              The stories context 4
            </p>
          </div>
        </div>

        </div>
      </section>
{/* Slide 5 */}
      <section 
        ref={(el) => (sectionsRef.current[5] = el)} 
        className="h-screen flex items-center"
      >       
        <div className="relative flex flex-row w-full h-full items-center">
    
        {/* Nửa trái - Text */}
        <div className="w-1/2 flex items-center justify-center px-16">
          <div>
            <span className="text-sky-400 font-serif italic text-3xl mb-4 block">Part V</span>
            <h3 className="text-4xl font-black mb-6">The stories Title 5</h3>
            <p className="text-slate-400 leading-relaxed italic">
              The stories context 5
            </p>
          </div>
        </div>

        {/* Nửa phải - 2 ảnh xếp dọc */}
        <div className="w-1/2 h-[80vh] pr-8 flex flex-col gap-4">
      
      {/* Chữ nhật trên */}
      <div className="w-full flex-1 rounded-[2rem] overflow-hidden">
        <img 
          src="https://study.com/cimages/videopreview/videopreview-full/the-application-of-physics-in-medicine_177033.jpg" 
          alt="..."
          className="w-full h-full object-cover"
        />
      </div>

      {/* Chữ nhật dưới */}
      <div className="w-full flex-1 rounded-[2rem] overflow-hidden">
        <img 
          src="https://www.ictp.it/sites/default/files/inline-images/IMG-20220901-WA0004-exp.jpg" 
          alt="..."
          className="w-full h-full object-cover"
        />
      </div>

    </div>

  </div>
</section>

{/* Slide 6 */}
      <section 
        ref={(el) => (sectionsRef.current[6] = el)} 
        className="h-screen flex items-center"
      >       
        <div className="relative flex flex-row w-full h-full items-center">

        {/* Nửa trái - 2 ảnh xếp dọc */}
        <div className="w-1/2 h-[80vh] pl-8 flex flex-col gap-4">
      
          {/* Chữ nhật trên */}
          <div className="w-full flex-1 rounded-[2rem] overflow-hidden">
            <img 
              src="https://www.news-medical.net/images/Article_Images/ImageForArticle_22389_16499534671669840.jpg" 
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>

      {/* Chữ nhật dưới */}
      <div className="w-full flex-1 rounded-[2rem] overflow-hidden">
        <img 
          src="https://www.news-medical.net/images/Article_Images/ImageForArticle_22389_16499534671669840.jpg" 
          alt="..."
          className="w-full h-full object-cover"
        />
      </div>

    </div>

    {/* Nửa phải - Text */}
    <div className="w-1/2 flex items-center justify-center px-16">
      <div>
        <span className="text-sky-400 font-serif italic text-3xl mb-4 block">Part VI</span>
        <h3 className="text-4xl font-black mb-6">The stories Title 6</h3>
        <p className="text-slate-400 leading-relaxed italic">
          The stories context 6
        </p>
      </div>
    </div>

  </div>
      </section>
{/* Slide 7 */}
      <section 
          ref={(el) => (sectionsRef.current[7] = el)} 
          className="h-screen flex items-center"  
      >       
        <div className="relative flex flex-row w-full h-full items-center">
    
          {/* Nửa trái - Text */}
          <div className="w-1/2 flex items-center justify-center px-16">
            <div>
              <span className="text-sky-400 font-serif italic text-3xl mb-4 block">Part VII</span>
                <h3 className="text-4xl font-black mb-6">The stories Title 7</h3>
                  <p className="text-slate-400 leading-relaxed italic">
                    The stories context 7
                  </p>
            </div>
          </div>

        {/* Nửa phải - Ảnh sát mép */}
        <div className="w-1/2 h-[80vh] pr-8">
          <div className="rounded-[3rem] overflow-hidden w-full h-full">
            <img 
              src="https://cmed.vn/wp-content/uploads/2024/11/medicine-doctor-stethoscope-using-tablet-with-icon-medical-network-connection-virtual-modern-medical-technology-concept.jpg" 
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      </section>
{/* Slide 8 */}
      <section 
          ref={(el) => (sectionsRef.current[8] = el)} 
          className="h-screen flex items-center"
      >       
        <div className="relative flex flex-row w-full h-full items-center">
    
        {/* Nửa trái - Ảnh sát mép */}
        <div className="w-1/2 h-[80vh] pl-8">
          <div className="rounded-[3rem] overflow-hidden w-full h-full">
            <img 
              src="https://cmed.vn/wp-content/uploads/2024/11/medicine-doctor-stethoscope-using-tablet-with-icon-medical-network-connection-virtual-modern-medical-technology-concept.jpg" 
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
        </div>

    {/* Nửa phải - Text */}
    <div className="w-1/2 flex items-center justify-center px-16">
      <div>
        <span className="text-sky-400 font-serif italic text-3xl mb-4 block">Part VIII</span>
        <h3 className="text-4xl font-black mb-6">The stories Title 8</h3>
        <p className="text-slate-400 leading-relaxed italic">
          The stories context 8
        </p>
      </div>
    </div>

  </div>
</section>
{/* Slide 9 */}
      <section 
          ref={(el) => (sectionsRef.current[9] = el)} 
          className="h-screen flex items-center"  
      >       
        <div className="relative flex flex-row w-full h-full items-center">
    
        {/* Nửa trái - Text */}
        <div className="w-1/2 flex items-center justify-center px-16">
          <div>
            <span className="text-sky-400 font-serif italic text-3xl mb-4 block">Part IX</span>
              <h3 className="text-4xl font-black mb-6">The stories Title 9</h3>
                <p className="text-slate-400 leading-relaxed italic">
                  The stories context 9
                </p>
          </div>
        </div>

        {/* Nửa phải - Ảnh sát mép */}
        <div className="w-1/2 h-[80vh] pr-8">
          <div className="rounded-[3rem] overflow-hidden w-full h-full">
            <img 
              src="https://cmed.vn/wp-content/uploads/2024/11/medicine-doctor-stethoscope-using-tablet-with-icon-medical-network-connection-virtual-modern-medical-technology-concept.jpg" 
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      </section>
{/* Slide 10 */}
     <section 
        ref={(el) => (sectionsRef.current[10] = el)} 
        className="h-screen flex items-center"
      >       
        <div className="relative flex flex-row w-full h-full items-center">
    
        {/* Nửa trái - Ảnh sát mép */}
        <div className="w-1/2 h-[80vh] pl-8">
          <div className="rounded-[3rem] overflow-hidden w-full h-full">
            <img 
              src="https://cmed.vn/wp-content/uploads/2024/11/medicine-doctor-stethoscope-using-tablet-with-icon-medical-network-connection-virtual-modern-medical-technology-concept.jpg" 
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
        </div>

    {/* Nửa phải - Text */}
    <div className="w-1/2 flex items-center justify-center px-16">
      <div>
        <span className="text-sky-400 font-serif italic text-3xl mb-4 block">Part X</span>
        <h3 className="text-4xl font-black mb-6">The stories Title 10</h3>
        <p className="text-slate-400 leading-relaxed italic">
          The stories context 10
        </p>
      </div>
    </div>

  </div>
      </section>
{/* Slide 11 */}
      <section 
          ref={(el) => (sectionsRef.current[11] = el)} 
          className="h-screen flex items-center"  
      >       
        <div className="relative flex flex-row w-full h-full items-center">
    
          {/* Nửa trái - Text */}
          <div className="w-1/2 flex items-center justify-center px-16">
            <div>
              <span className="text-sky-400 font-serif italic text-3xl mb-4 block">Part XI</span>
                <h3 className="text-4xl font-black mb-6">The stories Title 11</h3>
                  <p className="text-slate-400 leading-relaxed italic">
                    The stories context 11
                  </p>
            </div>
          </div>

        {/* Nửa phải - Ảnh sát mép */}
        <div className="w-1/2 h-[80vh] pr-8">
          <div className="rounded-[3rem] overflow-hidden w-full h-full">
            <img 
              src="https://cmed.vn/wp-content/uploads/2024/11/medicine-doctor-stethoscope-using-tablet-with-icon-medical-network-connection-virtual-modern-medical-technology-concept.jpg" 
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      </section>
{/* Step 12 */}
      <section 
        ref={(el) => (sectionsRef.current[12] = el)} 
        className="h-screen flex items-center"  
      >       
        <div className="relative flex flex-row w-full h-full items-center">
    
        {/* Nửa trái - Ảnh sát mép */}
        <div className="w-1/2 h-[80vh] pl-8">
          <div className="rounded-[3rem] overflow-hidden w-full h-full">
            <img 
              src="https://cmed.vn/wp-content/uploads/2024/11/medicine-doctor-stethoscope-using-tablet-with-icon-medical-network-connection-virtual-modern-medical-technology-concept.jpg" 
              alt="..."
              className="w-full h-full object-cover"
            />
          </div>
        </div>

    {/* Nửa phải - Text */}
    <div className="w-1/2 flex items-center justify-center px-16">
      <div>
        <span className="text-sky-400 font-serif italic text-3xl mb-4 block">Part XII</span>
        <h3 className="text-4xl font-black mb-6">The stories Title 12</h3>
        <p className="text-slate-400 leading-relaxed italic">
          The stories context 12
        </p>
      </div>
    </div>

  </div>
      </section >
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

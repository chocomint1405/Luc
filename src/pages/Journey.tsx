
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
function InfoModal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      
      {/* nền mờ */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* khung modal */}
      <div className="relative bg-white text-black rounded-3xl p-8 w-[90%] max-w-[1000px] max-h-[80vh] overflow-y-auto shadow-2xl z-10">
        {children}
      </div>

    </div>
  );
}
export default function Journey() {
  const sectionsRef = useRef([]);
  const [current, setCurrent] = useState(0);
  const [chapterVisible, setChapterVisible] = useState(false);
  const [chapter2Visible, setChapter2Visible] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const audioRef = useRef(null);
  const [chapter3Visible, setChapter3Visible] = useState(false);

useEffect(() => {
  if (!audioRef.current) return;

  // reset audio cũ
  audioRef.current.pause();
  audioRef.current.currentTime = 0;

  if (current === 2) {
    audioRef.current.src = "/audio/1.mp3";
  }
    else if (current === 3) {
    audioRef.current.src = "/audio/2.mp3";
  }  
  else if (current === 4) {
    audioRef.current.src = "/audio/3.mp3";
  } 

    else if (current === 6) {
    audioRef.current.src = "/audio/yeah.mp3";
  } 
    else if (current === 7) {
    audioRef.current.src = "/audio/5.mp3";
  } 
    else if (current === 8) {
    audioRef.current.src = "/audio/MGT.mp3";
  } 
      else if (current === 9) {
    audioRef.current.src = "/audio/7.mp3";
  } 
    else if (current === 10) {
    audioRef.current.src = "/audio/xe chở.mp3";
  } 
    else if (current === 11) {
    audioRef.current.src = "/audio/chuẩn đoán.mp3";
  } 
    else if (current === 12) {
    audioRef.current.src = "/audio/9.mp3";
  } 
    else if (current === 13) {
    audioRef.current.src = "/audio/10.mp3";
  } 
    else if (current === 14) {
    audioRef.current.src = "/audio/slide5.mp3";
  } 
  else if (current === 15) {
    audioRef.current.src = "/audio/bắt tay.mp3";
  } 
  else if (current === 16) {
    audioRef.current.src = "/audio/phân đoạn.mp3";
  } 
  else if (current === 17) {
    audioRef.current.src = "/audio/12.mp3";
  } 
   else if (current === 18) {
    audioRef.current.src = "/audio/13.mp3";
  } 
  else {
    return; // không có audio thì thôi
  }

  audioRef.current.play().catch(() => {});
}, [current]);

  const scrollToSection = (index) => {
  if (index < 0 || index >= sectionsRef.current.length) return;
  sectionsRef.current[index].scrollIntoView({ behavior: "smooth" });
  setCurrent(index);
  
  if (index === 1) setChapterVisible(true); // index 1 là Chapter section
  else setChapterVisible(false); // reset khi rời đi

  if (index === 5) setChapter2Visible(true);
  else setChapter2Visible(false);

  if (index === 14) setChapter3Visible(true);
else setChapter3Visible(false);
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
  totalDuration={2000}
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
<button
  onClick={() => setActiveModal({
    title: "An introduction about nuclear",
    content: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          The atomic nucleus is a very small central region that contains nearly all of an atom’s mass. 
          It consists of two fundamental particles: positively charged protons and electrically neutral neutrons.
        </p>

        <p>
          Not all nuclei are stable. Nuclei that are excessively proton-rich, neutron-rich, or very heavy are typically unstable 
          and undergo spontaneous radioactive decay in order to achieve a more stable configuration. The most common types of decay 
          include alpha, beta, and gamma decay. These are natural processes; rather than indicating a “defective” nucleus, they reflect 
          a quantum system transitioning to a lower-energy state.
        </p>

        <p>
          In modern physics, the nucleus is a critically important subject of study because it is closely related to nuclear energy, 
          nuclear medicine, isotope-based archaeology, stellar astrophysics and supernovae, as well as the fundamental structure of matter. 
          If the atom is considered a “house,” then the nucleus can be regarded as its “heart.”
        </p>
      </div>
    )
  })}
  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-125 transition z-20"
>
  i
</button>
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/Gemini_Generated_Image_gwrx65gwrx65gwrx_eyo7xh" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-3/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text="Hello, I am a nucleus. I usually appear around you !!!" isVisible={current === 2} />
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
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/2_bbn0ls" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Bubble chat đè lên góc trái */}
    <div className="absolute left-0 -translate-x-1/2 top-2/10 -translate-y-1/2 
                    bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-br-sm 
                    px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
      <ChatTyper text="People think I am used for destructive purposes, which is really unfortunate, ...." isVisible={current === 3} />
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
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/3_yeag0c" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-2/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text="With radioactive isotopes, I am also burdened with the reputation of posing extremely severe dangers to humans." isVisible={current === 4} />
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
<button
onClick={() => setActiveModal({
  title: "Nuclear Applications in real life",
  content: (
  <div className="space-y-5 text-justify leading-relaxed">

    {/* Ảnh */}
    <div className="text-center">
      <img
        src="https://assets.onestopndt.com/p/uploads/text-editor-images/RadiographicTestingImage.png"
        className="w-3/4 mx-auto rounded-xl shadow-lg"
      />
    </div>

    {/* 🔥 PHẦN MỚI */}
    <div className="space-y-3">
      <h3 className="font-bold text-xl text-sky-600">
        Radiographic Imaging & Measurement
      </h3>

      <p>
        Gamma rays or X-rays are used to inspect welds 
        and internal metal structures without causing damage to the material.
      </p>

      <h3 className="font-bold text-xl text-sky-600">
        Thickness and density measurement
      </h3>

      <p>
        Beta or gamma radiation is employed 
        to accurately measure the thickness of materials such as metal sheets, paper, and plastics.
      </p>

      <p>
        Principle: Based on the attenuation of radiation as it passes through matter.
      </p>

      <h3 className="font-bold text-xl text-sky-600">
        Food irradiation
      </h3>

      <p>
        Used to delay spoilage and eliminate microorganisms without making the food itself radioactive.
      </p>

      <h3 className="font-bold text-xl text-sky-600">
        Mutation breeding
      </h3>

      <p>
      Radiation is used to induce mutations, followed by selection of plant varieties with improved traits (e.g., higher yield, drought resistance).
      </p>

            <h3 className="font-bold text-xl text-sky-600">
        Sterile Insect Technique (SIT)
      </h3>

      <p>
      Radiation is applied to sterilize insects, rendering them incapable of reproduction, thereby helping to control pest populations.
      </p>


    </div>

  </div>
)
})}
  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform transition-transform duration-200 ease-out hover:scale-125 active:scale-95 hover:shadow-xl z-20"
>
  i
</button>
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/4_sldi7r" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Bubble chat đè lên góc trái */}
    <div className="absolute left-0 -translate-x-1/2 top-2/10 -translate-y-1/2 
                    bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-br-sm 
                    px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
      <ChatTyper text="Yeah, but I am widely applied in many areas of modern life." isVisible={current === 6} />
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
  <button
onClick={() => setActiveModal({
  title: "Produce from the Nuclear Reactor",
  content: (
  <div className="space-y-5 text-justify leading-relaxed">

    {/* Ảnh */}
    <div className="text-center">
      <img
        src="https://res.cloudinary.com/dkpt2do8f/image/upload/f_auto,q_auto/ChatGPT_Image_23_24_44_26_thg_3_2026_yhwccy"
        className="w-3/4 mx-auto rounded-xl shadow-lg"
      />
    </div>

    {/* 🔥 PHẦN MỚI */}
    <div className="space-y-3">

      <p>
      In a nuclear reactor, the neutron source originates from the fission of Uranium-235. When a U-235 nucleus absorbs a thermal neutron, it becomes unstable and undergoes fission into two lighter fragments, releasing energy and approximately 2 to 3 new neutrons.
      </p>

      <p>
      These newly produced neutrons go on to induce further fission reactions, forming a chain reaction. The sustainability of this chain reaction is characterized by the neutron multiplication factor, k. If k is less than 1, the reaction will gradually die out. If k is greater than 1, the reaction increases rapidly and may become uncontrolled. Therefore, in a reactor, k is carefully regulated to be approximately equal to 1 in order to maintain a steady-state (critical) condition
      </p>

      <p>
        Once a stable neutron flux is established, the target material to be irradiated is placed in a region of high neutron flux. There, neutrons—especially thermal neutrons—are absorbed by nuclei in the sample through neutron capture reactions, denoted as (n, γ). Following this process, the nucleus is transformed into a new isotope, often a radioactive one, and emits gamma radiation.
      </p>

    </div>

  </div>
)
})}
  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform transition-transform duration-200 ease-out hover:scale-125 active:scale-95 hover:shadow-xl z-20"
>
  i
</button>

    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dkpt2do8f/image/upload/f_auto,q_auto/ChatGPT_Image_23_24_44_26_thg_3_2026_yhwccy" 
        alt="..."
        className="w-[900px] h-auto mx-auto object-contain"
      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-2/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text="They are also produced in nuclear reactors" isVisible={current === 7} />
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
    <button
    onClick={() => setActiveModal({
      title: "Produce from the Cyclotron",
      content: (
        <div className="space-y-4">
          <p>Đây là video minh hoạ:</p>

          <iframe
            className="w-full aspect-video rounded-xl"
            src="https://www.youtube.com/embed/6BxyqFK2KRI"
            title="YouTube video"
            allowFullScreen
          />
        </div>
      )
    })}
    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform transition-transform duration-200 ease-out hover:scale-125 active:scale-95 hover:shadow-xl z-20"
  >
    i
  </button>
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/6_ksa3zc" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Bubble chat đè lên góc trái */}
    <div className="absolute left-0 -translate-x-1/2 top-1/10 -translate-y-1/2 
                    bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-br-sm 
                    px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
      <ChatTyper text="Radioisotopes used in nuclear medicine are produced by an accelerator called a cyclotron." isVisible={current === 8} />
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
  <button
onClick={() => setActiveModal({
  title: "Slide 7",
  content: (
  <div className="space-y-5 text-justify leading-relaxed">


    {/* 🔥 PHẦN MỚI */}
    <div className="space-y-3">

      <p>
      Radiopharmaceuticals are compounds that contain radioactive isotopes and are widely used in the diagnosis and treatment of diseases. Due to their specific properties, the radionuclides used in radiopharmaceuticals are required to have short half-lives. This creates challenges in their storage and availability. To address this issue, the radionuclide generator—a device that provides a continuous supply of short-lived radioactive isotopes—was developed
      </p>

      <p>
      In nuclear medicine, a “generator” refers to a closed system containing a parent radionuclide and its daughter radionuclide. The parent nucleus undergoes natural radioactive decay to produce a useful daughter nucleus, which is periodically separated for clinical use. From a nuclear physics perspective, this can be considered an “isotope production source” based on radioactive decay, rather than a nuclear reactor or an accelerator.
      </p>

      <p>
        The most well-known example is the ⁹⁹Mo/⁹⁹ᵐTc generator: ⁹⁹Mo is the parent radionuclide, which undergoes beta decay to produce ⁹⁹ᵐTc. The Tc-99m is then “eluted” from the generator column using a saline solution for use in diagnostic imaging. This is an essential source of Tc-99m because the daughter isotope has a short half-life and is highly suitable for imaging applications.
      </p>

    </div>

  </div>
)
})}
  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform transition-transform duration-200 ease-out hover:scale-125 active:scale-95 hover:shadow-xl z-20"
>
  i
</button>
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/7_xapl20" 
        alt="..."
        className="w-[900px] h-auto mx-auto object-contain"
      />
    </div>

    {/* Bubble chat đè lên góc trái */}
    <div className="absolute left-0 -translate-x-1/2 top-1/10 -translate-y-1/2 
                    bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-br-sm 
                    px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
      <ChatTyper text="They are also produced using generators." isVisible={current === 9} />
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
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/9_aw25kb" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-8/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text="But I cannot do that on my own; I need a carrier molecule, which helps me travel to the target site I need to reach" isVisible={current === 10} />
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
  <button
onClick={() => setActiveModal({
  title: "Application in diagnosis",
  content: (
  <div className="space-y-5 text-justify leading-relaxed">


    {/* 🔥 PHẦN MỚI */}
    <div className="space-y-3">

      <p>
        Utilizes radiopharmaceuticals (radiotracers) to investigate physiological, biochemical, and molecular processes in vivo. Provides functional information, often preceding structural changes, and complements anatomical imaging.
      </p>

      <p>
        Encompasses radionuclide imaging techniques (planar scintigraphy, SPECT, PET/CT,...) and quantitative functional studies. Includes both in vivo imaging and in vitro assays (e.g., radioimmunoassay) for precise measurement of biological parameters. Plays a central role in disease detection, staging, and therapy monitoring.
      </p>

    </div>

  </div>
)
})}
  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform transition-transform duration-200 ease-out hover:scale-125 active:scale-95 hover:shadow-xl z-20"
>
  i
</button>
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/10_gvqwzn" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Bubble chat đè lên góc trái */}
    <div className="absolute left-0 -translate-x-1/2 top-3/10 -translate-y-1/2 
                    bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-br-sm 
                    px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
      <ChatTyper text="After becoming a radiopharmaceutical, I travel to the target or tissues of interest and emit signals detected by a detector to produce nuclear medicine images." isVisible={current === 11} />
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
    Chapter 3: chapter 3 title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
  <button
onClick={() => setActiveModal({
  title: "Application in radiotherapy",
  content: (
  <div className="space-y-5 text-justify leading-relaxed">


    {/* 🔥 PHẦN MỚI */}
    <div className="space-y-3">

      <p>
       Employs radiopharmaceuticals to deliver targeted ionizing radiation for therapeutic purposes. Based on selective uptake and retention in pathological tissues, enabling molecular-level treatment. Includes systemic radionuclide therapy, brachytherapy, and integration with external beam approaches. 
      </p>

      <p>
       Widely applied in oncology, endocrinology, and other disorders with specific biological targets. Supports theranostic strategies by combining diagnostic imaging and therapy using related agents. Aims to maximize therapeutic efficacy while minimizing toxicity to normal tissues. 
      </p>

    </div>

  </div>
)
})}
  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg transform transition-transform duration-200 ease-out hover:scale-125 active:scale-95 hover:shadow-xl z-20"
>
  i
</button>
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/11_kj5oel" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Bubble chat đè lên góc trái */}
    <div className="absolute left-0 -translate-x-1/2 top-3/10 -translate-y-1/2 
                    bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-br-sm 
                    px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
      <ChatTyper text=" In addition to targeting specific sites, I destroy abnormal cells when I find them." isVisible={current === 12} />
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
    Chapter 3: chapter 3 title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/12_1_gca7rs" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-2/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text="My applications in medicine contribute to improving human health." isVisible={current === 13} />
</div>

  </div>
</section>

{/* Chapter 3 Intro */}
<section
  ref={(el) => (sectionsRef.current[14] = el)}
  className="h-screen flex items-center justify-center bg-slate-950"
>
  <div className="text-center">
    <TypewriterText 
      lines={["Chapter 3:", "The Conclusion"]} 
      totalDuration={2000}
      isVisible={chapter3Visible}
    />
  </div>
</section>

{/* Slide 12 */}
      <section 
  ref={(el) => (sectionsRef.current[15] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6 -translate-y-10"  
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 3: chapter 3 title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
  
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dutjtmgbp/image/upload/f_auto,q_auto/13_wuyewt" 
        alt="..."
        className="w-full h-auto object-contain"
      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-2/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text="My applications in medicine contribute to improving human health." isVisible={current === 15} />
</div>

  </div>
</section>


{/* Slide 13 */}
      <section 
  ref={(el) => (sectionsRef.current[16] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6 -translate-y-10"  
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 3: chapter 3 title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
  <button
  onClick={() => setActiveModal({
    title: "An introduction about nuclear",
    content: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          Segmentation in PET/SPECT imaging refers to the process of delineating regions of interest (ROIs/VOIs), such as tumors, organs, or areas of abnormal tracer uptake, in order to transform functional images into quantitative and clinically meaningful data. In PET, segmentation is particularly critical because it directly affects quantitative metrics such as standardized uptake value (SUV), as well as diagnosis, treatment response assessment, and therapy planning. In SPECT, segmentation plays a key role in dosimetry, where accurate estimation of volume and activity within target regions is essential for reliable absorbed dose calculations. However, both PET and SPECT imaging present significant challenges for segmentation, including high noise levels, low spatial resolution, partial volume effects, heterogeneous lesion characteristics, and strong dependence on manual delineation by experts. As a result, manual segmentation is time-consuming and subject to inter-observer variability, while automated and semi-automated methods are being developed to improve reproducibility and accuracy.
        </p>

        <p>
The emergence of artificial intelligence, particularly deep learning, has significantly advanced segmentation in nuclear medicine. In PET imaging, AI enables automated and consistent lesion delineation, improving detection and quantitative analysis while integrating into the full imaging pipeline from reconstruction to clinical interpretation. In SPECT imaging, studies have shown that AI-based segmentation can improve the estimation of organ volumes and activity for dosimetry, especially in radionuclide therapy such as ^177Lu-DOTATATE. Furthermore, multimodal approaches that incorporate PET information to assist CT-based segmentation have demonstrated improved performance and efficiency. Overall, AI-based segmentation transforms PET/SPECT images from raw functional data into well-defined quantitative regions, thereby enhancing diagnostic accuracy, treatment planning, and personalized medicine.
        </p>

      </div>
    )
  })}
  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-125 transition z-20"
>
  i
</button>

    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dkpt2do8f/image/upload/f_auto,q_auto/ChatGPT_Image_02_24_21_27_thg_3_2026_u0gfcr" 
        alt="..."
        className="h-[550px] w-auto mx-auto object-contain"
      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-4/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text="AI, particularly deep learning, enables automated and consistent segmentation, improving accuracy, efficiency, and quantitative analysis" isVisible={current === 16} />
</div>

  </div>
</section>

{/* Slide 14 */}
      <section 
  ref={(el) => (sectionsRef.current[17] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6 -translate-y-10"  
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 3: chapter 3 title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
  <button
  onClick={() => setActiveModal({
    title: "An introduction about nuclear",
    content: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
In nuclear medicine, images are not just pictures of the body—they reflect functional processes occurring inside the body. However, PET and SPECT images are often noisy due to limited signal, and increasing the radiotracer dose to improve image quality is not safe for patients.        </p>

        <p>
AI has emerged to address this challenge. It can perform denoising to reduce noise and improve image clarity, as well as reconstruction to generate higher-quality images from raw data. In addition, AI can be combined with traditional reconstruction methods to maintain accuracy while enhancing image quality.        </p>

      <p>
As a result, images become not only clearer but also preserve important details, allowing physicians to detect lesions more easily.
More importantly, AI enables lower radiation doses or shorter scan times while still maintaining diagnostic quality
Therefore, AI does not simply make images look better—it makes diagnosis more accurate, faster, and safer.
That is why AI can be considered a ‘smart lens’ in nuclear medicine.
    </p>

      
      </div>
    )
  })}
  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-125 transition z-20"
>
  i
</button> 

    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dkpt2do8f/image/upload/f_auto,q_auto/ChatGPT_Image_02_47_51_27_thg_3_2026_pxrurc" 
        alt="..."
        className="h-[550px] w-auto mx-auto object-contain"      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-3/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text="AI acting as a “smart lens” in nuclear medicine." isVisible={current === 17} />
</div>

  </div>
</section>

{/* Slide 15 */}
      <section 
  ref={(el) => (sectionsRef.current[18] = el)} 
  className="h-screen flex flex-col items-center justify-center gap-6 -translate-y-10"  
>       
  {/* Chapter title */}
  <p className="text-white font-serif italic text-3xl tracking-widest">
    Chapter 3: chapter 3 title
  </p>

  {/* Ảnh + bubble chat */}
  <div className="relative w-4/6">
    <button
  onClick={() => setActiveModal({
    title: "An introduction about nuclear",
    content: (
      <div className="space-y-4 text-justify leading-relaxed">
        <p>
          Beyond imaging and data analysis, artificial intelligence also plays a critical role in optimizing the logistics of radiopharmaceutical supply in nuclear medicine. Radioisotopes are inherently time-sensitive due to their radioactive decay, meaning their clinical effectiveness decreases rapidly over time. Therefore, efficient production, distribution, and delivery are essential to ensure their usability upon arrival at healthcare facilities.        
        </p>

        <p>
          AI-driven systems can support the development of an intelligent supply network by forecasting demand across hospitals, optimizing production schedules at cyclotrons, and determining the most efficient transportation routes. By incorporating factors such as radioactive decay kinetics, traffic conditions, and clinical scheduling, AI can ensure that radiopharmaceuticals are delivered at the right time, to the right location, with sufficient remaining activity for clinical use.
        </p>

        <p>
Furthermore, such systems can minimize resource wastage, improve coordination between production and clinical sites, and enhance the overall efficiency and reliability of nuclear medicine services
        </p>
        <p>
          In this context, AI not only improves diagnostic and therapeutic processes but also enables a more integrated, responsive, and sustainable healthcare infrastructure for nuclear medicine.
        </p>

      
      </div>
    )
  })}
  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-125 transition z-20"
>
  i
</button> 
    
    {/* Ảnh lớn */}
    <div className="rounded-[3rem] overflow-hidden">
      <img 
        src="https://res.cloudinary.com/dkpt2do8f/image/upload/f_auto,q_auto/ChatGPT_Image_02_14_58_27_thg_3_2026_zogx3d" 
        alt="..."
        className="h-[550px] w-auto mx-auto object-contain"
      />
    </div>

{/* Bubble chat đè lên góc phải */}
<div className="absolute right-0 translate-x-1/2 top-5/10 -translate-y-1/2 
                bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl rounded-bl-sm 
                px-5 py-4 shadow-2xl w-[250px] min-h-[0px] text-lg leading-relaxed">
  <ChatTyper text=" AI ensures timely delivery with sufficient activity, while reducing waste and improving the overall efficiency and sustainability of nuclear medicine services" isVisible={current === 18} />
</div>

  </div>
</section>

{/* Final Call to Action */}
            {/* Nút điều hướng */}
<InfoModal 
  isOpen={!!activeModal} 
  onClose={() => setActiveModal(null)}
>
  <h2 className="text-2xl font-bold mb-4">
    {activeModal?.title}
  </h2>
<div className="text-lg">
  {activeModal?.content}
</div>
</InfoModal>
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex flex-row gap-4 z-50">
  
  <audio ref={audioRef} />
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

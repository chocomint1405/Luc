import { motion } from 'motion/react';
import { 
  FlaskConical, 
  Microscope, 
  Activity, 
  Settings, 
  Syringe, 
  Hourglass, 
  Scan, 
  BarChart3,
  Network,
  Camera,
  Pill,
  ShieldCheck,
  Target,
  ArrowRight,
  // ...existing code...
} from 'lucide-react';
import { useState, useRef, useEffect } from "react";

export default function About() {
  const [activeStep, setActiveStep] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const [chatMessages, setChatMessages] = useState([
    { role: "bot", text: "Hi! Ask me anything about NucleUS🚀. I can help you in English." },
  ]);
  const [chatInput, setChatInput] = useState("");
  const [isNewMessage, setIsNewMessage] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What is Nuclear Medicine?",
    "How does diagnostic imaging work?",
    "What is radionuclide therapy?",
    "Tell me about NucleUS project",
    "What are the benefits of nuclear medicine?"
  ];
  const stepTitles = {
    1: "Tracer Injection",
    2: "Distribution",
    3: "Scaning",
    4: "Data Analysis",
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToBottom = () => {
    if (!isClient) return;
    setTimeout(() => {
      if (chatEndRef.current) {
        const container = chatEndRef.current.parentElement;
        if (container) {
          container.scrollTop = container.scrollHeight;
        }
      }
    }, 100);
  };

  useEffect(() => {
    if (isClient) {
      scrollToBottom();
    }
  }, [chatMessages, isClient]);

  const getBotReply = (question: string) => {
    const q = question.toLowerCase();

    if (q.includes("nuclear medicine")) {
      return "Nuclear Medicine is a medical specialty that uses radioactive substances for diagnosis and treatment. It combines chemistry, physics, mathematics, computer technology, and medicine to provide information about both the structure and function of virtually every major organ system in the body.";
    }

    if (q.includes("diagnostic imaging")) {
      return "Diagnostic imaging in nuclear medicine uses radiopharmaceuticals (radiotracers) to investigate physiological, biochemical, and molecular processes in vivo. It provides functional information that often precedes structural changes and complements anatomical imaging techniques like CT and MRI.";
    }

    if (q.includes("radionuclide therapy")) {
      return "Radionuclide therapy employs radiopharmaceuticals to deliver targeted ionizing radiation for therapeutic purposes. It works by selective uptake and retention in pathological tissues, enabling molecular-level treatment while minimizing toxicity to normal tissues.";
    }

    if (q.includes("nucleus") || q.includes("project")) {
      return "NucleUS is an educational project focused on Nuclear Physics and Medical Physics applications. It aims to increase awareness and understanding of nuclear medicine technologies and their role in modern healthcare.";
    }

    if (q.includes("benefits")) {
      return "Nuclear medicine offers several key benefits: non-invasive diagnosis, early detection of diseases, targeted therapy with minimal side effects, ability to assess organ function, and the potential for personalized medicine approaches.";
    }

    if (q.includes("study") || q.includes("learn")) {
      return "NucleUS provides knowledge and research in Nuclear Physics, Radiation, and Medical Physics. You can explore our educational resources, research findings, and learn about the latest developments in the field.";
    }

    return "Sorry, I don't have an answer for that yet. Try asking about nuclear medicine, diagnostic imaging, radionuclide therapy, or the NucleUS project!";
  };

  const handleSend = () => {
    if (!chatInput.trim()) return;

    const userMsg = { role: "user", text: chatInput };
    const botMsg = { role: "bot", text: getBotReply(chatInput) };

    setChatMessages(prev => [...prev, userMsg, botMsg]);
    setChatInput("");
    setIsNewMessage(true);
    
    // Reset animation after 500ms
    setTimeout(() => setIsNewMessage(false), 500);
  };

  const handleSuggestedQuestion = (question: string) => {
    const userMsg = { role: "user", text: question };
    const botMsg = { role: "bot", text: getBotReply(question) };

    setChatMessages(prev => [...prev, userMsg, botMsg]);
    setIsNewMessage(true);
    
    // Reset animation after 500ms
    setTimeout(() => setIsNewMessage(false), 500);
  };
  return (
    <div className="bg-slate-50 dark:bg-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-4 pb-16 lg:pt-8 lg:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-10"
          >
            <span className="inline-block py-3 px-6 rounded-full bg-sky-200 text-sky-800 text-lg font-extrabold uppercase tracking-wider mb-6">Medical Awareness Project</span>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-slate-900">
              <span className="text-slate-800 dark:text-white">Understanding</span> <span className="text-sky-600">Nuclear Medicine</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              <span className="text-slate-600 dark:text-slate-200">A deep dive into the science that sees within. Discover how molecular imaging and targeted therapies are revolutionizing modern healthcare.</span>
            </p>
            <div className="flex gap-4">
              <button 
  onClick={() => {
    if (typeof document !== 'undefined') {
      document.getElementById("what-is")?.scrollIntoView({
        behavior: "smooth"
      });
    }
  }}
  className="bg-sky-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-sky-200"
>
  Get Started
</button>

                {/* Theme toggle button removed */}
            </div>
          </motion.div>
          
       <motion.div 
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  className="relative group"
>
  <div className="absolute -inset-4 bg-sky-500/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>

  <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl aspect-square lg:aspect-video bg-slate-900 flex items-center justify-center">
    
    {/* Picture */}
    <img 
      alt="Abstract medical tech visualization" 
      className="w-full h-full object-cover opacity-300"
      src="https://res.cloudinary.com/dbife6uva/image/upload/v1774191239/faf54078-367f-436a-a3bc-ff76095346c9_f8keme.png"
    />

    {/* Overlay picture ) */}
    <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/20 to-transparent pointer-events-none"></div>

  </div>
</motion.div>
        </div>
      </header>
      <div className="flex gap-4">
 
</div>

      {/* What is Nuclear Medicine */}
      <section id="what-is" className="pt-6 pb-6 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-4xl font-bold mb-3 text-sky-600">What is Nuclear Medicine?</h2>
              <div className="text-slate-600 leading-relaxed mb-5 text-justify">
                <p>Nuclear medicine is a medical specialty that utilizes radioisotopes (primarily unsealed radioactive sources) for disease diagnosis, treatment, and medical research. 
              </p><p>
               This application is based on two fundamental technical principles: the radiotracer technique and the use of radiation emitted from radioisotopes to produce desired biological effects on living organisms.
             </p> </div>
              <div className="w-full flex justify-center items-center">
  <img
  src="https://res.cloudinary.com/dbife6uva/image/upload/v1774193866/611db93a-a0af-45dc-a989-027cebbcf682_u7nzcf.png"
  alt="nuclear medicine"
  className="max-w-full h-auto rounded-xl mix-blend-multiply opacity-100"
/>
</div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 gap-6">

  {/* KHUNG TREN */}
  <div className="p-8 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col gap-6">
    <div className="flex items-start gap-4">
      <div>
        <h3 className="text-xl font-bold text-slate-900 space-y-2 mb-4">Diagnostic Imaging</h3>
        <div className="text-sm text-slate-900 indent-6 text-[15px] space-y-3 text-justify">
          <p>
          Utilizes radiopharmaceuticals (radiotracers) to investigate physiological, biochemical, and molecular processes in vivo.
          Provides functional information, often preceding structural changes, and complements anatomical imaging.
         </p><p> 
          Encompasses radionuclide imaging techniques (planar scintigraphy, SPECT, PET) and quantitative functional studiesIncludes both in vivo imaging and in vitro assays (e.g., radioimmunoassay) for precise measurement of biological parameters.
          Plays a central role in disease detection, staging, and therapy monitoring.
          </p>
          </div>
      </div>
    </div>
  </div>

  {/* KHUNG DUOI */}
 <div className="p-8 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col gap-6">
    <div className="flex items-start gap-4">
      <div>
        <h3 className="text-xl font-bold text-slate-900 space-y-2 mb-4">Radionuclide therapy
</h3>
        <div className="text-sm text-slate-900 indent-6 text-[15px] space-y-3 text-justify">
          <p>
          Employs radiopharmaceuticals to deliver targeted ionizing radiation for therapeutic purposes.
          Based on selective uptake and retention in pathological tissues, enabling molecular-level treatmentIncludes systemic radionuclide therapy, brachytherapy, and integration with external beam approaches.
         </p><p> 
          Widely applied in oncology, endocrinology, and other disorders with specific biological targets.
          Supports theranostic strategies by combining diagnostic imaging and therapy using related agents.
          Aims to maximize therapeutic efficacy while minimizing toxicity to normal tissues.
          </p>
          </div>
      </div>
    </div>
  </div>

</div>
          </div>
        </div>
      </section>

      {/* Clinical Pathway */}
<section className="py-20 bg-slate-100">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-3xl font-black mb-6 text-sky-700">
        DIAGNOSTIC IMAGING WORKFLOW
      </h2>
      <p className="text-lg text-slate-600">
        A sophisticated process from molecular targeting to actionable medical insights.
      </p>
    </div>

    {/* ICON GRID */}
    <div className="relative grid md:grid-cols-4 gap-8">
      <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>

      {/* STEP 1 */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <button
          onClick={() => setActiveStep(activeStep === 1 ? null : 1)}
          className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 hover:scale-110 transition border-4 ${
  activeStep === 1
    ? "bg-sky-500 text-white border-sky-300 shadow-lg"
    : "bg-white text-sky-500 border-sky-300"
}`}
        
        >
          <Syringe size={40} />
        </button>

        <h4 className="font-bold text-lg mb-2 text-slate-900">
          1. Tracer Injection
        </h4>
        <p className="text-sm text-slate-500">
          Administration of a small amount of radiopharmaceutical into the body (in vivo).
          Based on the radiotracer principle for functional assessment.
        </p>
      </div>

      {/* STEP 2 */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <button
          onClick={() => setActiveStep(activeStep === 2 ? null : 2)}
          className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 hover:scale-110 transition border-4 ${
  activeStep === 2
    ? "bg-sky-500 text-white border-sky-300 shadow-lg"
    : "bg-white text-sky-500 border-sky-300"
}`}
        
        >
          <Hourglass size={40} />
        </button>

        <h4 className="font-bold text-lg mb-2 text-slate-900">
          2. Distribution
        </h4>
        <p className="text-sm text-slate-500">
          Selective uptake and accumulation in target tissues.
          Reflects physiological. processes such as uptake, metabolism, and excretion.
        </p>
      </div>

      {/* STEP 3 */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <button
          onClick={() => setActiveStep(activeStep === 3 ? null : 3)}
          className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 hover:scale-110 transition border-4 ${
  activeStep === 3
    ? "bg-sky-500 text-white border-sky-300 shadow-lg"
    : "bg-white text-sky-500 border-sky-300"
}`}
        >
          <Scan size={40} />
        </button>

        <h4 className="font-bold text-lg mb-2 text-slate-900">
          3. Scanning
        </h4>
        <p className="text-sm text-slate-500">
          Detection of emitted radiation using dedicated detector systems.
          Generates images representing the spatial distribution of the tracer.
        </p>
      </div>

      {/* STEP 4 */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <button
          onClick={() => setActiveStep(activeStep === 4 ? null : 4)}
          className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 hover:scale-110 transition border-4 ${
  activeStep === 4
    ? "bg-sky-500 text-white border-sky-300 shadow-lg"
    : "bg-white text-sky-500 border-sky-300"
}`}
        >
          <BarChart3 size={40} />
        </button>

        <h4 className="font-bold text-lg mb-2 text-slate-900">
          4. Data Analysis
        </h4>
        <p className="text-sm text-slate-500">
          Processing of acquired signals into images, curves, or quantitative parameters.Enables functional evaluation and clinical diagnosis.
        </p>
      </div>
    </div>

   
   {/* WIDE BOX */}
{/* WIDE BOX */}
{activeStep && (

  // map ảnh theo step
  <>
    {(() => {
      const stepImages = {
        1: "https://res.cloudinary.com/dbife6uva/image/upload/v1774231642/MG_1814-scaled_kdlqvz.jpg",
        2: "https://res.cloudinary.com/dbife6uva/image/upload/v1774231642/hyg_D-1_kimemn.jpg",
        3: "https://res.cloudinary.com/dbife6uva/image/upload/v1774231665/Understanding-the-Differences_-SPECT-Scan-vs-PET-Scan_pzgvue.png",
        4: "https://res.cloudinary.com/dbife6uva/image/upload/v1774231638/F2.large_ccpf7y.jpg",
      };

      return (
        <div className="mt-20 bg-white border border-slate-200 rounded-3xl shadow-2xl p-10 max-w-7xl mx-auto">
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* IMAGE */}
            <div className={`${activeStep === 2 || activeStep === 4 ? "md:order-2" : "md:order-1"}`}>
              <div className="flex items-center justify-center bg-slate-100 rounded-2xl p-4">
                <img
                  src={stepImages[activeStep]}
                  className="max-h-[400px] w-auto object-contain rounded-xl"
                  alt={`Step ${activeStep}`}
                />
              </div>
            </div>

            {/* TEXT */}
            <div className={`${activeStep === 2 || activeStep === 4 ? "md:order-1" : "md:order-2"}`}>
              <h3 className="text-2xl font-bold mb-6 text-slate-900">
                {activeStep}. {stepTitles[activeStep]}
              </h3>

              <p className="text-lg text-slate-600 leading-relaxed">
                {activeStep === 1 && "A small amount of radiopharmaceutical is administered intravenously, introducing a radioactive tracer into the body. This tracer is designed to participate in normal physiological processes without altering them, allowing functional assessment at the molecular level. The choice of radiopharmaceutical depends on the target organ and clinical indication."}
                {activeStep === 2 && "Following injection, the radiotracer circulates through the bloodstream and selectively accumulates in specific tissues or organs based on their biological characteristics. This distribution reflects physiological processes such as perfusion, metabolism, and receptor binding, providing insight into organ function."}
                {activeStep === 3 && "Specialized imaging systems (gamma cameras, SPECT/PET scanners) detect the radiation emitted by the tracer within the body. The detected signals are converted into spatial data, generating images that represent the distribution and intensity of tracer uptake in different regions."}
                {activeStep === 4 && "The acquired data are processed using computational algorithms to reconstruct images and extract quantitative parameters. Clinicians interpret these results to evaluate organ function, detect abnormalities, and support diagnosis, staging, or treatment monitoring."}
              </p>
            </div>
          </div>
        </div>
      );
    })()}
  </>
)}
  </div>
</section>
     {/* Advanced Modalities */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-black mb-16 text-center  text-sky-700">
      Advanced Modalities
    </h2>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* PET */}
      <div
        onClick={() => setActiveCard("pet")}
        className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
      >
      <div className="bg-slate-100 p-4 flex justify-center">
   <img
  src="https://res.cloudinary.com/dbife6uva/image/upload/v1774231640/siemens-healthineers_mi_biograph_vision_pet_ct_scanner_hotspot_image_axfjq0.webp"
  alt="PET scanner"
  className="w-full h-auto object-contain rounded-2xl"
/>
  </div>


        <h3 className="text-2xl font-bold mb-4 text-slate-900">
          PET Scanning
        </h3>

        <p className="text-slate-500 mb-8">
          Positron Emission Tomography provides high-resolution 3D images of metabolic activity, essential in oncology and neurology.
        </p>

      </div>

      {/* SPECT */}
      <div
        onClick={() => setActiveCard("spect")}
        className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
      >
      <div className="bg-slate-100 p-4 flex justify-center">
   <img
  src="https://res.cloudinary.com/dbife6uva/image/upload/v1774231639/siemens-healthineers-mi-xspect-symbia-intevo-bold_sxs6dx.webp"
  alt="PET scanner"
  className="w-full h-auto object-contain rounded-2xl"
/>
  </div>


        <h3 className="text-2xl font-bold mb-4 text-slate-900">
          SPECT Imaging
        </h3>

        <p className="text-slate-500 mb-8">
          Single Photon Emission Computed Tomography uses gamma cameras to create layered cross-sections of organs like the heart and bones.
        </p>

      </div>

      {/* THERANOSTICS */}
      <div
        onClick={() => setActiveCard("thera")}
        className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
      >
       <div className="bg-slate-100 p-4 flex justify-center">
   <img
  src="https://res.cloudinary.com/dbife6uva/image/upload/v1774231640/radiopharmaceuticals-1140x640_qv6gum.jpg"
  alt="PET scanner"
  className="w-full h-auto object-contain rounded-2xl"
/>
  </div>



        <h3 className="text-2xl font-bold mb-4 text-slate-900">
          Theranostics
        </h3>

        <p className="text-slate-500 mb-8">
          A revolutionary combination of diagnostic imaging and therapeutic intervention using the same molecular pathway.
        </p>

    
      </div>

    </div>
  </div>

  {/*Combo Hien anh*/}
{activeCard && (
  <div
    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
    onClick={() => setActiveCard(null)}
  >
    <div
      className="w-[95%] max-w-5xl flex justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="relative inline-block">
        
        <img
  src={
    activeCard === "pet"
      ? "https://res.cloudinary.com/dbife6uva/image/upload/v1774236342/Picture1_jwsrd1.png"
      : activeCard === "ct"
      ? "https://res.cloudinary.com/dbife6uva/image/upload/v1774237000/your_ct_image.png"
      : activeCard === "thera"
      ? "https://res.cloudinary.com/dbife6uva/image/upload/v1774237115/Picture6_cybsnh.png"
      : "https://res.cloudinary.com/dbife6uva/image/upload/v1774236722/Picture3_ngoclc.png"
  }
  className="max-h-[500px] max-w-full object-contain rounded-xl block"
/>
        {/* X overlay  */}
        <button
          onClick={() => setActiveCard(null)}
          className="absolute top-0 right-0 translate-y-[-50%] translate-x-[50%]
           z-50 w-10 h-10 flex items-center justify-center 
           rounded-full bg-black/80 text-white hover:bg-black"
        >
          ✕
        </button>

      </div>
    </div>
  </div>
)}
</section>
      {/* Patient Experience */}
      <section className="py-24 bg-sky-300 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 items-center">
            {/* Left side - Description */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6 lg:col-span-1"
            >
              <h2 className="text-4xl font-bold mb-6">Chat with NucleUS</h2>
              <p className="text-xl leading-relaxed">
                Have questions about Nuclear Medicine or the NucleUS project? 
                Our AI assistant is here to help you understand the fundamentals, 
                applications, and latest developments in this fascinating field.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Learn about diagnostic imaging techniques</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Understand radionuclide therapy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Explore research opportunities</span>
                </div>
              </div>
            </motion.div>

            {/* Right side - Chat Interface */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              animate={isNewMessage ? { scale: [1, 1.02, 1] } : { scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-2xl lg:col-span-2"
            >
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Q&A Assistant
              </h3>
              
              {/* Chat Messages */}
              <div className="h-96 overflow-y-auto border rounded-lg p-4 mb-4 bg-slate-50 space-y-3">
                {chatMessages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`px-4 py-2 rounded-lg text-sm max-w-xs ${
                        msg.role === "user"
                          ? "bg-sky-500 text-white"
                          : "bg-white text-slate-900 border border-slate-200"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>

              {/* Suggested Questions */}
              <div className="mb-4">
                <p className="text-xs text-slate-500 mb-2 text-center">💡 Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="px-3 py-1.5 text-xs bg-sky-50 hover:bg-sky-100 text-sky-700 border border-sky-200 rounded-full transition-all duration-200 hover:scale-105 hover:shadow-sm"
                    >
                      {question}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Chat Input */}
              <div className="flex gap-2">
                <input
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Ask me anything about NucleUS..."
                  className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button
                  onClick={handleSend}
                  className="bg-sky-500 text-white px-4 py-2 rounded-lg hover:bg-sky-600 transition-colors flex items-center justify-center"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

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
  // ...existing code...
} from 'lucide-react';
import{ useState } from "react"
export default function About() {
  const [activeStep, setActiveStep] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
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
              <span className="text-slate-900 dark:text-white">Understanding</span> <span className="text-sky-500">Nuclear Medicine</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              <span className="text-slate-600 dark:text-slate-200">A deep dive into the science that sees within. Discover how molecular imaging and targeted therapies are revolutionizing modern healthcare.</span>
            </p>
            <div className="flex gap-4">
              <button 
  onClick={() => {
    document.getElementById("what-is").scrollIntoView({
      behavior: "smooth"
    });
  }}
  className="bg-sky-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-sky-200"
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
      className="w-full h-full object-cover opacity-100"
      src="https://res.cloudinary.com/dbife6uva/image/upload/v1773894838/Gemini_Generated_Image_uhtd18uhtd18uhtd_1_gs5bbc.png"
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
      <section id="what-is" className="pt-12 pb-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-bold mb-6 text-slate-900">What is Nuclear Medicine?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Nuclear medicine is a specialized area of radiology that uses very small amounts of radioactive materials, or radiopharmaceuticals, to examine organ function and structure.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Unlike traditional imaging, which primarily focuses on anatomy (how things look), nuclear medicine focuses on metabolic processes (how things work) at a molecular level.
              </p>
            </div>
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col gap-4">
                <FlaskConical size={30} className="text-sky-500" />
                <h3 className="text-xl font-bold text-slate-900">Radiopharmaceuticals content 1</h3>
                <p className="text-sm text-slate-500">Compounds that combine a radioactive isotope with a biological molecule to target specific organs or cells.</p>
              </div>
              <div className="p-8 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col gap-4">
                <Microscope size={40} className="text-sky-500" />
                <h3 className="text-xl font-bold text-slate-900">Molecular Imaging content 2</h3>
                <p className="text-sm text-slate-500">High-resolution visualization of biological processes within the living body at the cellular level.</p>
              </div>
              <div className="p-8 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col gap-4">
                <Activity size={40} className="text-sky-500" />
                <h3 className="text-xl font-bold text-slate-900">Functional Analysi content 3</h3>
                <p className="text-sm text-slate-500">Real-time monitoring of blood flow, oxygen intake, and sugar metabolism in the body's tissues.</p>
              </div>
              <div className="p-8 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col gap-4">
                <Settings size={40} className="text-sky-500" />
                <h3 className="text-xl font-bold text-slate-900">Tracer Technology content 4</h3>
                <p className="text-sm text-slate-500">Safe, non-invasive pathways to trace systemic activity without altering the body's natural function.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Pathway */}
<section className="py-20 bg-slate-100">
  <div className="max-w-7xl mx-auto px-6">
    
    <div className="text-center max-w-3xl mx-auto mb-20">
      <h2 className="text-5xl font-black mb-6 text-slate-900">
        Noi dung truot ngang
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
          Step 1: Tracer Injection
        </h4>
        <p className="text-sm text-slate-500">
          A tiny dose of radiopharmaceutical is administered intravenously.
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
          Step 2: Distribution
        </h4>
        <p className="text-sm text-slate-500">
          Waiting period while the tracer accumulates in the target tissue.
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
          Step 3: Scanning
        </h4>
        <p className="text-sm text-slate-500">
          Advanced detectors capture gamma rays emitted by the tracer.
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
          Step 4: Data Analysis
        </h4>
        <p className="text-sm text-slate-500">
          Computational models reconstruct the data into 3D images.
        </p>
      </div>
    </div>

   
   {/* WIDE BOX */}
{activeStep && (
  <div className="mt-20 bg-white border border-slate-200 rounded-3xl shadow-2xl p-10 max-w-7xl mx-auto">
    
    <div className="grid md:grid-cols-2 gap-12 items-center">
      
      {/* IMAGE */}
      <div className={`${activeStep === 2 || activeStep === 4 ? "md:order-2" : "md:order-1"}`}>
        <div className="flex items-center justify-center bg-slate-100 rounded-2xl p-4">
          <img
            src="https://res.cloudinary.com/dbife6uva/image/upload/v1773894838/Gemini_Generated_Image_uhtd18uhtd18uhtd_1_gs5bbc.png"
            className="max-h-[400px] w-auto object-contain rounded-xl"
          />
        </div>
      </div>

      {/* TEXT */}
      <div className={`${activeStep === 2 || activeStep === 4 ? "md:order-1" : "md:order-2"}`}>
        <h3 className="text-3xl font-bold mb-6 text-slate-900">
          Step {activeStep}
        </h3>

        <p className="text-lg text-slate-600 leading-relaxed">
          {activeStep === 1 && "A tiny dose of radiopharmaceutical is administered intravenously."}
          {activeStep === 2 && "Waiting period while the tracer accumulates in the target tissue."}
          {activeStep === 3 && "Advanced detectors capture gamma rays emitted by the tracer."}
          {activeStep === 4 && "Computational models reconstruct the data into 3D images."}
        </p>
      </div>

    </div>
  </div>
)}
  </div>
</section>
     {/* Advanced Modalities */}
<section className="py-24 bg-white">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-black mb-16 text-center text-slate-900">
      Advanced Modalities
    </h2>

    <div className="grid lg:grid-cols-3 gap-8">

      {/* PET */}
      <div
        onClick={() => setActiveCard("pet")}
        className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
      >
        <div className="bg-sky-50 p-4 inline-block rounded-2xl mb-8 group-hover:bg-sky-500 group-hover:text-white transition-colors">
          <Network size={40} className="text-sky-500 group-hover:text-white" />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-slate-900">
          PET Scanning
        </h3>

        <p className="text-slate-500 mb-8">
          Positron Emission Tomography provides high-resolution 3D images of metabolic activity, essential in oncology and neurology.
        </p>

        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ShieldCheck size={18} className="text-sky-500" /> Cancer Detection
          </li>
          <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ShieldCheck size={18} className="text-sky-500" /> Brain Disorders
          </li>
          <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ShieldCheck size={18} className="text-sky-500" /> Heart Viability
          </li>
        </ul>
      </div>

      {/* SPECT */}
      <div
        onClick={() => setActiveCard("spect")}
        className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
      >
        <div className="bg-sky-50 p-4 inline-block rounded-2xl mb-8 group-hover:bg-sky-500 group-hover:text-white transition-colors">
          <Camera size={40} className="text-sky-500 group-hover:text-white" />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-slate-900">
          SPECT Imaging
        </h3>

        <p className="text-slate-500 mb-8">
          Single Photon Emission Computed Tomography uses gamma cameras to create layered cross-sections of organs like the heart and bones.
        </p>

        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ShieldCheck size={18} className="text-sky-500" /> Bone Scans
          </li>
          <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ShieldCheck size={18} className="text-sky-500" /> Myocardial Perfusion
          </li>
          <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ShieldCheck size={18} className="text-sky-500" /> Organ Function
          </li>
        </ul>
      </div>

      {/* THERANOSTICS */}
      <div
        onClick={() => setActiveCard("thera")}
        className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group cursor-pointer"
      >
        <div className="bg-sky-50 p-4 inline-block rounded-2xl mb-8 group-hover:bg-sky-500 group-hover:text-white transition-colors">
          <Pill size={40} className="text-sky-500 group-hover:text-white" />
        </div>

        <h3 className="text-2xl font-bold mb-4 text-slate-900">
          Theranostics
        </h3>

        <p className="text-slate-500 mb-8">
          A revolutionary combination of diagnostic imaging and therapeutic intervention using the same molecular pathway.
        </p>

        <ul className="space-y-3">
          <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ShieldCheck size={18} className="text-sky-500" /> Targeted Radiation
          </li>
          <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ShieldCheck size={18} className="text-sky-500" /> Personalized Medicine
          </li>
          <li className="flex items-center gap-2 text-sm font-semibold text-slate-700">
            <ShieldCheck size={18} className="text-sky-500" /> Real-time Monitoring
          </li>
        </ul>
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
              ? "https://res.cloudinary.com/dbife6uva/image/upload/v1773894838/Gemini_Generated_Image_uhtd18uhtd18uhtd_1_gs5bbc.png"
              :"https://res.cloudinary.com/dbife6uva/image/upload/v1773894838/Gemini_Generated_Image_uhtd18uhtd18uhtd_1_gs5bbc.png"
          
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
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                alt="Doctor and Patient" 
                className="w-full h-full object-cover aspect-video" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBt3ITOqNmAuIWDwYTteyTA3VHYd-AgG2l_qia7SEuP8q8sl5ZrzWWz5qywR3ZifcLwn8ngASu0ztwXJ5bCnbyC7VIrdvo2VWFgeC4IXGKRZjKfX_xjHP9_jJQs0LJk2CQAdl6C1Z4NUkkQVpTNXp4NRtswA1MzJQlHotW-2dUn0EDKwF_NK5y_N1OvGeNPXSe2n0ySWSRbE9UxDmp83OS2Au8n119PdYcB8qOAYP127IHGHhqQ53i7eMjIGx5JsyBBSCj3TIvCir4"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h2 className="text-4xl font-black mb-8">Transforming the Patient Experience</h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <ShieldCheck size={40} className="opacity-80 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Non-Invasive Diagnostics</h4>
                    <p className="opacity-80">Avoid painful exploratory surgeries with precise molecular mapping from the outside in.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Scan size={40} className="opacity-80 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Early Detection</h4>
                    <p className="opacity-80">Identify diseases months or years before anatomical changes are visible on CT or MRI.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Target size={40} className="opacity-80 shrink-0" />
                  <div>
                    <h4 className="text-xl font-bold mb-2">Targeted Therapy</h4>
                    <p className="opacity-80">Destroy diseased cells specifically, minimizing damage to surrounding healthy tissue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

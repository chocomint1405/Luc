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
  Moon,
  Sun
} from 'lucide-react';

export default function About() {
  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <header className="relative overflow-hidden pt-16 pb-24 lg:pt-32 lg:pb-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="z-10"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-sky-100 text-sky-600 text-xs font-bold uppercase tracking-wider mb-6">Medical Awareness Project</span>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-8 text-slate-900">
              Understanding <span className="text-sky-500">Nuclear Medicine</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              A deep dive into the science that sees within. Discover how molecular imaging and targeted therapies are revolutionizing modern healthcare.
            </p>
            <div className="flex gap-4">
              <button className="bg-sky-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg shadow-sky-200">Get Started</button>
              <button className="border border-slate-300 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-colors">View Studies</button>
              <button
                className="bg-slate-900 text-white px-4 py-4 rounded-xl font-bold text-lg flex items-center gap-2 hover:bg-slate-700 transition-colors"
                onClick={() => {
                  document.body.classList.toggle('dark');
                  setTimeout(() => {
                    const btn = document.getElementById('theme-toggle-btn');
                    if (btn) {
                      const isDark = document.body.classList.contains('dark');
                      btn.innerHTML = isDark ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
                    }
                  }, 10);
                }}
                id="theme-toggle-btn"
                aria-label="Toggle theme"
                dangerouslySetInnerHTML={{
                  __html: document.body.classList.contains('dark')
                    ? '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z"/></svg>'
                    : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="orange" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
                }}
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-sky-500/20 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl aspect-square lg:aspect-video bg-slate-900 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/40 to-transparent"></div>
              <img 
                alt="Abstract medical tech visualization" 
                className="w-full h-full object-cover opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuUnYTSJ5vI7n0SpIaZxAtd7rh99IP0P8ANaOys7Vwl4RsKakMWwrfjLkhUNYCmjP52oS0uDGDIBcGzw3p4H8VxlLmZ_w3vxFDOoALuibSDyq-SXKQyw7L8kDE7V_CoGL38rjNkbbGMs5v9t6w58ZFhuoHum61qEOkaeXRbkeyCbQR3_7TehXbd9T_levqTJMdY134p7dSdlImZrTtnOfYddOmlXDTsq8km9X9ZJf02QQsctnkJXzkZXSeez6TgkmdzMOm0tnZ13o"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </header>

      {/* What is Nuclear Medicine */}
      <section className="py-24 bg-white">
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
                <FlaskConical size={40} className="text-sky-500" />
                <h3 className="text-xl font-bold text-slate-900">Radiopharmaceuticals</h3>
                <p className="text-sm text-slate-500">Compounds that combine a radioactive isotope with a biological molecule to target specific organs or cells.</p>
              </div>
              <div className="p-8 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col gap-4">
                <Microscope size={40} className="text-sky-500" />
                <h3 className="text-xl font-bold text-slate-900">Molecular Imaging</h3>
                <p className="text-sm text-slate-500">High-resolution visualization of biological processes within the living body at the cellular level.</p>
              </div>
              <div className="p-8 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col gap-4">
                <Activity size={40} className="text-sky-500" />
                <h3 className="text-xl font-bold text-slate-900">Functional Analysis</h3>
                <p className="text-sm text-slate-500">Real-time monitoring of blood flow, oxygen intake, and sugar metabolism in the body's tissues.</p>
              </div>
              <div className="p-8 rounded-2xl bg-sky-50 border border-sky-100 flex flex-col gap-4">
                <Settings size={40} className="text-sky-500" />
                <h3 className="text-xl font-bold text-slate-900">Tracer Technology</h3>
                <p className="text-sm text-slate-500">Safe, non-invasive pathways to trace systemic activity without altering the body's natural function.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Pathway */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl font-black mb-6 text-slate-900">The Clinical Pathway</h2>
            <p className="text-lg text-slate-600">A sophisticated process from molecular targeting to actionable medical insights.</p>
          </div>
          <div className="relative grid md:grid-cols-4 gap-8">
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-200 -z-0"></div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-sky-500 text-white flex items-center justify-center mb-8 shadow-xl shadow-sky-200">
                <Syringe size={40} />
              </div>
              <h4 className="font-bold text-lg mb-2 text-slate-900">Tracer Injection</h4>
              <p className="text-sm text-slate-500">A tiny dose of radiopharmaceutical is administered intravenously.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-sky-500 text-sky-500 flex items-center justify-center mb-8">
                <Hourglass size={40} />
              </div>
              <h4 className="font-bold text-lg mb-2 text-slate-900">Distribution</h4>
              <p className="text-sm text-slate-500">Waiting period while the tracer accumulates in the target tissue.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-sky-500 text-sky-500 flex items-center justify-center mb-8">
                <Scan size={40} />
              </div>
              <h4 className="font-bold text-lg mb-2 text-slate-900">Scanning</h4>
              <p className="text-sm text-slate-500">Advanced detectors capture gamma rays emitted by the tracer.</p>
            </div>
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-sky-500 text-sky-500 flex items-center justify-center mb-8">
                <BarChart3 size={40} />
              </div>
              <h4 className="font-bold text-lg mb-2 text-slate-900">Data Analysis</h4>
              <p className="text-sm text-slate-500">Computational models reconstruct the data into 3D images.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Modalities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-black mb-16 text-center text-slate-900">Advanced Modalities</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-2xl transition-shadow group">
              <div className="bg-sky-50 p-4 inline-block rounded-2xl mb-8 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                <Network size={40} className="text-sky-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">PET Scanning</h3>
              <p className="text-slate-500 mb-8">Positron Emission Tomography provides high-resolution 3D images of metabolic activity, essential in oncology and neurology.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><ShieldCheck size={18} className="text-sky-500" /> Cancer Detection</li>
                <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><ShieldCheck size={18} className="text-sky-500" /> Brain Disorders</li>
                <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><ShieldCheck size={18} className="text-sky-500" /> Heart Viability</li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-2xl transition-shadow group">
              <div className="bg-sky-50 p-4 inline-block rounded-2xl mb-8 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                <Camera size={40} className="text-sky-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">SPECT Imaging</h3>
              <p className="text-slate-500 mb-8">Single Photon Emission Computed Tomography uses gamma cameras to create layered cross-sections of organs like the heart and bones.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><ShieldCheck size={18} className="text-sky-500" /> Bone Scans</li>
                <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><ShieldCheck size={18} className="text-sky-500" /> Myocardial Perfusion</li>
                <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><ShieldCheck size={18} className="text-sky-500" /> Organ Function</li>
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-10 border border-slate-200 hover:shadow-2xl transition-shadow group">
              <div className="bg-sky-50 p-4 inline-block rounded-2xl mb-8 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                <Pill size={40} className="text-sky-500 group-hover:text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Theranostics</h3>
              <p className="text-slate-500 mb-8">A revolutionary combination of diagnostic imaging and therapeutic intervention using the same molecular pathway.</p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><ShieldCheck size={18} className="text-sky-500" /> Targeted Radiation</li>
                <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><ShieldCheck size={18} className="text-sky-500" /> Personalized Medicine</li>
                <li className="flex items-center gap-2 text-sm font-semibold text-slate-700"><ShieldCheck size={18} className="text-sky-500" /> Real-time Monitoring</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Experience */}
      <section className="py-24 bg-sky-500 text-white">
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

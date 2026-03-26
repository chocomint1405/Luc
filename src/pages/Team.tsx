import { Trophy } from 'lucide-react';
import { Globe, Calendar, Users } from "lucide-react";
 import { Rocket } from "lucide-react";
 import { useRef, useState } from "react";
const mentor = { name: 'Lê Hoàng Minh', role: 'Supervisor', img:'https://res.cloudinary.com/dbife6uva/image/upload/v1774238380/Screenshot_2026-03-23_105904_rlho8j.png'};

const teamMembers = [
  { name: 'Vương Uy Lực', role: 'Leader', img: 'https://res.cloudinary.com/dbife6uva/image/upload/c_crop,g_north_west,h_1720,w_1707,y_58/3764cab05e19d0478908_zbzdrn.jpg' },
  { name: 'Lê Tuấn Anh', role: 'Medical Advisor', img: 'https://res.cloudinary.com/dbife6uva/image/upload/v1774173246/IMG_9045_gfqyty.jpg' },
  { name: 'Nguyễn Văn Thiêm', role: 'Web designer', img: 'https://res.cloudinary.com/dbife6uva/image/upload/v1774174502/IMG_20240511_163740_2_bseyct.jpg' },
  { name: 'Nguyễn Minh Thành', role: 'Content designer', img: 'https://res.cloudinary.com/dbife6uva/image/upload/c_crop,g_north_west,h_133,w_150/22260037_Nguyen_Minh_Thanh_e0q9py.jpg' },
  { name: 'Ngô Nguyễn Thành Đạt', role: 'Web designer', img: 'https://res.cloudinary.com/dbife6uva/image/upload/v1774238014/IMG_7031_oj8ot7.jpg' },
];
function ZoomImage() {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [zoom, setZoom] = useState(false);

  return (
    <div
      className="w-full overflow-visible rounded-3xl cursor-zoom-in relative z-10"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setPos({ x, y });
        setZoom(true);
      }}
      onMouseLeave={() => {
        setZoom(false);
        // ← KHÔNG reset pos ở đây nữa
      }}
    >
      <img
        src="https://res.cloudinary.com/dbife6uva/image/upload/v1774560264/display_vgq0j0.jpg"
        className="w-full h-auto transition-transform duration-500 ease-out"
        style={{
          transform: zoom ? `scale(3.5)` : `scale(1)`,
          //  transformOrigin giữ nguyên vị trí chuột cuối cùng,
          //   không reset về 50% 50% để tránh giật
          transformOrigin: `${pos.x}% ${pos.y}%`,
        }}
      />
    </div>
  );
}
export default function Team() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-4 px-4 md:px-10 lg:px-20 min-h-[calc(100vh-128px)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sky-500 uppercase text-xs tracking-[0.35em] mb-2">TEAM</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">The NucleUS Team</h1>
         <p className="mt-2 text-slate-600 max-w-lg mx-auto text-center">We turn advanced nuclear science into practical innovations that improve healthcare for communities around the world</p>
        </div>

        {/* Line 1 */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center rounded-2xl bg-white p-4 border border-slate-200 shadow-sm w-48">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-sky-200 mb-3">
              <img alt={mentor.name} src={mentor.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 text-center">{mentor.name}</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-sky-500 font-semibold text-center mt-1">{mentor.role}</p>
          </div>
        </div>

        {/*Line 2*/}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center rounded-2xl bg-white p-4 border border-slate-200 shadow-sm">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-sky-200 mb-3">
                <img alt={member.name} src={member.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 text-center">{member.name}</h3>
              <p className="text-[10px] uppercase tracking-[0.2em] text-sky-500 font-semibold text-center mt-1">{member.role}</p>
            </div>
          ))}
        </div>
<div className="mt-20 ">

  <div className="grid md:grid-cols-[3fr_2fr] gap-16 items-center px-4 md:px-10 lg:px-20">
  {/* LEFT: IMAGE */}
  
<div className="w-full max-w-xl mx-auto">
  <ZoomImage />
</div>

  {/* RIGHT: TEXT */}
  <div>
    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
      Our team Brochure
    </h2>

    <p className="text-slate-600 leading-relaxed mb-4">
     NucleUS combines an educational platform and community forum to raise awareness
      about nuclear medicine, providing accessible knowledge and 
     interactive discussions for better understanding of modern healthcare.are.
    </p>

    <ul className="space-y-2 text-slate-600">
      <li>✔ Simplified knowledge about nuclear medicine</li>
      <li>✔ Community-based scientific exchange</li>
      <li>✔ Real-world medical applications made clear</li>
    </ul>
  </div>
  </div>


        <div className="mt-12 rounded-3xl bg-white border border-sky-200 p-6 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-sky-200 p-4 rounded-2xl">
             
<Rocket size={28} className="text-sky-500" />
            </div>
            <div className="max-w-2xl">
  <h3 className="font-medium text-base text-slate-700 leading-snug max-w-2xl">
  Global HackAtom is a global innovation initiative where students collaborate to develop forward-thinking solutions in atomic technology.
</h3>
  <div className="flex flex-wrap items-center gap-5 mt-3 text-sm text-slate-500">
    <span className="flex items-center gap-1">
      <Globe size={14} className="text-sky-500" />
      <span className="font-semibold text-slate-900">17</span> Countries
    </span>

    <span>•</span>

    <span className="flex items-center gap-1">
      <Calendar size={14} className="text-sky-500" />
      <span className="font-semibold text-slate-900">30+</span> Events
    </span>

    <span>•</span>

    <span className="flex items-center gap-1">
      <Users size={14} className="text-sky-500" />
      <span className="font-semibold text-slate-900">1200+</span> Students
    </span>
  </div>
</div>
          </div>
          <a
  href="https://www.hackatom.energy/en/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-slate-900 hover:bg-slate-700 transition text-white px-7 py-2 rounded-lg text-sm font-bold inline-block"
>
 Explore HackAtom
</a>
        </div>
      </div>
      
{/* end */}
</div>
</div>
    
  );
}

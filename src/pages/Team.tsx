import { Trophy } from 'lucide-react';

const mentor = { name: 'Lê Hoàng Minh', role: 'Mentor', img:'https://upload.wikimedia.org/wikipedia/commons/9/92/Quark_structure_proton.svg'};

const teamMembers = [
  { name: 'Vương Uy Lực', role: 'Leader', img: 'https://picsum.photos/seed/chibi-luc/200/200' },
  { name: 'Lê Tuấn Anh', role: 'Medical Advisor', img: 'https://picsum.photos/seed/chibi-anh/200/200' },
  { name: 'Nguyễn Văn Thiêm', role: 'Web designer', img: 'https://picsum.photos/seed/chibi-thiem/200/200' },
  { name: 'Nguyễn Minh Thành', role: 'Content designer', img: 'https://picsum.photos/seed/chibi-thanh/200/200' },
  { name: 'Ngô Nguyễn Thành Đạt', role: 'Web designer', img: 'https://picsum.photos/seed/chibi-dat/200/200' },
];

export default function Team() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 py-24 px-4 md:px-10 lg:px-20 min-h-[calc(100vh-128px)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sky-500 uppercase text-xs tracking-[0.35em] mb-2">TEAM</p>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900">The NucleUS Team</h1>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">A dedicated multidisciplinary team building accessible nuclear medicine education and solutions.</p>
        </div>

        {/* Hàng 1 - Mentor đứng giữa */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-col items-center rounded-2xl bg-white p-4 border border-slate-200 shadow-sm w-48">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-sky-200 mb-3">
              <img alt={mentor.name} src={mentor.img} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <h3 className="font-bold text-sm text-slate-900 text-center">{mentor.name}</h3>
            <p className="text-[10px] uppercase tracking-[0.2em] text-sky-500 font-semibold text-center mt-1">{mentor.role}</p>
          </div>
        </div>

        {/* Hàng 2 - 5 thành viên còn lại */}
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

        <div className="mt-12 rounded-3xl bg-white border border-sky-200 p-6 flex flex-col md:flex-row gap-6 items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-sky-100 p-3 rounded-2xl">
              <Trophy size={28} className="text-sky-500" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Award</p>
              <h3 className="font-bold text-lg text-slate-900">Global Health Hackathon Recognition</h3>
            </div>
          </div>
          <button className="bg-slate-900 text-white px-5 py-2 rounded-lg text-sm font-bold">Learn More</button>
        </div>
      </div>
    </div>
  );
}
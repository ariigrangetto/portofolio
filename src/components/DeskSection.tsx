// import { Laptop, Monitor, Mic, Keyboard } from 'lucide-react';
// import { deskGear } from '../data/portfolioData';
// import { Reveal } from './Reveal';

// interface DeskSectionProps {
//   lang: 'ES' | 'EN';
// }

// export const DeskSection = ({ lang }: DeskSectionProps) => {
//   const iconMap: Record<string, React.ReactNode> = {
//     Computer: <Laptop className="w-5 h-5 text-[#8B7FD4]" />,
//     Display: <Monitor className="w-5 h-5 text-[#8B7FD4]" />,
//     'Audio & Mic': <Mic className="w-5 h-5 text-[#8B7FD4]" />,
//     Peripherals: <Keyboard className="w-5 h-5 text-[#8B7FD4]" />,
//   };

//   return (
//     <section id="desk" className="border-t border-[#232130] px-5 md:px-12 py-14 md:py-[72px]">
//       <Reveal direction="up" delay={50}>
//         <div className="max-w-5xl mx-auto mb-8 md:mb-10">
//           <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-[#8B7FD4] mb-3 font-semibold">
//             WORKSPACE & GEAR
//           </div>
//           <h2 className="font-display text-[28px] md:text-[36px] text-white font-medium">
//             {lang === 'ES' ? 'Mi Setup & Equipo' : 'My Desk & Workspace'}
//           </h2>
//           <p className="text-sm text-[#9d9ab3] mt-2 max-w-xl">
//             {lang === 'ES'
//               ? 'Las herramientas de hardware y software que utilizo todos los días para diseñar y programar.'
//               : 'The hardware and software tools I use every day to design and code.'}
//           </p>
//         </div>
//       </Reveal>

//       <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
//         {deskGear.map((item, index) => (
//           <Reveal key={item.id} direction="up" delay={100 + index * 60}>
//             <div className="rounded-xl border border-[#232130] bg-[#14131e] p-5 hover:border-[#3c3954] transition-all group h-full">
//               <div className="flex items-center justify-between mb-3">
//                 <span className="font-mono text-[10px] uppercase tracking-wider text-[#8B7FD4] bg-[#8B7FD4]/10 px-2.5 py-1 rounded-md border border-[#8B7FD4]/20">
//                   {item.category}
//                 </span>
//                 <div className="p-2 rounded-lg bg-black/40 text-[#8B7FD4] group-hover:scale-110 transition-transform">
//                   {iconMap[item.category] || <Laptop className="w-5 h-5 text-[#8B7FD4]" />}
//                 </div>
//               </div>
//               <h3 className="font-display text-[17px] text-white font-medium mb-1">
//                 {item.name}
//               </h3>
//               <p className="text-[13px] text-[#9d9ab3] leading-relaxed">
//                 {item.description}
//               </p>
//             </div>
//           </Reveal>
//         ))}
//       </div>
//     </section>
//   );
// };

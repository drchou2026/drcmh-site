import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { DOCTOR_PROFILE, SCHEDULE } from './constants';

export default function ClinicInfo() {
  return (
    <section id="門診資訊" className="section-clinic">
       {/* 裝飾線條 */}
       <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F9F8F6] -skew-x-12 translate-x-20 z-0"></div>

       <div className="container mx-auto px-6 relative z-10">
          <SectionHeading en="Clinic" zh="門診資訊" />

          <div className="flex flex-col lg:flex-row gap-12">
             {/* 左側：診所詳情 */}
             <div className="lg:w-1/2">
                <div className="clinic-card">
                   <div className="inline-block px-4 py-1.5 bg-[#2C3E50] text-white text-xs font-bold tracking-wider rounded-md mb-6">
                      CURRENT LOCATION
                   </div>
                   <h3 className="text-3xl font-serif font-bold text-[#2C3E50] mb-2">{DOCTOR_PROFILE.currentClinic}</h3>
                   <p className="text-[var(--color-accent)] font-medium mb-8">院長 | {DOCTOR_PROFILE.name} 醫師</p>

                   <div className="space-y-6">
                      <div className="flex items-start gap-4">
                         <MapPin className="text-gray-400 mt-1" />
                         <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Address</p>
                            <p className="text-lg text-gray-700 font-medium">{DOCTOR_PROFILE.clinicAddress}</p>
                            <a href="#" className="text-sm text-[var(--color-accent)] underline mt-1 block hover:text-[#2C3E50]">在 Google Maps 上查看</a>
                         </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                         <Phone className="text-gray-400 mt-1" />
                         <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Phone</p>
                            <p className="text-lg text-gray-700 font-medium">{DOCTOR_PROFILE.clinicPhone}</p>
                         </div>
                      </div>

                      <div className="flex items-start gap-4">
                         <Mail className="text-gray-400 mt-1" />
                         <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Email</p>
                            <p className="text-lg text-gray-700 font-medium">{DOCTOR_PROFILE.email}</p>
                         </div>
                      </div>
                   </div>

                   <div className="mt-10 pt-8 border-t border-gray-100">
                      <a href={DOCTOR_PROFILE.bookingLink} className="btn-accent block w-full text-center py-4 bg-[var(--color-accent)] text-white font-bold rounded-xl shadow-lg">
                         前往線上掛號
                      </a>
                   </div>
                </div>
             </div>

             {/* 右側：門診時間表 */}
             <div className="lg:w-1/2 flex flex-col justify-center">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#2C3E50]">
                   <Clock size={20} className="text-[var(--color-accent)]"/>
                   門診時刻表
                </h3>
                
                <div className="bg-[#F9F8F6] rounded-2xl p-6 md:p-8">
                   <div className="grid grid-cols-4 gap-4 mb-4 text-center">
                      <div className="text-gray-400 font-bold text-sm"></div>
                      <div className="text-gray-500 font-bold text-sm bg-white py-2 rounded-lg shadow-sm">早</div>
                      <div className="text-gray-500 font-bold text-sm bg-white py-2 rounded-lg shadow-sm">午</div>
                      <div className="text-gray-500 font-bold text-sm bg-white py-2 rounded-lg shadow-sm">晚</div>
                   </div>
                   
                   <div className="space-y-3">
                      {SCHEDULE.map((s, i) => (
                         <div key={i} className="grid grid-cols-4 gap-4 items-center text-center">
                            <div className="font-bold text-[#2C3E50] text-sm">{s.day}</div>
                            <div className={`schedule-cell ${s.morning ? 'schedule-active' : 'schedule-inactive'}`}>
                               {s.morning ? '●' : '-'}
                            </div>
                            <div className={`schedule-cell ${s.afternoon ? 'schedule-active' : 'schedule-inactive'}`}>
                               {s.afternoon ? '●' : '-'}
                            </div>
                            <div className={`schedule-cell ${s.evening ? 'schedule-active' : 'schedule-inactive'}`}>
                               {s.evening ? '●' : '-'}
                            </div>
                         </div>
                      ))}
                   </div>
                   <p className="text-xs text-gray-400 mt-6 text-center">
                      * 實際看診時間請以診所當月公告為主，建議提前預約。
                   </p>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
}
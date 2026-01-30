import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import { DOCTOR_PROFILE } from './constants';

export default function Footer() {
  return (
    <footer className="section-footer">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
           <div className="md:col-span-2">
              <h3 className="text-2xl font-serif font-bold mb-4">Dr. Chou Urology</h3>
              <p className="text-gray-400 leading-relaxed max-w-sm">
                 周孟翰醫師致力於提供隱私、專業且溫暖的泌尿科診療服務。
                 我們相信，好的治療始於良好的醫病溝通。
              </p>
           </div>
           
           <div>
              <h4 className="font-bold mb-6 text-[var(--color-accent)]">QUICK LINKS</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                 {["關於醫師", "主治專長", "衛教專欄", "門診資訊"].map(item => (
                    <li key={item}><a href={`#${item}`} className="hover:text-white transition-colors">{item}</a></li>
                 ))}
              </ul>
           </div>
  
           <div>
              <h4 className="font-bold mb-6 text-[var(--color-accent)]">CONTACT</h4>
              <ul className="space-y-3 text-sm text-gray-300">
                 <li className="flex items-center gap-2">
                    <MapPin size={16}/> {DOCTOR_PROFILE.currentClinic}
                 </li>
                 <li className="pl-6 text-xs text-gray-500">{DOCTOR_PROFILE.clinicAddress}</li>
                 <li className="flex items-center gap-2 mt-4">
                    <Mail size={16}/> {DOCTOR_PROFILE.email}
                 </li>
              </ul>
           </div>
        </div>
  
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
           <p>&copy; 2026 Dr. Chou Meng-Han. All rights reserved.</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
           </div>
        </div>
      </div>
    </footer>
  );
}
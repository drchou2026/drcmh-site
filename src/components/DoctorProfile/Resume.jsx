import React from 'react';
import { BookOpen, Award, CheckCircle } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { EXPERIENCE, ASSOCIATIONS, EDUCATION, CERTIFICATIONS } from './constants';

export default function Resume() {
  return (
    <section id="關於醫師" className="section-resume">
      <div className="container mx-auto px-6">
        <SectionHeading en="About" zh="學經歷與認證" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* 左欄：經歷 */}
          <div className="space-y-12">
             <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                   <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                   專業經歷
                </h3>
                <ul className="space-y-4 border-l border-gray-100 pl-6 ml-1">
                   {EXPERIENCE.map((exp, i) => (
                      <li key={i} className="resume-list-item">
                         <span className="resume-dot"></span>
                         {exp}
                      </li>
                   ))}
                </ul>
             </div>
             
             <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                   <span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span>
                   專業醫學會
                </h3>
                <ul className="space-y-2 pl-6">
                   {ASSOCIATIONS.map((assoc, i) => (
                      <li key={i} className="text-gray-600 flex items-center gap-2">
                         <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                         {assoc}
                      </li>
                   ))}
                </ul>
             </div>
          </div>

          {/* 右欄：學歷與證照 */}
          <div className="space-y-12">
             <div className="bg-[#F9F8F6] p-8 rounded-3xl">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                   <BookOpen size={20} className="text-[var(--color-accent)]" />
                   學歷
                </h3>
                <ul className="space-y-4">
                   {EDUCATION.map((edu, i) => (
                      <li key={i} className="flex flex-col">
                         <span className="font-bold text-gray-800 text-lg">{edu}</span>
                      </li>
                   ))}
                </ul>
             </div>

             <div>
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                   <Award size={20} className="text-[var(--color-accent)]" />
                   專科證照
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   {CERTIFICATIONS.map((cert, i) => (
                      <div key={i} className="border border-gray-100 p-4 rounded-xl flex items-center gap-3 hover:border-[var(--color-accent)] transition-colors group bg-white shadow-sm">
                         <div className="w-8 h-8 rounded-full bg-[#F0EBE3] flex items-center justify-center text-gray-500 group-hover:bg-[var(--color-accent)] group-hover:text-white transition-colors">
                            <CheckCircle size={14} />
                         </div>
                         <span className="text-sm font-medium text-gray-700">{cert}</span>
                      </div>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
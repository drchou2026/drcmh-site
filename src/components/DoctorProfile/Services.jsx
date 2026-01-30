import React from 'react';
import SectionHeading from './SectionHeading';
import { SERVICE_CATEGORIES } from './constants';

export default function Services() {
  return (
    <section id="主治專長" className="section-services">
      <div className="container mx-auto px-6">
        <SectionHeading en="Expertise" zh="主治項目" />
        <p className="text-gray-500 mb-12 max-w-2xl text-lg">
          快速對照您的症狀與需求，了解我們如何提供專業診斷與個人化治療方案。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="service-card group">
               <div className="service-icon-box group-hover:bg-[var(--color-accent)] group-hover:text-white">
                  {/* 因為 constants.js 傳入的是 Component 本身，所以這裡直接當標籤使用 */}
                  <cat.icon size={24} />
               </div>
               <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">{cat.title}</h3>
               <ul className="space-y-3">
                 {cat.items.map((item, i) => (
                   <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-[var(--color-accent)] flex-shrink-0"></span>
                      {item}
                   </li>
                 ))}
               </ul>
            </div>
          ))}
          
          {/* Call to Action Card */}
          <div className="bg-[var(--color-primary)] p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center text-white">
             <h3 className="text-xl font-bold mb-4">不確定自己的症狀？</h3>
             <p className="text-gray-300 text-sm mb-8 leading-relaxed">
               歡迎來到診間，讓我為您進行詳細的評估與解說。
             </p>
             <a href="#門診資訊" className="btn-accent w-full hover:bg-white hover:text-[#2C3E50]">
               預約諮詢
             </a>
          </div>
        </div>
      </div>
    </section>
  );
}
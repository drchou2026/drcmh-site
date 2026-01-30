import React from 'react';
import { ArrowRight, User, Activity } from 'lucide-react';
import { DOCTOR_PROFILE } from './constants';

export default function Hero() {
  return (
    <header id="hero" className="section-hero">
      <div className="hero-watermark">UROLOGY</div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="w-full md:w-5/12 pt-10 md:pt-0 z-20">
          <div className="hero-tag">
             <span className="text-xs font-bold tracking-widest uppercase">PERSONAL BRAND</span>
          </div>
          
          <h1 className="hero-title">
            {DOCTOR_PROFILE.name}<br/>
            <span className="text-3xl md:text-4xl block mt-2 text-gray-500">醫師</span>
          </h1>
          
          <div className="w-20 h-1 mb-8 bg-[var(--color-accent)]"></div>
          
          <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
            {DOCTOR_PROFILE.fullTitle}
          </h2>

          <p className="text-gray-600 leading-loose mb-10 max-w-md text-justify">
            {DOCTOR_PROFILE.slogan}。<br/>
            {DOCTOR_PROFILE.intro}
          </p>

          <div className="flex gap-4">
            <a href="#門診資訊" className="btn-primary group">
               <span className="font-bold tracking-wide">預約門診</span>
               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-7/12 relative mt-12 md:mt-0 h-[60vh] md:h-[80vh]">
           <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-center md:justify-end">
              <div className="relative w-full max-w-lg md:max-w-xl aspect-[3/4] md:aspect-[4/5]">
                 <div className="hero-image-wrapper">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-serif opacity-30">
                      <User size={120} />
                    </div>
                    {/* Floating Card */}
                    <div className="absolute bottom-10 left-0 md:-left-12 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border-l-4 border-[#C5A065] max-w-xs">
                        <div className="flex items-start gap-4">
                           <div className="p-2 bg-[#F9F8F6] rounded-full text-[#C5A065]">
                              <Activity size={24} />
                           </div>
                           <div>
                              <h4 className="font-bold text-gray-800 mb-1">精準微創</h4>
                              <p className="text-xs text-gray-500 leading-relaxed">
                                 攝護腺水蒸氣消融 (Rezūm) <br/>
                                 UroLift 拉提手術
                              </p>
                           </div>
                        </div>
                     </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}
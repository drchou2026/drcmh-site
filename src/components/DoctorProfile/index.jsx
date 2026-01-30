import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Resume from './Resume';
import Services from './Services';
import ClinicInfo from './ClinicInfo';
import Blog from './Blog';
import Footer from './Footer';

// 注意：Resume, Services 等其他組件也請依照上述邏輯拆分
// 為了篇幅，這裡假設你已經建立了對應的檔案並將原本 App.jsx 的內容搬過去

export default function DoctorProfile() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#C5A065] selection:text-white bg-[var(--color-bg)]">
      <Navbar />
      <Hero />
      <Resume />
      <Services />
      <ClinicInfo />
      <Blog />
      <Footer />
    </div>
  );
}
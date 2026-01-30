import React, { useState, useEffect } from 'react';
import { 
  Menu, X, MapPin, Phone, Clock, ChevronRight, 
  User, Activity, Shield, Heart, FileText, ArrowRight,
  Stethoscope, Mail, BookOpen, Award, CheckCircle
} from 'lucide-react';

// --- v3.0 配色系統 (Bewell Inspired - 優雅暖色調) ---
const COLORS = {
  bg: '#F9F8F6',           // 溫暖米白背景 (Warm Off-White)
  surface: '#FFFFFF',      // 純白區塊
  primary: '#2C3E50',      // 鐵灰深藍 (沈穩專業)
  accent: '#C5A065',       // 質感金棕 (Premium Gold/Bronze) - 畫龍點睛
  secondaryText: '#64748B',// 柔和灰字
  highlight: '#F0EBE3',    // 淺卡其色塊
};

// --- 資料來源 ---
const DOCTOR_PROFILE = {
  name: "周孟翰",
  title: "院長",
  fullTitle: "新店高美泌尿科診所 院長",
  email: "d10822201@gmail.com",
  slogan: "下半身的守護者",
  intro: "治療沒有絕對的好壞，只有最適合您的選擇。透過充分的醫病溝通，我們共同找出符合您需求的治療選項。",
  currentClinic: "新店高美泌尿科診所", 
  clinicAddress: "新北市新店區二十張路5號1樓",
  clinicPhone: "(診所電話建置中)",
  bookingLink: "#" 
};

// 來自 PPT 的學經歷
const EXPERIENCE = [
  "三軍總醫院外科住院醫師、部總醫師",
  "三軍總醫院泌尿科住院醫師、總醫師",
  "國軍花蓮總醫院泌尿科主治醫師",
  "三軍總醫院急診部主治醫師",
  "台北榮民總醫院桃園分院泌尿科兼任主治醫師",
  "台北門診中心泌尿科主治醫師",
  "三軍總醫院泌尿科主治醫師",
  "教育部部定講師",
  "國防醫學大學外科學科專任講師",
];

const ASSOCIATIONS = [
  "台灣泌尿科醫學會(TUA)會員",
  "台灣男性學暨性醫學醫學會(TAASM)會員",
  "台灣尿失禁防治協會(TCS)會員"
];

const EDUCATION = [
  "國防醫學院醫學系學士",
  "台灣科技大學應用科技研究所博士候選人"
];

const CERTIFICATIONS = [
  "台灣外科醫學會專科醫師",
  "台灣泌尿科醫學會專科醫師",
  "台灣泌尿科達文西機械手臂手術專科醫師",
  "性傳染病友善門診專家醫師"
];

// 來自 Word 檔的主治項目 (五大類) - 修改為傳遞 Icon Component
const SERVICE_CATEGORIES = [
  {
    title: "排尿困擾與攝護腺",
    items: ["頻尿、夜尿、急尿", "排尿困難、尿流變細", "尿失禁、漏尿", "攝護腺肥大", "攝護腺炎"],
    icon: Activity
  },
  {
    title: "私密健康與性傳染病",
    items: ["私密處贅生物(菜花)", "性病篩檢與治療", "HIV預防性投藥", "HPV/帶狀皰疹疫苗", "雷射菜花手術", "包皮手術"],
    icon: Shield
  },
  {
    title: "微創治療與手術",
    items: ["攝護腺拉提手術(UroLift)", "攝護腺水蒸氣消融(Rezūm)", "攝護腺雷射手術", "尿失禁微創手術", "微創雷射結紮(舒眠麻醉)"],
    icon: Stethoscope
  },
  {
    title: "男性性功能與荷爾蒙",
    items: ["勃起功能障礙", "早洩、射精控制困擾", "男性更年期評估", "男性不孕症諮詢"],
    icon: Heart
  },
  {
    title: "一般泌尿疾病",
    items: ["泌尿道感染", "尿路結石", "血尿評估", "疝氣", "陰囊水腫", "精索靜脈曲張"],
    icon: User
  }
];

// 來自 Word 檔的文章
const ARTICLES = [
  { 
    id: 1, 
    title: "明明才上過，怎麼又要去？搞懂攝護腺肥大", 
    desc: "「醫師，我開會都要偷偷計算時間，擔心尿急離席很尷尬...」這不是單純的老化，而是您的膀胱在發出求救訊號。攝護腺就像一圈逐漸收緊的套環，擠壓尿道，讓排尿通道變窄...",
    tags: ["攝護腺肥大", "夜尿", "微創手術"],
    date: "2026.01.20" 
  },
  { 
    id: 2, 
    title: "微創拉開手術 (UroLift) 是什麼？", 
    desc: "不切除組織，手術時間短、恢復快，且能完整保留射精功能。適合希望快速恢復正常生活的您。",
    tags: ["手術介紹", "UroLift"],
    date: "2026.01.15" 
  },
  { 
    id: 3, 
    title: "私密處長東西？淺談菜花與雷射治療", 
    desc: "發現私密處有不明凸起物別驚慌，透過精準的雷射治療與疫苗防護，找回健康與自信。",
    tags: ["性傳染病", "雷射治療"],
    date: "2026.01.10" 
  },
];

// 門診表
const SCHEDULE = [
  { day: "週一",  morning: true, afternoon: false, evening: true },
  { day: "週二",  morning: false, afternoon: true, evening: false },
  { day: "週三",  morning: true, afternoon: false, evening: true },
  { day: "週四",  morning: false, afternoon: true, evening: true },
  { day: "週五",  morning: true, afternoon: true, evening: false },
  { day: "週六",  morning: true, afternoon: false, evening: false },
];

// --- UI Components ---

const SectionHeading = ({ en, zh }) => (
  <div className="mb-12 text-center md:text-left">
    <h3 className="text-sm font-bold tracking-[0.2em] uppercase mb-2" style={{ color: COLORS.accent }}>
      {en}
    </h3>
    <h2 className="text-3xl md:text-4xl font-serif font-medium" style={{ color: COLORS.primary }}>
      {zh}
    </h2>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex flex-col group">
          <span className="text-xl md:text-2xl font-serif font-bold tracking-wide" style={{ color: COLORS.primary }}>
            Dr. Chou
          </span>
          <span className="text-xs tracking-widest uppercase" style={{ color: COLORS.accent }}>
            UROLOGY CLINIC
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {["關於醫師", "主治專長", "衛教專欄", "門診資訊"].map((item) => (
            <a key={item} href={`#${item}`} className="text-sm font-medium tracking-wide text-gray-600 hover:text-[#C5A065] transition-colors">
              {item}
            </a>
          ))}
          <a href="#門診資訊" className="px-6 py-2.5 rounded-full text-white text-sm font-bold tracking-wide shadow-md transition-transform hover:-translate-y-0.5" style={{ backgroundColor: COLORS.accent }}>
            預約掛號
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 gap-6 text-center shadow-2xl">
            {["關於醫師", "主治專長", "衛教專欄", "門診資訊"].map((item) => (
              <a key={item} href={`#${item}`} onClick={() => setIsOpen(false)} className="text-2xl font-serif text-gray-800 py-2 border-b border-gray-100">
                {item}
              </a>
            ))}
            <a href="#門診資訊" onClick={() => setIsOpen(false)} className="mt-4 px-8 py-4 rounded-full text-white font-bold" style={{ backgroundColor: COLORS.accent }}>
              立即預約
            </a>
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 text-gray-500">
              <X size={32} />
            </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <header className="relative min-h-screen flex items-center pt-20 overflow-hidden" style={{ backgroundColor: COLORS.bg }}>
    {/* 裝飾背景字 */}
    <div className="absolute top-1/3 left-[-5%] text-[15vw] font-serif font-bold text-gray-200 opacity-20 pointer-events-none select-none leading-none">
      UROLOGY
    </div>

    <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center">
      {/* 左側：文字區 */}
      <div className="w-full md:w-5/12 pt-10 md:pt-0 z-20">
        <div className="inline-block px-3 py-1 mb-6 border border-[#C5A065] rounded-full">
           <span className="text-xs font-bold tracking-widest uppercase" style={{ color: COLORS.accent }}>
             PERSONAL BRAND
           </span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight mb-6" style={{ color: COLORS.primary }}>
          周孟翰<br/>
          <span className="text-3xl md:text-4xl block mt-2 text-gray-500">醫師</span>
        </h1>
        
        <div className="w-20 h-1 mb-8" style={{ backgroundColor: COLORS.accent }}></div>
        
        <h2 className="text-xl md:text-2xl font-medium mb-6 text-gray-700">
          {DOCTOR_PROFILE.fullTitle}
        </h2>

        <p className="text-gray-600 leading-loose mb-10 max-w-md text-justify">
          {DOCTOR_PROFILE.slogan}。<br/>
          {DOCTOR_PROFILE.intro}
        </p>

        <div className="flex gap-4">
          <a href="#門診資訊" className="group flex items-center gap-3 px-8 py-4 bg-[#2C3E50] text-white rounded-full transition-all hover:bg-[#34495E] hover:shadow-lg">
             <span className="font-bold tracking-wide">預約門診</span>
             <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
          </a>
        </div>
      </div>

      {/* 右側：醫師形象照模擬 */}
      <div className="w-full md:w-7/12 relative mt-12 md:mt-0 h-[60vh] md:h-[80vh]">
         <div className="absolute bottom-0 right-0 w-full h-full flex items-end justify-center md:justify-end">
            <div className="relative w-full max-w-lg md:max-w-xl aspect-[3/4] md:aspect-[4/5]">
               {/* 圖片 Placeholder */}
               <div className="w-full h-full bg-gradient-to-t from-[#D6D3CD] to-[#EBE9E4] rounded-t-[10rem] shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-serif opacity-30">
                    <User size={120} />
                  </div>
                  {/* 模擬浮動元素 */}
                  <div className="absolute bottom-10 left-0 md:-left-12 bg-white/90 backdrop-blur-md p-6 rounded-xl shadow-xl border-l-4 border-[#C5A065] max-w-xs transition-opacity duration-700">
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

const Resume = () => (
  <section id="關於醫師" className="py-24 bg-white">
    <div className="container mx-auto px-6">
      <SectionHeading en="About" zh="學經歷與認證" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* 左欄：經歷 */}
        <div className="space-y-12">
           <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                 <span className="w-2 h-2 rounded-full bg-[#C5A065]"></span>
                 專業經歷
              </h3>
              <ul className="space-y-4 border-l border-gray-100 pl-6 ml-1">
                 {EXPERIENCE.map((exp, i) => (
                    <li key={i} className="text-gray-600 leading-relaxed relative">
                       <span className="absolute -left-[31px] top-2 w-3 h-3 bg-[#F0EBE3] rounded-full border-2 border-white"></span>
                       {exp}
                    </li>
                 ))}
              </ul>
           </div>
           
           <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 text-gray-800">
                 <span className="w-2 h-2 rounded-full bg-[#C5A065]"></span>
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
                 <BookOpen size={20} className="text-[#C5A065]" />
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
                 <Award size={20} className="text-[#C5A065]" />
                 專科證照
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {CERTIFICATIONS.map((cert, i) => (
                    <div key={i} className="border border-gray-100 p-4 rounded-xl flex items-center gap-3 hover:border-[#C5A065] transition-colors group bg-white shadow-sm">
                       <div className="w-8 h-8 rounded-full bg-[#F0EBE3] flex items-center justify-center text-gray-500 group-hover:bg-[#C5A065] group-hover:text-white transition-colors">
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

const Services = () => (
  <section id="主治專長" className="py-24" style={{ backgroundColor: COLORS.bg }}>
    <div className="container mx-auto px-6">
      <SectionHeading en="Expertise" zh="主治項目" />
      <p className="text-gray-500 mb-12 max-w-2xl text-lg">
        快速對照您的症狀與需求，了解我們如何提供專業診斷與個人化治療方案。
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICE_CATEGORIES.map((cat, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-transparent hover:border-[#C5A065]/20">
             <div className="w-12 h-12 rounded-xl bg-[#F0EBE3] flex items-center justify-center text-[#2C3E50] mb-6 group-hover:bg-[#C5A065] group-hover:text-white transition-colors">
                {/* 渲染傳入的 Icon Component */}
                <cat.icon size={24} />
             </div>
             <h3 className="text-xl font-bold mb-4 text-[#2C3E50]">{cat.title}</h3>
             <ul className="space-y-3">
               {cat.items.map((item, i) => (
                 <li key={i} className="text-sm text-gray-500 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#C5A065] flex-shrink-0"></span>
                    {item}
                 </li>
               ))}
             </ul>
          </div>
        ))}
        
        {/* Call to Action Card */}
        <div className="bg-[#2C3E50] p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center text-white">
           <h3 className="text-xl font-bold mb-4">不確定自己的症狀？</h3>
           <p className="text-gray-300 text-sm mb-8 leading-relaxed">
             歡迎來到診間，讓我為您進行詳細的評估與解說。
           </p>
           <a href="#門診資訊" className="px-6 py-3 bg-[#C5A065] rounded-full text-sm font-bold hover:bg-white hover:text-[#2C3E50] transition-colors w-full">
             預約諮詢
           </a>
        </div>
      </div>
    </div>
  </section>
);

const ClinicInfo = () => (
  <section id="門診資訊" className="py-24 bg-white relative overflow-hidden">
     {/* 裝飾線條 */}
     <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F9F8F6] -skew-x-12 translate-x-20 z-0"></div>

     <div className="container mx-auto px-6 relative z-10">
        <SectionHeading en="Clinic" zh="門診資訊" />

        <div className="flex flex-col lg:flex-row gap-12">
           {/* 左側：診所詳情 */}
           <div className="lg:w-1/2">
              <div className="bg-white border border-gray-100 shadow-xl rounded-3xl p-8 md:p-12 relative z-10">
                 <div className="inline-block px-4 py-1.5 bg-[#2C3E50] text-white text-xs font-bold tracking-wider rounded-md mb-6">
                    CURRENT LOCATION
                 </div>
                 <h3 className="text-3xl font-serif font-bold text-[#2C3E50] mb-2">{DOCTOR_PROFILE.currentClinic}</h3>
                 <p className="text-[#C5A065] font-medium mb-8">院長 | {DOCTOR_PROFILE.name} 醫師</p>

                 <div className="space-y-6">
                    <div className="flex items-start gap-4">
                       <MapPin className="text-gray-400 mt-1" />
                       <div>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Address</p>
                          <p className="text-lg text-gray-700 font-medium">{DOCTOR_PROFILE.clinicAddress}</p>
                          <a href="#" className="text-sm text-[#C5A065] underline mt-1 block hover:text-[#2C3E50]">在 Google Maps 上查看</a>
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
                    <a href={DOCTOR_PROFILE.bookingLink} className="block w-full text-center py-4 bg-[#C5A065] hover:bg-[#B08D55] text-white font-bold rounded-xl transition-colors shadow-lg">
                       前往線上掛號
                    </a>
                 </div>
              </div>
           </div>

           {/* 右側：門診時間表 */}
           <div className="lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-[#2C3E50]">
                 <Clock size={20} className="text-[#C5A065]"/>
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
                          <div className={`text-sm py-2 rounded-lg ${s.morning ? 'text-[#C5A065] font-bold bg-[#C5A065]/10' : 'text-gray-300'}`}>
                             {s.morning ? '●' : '-'}
                          </div>
                          <div className={`text-sm py-2 rounded-lg ${s.afternoon ? 'text-[#C5A065] font-bold bg-[#C5A065]/10' : 'text-gray-300'}`}>
                             {s.afternoon ? '●' : '-'}
                          </div>
                          <div className={`text-sm py-2 rounded-lg ${s.evening ? 'text-[#C5A065] font-bold bg-[#C5A065]/10' : 'text-gray-300'}`}>
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

const Blog = () => (
  <section id="衛教專欄" className="py-24" style={{ backgroundColor: COLORS.bg }}>
    <div className="container mx-auto px-6">
      <div className="flex justify-between items-end mb-12">
         <SectionHeading en="Articles" zh="衛教文章" />
         <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold text-[#C5A065] hover:text-[#2C3E50] transition-colors pb-12">
            View All <ArrowRight size={16} />
         </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
         {ARTICLES.map((article) => (
            <article key={article.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col h-full">
               <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-100">
                     <FileText size={40} className="opacity-20" />
                  </div>
                  <div className="absolute top-4 left-4 flex gap-2">
                     {article.tags.slice(0, 1).map(tag => (
                        <span key={tag} className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-[#2C3E50] rounded-full">
                           {tag}
                        </span>
                     ))}
                  </div>
               </div>
               
               <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-[#C5A065] mb-3 block">{article.date}</span>
                  <h3 className="text-xl font-bold text-[#2C3E50] mb-4 leading-snug group-hover:text-[#C5A065] transition-colors">
                     {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                     {article.desc}
                  </p>
                  <div className="pt-6 border-t border-gray-100 flex items-center text-sm font-bold text-[#2C3E50] group-hover:gap-2 transition-all">
                     閱讀全文 <ArrowRight size={16} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
               </div>
            </article>
         ))}
      </div>
      
      <div className="mt-12 text-center md:hidden">
         <a href="#" className="inline-block px-8 py-3 border border-gray-300 rounded-full text-gray-600 font-bold">
            查看更多文章
         </a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#2C3E50] text-white py-16 border-t border-white/5">
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
            <h4 className="font-bold mb-6 text-[#C5A065]">QUICK LINKS</h4>
            <ul className="space-y-3 text-sm text-gray-300">
               {["關於醫師", "主治專長", "衛教專欄", "門診資訊"].map(item => (
                  <li key={item}><a href={`#${item}`} className="hover:text-white transition-colors">{item}</a></li>
               ))}
            </ul>
         </div>

         <div>
            <h4 className="font-bold mb-6 text-[#C5A065]">CONTACT</h4>
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

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-[#C5A065] selection:text-white" style={{ backgroundColor: COLORS.bg }}>
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
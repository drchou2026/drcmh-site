import { Activity, Shield, Stethoscope, Heart, User } from 'lucide-react';

export const DOCTOR_PROFILE = {
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

export const EXPERIENCE = [
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

export const ASSOCIATIONS = [
  "台灣泌尿科醫學會(TUA)會員",
  "台灣男性學暨性醫學醫學會(TAASM)會員",
  "台灣尿失禁防治協會(TCS)會員"
];

export const EDUCATION = [
  "國防醫學院醫學系學士",
  "台灣科技大學應用科技研究所博士候選人"
];

export const CERTIFICATIONS = [
  "台灣外科醫學會專科醫師",
  "台灣泌尿科醫學會專科醫師",
  "台灣泌尿科達文西機械手臂手術專科醫師",
  "性傳染病友善門診專家醫師"
];

export const SERVICE_CATEGORIES = [
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

export const ARTICLES = [
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

export const SCHEDULE = [
  { day: "週一",  morning: true, afternoon: false, evening: true },
  { day: "週二",  morning: false, afternoon: true, evening: false },
  { day: "週三",  morning: true, afternoon: false, evening: true },
  { day: "週四",  morning: false, afternoon: true, evening: true },
  { day: "週五",  morning: true, afternoon: true, evening: false },
  { day: "週六",  morning: true, afternoon: false, evening: false },
];
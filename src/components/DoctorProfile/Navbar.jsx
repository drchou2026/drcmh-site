import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar-container ${scrolled ? 'scrolled' : ''}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex flex-col group">
          <span className="text-xl md:text-2xl font-serif font-bold tracking-wide text-[var(--color-primary)]">
            Dr. Chou
          </span>
          <span className="text-xs tracking-widest uppercase text-[var(--color-accent)]">
            UROLOGY CLINIC
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {["關於醫師", "主治專長", "衛教專欄", "門診資訊"].map((item) => (
            <a key={item} href={`#${item}`} className="nav-link">
              {item}
            </a>
          ))}
          <a href="#門診資訊" className="btn-accent hover:-translate-y-0.5">
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
           <a href="#門診資訊" onClick={() => setIsOpen(false)} className="mt-4 btn-accent inline-block">
             立即預約
           </a>
           <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 p-2 text-gray-500">
             <X size={32} />
           </button>
        </div>
      )}
    </nav>
  );
}
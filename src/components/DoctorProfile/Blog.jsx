import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { ARTICLES } from './constants';

export default function Blog() {
  return (
    <section id="衛教專欄" className="section-blog">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
           <SectionHeading en="Articles" zh="衛教文章" />
           <a href="#" className="hidden md:flex items-center gap-2 text-sm font-bold text-[var(--color-accent)] hover:text-[#2C3E50] transition-colors pb-12">
             View All <ArrowRight size={16} />
           </a>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {ARTICLES.map((article) => (
              <article key={article.id} className="blog-card group">
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
                    <span className="text-xs font-bold text-[var(--color-accent)] mb-3 block">{article.date}</span>
                    <h3 className="text-xl font-bold text-[#2C3E50] mb-4 leading-snug group-hover:text-[var(--color-accent)] transition-colors">
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
}
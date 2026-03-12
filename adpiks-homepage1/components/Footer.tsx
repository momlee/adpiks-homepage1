
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/5 py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-black tracking-tighter flex items-center gap-2 mb-6">
              ADPIKS <span className="text-lg font-bold text-zinc-400 font-sans tracking-normal">l 애드픽스</span>
            </div>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
              ADPiks는 데이터와 창의성을 결합하여 브랜드의 새로운 미래를 설계하는 디지털 크리에이티브 에이전시입니다.
            </p>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-zinc-400 uppercase text-xs tracking-widest">Company</h5>
            <ul className="space-y-4 text-zinc-500 text-sm font-medium">
              <li><a href="http://www.adpiks.co.kr/about" target="_blank" rel="noopener noreferrer" className="hover:text-white">About Us</a></li>
              <li><a href="http://www.adpiks.co.kr/service" target="_blank" rel="noopener noreferrer" className="hover:text-white">Services</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-bold mb-6 text-zinc-400 uppercase text-xs tracking-widest">Office</h5>
            <p className="text-zinc-500 text-sm leading-relaxed">
              서울특별시 금천구 가산디지털 1로 1216호 <br />
              maketing@adpiks.co.kr <br />
              010-2135-1917
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-center gap-4 text-xs text-zinc-600 font-bold uppercase tracking-widest text-center">
          <p>© 2024 ADPIKS. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

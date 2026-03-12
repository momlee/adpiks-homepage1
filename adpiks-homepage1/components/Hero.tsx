
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background decoration */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="inline-block py-1 px-3 mb-6 border border-white/20 rounded-full text-xs font-bold tracking-widest text-zinc-400 uppercase">
          Beyond Pixels, We are ADPiks
        </span>
        <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-[1.1] mb-8">
          데이터와 크리에이티브의 <br />
          <span className="gradient-text">완벽한 조화</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          ADPiks는 단순한 광고 대행사를 넘어, 디지털 시대의 복잡한 비즈니스 문제를 
          가장 세련된 방식으로 해결하는 전략적 파트너입니다.
        </p>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

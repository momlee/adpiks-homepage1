
import React from 'react';

const ServiceCard: React.FC<{ title: string; desc: string; icon: React.ReactNode }> = ({ title, desc, icon }) => (
  <div className="glass p-10 rounded-[2.5rem] hover:bg-white/5 transition-all group border border-white/5">
    <div className="w-14 h-14 bg-blue-600/10 rounded-2xl flex items-center justify-center text-blue-400 mb-8 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h4 className="text-2xl font-black mb-4 group-hover:text-blue-400 transition-colors">{title}</h4>
    <p className="text-zinc-400 leading-relaxed font-light">{desc}</p>
  </div>
);

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-black leading-tight">디지털 광고시장에서 주도적인 역할을 합니다</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard 
            title="Performance Marketing" 
            desc="캠페인 진행 시 KPI 달성을 위한 최적의 제안과 진행에 대한 기획업무를 합니다."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>}
          />
          <ServiceCard 
            title="Affiliate Marketing" 
            desc="제휴마케팅에 대한 업무와 광고의 종류와 특성에 따라 마케팅 에이전시 업무를 합니다."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
          />
          <ServiceCard 
            title="AD Marketing Solution" 
            desc="데이터 마이닝 기술로 디테일한 패널분석이 가능하며 AI 엔진으로 구매 의사가 있는 사용자를 분석해 맞춤형 상품 혹은 쇼핑몰을 추천합니다."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553 2.276A1 1 0 0121 13.17V17a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v2.184a1 1 0 01-.447.894L15 10z" /></svg>}
          />
          <ServiceCard 
            title="Platform Development" 
            desc="저효율의 매체 트래픽과 높은 트래킹 비용등을 개선하여, Advertiser의 실질적 효율을 보장합니다."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
          />
          <ServiceCard 
            title="AD Tech Platform" 
            desc="유저 행태 분석을 통해 데이터가 누적되면 맞춤형 광고의 정확성도 높이며 서비스 향상을 통해 자연스럽게 광고주 재방문율 및 체류 시간을 증대합니다."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
          />
          <ServiceCard 
            title="Expert Group" 
            desc="다양한 경험과 기술을 기반으로 모바일 솔루션 개발, 제공하고 있습니다."
            icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;

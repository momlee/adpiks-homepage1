
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '2021', reach: 400, conv: 240 },
  { name: '2022', reach: 700, conv: 398 },
  { name: '2023', reach: 980, conv: 510 },
  { name: '2024', reach: 1400, conv: 820 },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-zinc-950 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Who we are</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              디지털 세상을 향한 <br />
              우리의 진정성
            </h3>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                ADPiks는 변화무쌍한 디지털 시장 환경 속에서 고객사의 브랜드 가치를 극대화하기 위해 탄생했습니다.
                단순히 노출량을 늘리는 광고가 아닌, 타겟의 마음을 움직이는 스토리를 만듭니다.
              </p>
              <p>
                우리는 최신 AI 알고리즘과 창의적인 기획력을 결합하여, 
                누구도 흉내 낼 수 없는 압도적인 퍼포먼스를 제공합니다. 
                그것이 바로 ADPiks가 시장을 리드하는 방식입니다.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-black text-white mb-2">350+</div>
                <div className="text-zinc-500 uppercase text-xs font-bold">Successful Projects</div>
              </div>
              <div>
                <div className="text-4xl font-black text-white mb-2">98%</div>
                <div className="text-zinc-500 uppercase text-xs font-bold">Client Retention</div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <div className="w-32 h-32 bg-blue-500 rounded-full"></div>
            </div>
            <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Performance Growth Analysis
            </h4>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <XAxis dataKey="name" stroke="#52525b" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#18181b', border: '1px solid #3f3f46', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                  <Bar dataKey="reach" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="conv" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="mt-6 text-zinc-500 text-sm text-center">
              * ADPiks 솔루션 도입 후 평균 브랜드 노출 및 전환 증가 추이 (시뮬레이션 데이터)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

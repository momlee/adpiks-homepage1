
import React, { useState } from 'react';
import { getMarketingInsight } from '../services/gemini';

const AIStrategist: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [goals, setGoals] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !goals) return;
    setLoading(true);
    const insight = await getMarketingInsight(industry, goals);
    setResult(insight);
    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[3rem] shadow-2xl">
      {!result ? (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-500 uppercase">산업 분야 (Industry)</label>
              <input 
                type="text" 
                placeholder="예: 코스메틱, IT 솔루션, 카페 프랜차이즈"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-zinc-500 uppercase">마케팅 목표 (Goals)</label>
              <input 
                type="text" 
                placeholder="예: 브랜드 인지도 상승, 매출 2배 달성"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-blue-500 transition-colors"
                value={goals}
                onChange={(e) => setGoals(e.target.value)}
              />
            </div>
          </div>
          <button 
            disabled={loading}
            className="w-full py-5 gradient-blue rounded-2xl font-black text-lg hover:scale-[1.02] transition-all disabled:opacity-50"
          >
            {loading ? 'AI 전략가가 분석 중입니다...' : '무료 AI 인사이트 받기'}
          </button>
        </form>
      ) : (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="flex justify-between items-start mb-8">
            <h4 className="text-2xl font-black text-blue-400">Analysis Result</h4>
            <button 
              onClick={() => setResult('')}
              className="text-zinc-500 hover:text-white transition-colors"
            >
              다시 하기
            </button>
          </div>
          <div className="prose prose-invert max-w-none text-zinc-300 leading-relaxed whitespace-pre-wrap font-light">
            {result}
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-zinc-500 text-sm">전문 컨설턴트와 더 깊은 이야기를 나누고 싶으신가요?</p>
            <button className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-blue-500 hover:text-white transition-all">
              전문가와 상담 예약
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIStrategist;

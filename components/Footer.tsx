import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA in Footer */}
        <div className="relative mb-20 group">
          {/* Gradient Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-tpi via-openai to-tpi-light rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 blur-xl"></div>
          
          {/* Main Card */}
          <div className="relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-10 md:p-16 overflow-hidden">
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `
                linear-gradient(to right, #fff 1px, transparent 1px),
                linear-gradient(to bottom, #fff 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}></div>
            
            {/* Floating Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-tpi/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-openai/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0 text-center md:text-left max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  準備好讓企業生產力飛躍了嗎？
                </h2>
                <p className="text-gray-300 text-lg">
                  立即預約專業顧問諮詢，開啟 AI 轉型之旅。
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <button className="group/btn relative bg-white text-gray-900 px-8 py-4 rounded-xl font-bold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20">
                  <span className="relative z-10">立即聯繫我們</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-tpi/10 to-openai/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                </button>
                <button className="relative px-8 py-4 rounded-xl font-medium overflow-hidden group/btn2 transition-all duration-300 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-r from-tpi/20 to-openai/20 backdrop-blur-sm border border-gray-600/50 group-hover/btn2:border-gray-500 transition-colors rounded-xl"></div>
                  <span className="relative z-10 text-white">下載服務簡介</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 lg:gap-16 border-t border-gray-800 pt-16">
          <div>
            <div className="flex items-center text-white mb-6">
              <span className="font-bold text-xl tracking-tight">TPIsoftware</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              提供AI企業級軟體解決方案，與世界級科技大廠深度合作，為台灣企業導入最先進、最安全的前端技術
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 text-white">解決方案</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-tpi transition-colors">ChatGPT Enterprise</a></li>
              <li><a href="#" className="hover:text-tpi transition-colors">AI企業場景應用</a></li>
              <li><a href="#" className="hover:text-tpi transition-colors">AI企業治理策略</a></li>
              <li><a href="#" className="hover:text-tpi transition-colors">AI Agent經營策略</a></li>
            </ul>
          </div>

          <div>
             <h4 className="font-bold mb-6 text-white">關於我們</h4>
             <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-tpi transition-colors">公司簡介</a></li>
                <li><a href="#" className="hover:text-tpi transition-colors">成功案例</a></li>
                <li><a href="#" className="hover:text-tpi transition-colors">最新消息</a></li>
                <li><a href="#" className="hover:text-tpi transition-colors">聯絡我們</a></li>
             </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
           <p>Copyright © {new Date().getFullYear()} TPIsoftware. All rights reserved.</p>
           <p className="mt-2">ChatGPT is a trademark of OpenAI.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
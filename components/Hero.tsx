import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { ChevronRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-20 left-10 w-96 h-96 bg-tpi/10 rounded-full blur-3xl mix-blend-multiply animate-pulse" />
          <div className="absolute top-40 right-10 w-96 h-96 bg-openai/10 rounded-full blur-3xl mix-blend-multiply animate-pulse delay-1000" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-tpi/5 border border-tpi/20 text-tpi text-xs sm:text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tpi opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tpi"></span>
              </span>
              原廠認證・在地專業服務
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.1] mb-6">
              Enterprise AI,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-tpi via-tpi-light to-openai">
                Empowered by TPIsoftware.
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              結合 ChatGPT Enterprise 的強大能力與昕力資訊的專業顧問服務，打造安全、高效的企業智腦。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="group">
                諮詢 TPI 顧問團隊
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                了解解決方案
              </Button>
            </div>
          </motion.div>

          {/* Visual Content - Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
             <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-tpi/20 bg-white border border-gray-100">
                {/* Simulated Browser Header */}
                <div className="h-8 bg-gray-50 border-b border-gray-200 flex items-center px-4 space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* Simulated Content */}
                <div className="p-6 flex flex-col h-full bg-white">
                   <div className="flex items-start space-x-4 mb-6">
                      <div className="flex-shrink-0">
                         <img 
                           src="/images/chatgpt-icon.png.png" 
                           alt="ChatGPT" 
                           className="w-8 h-8 object-contain"
                           style={{ mixBlendMode: 'multiply' }}
                         />
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg rounded-tl-none text-sm text-gray-700 shadow-sm flex-1">
                        <p>您好！我是您的企業 AI 助手。我已準備好協助您分析最新的銷售數據，並根據 TPI 的安全協議處理您的請求。</p>
                      </div>
                   </div>
                   <div className="flex items-start space-x-4 mb-6 flex-row-reverse space-x-reverse">
                      <div className="w-8 h-8 rounded-full bg-tpi flex items-center justify-center flex-shrink-0 text-white font-bold text-xs">User</div>
                      <div className="bg-tpi/10 p-4 rounded-lg rounded-tr-none text-sm text-gray-800 flex-1">
                        <p>請幫我總結 Q3 的財務報表，並標記出異常支出的項目。</p>
                      </div>
                   </div>
                   {/* Abstract Data Viz */}
                   <div className="mt-auto mb-12 p-4 border border-gray-100 rounded-lg">
                      <div className="h-2 w-1/3 bg-gray-200 rounded mb-2"></div>
                      <div className="flex space-x-2 items-end h-24">
                        <div className="w-full bg-tpi/20 rounded h-[60%]"></div>
                        <div className="w-full bg-tpi/40 rounded h-[80%]"></div>
                        <div className="w-full bg-tpi/60 rounded h-[40%]"></div>
                        <div className="w-full bg-tpi rounded h-[90%]"></div>
                      </div>
                   </div>
                </div>
                
                {/* Watermark Overlay */}
                <div className="absolute bottom-6 right-6 flex items-center space-x-2 bg-white/80 backdrop-blur px-3 py-1.5 rounded-full shadow-lg border border-gray-100">
                   <ShieldCheck className="w-4 h-4 text-tpi" />
                   <span className="text-xs font-semibold text-gray-600">Enterprise Protected</span>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
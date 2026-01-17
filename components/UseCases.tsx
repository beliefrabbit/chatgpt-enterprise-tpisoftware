import React, { useState } from 'react';
import { USE_CASES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const currentCase = USE_CASES[activeTab];

  return (
    <section id="use-cases" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            賦能所有團隊，提升任務成效
          </h2>
          <p className="text-gray-600 text-lg">
            從程式開發到市場行銷，ChatGPT Enterprise 都能無縫融入既有工作流。
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {USE_CASES.map((useCase, index) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                  activeTab === index
                    ? 'bg-gray-900 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`}
              >
                {useCase.name}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left: Image/Visual */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 sm:p-12 flex items-center justify-center">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={currentCase.image}
                    alt={currentCase.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="p-8 sm:p-12 flex flex-col justify-center">
                <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  {currentCase.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {currentCase.description}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default UseCases;
import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
           <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-tpi">TPIsoftware</span> 導入與顧問服務
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            我們提供全方位的落地支援，確保AI導入貼合您的策略目標
          </p>
        </div>

        <div className="space-y-24">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${isEven ? '' : 'lg:flex-row-reverse'}`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative group rounded-3xl overflow-hidden shadow-2xl shadow-gray-200 border border-white">
                    <div className="absolute inset-0 bg-tpi/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="flex items-center space-x-3 text-tpi font-medium">
                     {service.icon}
                     <span className="uppercase tracking-wider text-sm">Service 0{index + 1}</span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 pt-4">
                    {service.features?.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-tpi mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
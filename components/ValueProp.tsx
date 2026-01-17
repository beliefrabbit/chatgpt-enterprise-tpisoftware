import React from 'react';
import { motion } from 'framer-motion';
import { VALUE_PROPS } from '../constants';

const ValueProp: React.FC = () => {
  return (
    <section id="value-prop" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900">專為企業打造的安全AI</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PROPS.map((prop, index) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`p-8 rounded-3xl bg-neutral-50 border border-gray-100 shadow-glass hover:shadow-xl transition-all duration-300 flex flex-col items-start ${prop.colSpan}`}
            >
              <div className="mb-6 p-4 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                {prop.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">{prop.title}</h4>
              <span className="text-sm font-medium text-tpi mb-4 block">{prop.subtext}</span>
              <p className="text-gray-600 leading-relaxed">
                {prop.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
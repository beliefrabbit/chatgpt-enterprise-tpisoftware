import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Services from './components/Services';
import UseCases from './components/UseCases';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900 selection:bg-tpi selection:text-white">
      <Header />
      <main>
        <Hero />
        <ValueProp />
        <Services />
        <UseCases />
      </main>
      <Footer />
    </div>
  );
};

export default App;
import React from 'react';

const Hero = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="/images/stock/photo-1635805737707-575885ab0820.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold">Find a tutor</h1>
          <p className="py-6">
            Are you struggling to keep up with your studies? Do you need help
            understanding complex concepts or preparing for exams? or Are you a
            parent looking for a tutor that can help your kid?
          </p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;

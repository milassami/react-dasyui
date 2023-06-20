import React from 'react';
import './app.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Hw from './components/how.js';
import Wh from './components/why.js';
import JoinUs from './components/Join.js';
import Testimo from './components/Testimonials.js';
import Footer from './components/footer.js';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hw />
      <div className="flex flex-col w-full bg-slate-800">
        <div className="divider"></div>
      </div>
      <Wh />
      <JoinUs />
      <Testimo />
      <Footer />
    </div>
  );
}
export default App;

import React from 'react';
import './app.css';
import Navbar from './components/Navbar.js';
import Hero from './components/Hero.js';
import Hw from './components/how.js';
import Wh from './components/why.js';
import Join from './components/Join.js';
import Footer from './components/footer.js';
function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hw />
      <Wh />
      <JoinUs />
      <Footer />
    </div>
  );
}
export default App;

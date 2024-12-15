import React from 'react';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Courses from './components/Courses';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <Header />
      <main>
        <About />
        <Services />
        <Courses />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
}

export default App;
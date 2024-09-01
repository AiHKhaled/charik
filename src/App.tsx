import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Blogs from './components/Blogs';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <main className="bg-rose-100/50">
        <Hero />
        <Features />
        <Demo />
        <Blogs />
      </main>
      <Footer />
    </div>
  );
}

export default App;

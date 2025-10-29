import Hero from './components/Hero';
import Services from './components/Services';
import Workflow from './components/Workflow';
import CTAFooter from './components/CTAFooter';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Services />
      <Workflow />
      <CTAFooter />
    </div>
  );
}

export default App;

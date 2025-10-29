import Spline from '@splinetool/react-spline';
import { Rocket, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/xVcGsBa0crFDHR-t/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
      </div>

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center min-h-[90vh] text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/5 ring-1 ring-white/10 px-4 py-2 mb-6 backdrop-blur">
          <Rocket className="w-4 h-4 text-purple-300" />
          <span className="text-sm text-white/80">Automate and scale your YouTube growth</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-tight max-w-4xl">
          Build, Automate, and Scale Your YouTube Channel with AI-Powered Systems
        </h1>
        <p className="mt-5 text-white/70 text-lg max-w-2xl">
          From research to publishing, streamline your entire YouTube workflow. Save hours, reduce costs, and grow faster with automation.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#services" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-purple-600 hover:bg-purple-500 transition shadow-lg shadow-purple-600/20">
            <Rocket className="w-5 h-5" />
            <span>Explore Automation</span>
          </a>
          <a href="#workflow" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 transition ring-1 ring-white/10">
            <PlayCircle className="w-5 h-5" />
            <span>See How It Works</span>
          </a>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-left w-full max-w-4xl">
          <Stat label="Time Saved" value="8h+/wk" />
          <Stat label="Cost Reduction" value="-45%" />
          <Stat label="Upload Velocity" value="3x" />
          <Stat label="Automation Rate" value="80%" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 ring-1 ring-white/10">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-white/60 text-sm">{label}</div>
    </div>
  );
}

import { Bot, Settings, Repeat, Shield } from 'lucide-react';

const items = [
  {
    icon: Bot,
    title: 'Research & Scripting',
    desc: 'Automated topic research, title ideation, and script drafting tuned to your niche and voice.',
    pills: ['Keyword Mining', 'Title Variants', 'AI Script Drafts']
  },
  {
    icon: Settings,
    title: 'Editing & Repurposing',
    desc: 'Auto-generate shorts, chapters, and hooks from long-form content using smart templates.',
    pills: ['Auto Chapters', 'Shorts Generator', 'Hook Library']
  },
  {
    icon: Repeat,
    title: 'Publishing & Scheduling',
    desc: 'Bulk upload, dynamic descriptions, and cross-platform scheduling in one place.',
    pills: ['Bulk Upload', 'Smart Descriptions', 'Cross-Post']
  },
  {
    icon: Shield,
    title: 'Compliance & Consistency',
    desc: 'Brand-safe automation with controls for style, pacing, credits, and rights management.',
    pills: ['Brand Guardrails', 'Attribution', 'Usage Rights']
  }
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-gradient-to-b from-black to-[#07070a]">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Automation that compounds</h2>
          <p className="mt-3 text-white/70">Plug in modules only where you need them. Start simple, scale when youre ready.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ icon: Icon, title, desc, pills }) {
  return (
    <div className="group p-6 rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
      <div className="w-11 h-11 rounded-lg bg-purple-600/20 text-purple-300 flex items-center justify-center group-hover:bg-purple-600/30 mb-4">
        <Icon className="w-5 h-5" />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {pills.map((p) => (
          <span key={p} className="text-xs px-2.5 py-1 rounded-full bg-white/10 ring-1 ring-white/10 text-white/80">{p}</span>
        ))}
      </div>
    </div>
  );
}

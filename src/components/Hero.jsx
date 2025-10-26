import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

function DemoChatbot() {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hey! I\'m Nova, your AI support agent.' },
    { from: 'bot', text: 'Ask me about pricing, integrations, or set up a live demo.' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    setMessages((m) => [...m, { from: 'user', text }]);
    setInput('');
    setLoading(true);
    setTimeout(() => {
      const reply =
        text.toLowerCase().includes('price')
          ? 'We offer flexible plans starting at $19/mo. You can switch to yearly and save 20%.'
          : text.toLowerCase().includes('integrat')
          ? 'Drop in a single script. Connect your knowledge base, CRM, and help desk in minutes.'
          : 'I can help with onboarding, billing, and support automations. What would you like to do next?';
      setMessages((m) => [...m, { from: 'bot', text: reply }]);
      setLoading(false);
    }, 700);
  };

  return (
    <div className="w-full h-full flex flex-col rounded-2xl border border-white/40 dark:border-white/10 backdrop-blur bg-white/60 dark:bg-neutral-900/50 overflow-hidden shadow-xl">
      <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-white/60 to-white/20 dark:from-white/10 dark:to-white/5">
        <div className="flex items-center gap-2 text-sm text-neutral-700 dark:text-neutral-200">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400" />
          Nova is online
        </div>
        <div className="text-xs text-neutral-500 dark:text-neutral-400">Live Demo</div>
      </div>
      <div className="flex-1 space-y-3 p-4 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow ${
                m.from === 'user'
                  ? 'bg-violet-600 text-white'
                  : 'bg-white/80 dark:bg-white/10 text-neutral-800 dark:text-neutral-100 border border-white/40 dark:border-white/10'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm bg-white/80 dark:bg-white/10 text-neutral-800 dark:text-neutral-100 border border-white/40 dark:border-white/10 shadow">
              Typing...
            </div>
          </div>
        )}
      </div>
      <div className="p-3 border-t border-white/50 dark:border-white/10 bg-white/50 dark:bg-neutral-900/50">
        <div className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Ask anything..."
            className="flex-1 rounded-xl bg-white dark:bg-neutral-800/80 text-sm px-3.5 py-2.5 outline-none border border-white/60 dark:border-white/10 text-neutral-800 dark:text-neutral-100 placeholder:text-neutral-400"
          />
          <button
            onClick={send}
            className="rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 text-white text-sm font-medium px-4 py-2.5 shadow hover:opacity-95"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[92vh] pt-28 md:pt-32 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-transparent dark:from-black/60 dark:via-black/20"></div>

      <div className="relative mx-auto w-[92vw] max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-1.5 text-xs text-neutral-600 dark:text-neutral-300 shadow-sm">
            <Sparkles className="h-3.5 w-3.5 text-violet-500" />
            AI Chat. Live Agents. Help Desk Automation.
          </div>
          <h1 className="mt-5 font-extrabold tracking-tight text-4xl sm:text-5xl md:text-6xl leading-tight text-neutral-900 dark:text-white">
            Supercharge support with a futuristic AI chatbot platform
          </h1>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl">
            Connect Nova to your site and automate FAQs, triage tickets, and hand off to humans when it matters. Lightning fast. Delightfully on-brand.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
            <a href="#pricing" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-violet-500/20 hover:opacity-95 transition">
              Get Started
            </a>
            <a href="#how" className="inline-flex items-center justify-center rounded-xl border border-white/60 dark:border-white/10 bg-white/60 dark:bg-white/5 px-6 py-3 text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-100 hover:bg-white/80 dark:hover:bg-white/10 transition">
              See how it works
            </a>
          </div>
        </div>

        <div className="relative">
          {/* background wireframe "sites" */}
          <div className="absolute -inset-6 md:-inset-8 lg:-inset-10 opacity-70">
            <div className="grid grid-cols-3 gap-3 md:gap-4 h-full">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/50 dark:border-white/10 bg-white/30 dark:bg-white/5 backdrop-blur h-full"
                />
              ))}
            </div>
          </div>

          <div className="relative">
            <DemoChatbot />
          </div>
        </div>
      </div>

      <div className="relative mx-auto w-[92vw] max-w-6xl mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
        {['Trusted by 1,000+ teams', '99.9% uptime', 'SOC2 ready', 'Blazing fast']?.map((t, i) => (
          <div key={i} className="rounded-xl border border-white/50 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur p-4 text-center text-sm text-neutral-700 dark:text-neutral-300">
            {t}
          </div>
        ))}
      </div>
    </section>
  );
}

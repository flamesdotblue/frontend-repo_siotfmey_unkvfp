import { useEffect, useState } from 'react';
import { Moon, Sun, Bot } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(typeof window !== 'undefined' ? document.documentElement.classList.contains('dark') : false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <div className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300`}
      aria-label="Main navigation">
      <nav
        className={`flex items-center justify-between gap-4 rounded-2xl px-5 sm:px-6 md:px-8 ${
          scrolled ? 'py-2.5' : 'py-3.5'
        } w-[92vw] max-w-6xl backdrop-blur-xl bg-white/60 dark:bg-neutral-900/60 border border-white/40 dark:border-white/10 shadow-sm ${
          scrolled ? 'shadow-lg shadow-black/5 dark:shadow-black/30' : ''
        }`}
      >
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 p-[2px]">
            <div className="h-full w-full rounded-[10px] bg-white/90 dark:bg-black/60 grid place-items-center">
              <Bot className="h-5 w-5 text-violet-600 dark:text-violet-300" />
            </div>
          </div>
          <span className="font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">NovaChat</span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
          <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
          <a href="#how" className="hover:text-neutral-900 dark:hover:text-white transition-colors">How it works</a>
          <a href="#services" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Services</a>
          <a href="#pricing" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-white/50 dark:border-white/10 bg-white/60 dark:bg-white/5 px-3 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 shadow-sm hover:bg-white/80 dark:hover:bg-white/10 transition"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href="#pricing"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 via-fuchsia-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 hover:opacity-95 transition"
          >
            Get Started
          </a>
        </div>
      </nav>
    </div>
  );
}

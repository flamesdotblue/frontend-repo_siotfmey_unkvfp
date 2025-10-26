import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesSections from './components/FeaturesSections';
import PricingAndContact from './components/PricingAndContact';

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-gradient-to-br from-violet-500/25 via-fuchsia-500/20 to-amber-300/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-amber-300/20 via-fuchsia-500/15 to-violet-500/20 blur-3xl" />
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950 selection:bg-violet-500/20 selection:text-violet-700 dark:selection:text-violet-200">
      <Navbar />
      <BackgroundFX />
      <main>
        <Hero />
        <FeaturesSections />
        <PricingAndContact />
      </main>
    </div>
  );
}

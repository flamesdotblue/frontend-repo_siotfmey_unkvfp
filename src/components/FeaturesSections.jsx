import { motion } from 'framer-motion';
import { BookOpen, MessageSquare, Headset, Bot, CheckCircle2 } from 'lucide-react';

export default function FeaturesSections() {
  const steps = [
    { title: 'Install script', desc: 'Paste a lightweight snippet on your site.', icon: <Bot className="h-5 w-5" /> },
    { title: 'Customize chatbot', desc: 'Brand tone, widgets, and knowledge base.', icon: <MessageSquare className="h-5 w-5" /> },
    { title: 'Integrate', desc: 'Connect CRM, Help Desk, and analytics.', icon: <BookOpen className="h-5 w-5" /> },
    { title: 'Go live', desc: 'Start resolving questions instantly.', icon: <CheckCircle2 className="h-5 w-5" /> },
  ];

  const services = [
    { name: 'Knowledgebase', desc: 'Answer FAQs from docs, URLs, and files.', icon: BookOpen },
    { name: 'Live Chat', desc: 'Real-time messaging with visitors.', icon: MessageSquare },
    { name: 'Live Agent', desc: 'Seamless human handoff when needed.', icon: Headset },
    { name: 'Help Agent', desc: 'Automate tickets and workflows.', icon: Bot },
  ];

  return (
    <div className="relative">
      {/* About */}
      <section id="about" className="relative w-[92vw] max-w-6xl mx-auto py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white">
            Building the future of intelligent customer support
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            Our mission is to unlock delightful, scalable support for every business. We combine AI assistance with human empathy—so customers get instant answers and agents focus on what matters.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="relative w-[92vw] max-w-6xl mx-auto pb-12 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/50 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 text-white grid place-items-center">
                {s.icon}
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{s.title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1.5">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative w-[92vw] max-w-6xl mx-auto py-16 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map(({ name, desc, icon: Icon }, i) => (
            <motion.div
              key={name}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="group rounded-2xl border border-white/50 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur p-5 hover:shadow-xl hover:shadow-violet-500/10"
            >
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 text-white grid place-items-center">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-neutral-900 dark:text-white">{name}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-300 mt-1.5">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

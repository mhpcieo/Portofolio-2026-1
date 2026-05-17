import { motion } from 'framer-motion';
import { Code, Cpu, Target, Zap } from 'lucide-react';
import { SectionHeading } from '../ui/SectionHeading';

const ABOUT_CARDS = [
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    title: "Perjalanan Belajar",
    desc: "Mulai dari dasar-dasar RPL hingga mendalami fullstack development dengan stack modern."
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Fokus Teknologi",
    desc: "Spesialisasi di Flutter untuk mobile dan ekosistem Express.js/Laravel untuk arsitektur backend."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Cara Kerja",
    desc: "Mengedepankan clean code, struktur yang modular, dan efisiensi performa aplikasi."
  },
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "Passion",
    desc: "Membangun produk digital yang tidak hanya fungsional, tetapi juga memberikan user experience terbaik."
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Developer Profile" 
          subtitle="Lebih dari sekadar menulis kode, saya fokus pada pemecahan masalah dan membangun arsitektur yang scalable."
        />

        <div className="grid lg:grid-cols-12 gap-12 mt-16 items-center">
          
          {/* Left: Text Content Showcase */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full transition-all group-hover:scale-110" />
              <h3 className="text-2xl font-bold mb-4 text-text-main relative z-10">
                Mobile App Developer.
              </h3>
              <p className="text-text-secondary leading-relaxed relative z-10">
                Sebagai siswa Rekayasa Perangkat Lunak (RPL), saya sangat menyukai dunia pemrograman. Bagi saya, membuat aplikasi bukan sekadar tugas sekolah, tapi cara yang seru untuk memecahkan masalah. Saat ini saya sudah menyelesaikan 3 project, dan saya akan terus belajar, berlatih, serta berkembang menjadi developer yang lebih profesional di masa depan.
              </p>

            </motion.div>
          </div>

          {/* Right: Bento Grid Features */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {ABOUT_CARDS.map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h4 className="text-lg font-bold text-text-main mb-2">{card.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

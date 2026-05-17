import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Award, ExternalLink } from 'lucide-react';
import { Button } from '../ui/Button';

// Asset Imports
import certYlc from '../../assets/ylc.jpg';
import certOsis from '../../assets/sertifikat_osis_sharing.jpg';
import certChasity from '../../assets/chasity.jpg';
import certDpmi from '../../assets/dpmi_nasional.jpeg';
import certIlo from '../../assets/k3.jpg';
import certGdg from '../../assets/mobile_gdg.jpg';
import certDicodingWeb from '../../assets/web_dasar.jpg';
import certDicodingJs from '../../assets/pemrograman_java.jpg';

const CERTIFICATES = [
  {
    title: 'Youth Leadership Camp 3.0',
    issuer: 'Forum OSIS SMK Jawa Barat',
    date: '2025',
    imagePlaceholder: 'bg-gradient-to-br from-indigo-500/20 to-purple-600/20',
    image: certYlc
  },
  {
    title: 'Upgrading OSIS Nasional 2026',
    issuer: 'Ibnu Sina Foundation',
    date: '2026',
    imagePlaceholder: 'bg-gradient-to-br from-sky-500/20 to-blue-600/20',
    image: certOsis
  },
  {
    title: 'Certificate of Appreciation',
    issuer: 'Chasity Earth',
    date: '2025',
    imagePlaceholder: 'bg-gradient-to-br from-emerald-500/20 to-green-600/20',
    image: certChasity
  },
  {
    title: 'Duta Pembicara Muda Indonesia',
    issuer: 'DPMI Batch 3',
    date: '2026',
    imagePlaceholder: 'bg-gradient-to-br from-amber-500/20 to-yellow-600/20',
    image: certDpmi
  },
  {
    title: 'Keselamatan dan Kesehatan Kerja',
    issuer: 'International Labour Organization',
    date: '2024',
    imagePlaceholder: 'bg-gradient-to-br from-rose-500/20 to-red-600/20',
    image: certIlo
  },
  {
    title: 'Let\'s Get Vibing (Build with AI)',
    issuer: 'Google Developer Group Bogor',
    date: '2026',
    imagePlaceholder: 'bg-gradient-to-br from-teal-500/20 to-emerald-600/20',
    image: certGdg
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    issuer: 'Dicoding',
    date: '2024',
    imagePlaceholder: 'bg-gradient-to-br from-fuchsia-500/20 to-pink-600/20',
    image: certDicodingWeb
  },
  {
    title: 'Belajar Dasar Pemrograman JavaScript',
    issuer: 'Dicoding',
    date: '2025',
    imagePlaceholder: 'bg-gradient-to-br from-orange-500/20 to-amber-600/20',
    image: certDicodingJs
  }
];

export const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Licenses & Certifications" 
          subtitle="Beberapa pencapaian dan sertifikat yang validasi keterampilan teknis saya di bidang pengembangan aplikasi mobile."
        />

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group flex flex-col"
            >
              {/* Image Container */}
              <div className={`w-full aspect-[4/3] ${cert.image ? 'bg-bg-secondary' : cert.imagePlaceholder} relative overflow-hidden flex items-center justify-center`}>
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                ) : (
                  <Award className="w-12 h-12 text-white/30 group-hover:scale-110 transition-transform duration-500" />
                )}
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-bg-main/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="outline" className="scale-90" icon={<ExternalLink className="w-4 h-4" />}>
                    Lihat
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded border border-primary/20">
                    {cert.date}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-text-main mb-1 group-hover:text-primary transition-colors line-clamp-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-text-secondary mt-auto">
                  {cert.issuer}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

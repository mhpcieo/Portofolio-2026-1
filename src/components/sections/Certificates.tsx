import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';

import certYlc from '../../assets/ylc.jpg';
import certOsis from '../../assets/sertifikat_osis_sharing.jpg';
import certChasity from '../../assets/chasity.jpg';
import certDpmi from '../../assets/dpmi_nasional.jpeg';
import certIlo from '../../assets/k3.jpg';
import certGdg from '../../assets/mobile_gdg.jpg';
import certDicodingWeb from '../../assets/web_dasar.jpg';
import certDicodingJs from '../../assets/pemrograman_java.jpg';

const CERTS = [
  { title: 'Youth Leadership Camp 3.0',      issuer: 'Forum OSIS SMK Jawa Barat',        year: '2025', image: certYlc },
  { title: 'Upgrading OSIS National 2026',   issuer: 'Ibnu Sina Foundation',              year: '2026', image: certOsis },
  { title: 'Certificate of Appreciation',   issuer: 'Chasity Earth',                     year: '2025', image: certChasity },
  { title: 'Young Speaker Ambassador',       issuer: 'DPMI Batch 3',                      year: '2026', image: certDpmi },
  { title: 'Occupational Health & Safety',  issuer: 'International Labour Organization', year: '2024', image: certIlo },
  { title: "Let's Get Vibing — Build with AI", issuer: 'Google Developer Group Bogor',   year: '2026', image: certGdg },
  { title: 'Web Development Fundamentals',  issuer: 'Dicoding',                          year: '2024', image: certDicodingWeb },
  { title: 'JavaScript Programming Basics', issuer: 'Dicoding',                          year: '2025', image: certDicodingJs },
];

export const Certificates = () => (
  <section id="certificates" className="py-24 relative z-10 border-t border-border">
    <div className="max-w-6xl mx-auto px-6">

      {/* Header — same pattern as Projects */}
      <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
        <SectionHeading
          label="04 — Certificates"
          title="Credentials"
          subtitle="Courses, workshops, and events I've been part of."
        />
        <span className="mono text-[11px] text-text-muted">{CERTS.length} total</span>
      </div>

      {/* Uniform grid — same card style as Projects image */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {CERTS.map((cert, idx) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            className="group border border-border rounded-sm overflow-hidden bg-bg-secondary hover:border-primary/20 transition-colors duration-150"
          >
            {/* Image — fixed aspect ratio so all cards are same height */}
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-300"
              />
            </div>

            {/* Info */}
            <div className="px-3 py-2.5 border-t border-border">
              <p className="mono text-[10px] text-primary/50 mb-1">{cert.year}</p>
              <p className="text-[12px] font-medium text-text-main leading-snug line-clamp-2">
                {cert.title}
              </p>
              <p className="mono text-[10px] text-text-muted mt-1 truncate">{cert.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

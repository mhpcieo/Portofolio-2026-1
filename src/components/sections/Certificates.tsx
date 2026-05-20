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
  { title: 'Youth Leadership Camp 3.0', issuer: 'Forum OSIS SMK Jawa Barat', year: '2025', image: certYlc },
  { title: 'Upgrading OSIS National 2026', issuer: 'Ibnu Sina Foundation', year: '2026', image: certOsis },
  { title: 'Certificate of Appreciation', issuer: 'Chasity Earth', year: '2025', image: certChasity },
  { title: 'Young Speaker Ambassador', issuer: 'DPMI Batch 3', year: '2026', image: certDpmi },
  { title: 'Occupational Health & Safety', issuer: 'International Labour Organization', year: '2024', image: certIlo },
  { title: "Let's Get Vibing — Build with AI", issuer: 'Google Developer Group Bogor', year: '2026', image: certGdg },
  { title: 'Web Development Fundamentals', issuer: 'Dicoding', year: '2024', image: certDicodingWeb },
  { title: 'JavaScript Programming Basics', issuer: 'Dicoding', year: '2025', image: certDicodingJs },
];

export const Certificates = () => (
  <section id="certificates" className="py-24 relative z-10 border-t border-border">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <SectionHeading
          label="04 — Certificates"
          title="Credentials"
          subtitle="Courses, workshops, and events I've been part of."
        />
        <span className="mono text-[11px] text-text-muted">{CERTS.length} total</span>
      </div>

      <div className="columns-2 md:columns-3 lg:columns-4 gap-2.5">
        {CERTS.map((cert, idx) => (
          <motion.div key={cert.title}
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20px' }} transition={{ duration: 0.3, delay: idx * 0.035 }}
            className="break-inside-avoid mb-2.5 group"
          >
            <div className="border border-border bg-bg-card hover:border-primary/20 transition-colors duration-150 rounded overflow-hidden">
              <div className="overflow-hidden">
                <img src={cert.image} alt={cert.title}
                  className="w-full h-auto object-cover group-hover:scale-[1.025] transition-transform duration-500" />
              </div>
              <div className="px-2.5 py-2">
                <p className="mono text-[9px] text-primary/45 mb-0.5">{cert.year}</p>
                <p className="text-[11px] font-medium text-text-main leading-snug line-clamp-2">{cert.title}</p>
                <p className="mono text-[9px] text-text-muted mt-0.5 truncate">{cert.issuer}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

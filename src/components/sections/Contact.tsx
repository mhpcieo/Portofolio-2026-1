import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { Mail, Code, Link, MessageCircle, Send,  Users
   } from 'lucide-react';
import { Button } from '../ui/Button';

const CONTACT_LINKS = [
  {
    name: 'Email',
    icon: <Mail className="w-5 h-5" />,
    // href: 'mailto:contact@muhamadhabilputrawan@gmail.com',
    desc: 'contact@muhamadhabilputrawan@gmail.com'
  },
  {
    name: 'WhatsApp',
    icon: <MessageCircle className="w-5 h-5" />,
    href: 'https://wa.me/6285282251956',
    desc: 'Let\'s chat'
  },
  {
    name: 'GitHub',
    icon: <Code className="w-5 h-5" />,
    href: 'https://github.com/mhpcieo',
    desc: 'View my code'
  },
    {
    name: 'Instagram',
    icon: <Users className="w-5 h-5" />,
    href: 'https://www.instagram.com/habilpiyo?igsh=aHMwZ2ZqNDg1dmR2',
    desc: '@habilpiyo'
  },

  {
    name: 'LinkedIn',
    icon: <Link className="w-5 h-5" />,
    href: 'https://www.linkedin.com/in/muhamad-habil-putrawan-786987322/',
    desc: 'Connect with me'
  }
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    try {
      // GANTI 'YOUR_ACCESS_KEY_HERE' DENGAN ACCESS KEY DARI WEB3FORMS NANTI
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_ACCESS_KEY_HERE',
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      });
      
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000); // Reset status after 5s
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      {/* Background glow specific to contact section */}
      <div className="absolute inset-0 top-1/2 bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading 
          title="Let's Connect" 
          subtitle="Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu untuk menghubungi saya."
        />

        <div className="mt-16 grid lg:grid-cols-5 gap-8 bg-transparent">
          
          {/* Contact Info Cards (Left side) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {CONTACT_LINKS.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card p-5 rounded-2xl flex items-center gap-4 hover:border-primary/50 group transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-text-secondary group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                  {link.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-text-main">{link.name}</h4>
                  <p className="text-xs text-text-secondary mt-0.5">{link.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Contact Form (Right side) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 glass-card p-8 rounded-3xl relative overflow-hidden"
          >
            {/* Form decorative glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />
            
            <h3 className="text-2xl font-bold mb-6 text-text-main relative z-10">Send a Message</h3>
            
            <form className="relative z-10 space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-text-secondary uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe" 
                    className="w-full bg-bg-main/50 border border-border-soft rounded-xl px-4 py-3 text-text-main placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-text-secondary uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com" 
                    className="w-full bg-bg-main/50 border border-border-soft rounded-xl px-4 py-3 text-text-main placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-medium text-text-secondary uppercase tracking-wider">Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Internship Opportunity" 
                  className="w-full bg-bg-main/50 border border-border-soft rounded-xl px-4 py-3 text-text-main placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-text-secondary uppercase tracking-wider">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Hi Habil, we are looking for..." 
                  className="w-full bg-bg-main/50 border border-border-soft rounded-xl px-4 py-3 text-text-main placeholder:text-text-secondary/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                ></textarea>
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                icon={status === 'submitting' ? undefined : <Send className="w-4 h-4" />} 
                className={`w-full ${status === 'success' ? 'bg-green-500 hover:bg-green-600 text-white border-green-500' : ''} ${status === 'error' ? 'bg-red-500 hover:bg-red-600 text-white border-red-500' : ''}`}
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 
                 status === 'success' ? 'Message Sent!' : 
                 status === 'error' ? 'Failed to Send. Try Again' : 
                 'Send Message'}
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

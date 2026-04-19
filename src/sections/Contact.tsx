import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '+212 772529274', href: 'tel:+212772529274' },
  { icon: Mail, label: 'Email', value: 'yassirgattoa@gmail.com', href: 'mailto:yassirgattoa@gmail.com' },
  { icon: MapPin, label: 'Location', value: 'North Morocco', href: '#' },
  { icon: Clock, label: 'Hours', value: 'Mon - Sat: 8AM - 8PM', href: '#' },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_phone: '',
    program: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      await emailjs.send(
        'service_qq255pi',
        'template_wqqya1v',
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          user_phone: formData.user_phone || 'Not provided',
          program: formData.program || 'Not selected',
          message: formData.message || 'No message',
          reply_to: formData.user_email,
        },
        'xy_IA7Wo5i36Hg4tG'
      );
      setStatus('sent');
      setFormData({ user_name: '', user_email: '', user_phone: '', program: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-32 lg:py-40 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 mb-6 tracking-[0.3em] uppercase font-mono"
          >
            Contact
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(3rem,6vw,5rem)] font-bold text-black leading-[0.9] mb-6"
          >
            Start Your Journey
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-md"
          >
            Ready to learn? Get in touch and we'll find the perfect program for you.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-px bg-black border border-black">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 lg:p-14"
          >
            <h3 className="text-xl font-bold text-black mb-10">Contact Info</h3>
            <div className="space-y-8">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-start gap-4 group"
                >
                  <item.icon className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-mono mb-1">{item.label}</p>
                    <p className="text-black font-medium group-hover:translate-x-1 transition-transform">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500 mb-4">Prefer WhatsApp?</p>
              <a
                href="https://wa.me/212772529274"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
              >
                <span className="font-medium">Chat on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 p-10 lg:p-14"
          >
            <h3 className="text-xl font-bold text-black mb-10">Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider font-mono mb-2">Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider font-mono mb-2">Email</label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                  required
                  className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider font-mono mb-2">Phone</label>
                <input
                  type="tel"
                  name="user_phone"
                  value={formData.user_phone}
                  onChange={(e) => setFormData({ ...formData, user_phone: e.target.value })}
                  className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors"
                  placeholder="+212 ..."
                />
              </div>
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider font-mono mb-2">Program</label>
                <select
                  name="program"
                  value={formData.program}
                  onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                  className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors"
                >
                  <option value="">Select a program</option>
                  <option value="Kids">Kids (5-9)</option>
                  <option value="Teens">Teens (10-17)</option>
                  <option value="Adults">Adults (18+)</option>
                  <option value="Corporate">Corporate</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-400 uppercase tracking-wider font-mono mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full bg-white border border-gray-300 px-4 py-3 text-black focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Tell us about your goals..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full bg-black text-white hover:bg-gray-800 py-5 text-sm tracking-[0.2em] uppercase font-medium inline-flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

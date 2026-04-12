import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Clock, Send, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from 'emailjs-com';
import WhatsAppIcon from '@/components/icons/WhatsAppIcon';
import PhoneIcon from '@/components/icons/PhoneIcon';
import GmailIcon from '@/components/icons/GmailIcon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const contactInfo = [
  {
    icon: PhoneIcon,
    title: 'Phone',
    content: '+212 772529274',
    href: 'tel:+212772529274',
  },
  {
    icon: WhatsAppIcon,
    title: 'WhatsApp',
    content: '+212 772529274',
    href: 'https://wa.me/212772529274',
  },
  {
    icon: GmailIcon,
    title: 'Email',
    content: 'yassirgattoa@gmail.com',
    href: 'mailto:yassirgattoa@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Location',
    content: 'North Morocco',
    href: '#',
  },
  {
    icon: Clock,
    title: 'Hours',
    content: 'Mon - Sat: 8AM - 8PM',
    href: '#',
  },
];

// EmailJS configuration - using a free service account
// To make this work, you need to:
// 1. Sign up at https://www.emailjs.com/
// 2. Create an email service (Gmail, Outlook, etc.)
// 3. Create an email template
// 4. Replace these with your actual values:
const EMAILJS_SERVICE_ID = 'service_qq255pi';
const EMAILJS_TEMPLATE_ID = 'template_wqqya1v';
const EMAILJS_USER_ID = 'xy_IA7Wo5i36Hg4tG';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send via EmailJS
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_USER_ID
      );

      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', program: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-navy" />
      
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl bg-primary/20 -top-40 -right-40"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-blue-500/10 bottom-0 left-0"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Section Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6"
              >
                <MessageCircle className="w-4 h-4" />
                Get In Touch
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                <span className="text-white">Ready to Start</span>
                <br />
                <span className="text-primary">Your Journey?</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-navy-200 text-lg mb-10 leading-relaxed"
              >
                Take the first step towards mastering communication. Contact us today 
                to learn more about our programs and enrollment options.
              </motion.p>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid sm:grid-cols-2 gap-4"
              >
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.title}
                    href={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-navy-800/50 border border-navy-600 hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-navy-400 text-sm">{item.title}</div>
                      <div className="text-white font-medium break-all">{item.content}</div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mt-8"
              >
                <Button
                  size="lg"
                  className="bg-primary text-white px-8 py-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                >
                  Get Started Today
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-2xl">
                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                  Send us a Message
                </h3>
                <p className="text-navy-600 mb-8">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        First Name *
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Last Name *
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                        className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Phone
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+212 772529274"
                      className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primary focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Program Interest
                    </label>
                    <select
                      name="program"
                      value={formData.program}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-primary bg-white text-navy-700"
                    >
                      <option value="">Select a program</option>
                      <option value="kids">Kids Program (Ages 5-9)</option>
                      <option value="adolescents-core">Adolescents - Core (10-15)</option>
                      <option value="adolescents-stem">Adolescents - STEM (16-18)</option>
                      <option value="adolescents-leadership">Adolescents - Leadership (16-18)</option>
                      <option value="adults">Adults Program</option>
                      <option value="business">Business/Corporate</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-navy-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your goals and how we can help..."
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border-gray-200 focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700">
                      <CheckCircle className="w-5 h-5 shrink-0" />
                      <span>Message sent successfully! We&apos;ll get back to you soon.</span>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                      <AlertCircle className="w-5 h-5 shrink-0" />
                      <span>Failed to send message. Please try again or email us directly.</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white py-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

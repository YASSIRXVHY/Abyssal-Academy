import { motion } from 'framer-motion';
import { Briefcase, Building2, Users, TrendingUp, ArrowRight, CheckCircle2, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stats = [
  { icon: Building2, value: '50+', label: 'Corporate Clients' },
  { icon: Users, value: '1000+', label: 'Professionals Trained' },
  { icon: TrendingUp, value: '95%', label: 'Success Rate' },
];

const services = [
  'Business Communication',
  'Presentation Skills',
  'Negotiation Techniques',
  'Leadership Training',
  'Team Building',
  'Cross-cultural Communication',
];

export default function BusinessSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="business" className="relative py-20 lg:py-32 bg-navy-900 overflow-hidden">
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
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Illustrated Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-navy-800 via-navy-700 to-navy-800 rounded-3xl p-8 lg:p-12 border border-navy-600 shadow-2xl"
              >
                {/* Icon Circle */}
                <div className="w-24 h-24 mx-auto mb-8 rounded-2xl flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30">
                  <Briefcase className="w-12 h-12 text-primary" />
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg shadow-primary/30"
                >
                  <Building2 className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Star className="w-6 h-6 text-white fill-white" />
                </motion.div>

                {/* Card Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Corporate Excellence
                  </h3>
                  <p className="text-navy-200 mb-6">
                    Transform your team&apos;s communication capabilities with our 
                    tailored corporate training programs.
                  </p>

                  {/* Stats Row */}
                  <div className="flex justify-center gap-4">
                    {stats.map((stat) => (
                      <div key={stat.label} className="text-center px-3">
                        <div className="text-xl font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-navy-300">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-10 right-10 w-4 h-4 bg-primary rounded-full" />
                  <div className="absolute top-20 left-20 w-3 h-3 bg-blue-400 rounded-full" />
                  <div className="absolute bottom-20 right-20 w-5 h-5 bg-primary rounded-full" />
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Section Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold text-sm mb-6"
              >
                <Building2 className="w-4 h-4" />
                Business Solutions
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                <span className="text-white">Corporate</span>
                <br />
                <span className="text-primary">Training Programs</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-navy-200 text-lg mb-8 leading-relaxed"
              >
                Empower your organization with world-class communication training. 
                Our corporate programs are designed to enhance team collaboration, 
                leadership effectiveness, and overall business performance.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-4 mb-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-navy-800/50 backdrop-blur-sm rounded-xl p-4 border border-navy-600"
                  >
                    <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white text-center mb-1">
                      {stat.value}
                    </div>
                    <div className="text-navy-400 text-xs text-center">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Services List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-2 gap-2 mb-8"
              >
                {services.map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.05 }}
                    className="flex items-center gap-2 text-navy-200 text-sm"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    {service}
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-primary text-white px-8 py-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                >
                  Corporate Inquiry
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

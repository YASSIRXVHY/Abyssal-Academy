import { motion } from 'framer-motion';
import { UserCheck, Plane, TrendingUp, Calendar, ArrowRight, Globe, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';

const benefits = [
  {
    icon: Plane,
    title: 'Travel Ready',
    description: 'Communicate confidently in any country',
  },
  {
    icon: TrendingUp,
    title: 'Career Boost',
    description: 'Advance your professional opportunities',
  },
  {
    icon: Calendar,
    title: 'Flexible Schedule',
    description: 'Learn at your own pace and time',
  },
];

export default function AdultsSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="adults" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-emerald-200/20 -top-20 right-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl bg-teal-200/20 bottom-0 left-0"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold text-sm mb-6"
              >
                <Globe className="w-4 h-4" />
                Adults Program
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                <span className="gradient-text-emerald">Adult Learning</span>
                <br />
                <span className="text-navy-900">Unlock Your Potential</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-navy-600 text-lg mb-8 leading-relaxed"
              >
                Whether you&apos;re looking to advance your career, travel with confidence, 
                or simply expand your horizons, our adult programs offer flexible learning 
                paths tailored to your goals and schedule.
              </motion.p>

              {/* Benefits Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid sm:grid-cols-3 gap-4 mb-8"
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-emerald-50/80 backdrop-blur-sm rounded-xl p-5 border border-emerald-100"
                  >
                    <benefit.icon className="w-8 h-8 text-emerald-500 mb-3" />
                    <h3 className="font-semibold text-navy-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-navy-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-emerald/30 transition-all duration-300 group"
                >
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Illustrated Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-emerald-100 via-teal-50 to-emerald-50 rounded-3xl p-8 lg:p-12 border border-emerald-200 shadow-2xl"
              >
                {/* Icon Circle */}
                <div className="icon-circle-emerald w-24 h-24 mx-auto mb-8">
                  <UserCheck className="w-12 h-12 text-emerald-600" />
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Briefcase className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Globe className="w-6 h-6 text-white" />
                </motion.div>

                {/* Card Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">
                    Professional Growth
                  </h3>
                  <p className="text-navy-600 mb-6">
                    Elevate your career and personal life with powerful communication 
                    skills designed for the modern professional.
                  </p>

                  {/* Mini Stats */}
                  <div className="flex justify-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">18+</div>
                      <div className="text-sm text-navy-500">Years Old</div>
                    </div>
                    <div className="w-px bg-emerald-200" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">Pro</div>
                      <div className="text-sm text-navy-500">Level</div>
                    </div>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-10 left-10 w-4 h-4 bg-emerald-500 rounded-full" />
                  <div className="absolute top-20 right-20 w-3 h-3 bg-teal-500 rounded-full" />
                  <div className="absolute bottom-20 left-20 w-5 h-5 bg-emerald-400 rounded-full" />
                  <div className="absolute bottom-10 right-10 w-3 h-3 bg-teal-400 rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

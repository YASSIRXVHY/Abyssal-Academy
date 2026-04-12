import { motion } from 'framer-motion';
import { Baby, Palette, Music, Gamepad2, ArrowRight, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const features = [
  { icon: Palette, title: 'Art & Crafts', description: 'Creative expression through hands-on activities' },
  { icon: Music, title: 'Songs', description: 'Learning through music and rhythm' },
  { icon: Gamepad2, title: 'Educational Games', description: 'Fun interactive learning experiences' },
];

export default function KidsSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="kids" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl bg-amber-200/30 -top-20 -right-20"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[300px] h-[300px] rounded-full blur-3xl bg-orange-200/20 bottom-0 left-0"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
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
              {/* Age Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold text-sm mb-6"
              >
                <Star className="w-4 h-4 fill-amber-500" />
                Ages 5-9 Program
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                <span className="gradient-text-amber">Kids Program</span>
                <br />
                <span className="text-navy-900">Learning Through Play</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-navy-600 text-lg mb-8 leading-relaxed"
              >
                Our Kids Program creates a nurturing environment where young learners discover 
                the joy of communication through interactive activities, creative expression, 
                and engaging educational games designed specifically for ages 5-9.
              </motion.p>

              {/* Features Grid */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid sm:grid-cols-3 gap-4 mb-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-amber-50/80 backdrop-blur-sm rounded-xl p-5 border border-amber-100"
                  >
                    <feature.icon className="w-8 h-8 text-amber-500 mb-3" />
                    <h3 className="font-semibold text-navy-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-navy-600">{feature.description}</p>
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
                  className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-amber/30 transition-all duration-300 group"
                >
                  Enroll Your Child
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
                className="relative bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50 rounded-3xl p-8 lg:p-12 border border-amber-200 shadow-2xl"
              >
                {/* Icon Circle */}
                <div className="icon-circle-amber w-24 h-24 mx-auto mb-8">
                  <Baby className="w-12 h-12 text-amber-600" />
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-amber-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Star className="w-8 h-8 text-white fill-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-orange-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="w-6 h-6 text-white" />
                </motion.div>

                {/* Card Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">
                    Young Learners
                  </h3>
                  <p className="text-navy-600 mb-6">
                    Building confidence and communication skills from an early age through 
                    fun, age-appropriate activities.
                  </p>

                  {/* Mini Stats */}
                  <div className="flex justify-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600">5-9</div>
                      <div className="text-sm text-navy-500">Years Old</div>
                    </div>
                    <div className="w-px bg-amber-200" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600">Fun</div>
                      <div className="text-sm text-navy-500">Learning</div>
                    </div>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-10 left-10 w-4 h-4 bg-amber-500 rounded-full" />
                  <div className="absolute top-20 right-20 w-3 h-3 bg-orange-500 rounded-full" />
                  <div className="absolute bottom-20 left-20 w-5 h-5 bg-amber-400 rounded-full" />
                  <div className="absolute bottom-10 right-10 w-3 h-3 bg-orange-400 rounded-full" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

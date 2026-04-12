import { motion } from 'framer-motion';
import { Trophy, GraduationCap, Target, Lightbulb, Heart, Globe2, Award, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: GraduationCap,
    title: 'Expert Instructors',
    description: 'Learn from certified professionals with years of teaching experience and industry expertise.',
  },
  {
    icon: Target,
    title: 'Goal-Oriented',
    description: 'Personalized learning paths designed to help you achieve your specific communication goals.',
  },
  {
    icon: Lightbulb,
    title: 'Modern Methods',
    description: 'Cutting-edge teaching techniques combining technology with proven pedagogical approaches.',
  },
  {
    icon: Heart,
    title: 'Supportive Environment',
    description: 'A nurturing atmosphere where every student feels encouraged to grow and excel.',
  },
  {
    icon: Globe2,
    title: 'Cultural Immersion',
    description: 'Experience authentic cultural contexts that enhance language learning and communication.',
  },
  {
    icon: Award,
    title: 'Certified Programs',
    description: 'Internationally recognized certifications that add value to your academic and professional profile.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-3xl bg-primary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
            >
              <Trophy className="w-4 h-4" />
              Why Choose Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            >
              <span className="gradient-text">The Abyssal</span>
              <br />
              <span className="text-navy-900">Advantage</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-navy-600 text-lg"
            >
              Discover why thousands of students and professionals choose Abyssal Academy 
              for their communication and language learning journey.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="icon-circle w-14 h-14 mb-5 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-navy-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Satisfaction Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-accent-light rounded-2xl px-8 py-6 border border-primary/20"
            >
              <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <Trophy className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold gradient-text">98%</div>
                <div className="text-navy-600 font-medium">Student Satisfaction Rate</div>
              </div>
              <div className="hidden sm:flex items-center gap-1 ml-4">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle2 key={i} className="w-5 h-5 text-primary" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

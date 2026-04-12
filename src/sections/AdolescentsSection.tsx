import { motion } from 'framer-motion';
import { User, Code, FlaskConical, Crown, ArrowRight, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';

const programs = [
  {
    icon: Target,
    title: 'Core Program',
    age: '10-15 years',
    description: 'Foundation building with comprehensive language skills',
    color: 'blue',
  },
  {
    icon: FlaskConical,
    title: 'STEM Focus',
    age: '16-18 years',
    description: 'Science and technology communication mastery',
    color: 'indigo',
  },
  {
    icon: Crown,
    title: 'Leadership',
    age: '16-18 years',
    description: 'Public speaking and leadership development',
    color: 'purple',
  },
];

export default function AdolescentsSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="adolescents" className="relative py-20 lg:py-32 bg-white overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-primary/10 top-0 left-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl bg-indigo-200/20 bottom-0 right-0"
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
            {/* Illustrated Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative order-2 lg:order-1"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative bg-gradient-to-br from-primary-50 via-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 border border-primary-200 shadow-2xl"
              >
                {/* Icon Circle */}
                <div className="icon-circle w-24 h-24 mx-auto mb-8">
                  <User className="w-12 h-12 text-primary" />
                </div>

                {/* Decorative Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg"
                >
                  <Code className="w-8 h-8 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className="absolute -bottom-4 -right-4 w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Target className="w-6 h-6 text-white" />
                </motion.div>

                {/* Card Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-navy-900 mb-4">
                    Teen Excellence
                  </h3>
                  <p className="text-navy-600 mb-6">
                    Empowering adolescents with advanced communication skills, 
                    critical thinking, and leadership abilities for future success.
                  </p>

                  {/* Mini Stats */}
                  <div className="flex justify-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">10-18</div>
                      <div className="text-sm text-navy-500">Years Old</div>
                    </div>
                    <div className="w-px bg-primary-200" />
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">3</div>
                      <div className="text-sm text-navy-500">Programs</div>
                    </div>
                  </div>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                  <div className="absolute top-10 right-10 w-4 h-4 bg-primary rounded-full" />
                  <div className="absolute top-20 left-20 w-3 h-3 bg-indigo-500 rounded-full" />
                  <div className="absolute bottom-20 right-20 w-5 h-5 bg-blue-400 rounded-full" />
                  <div className="absolute bottom-10 left-10 w-3 h-3 bg-primary rounded-full" />
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              {/* Section Label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
              >
                <Target className="w-4 h-4" />
                Adolescents Programs
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                <span className="gradient-text">Teen Programs</span>
                <br />
                <span className="text-navy-900">Building Future Leaders</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-navy-600 text-lg mb-8 leading-relaxed"
              >
                Our adolescent programs are designed to challenge and inspire teenagers 
                to develop advanced communication skills, critical thinking abilities, 
                and leadership qualities that will serve them throughout their lives.
              </motion.p>

              {/* Program Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-4 mb-8"
              >
                {programs.map((program, index) => (
                  <motion.div
                    key={program.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.01 }}
                    className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="icon-circle w-12 h-12 shrink-0">
                      <program.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-navy-900">{program.title}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                          {program.age}
                        </span>
                      </div>
                      <p className="text-sm text-navy-600">{program.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Button
                  onClick={scrollToContact}
                  size="lg"
                  className="gradient-primary text-white px-8 py-6 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                >
                  Explore Programs
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

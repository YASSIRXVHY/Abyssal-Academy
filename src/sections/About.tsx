import { motion } from 'framer-motion';
import { Quote, Star, Users, BookOpen, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-primary-50/30 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl bg-primary/10 top-0 right-0"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full blur-3xl bg-accent-light/50 bottom-0 left-0"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.3, 0.2],
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6"
              >
                <BookOpen className="w-4 h-4" />
                About Us
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                <span className="gradient-text">Our Story</span>
                <br />
                <span className="text-navy-900">& Mission</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-navy-600 text-lg mb-6 leading-relaxed"
              >
                Founded in North Morocco, Abyssal Academy has grown from a small language 
                center to one of the region&apos;s premier communication academies. Our journey 
                began with a simple belief: that effective communication is the key to 
                unlocking personal and professional potential.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-navy-600 mb-8 leading-relaxed"
              >
                Today, we serve over 500 students across all age groups, from young children 
                taking their first steps in language learning to seasoned professionals 
                seeking to enhance their business communication skills. Our team of 15+ 
                expert instructors brings diverse expertise and a shared passion for 
                empowering learners.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-6"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">North Morocco</div>
                    <div className="text-sm text-navy-500">Proudly Based</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">500+</div>
                    <div className="text-sm text-navy-500">Students</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-navy-900">10+</div>
                    <div className="text-sm text-navy-500">Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Quote Block */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100"
              >
                {/* Quote Icon */}
                <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Quote Content */}
                <div className="pt-4">
                  <p className="text-xl md:text-2xl text-navy-800 font-medium leading-relaxed mb-8 italic">
                    &ldquo;At Abyssal Academy, we believe that communication is not just about 
                    words—it&apos;s about connection, understanding, and growth. Our mission is 
                    to empower every learner with the confidence and skills to express 
                    themselves effectively in any situation.&rdquo;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-navy-600 flex items-center justify-center text-white font-bold text-xl">
                      AA
                    </div>
                    <div>
                      <div className="font-semibold text-navy-900">Abyssal Academy Team</div>
                      <div className="text-sm text-navy-500">Founders & Instructors</div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-4 right-4 opacity-10">
                  <Quote className="w-24 h-24 text-primary" />
                </div>
              </motion.div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 bg-gradient-to-r from-navy-900 to-navy-800 rounded-2xl p-6 text-white"
              >
                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary" />
                  Our Mission
                </h3>
                <p className="text-navy-200 text-sm leading-relaxed">
                  To provide exceptional communication and language education that transforms 
                  lives, bridges cultures, and opens doors to endless opportunities for 
                  learners of all ages across North Morocco and beyond.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

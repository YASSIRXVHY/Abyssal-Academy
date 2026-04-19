import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Quote, Star } from 'lucide-react';

// Testimonials with Darija and English
const testimonialsData = [
  {
    id: 1,
    name: 'Ahmed Benali',
    location: 'Casablanca, Morocco',
    flag: '🇲🇦',
    rating: 5,
    darija: 'الخدمة زوينة بزاف، ولدي تعلم الإنجليزية في 3 شهور ودابا كيهضر بزاف مليح. المعلمين محترفين وكيعرفو كيفاش يشرحو. نشكركم بزاف!',
    english: 'The service is amazing, my son learned English in 3 months and now speaks very well. The teachers are professional and know how to explain. Thank you so much!',
    program: 'Kids English',
  },
  {
    id: 2,
    name: 'Fatima Zahra',
    location: 'Rabat, Morocco',
    flag: '🇲🇦',
    rating: 5,
    darija: 'كنخدم في شركة فرنسية وحتاجت نحسن الإنجليزية ديالي. درت 6 شهور مع أبيسال أكاديمي ودابا كنهضر بثقة مع الكليان. ما كينش أحسن من هاد الأكاديمية!',
    english: 'I work at a French company and needed to improve my English. Did 6 months with Abyssal Academy and now I speak with confidence with clients. Nothing better than this academy!',
    program: 'Adult Mastery',
  },
  {
    id: 3,
    name: 'Karim El Fassi',
    location: 'Marrakech, Morocco',
    flag: '🇲🇦',
    rating: 5,
    darija: 'ولدي كان كيخاف من الإنجليزية ودابا كيبغيها. الطريقة ديال التعليم سهلة وممتعة. كيعطو الإهتمام لكل طالب. أنصح بيهم بزاف!',
    english: 'My son was afraid of English and now he loves it. The teaching method is easy and fun. They give attention to every student. I highly recommend them!',
    program: 'Teen Academy',
  },
  {
    id: 4,
    name: 'Sarah Johnson',
    location: 'London, UK',
    flag: '🇬🇧',
    rating: 5,
    darija: 'I work with a Moroccan team and wanted to understand Darija better while improving my business English. The teachers are patient and the classes fit my schedule perfectly. Great experience!',
    english: 'I work with a Moroccan team and wanted to understand Darija better while improving my business English. The teachers are patient and the classes fit my schedule perfectly. Great experience!',
    program: 'Business English',
  },
  {
    id: 5,
    name: 'Youssef Amrani',
    location: 'Tangier, Morocco',
    flag: '🇲🇦',
    rating: 5,
    darija: 'شركتي درت تدريب للموظفين مع أبيسال. النتيجة رائعة! الموظفين ديالنا دابا كيهضروا الإنجليزية في الاجتماعات بثقة. خدمة احترافية وثمن مناسب.',
    english: 'My company did training for employees with Abyssal. The result is amazing! Our employees now speak English in meetings with confidence. Professional service and reasonable price.',
    program: 'Corporate Training',
  },
  {
    id: 6,
    name: 'Amina Tahiri',
    location: 'Fez, Morocco',
    flag: '🇲🇦',
    rating: 5,
    darija: 'بنتي عندها 8 سنين وبدات تعلم الإنجليزية. كتفرح بزاف بالحصص وكتتعلم بسرعة. المعلمين كيستعملو ألعاب وأغاني باش يعلمو. طريقة زوينة للأطفال!',
    english: 'My daughter is 8 years old and started learning English. She enjoys the classes a lot and learns quickly. The teachers use games and songs to teach. A great method for kids!',
    program: 'Kids English',
  },
];

export default function Testimonials() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section id="testimonials" className="relative py-32 lg:py-40 bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 mb-6 tracking-[0.3em] uppercase font-mono"
          >
            {t('testimonials.label')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(3rem,6vw,5rem)] font-bold text-black leading-[0.9] mb-6"
          >
            {t('testimonials.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-md mx-auto"
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 p-8 hover:bg-black hover:text-white transition-colors duration-500"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gray-300 group-hover:text-gray-500 mb-4 transition-colors" />

              {/* Rating */}
              <div className={`flex gap-1 mb-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-black group-hover:text-white fill-current transition-colors" />
                ))}
              </div>

              {/* Testimonial Text - Darija */}
              <p className="text-sm text-gray-600 group-hover:text-gray-300 mb-3 italic transition-colors leading-relaxed" dir="rtl">
                "{testimonial.darija}"
              </p>

              {/* Testimonial Text - English */}
              <p className="text-sm text-gray-500 group-hover:text-gray-400 mb-6 transition-colors leading-relaxed">
                "{testimonial.english}"
              </p>

              {/* Program Tag */}
              <p className="text-xs font-mono text-gray-400 group-hover:text-gray-500 mb-4 transition-colors">
                {testimonial.program}
              </p>

              {/* Author */}
              <div className={`flex items-center gap-3 pt-4 border-t border-gray-200 group-hover:border-gray-700 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}>
                <div className="w-10 h-10 rounded-full bg-black text-white group-hover:bg-white group-hover:text-black flex items-center justify-center font-bold text-sm transition-colors">
                  {testimonial.name.charAt(0)}
                </div>
                <div className={isRTL ? 'text-right' : ''}>
                  <p className="font-medium text-black group-hover:text-white transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                    {testimonial.flag} {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

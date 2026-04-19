import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      // Navbar
      nav: {
        home: 'Home',
        programs: 'Programs',
        about: 'About',
        gallery: 'Gallery',
        pricing: 'Pricing',
        contact: 'Contact',
        enroll: 'Enroll Now',
        students: 'Students',
        teachers: 'Teachers',
        years: 'Years',
      },
      // Hero
      hero: {
        label: 'Online English Academy',
        title: 'Master Communication From Anywhere',
        subtitle: 'Premium online English programs for all ages. Learn with expert teachers worldwide.',
        viewPrograms: 'View Programs',
        aboutUs: 'About Us',
        scroll: 'Scroll',
      },
      // Programs
      programs: {
        label: '100% Online Learning',
        title: 'Programs',
        subtitle: 'Premium English programs designed for every age. Connect with expert teachers worldwide.',
        kids: {
          title: 'Kids English',
          subtitle: 'Ages 5-9',
          description: 'Fun, interactive online classes. Games, songs, and stories bring language to life.',
          features: ['Live video sessions', 'Interactive games', '4 students max', 'Parent dashboard'],
        },
        teens: {
          title: 'Teen Academy',
          subtitle: 'Ages 10-17',
          description: 'Engaging online curriculum. Build confidence through real conversations.',
          features: ['Native speaker teachers', 'Modern topics', 'Progress tracking', 'Flexible schedule'],
        },
        adults: {
          title: 'Adult Mastery',
          subtitle: 'Ages 18+',
          description: 'Professional online training. Business, travel, or personal growth.',
          features: ['1-on-1 or small groups', 'Business English', 'Certificates', '24/7 support'],
        },
        corporate: {
          title: 'Corporate',
          subtitle: 'Team Training',
          description: 'Customized online programs. Transform team communication skills.',
          features: ['Custom curriculum', 'Team workshops', 'Analytics', 'Account manager'],
        },
        enroll: 'Enroll',
        consultation: 'Not sure which program?',
        freeConsultation: 'Free Consultation',
      },
      // Pricing - Fixed format
      pricing: {
        label: 'Pricing',
        title: 'Simple, Transparent',
        subtitle: '2 sessions per week per month. Choose the plan that fits your goals.',
        morocco: 'Morocco',
        international: 'International',
        perMonth: '/month',
        sessionsInfo: '8 sessions per month (2 per week)',
        starter: {
          name: 'Basic',
          price: '200',
          currency: 'DH',
          description: 'Perfect for beginners. 8 sessions per month.',
          features: ['2 sessions per week', '1-on-1 online sessions', 'Learning materials', 'Progress tracking'],
        },
        professional: {
          name: 'Standard',
          price: '300',
          currency: 'DH',
          description: 'Best value for regular learners.',
          features: ['2 sessions per week', '1-on-1 or small groups', 'Priority scheduling', 'Certificate', '24/7 support'],
          popular: 'Most Popular',
        },
        intensive: {
          name: 'Intensive',
          price: '500',
          currency: 'DH',
          description: 'Accelerated learning for faster progress.',
          features: ['3 sessions per week', 'Personalized curriculum', 'Exam preparation', 'Career coaching', 'Extra practice'],
        },
        getStarted: 'Get Started',
        choosePlan: 'Choose Plan',
      },
      // Testimonials
      testimonials: {
        label: 'Testimonials',
        title: 'What Our Students Say',
        subtitle: 'Real feedback from our amazing students',
      },
      // About
      about: {
        label: 'About',
        title: 'Depth in Learning. Excellence in Results.',
        p1: 'Abyssal Academy is an online English academy dedicated to helping students of all ages master communication skills. Founded with a vision to make quality English education accessible worldwide.',
        p2: 'Our expert teachers use modern, interactive methods to ensure every student achieves their language goals—whether for school, career, or personal growth.',
        location: 'LOCATION',
        contact: 'CONTACT',
        morocco: 'North Morocco',
        online: 'Online Worldwide',
      },
      // Why Us
      whyUs: {
        label: 'Why Us',
        title: 'Why Abyssal?',
        online: {
          title: '100% Online',
          description: 'Learn from anywhere in the world. All you need is an internet connection.',
        },
        teachers: {
          title: 'Expert Teachers',
          description: 'Native speakers and certified professionals with years of experience.',
        },
        flexible: {
          title: 'Flexible Schedule',
          description: 'Book sessions that fit your lifestyle. Morning, evening, or weekends.',
        },
        certified: {
          title: 'Certified Results',
          description: 'Recognized certificates and proven progress tracking for every student.',
        },
      },
      // Gallery
      gallery: {
        label: 'Gallery',
        title: 'Life at Abyssal',
        subtitle: 'See how our online classes transform students into confident English speakers.',
        videos: 'Videos',
        watchOnYoutube: 'Watch on YouTube',
        playVideo: 'Play Video',
        academyActivities: 'Academy Activities',
        behindScenes: 'Behind the scenes of our online classes',
      },
      // Contact
      contact: {
        label: 'Contact',
        title: 'Start Your Journey',
        subtitle: 'Ready to learn? Get in touch and we will find the perfect program for you.',
        info: 'Contact Info',
        form: 'Send Message',
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        hours: 'Hours',
        program: 'Program',
        message: 'Message',
        selectProgram: 'Select a program',
        kidsOption: 'Kids (5-9)',
        teensOption: 'Teens (10-17)',
        adultsOption: 'Adults (18+)',
        corporateOption: 'Corporate',
        send: 'Send Message',
        sending: 'Sending...',
        sent: 'Message Sent!',
        whatsapp: 'Prefer WhatsApp?',
        chatWhatsapp: 'Chat on WhatsApp',
      },
      // Footer
      footer: {
        quickLinks: 'Quick Links',
        programs: 'Programs',
        contactUs: 'Contact Us',
        rights: 'All rights reserved.',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      },
    },
  },
  ar: {
    translation: {
      // Navbar
      nav: {
        home: 'الرئيسية',
        programs: 'البرامج',
        about: 'من نحن',
        gallery: 'المعرض',
        pricing: 'الأسعار',
        contact: 'تواصل معنا',
        enroll: 'سجل الآن',
        students: 'طلاب',
        teachers: 'معلمون',
        years: 'سنوات',
      },
      // Hero
      hero: {
        label: 'أكاديمية اللغة الإنجليزية عبر الإنترنت',
        title: 'أتقن التواصل من أي مكان',
        subtitle: 'برامج إنجليزية متميزة عبر الإنترنت لجميع الأعمار. تعلم مع معلمين خبراء من جميع أنحاء العالم.',
        viewPrograms: 'عرض البرامج',
        aboutUs: 'من نحن',
        scroll: 'اسحب للأسفل',
      },
      // Programs
      programs: {
        label: 'تعلم 100% عبر الإنترنت',
        title: 'البرامج',
        subtitle: 'برامج إنجليزية متميزة مصممة لكل عمر. تواصل مع معلمين خبراء من جميع أنحاء العالم.',
        kids: {
          title: 'إنجليزي الأطفال',
          subtitle: '5-9 سنوات',
          description: 'حصص تفاعلية ممتعة عبر الإنترنت. الألعاب والأغاني والقصص تجعل اللغة حية.',
          features: ['جلسات فيديو مباشرة', 'ألعاب تفاعلية', '4 طلاب كحد أقصى', 'لوحة تحكم للوالدين'],
        },
        teens: {
          title: 'أكاديمية المراهقين',
          subtitle: '10-17 سنة',
          description: 'منهج تفاعلي عبر الإنترنت. ابنِ الثقة من خلال المحادثات الحقيقية.',
          features: ['معلمين ناطقين باللغة', 'مواضيع عصرية', 'تتبع التقدم', 'جدول مرن'],
        },
        adults: {
          title: 'إتقان الكبار',
          subtitle: '18+ سنة',
          description: 'تدريب احترافي عبر الإنترنت. الأعمال، السفر، أو النمو الشخصي.',
          features: ['فردي أو مجموعات صغيرة', 'إنجليزي الأعمال', 'شهادات', 'دعم 24/7'],
        },
        corporate: {
          title: 'شركات',
          subtitle: 'تدريب الفريق',
          description: 'برامج مخصصة عبر الإنترنت. حوّل مهارات التواصل في فريقك.',
          features: ['منهج مخصص', 'ورش عمل للفريق', 'تحليلات', 'مدير حساب'],
        },
        enroll: 'التسجيل',
        consultation: 'غير متأكد من البرنامج المناسب؟',
        freeConsultation: 'استشارة مجانية',
      },
      // Pricing - Fixed format in Arabic
      pricing: {
        label: 'الأسعار',
        title: 'بسيط وشفاف',
        subtitle: 'حصتين في الأسبوع شهرياً. اختر الخطة التي تناسب أهدافك.',
        morocco: 'المغرب',
        international: 'دولي',
        perMonth: '/شهر',
        sessionsInfo: '8 حصص في الشهر (حصتين أسبوعياً)',
        starter: {
          name: 'أساسي',
          price: '200',
          currency: 'درهم',
          description: 'مثالي للمبتدئين. 8 حصص شهرياً.',
          features: ['حصتين في الأسبوع', 'حصص فردية عبر الإنترنت', 'مواد تعليمية', 'تتبع التقدم'],
        },
        professional: {
          name: 'قياسي',
          price: '300',
          currency: 'درهم',
          description: 'أفضل قيمة للمتعلمين المنتظمين.',
          features: ['حصتين في الأسبوع', 'فردي أو مجموعات صغيرة', 'جدولة أولوية', 'شهادة', 'دعم 24/7'],
          popular: 'الأكثر شعبية',
        },
        intensive: {
          name: 'مكثف',
          price: '500',
          currency: 'درهم',
          description: 'تعلم مسرع للتقدم السريع.',
          features: ['3 حصص في الأسبوع', 'منهج مخصص', 'تحضير للامتحانات', 'توجيه مهني', 'تمرين إضافي'],
        },
        getStarted: 'ابدأ الآن',
        choosePlan: 'اختر الخطة',
      },
      // Testimonials
      testimonials: {
        label: 'آراء الطلاب',
        title: 'ماذا يقول طلابنا',
        subtitle: 'تعليقات حقيقية من طلابنا الرائعين',
      },
      // About
      about: {
        label: 'من نحن',
        title: 'عمق في التعلم. تميز في النتائج.',
        p1: 'أكاديمية أبيسال هي أكاديمية إنجليزية عبر الإنترنت مكرسة لمساعدة الطلاب من جميع الأعمار على إتقان مهارات التواصل. تأسست برؤية جعل التعليم الإنجليزي الجيد متاحاً في جميع أنحاء العالم.',
        p2: 'يستخدم معلمونا الخبراء أساليب حديثة وتفاعلية لضمان تحقيق كل طالب لأهدافه اللغوية—سواء للمدرسة أو المهنة أو النمو الشخصي.',
        location: 'الموقع',
        contact: 'تواصل',
        morocco: 'شمال المغرب',
        online: 'عبر الإنترنت عالمياً',
      },
      // Why Us - Full Arabic
      whyUs: {
        label: 'لماذا نحن',
        title: 'لماذا أبيسال؟',
        online: {
          title: '100% عبر الإنترنت',
          description: 'تعلم من أي مكان في العالم. كل ما تحتاجه هو اتصال بالإنترنت.',
        },
        teachers: {
          title: 'معلمون خبراء',
          description: 'ناطقون باللغة الأم ومحترفون معتمدون بسنوات من الخبرة.',
        },
        flexible: {
          title: 'جدول مرن',
          description: 'احجز حصص تناسب أسلوب حياتك. صباحاً، مساءً، أو عطلة نهاية الأسبوع.',
        },
        certified: {
          title: 'نتائج معتمدة',
          description: 'شهادات معترف بها وتتبع تقدم مثبت لكل طالب.',
        },
      },
      // Gallery - Full Arabic
      gallery: {
        label: 'المعرض',
        title: 'حياة في أبيسال',
        subtitle: 'شاهد كيف تحول حصصنا عبر الإنترنت الطلاب إلى متحدثين إنجليز واثقين.',
        videos: 'فيديوهات',
        watchOnYoutube: 'شاهد على يوتيوب',
        playVideo: 'شغل الفيديو',
        academyActivities: 'أنشطة الأكاديمية',
        behindScenes: 'خلف الكواليس في حصصنا عبر الإنترنت',
      },
      // Contact - Full Arabic
      contact: {
        label: 'تواصل معنا',
        title: 'ابدأ رحلتك',
        subtitle: 'جاهز للتعلم؟ تواصل معنا وسنجد البرنامج المثالي لك.',
        info: 'معلومات التواصل',
        form: 'أرسل رسالة',
        name: 'الاسم',
        email: 'البريد الإلكتروني',
        phone: 'الهاتف',
        location: 'الموقع',
        hours: 'المواعيد',
        program: 'البرنامج',
        message: 'الرسالة',
        selectProgram: 'اختر برنامجاً',
        kidsOption: 'أطفال (5-9)',
        teensOption: 'مراهقين (10-17)',
        adultsOption: 'كبار (18+)',
        corporateOption: 'شركات',
        send: 'أرسل الرسالة',
        sending: 'جاري الإرسال...',
        sent: 'تم إرسال الرسالة!',
        whatsapp: 'تفضل واتساب؟',
        chatWhatsapp: 'دردش على واتساب',
      },
      // Footer - Full Arabic
      footer: {
        quickLinks: 'روابط سريعة',
        programs: 'البرامج',
        contactUs: 'تواصل معنا',
        rights: 'جميع الحقوق محفوظة.',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

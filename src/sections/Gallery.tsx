import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Play, ExternalLink, X } from 'lucide-react';

// Stock images from Unsplash - Online learning / virtual classroom
const images = [
  {
    src: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&h=600&fit=crop',
    title: 'Virtual Classroom',
    description: 'Interactive online sessions',
  },
  {
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
    title: 'Online Learning',
    description: 'Students learning from home',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
    title: 'Group Sessions',
    description: 'Collaborative learning',
  },
];

const videos = [
  {
    id: 'ZUQqIiB92kQ',
    title: 'Learning Methodology',
    duration: '02:34',
    thumbnail: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop',
  },
  {
    id: 'cWaUIP2ML38',
    title: 'Student Success Stories',
    duration: '01:45',
    thumbnail: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
  },
];

export default function Gallery() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="relative py-32 lg:py-40 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className={`mb-20 ${isRTL ? 'text-right' : ''}`}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-400 mb-6 tracking-[0.3em] uppercase font-mono"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('gallery.label')}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[clamp(3rem,6vw,5rem)] font-bold text-black leading-[0.9] mb-6"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('gallery.title')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg max-w-md"
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {t('gallery.subtitle')}
          </motion.p>
        </div>

        {/* Images Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {images.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden border border-black">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <div className={`mt-4 ${isRTL ? 'text-right' : ''}`}>
                <h3 className="text-lg font-bold text-black">{image.title}</h3>
                <p className="text-sm text-gray-500">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-black pt-16"
        >
          <h3 className={`text-2xl font-bold text-black mb-8 ${isRTL ? 'text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
            {t('gallery.videos')}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {videos.map((video, index) => (
              <motion.a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-video overflow-hidden border border-black cursor-pointer"
              >
                {/* Stock thumbnail */}
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-6 h-6 text-black ml-1" fill="black" />
                  </div>
                </div>
                {/* Info */}
                <div className={`absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent ${isRTL ? 'text-right' : ''}`}>
                  <p className="text-xs text-white/70 font-mono mb-1">{video.duration}</p>
                  <h4 className="text-lg font-bold text-white">{video.title}</h4>
                  <div className={`flex items-center gap-2 mt-2 text-white/70 text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <ExternalLink className="w-3 h-3" />
                    <span>{t('gallery.watchOnYoutube')}</span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Local Video with stock thumbnail */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 border border-black"
        >
          <div className="grid md:grid-cols-2">
            {/* Stock thumbnail */}
            <div className="relative aspect-video md:aspect-auto overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&h=500&fit=crop"
                alt={t('gallery.academyActivities')}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
            <div className={`p-8 lg:p-10 flex flex-col justify-center ${isRTL ? 'text-right' : ''}`} dir={isRTL ? 'rtl' : 'ltr'}>
              <p className="text-xs text-gray-400 font-mono mb-2">MP4 • 01:20</p>
              <h4 className="text-xl font-bold text-black mb-2">{t('gallery.academyActivities')}</h4>
              <p className="text-gray-500 mb-6">{t('gallery.behindScenes')}</p>
              <a
                href="/images/gallery/PXL_20260311_124005827.TS.mp4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 font-medium text-sm w-fit"
              >
                <Play className="w-4 h-4" fill="white" />
                {t('gallery.playVideo')}
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={images[selectedImage].src}
            alt={images[selectedImage].title}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

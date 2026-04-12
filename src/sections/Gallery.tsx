import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, X, Film, Youtube, Sparkles, Maximize2 } from 'lucide-react';

const galleryImages = [
  { id: 1, src: '/images/gallery/PXL_20251028_135137890.jpg', title: 'Classroom Learning', description: 'Students engaged in interactive sessions' },
  { id: 2, src: '/images/gallery/PXL_20260402_110451324.jpg', title: 'Academy Life', description: 'Building skills together' },
];

const localVideos = [
  { id: 1, src: '/images/gallery/PXL_20260311_124005827.TS.mp4', title: 'Academy Activities', thumbnail: '/images/gallery/Gemini_Generated_Image_1qao4o1qao4o1qao.png' },
];

const youtubeVideos = [
  { id: 'ZUQqIiB92kQ', title: 'Abyssal Academy Experience' },
  { id: 'cWaUIP2ML38', title: 'Classroom Moments' },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeYouTube, setActiveYouTube] = useState<number | null>(null);
  const [activeLocalVideo, setActiveLocalVideo] = useState<number | null>(null);
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section id="gallery" className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-blue-300 font-medium text-sm">Our Gallery</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-white">Life at </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Abyssal Academy</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore our vibrant classrooms and student activities
          </p>
        </motion.div>

        {/* Main Carousel - ONE IMAGE AT A TIME */}
        <div className="relative mb-12">
          <div className="relative aspect-[16/9] max-w-4xl mx-auto rounded-2xl overflow-hidden bg-slate-800 shadow-2xl">
            {galleryImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={false}
                animate={{
                  opacity: index === currentIndex ? 1 : 0,
                  scale: index === currentIndex ? 1 : 1.1,
                  zIndex: index === currentIndex ? 10 : 0,
                }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className={`absolute inset-0 ${index === currentIndex ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-3xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-white/80 text-lg">{image.description}</p>
                </div>

                {/* Lightbox Button */}
                <button
                  onClick={() => setLightboxImage(index)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white hover:bg-white/30 transition-all"
                >
                  <Maximize2 className="w-5 h-5" />
                </button>
              </motion.div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-blue-400' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex justify-center gap-4 mb-16">
          {galleryImages.map((image, index) => (
            <button
              key={image.id}
              onClick={() => {
                setCurrentIndex(index);
                setLightboxImage(index);
              }}
              className={`w-24 h-16 rounded-lg overflow-hidden transition-all hover:scale-105 ${
                index === currentIndex ? 'ring-2 ring-blue-400 opacity-100' : 'opacity-60'
              }`}
            >
              <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>

        {/* Videos Section */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Local Video */}
          <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500 flex items-center justify-center">
                <Film className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Academy Activities</h3>
                <p className="text-slate-400 text-sm">Watch our students in action</p>
              </div>
            </div>
            
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-900">
              {activeLocalVideo === 0 ? (
                <video src={localVideos[0].src} controls autoPlay className="w-full h-full" />
              ) : (
                <>
                  <img src={localVideos[0].thumbnail} alt="Video thumbnail" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => setActiveLocalVideo(0)}
                      className="w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white transition-all hover:scale-110"
                    >
                      <Play className="w-7 h-7 ml-1" fill="white" />
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* YouTube Videos */}
          <div className="bg-slate-800/50 rounded-2xl p-5 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-red-500 flex items-center justify-center">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">YouTube Channel</h3>
                <p className="text-slate-400 text-sm">More videos on YouTube</p>
              </div>
            </div>

            <div className="space-y-3">
              {youtubeVideos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => setActiveYouTube(index)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10 hover:from-red-500/20 hover:to-orange-500/20 border border-red-500/20 hover:border-red-500/40 transition-all text-left group"
                >
                  <div className="w-12 h-12 rounded-full bg-red-500/20 group-hover:bg-red-500/30 flex items-center justify-center flex-shrink-0 transition-all">
                    <Play className="w-5 h-5 text-red-400" fill="currentColor" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-white font-semibold truncate">{video.title}</h4>
                    <p className="text-slate-400 text-sm">Click to watch on YouTube</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-red-400 transition-colors flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <button onClick={() => setLightboxImage(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white">
              <X className="w-5 h-5" />
            </button>
            <img
              src={galleryImages[lightboxImage].src}
              alt={galleryImages[lightboxImage].title}
              className="max-w-full max-h-[85vh] rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* YouTube Modal */}
      <AnimatePresence>
        {activeYouTube !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setActiveYouTube(null)}
          >
            <button onClick={() => setActiveYouTube(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white z-10">
              <X className="w-5 h-5" />
            </button>
            <div className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideos[activeYouTube].id}?autoplay=1`}
                title={youtubeVideos[activeYouTube].title}
                className="w-full h-full"
                allowFullScreen
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

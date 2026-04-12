import { useState } from 'react';
import { motion } from 'framer-motion';
import { Baby, GraduationCap, Briefcase, MapPin, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const programs = [
  {
    id: 'kids',
    name: 'Kids Program',
    ageRange: 'Ages 5-9',
    priceMorocco: 200,
    priceForeign: 50,
    icon: Baby,
    color: 'from-amber-400 to-orange-500',
    features: ['Interactive Learning', 'Games & Activities', 'Basic Communication Skills'],
  },
  {
    id: 'adolescents',
    name: 'Adolescents',
    ageRange: 'Ages 10-18',
    priceMorocco: 250,
    priceForeign: 50,
    icon: GraduationCap,
    color: 'from-blue-400 to-indigo-500',
    features: ['Core Programs', 'STEM Track Available', 'Leadership Development'],
  },
  {
    id: 'adults',
    name: 'Adults Program',
    ageRange: '18+ Years',
    priceMorocco: 300,
    priceForeign: 50,
    icon: Briefcase,
    color: 'from-emerald-400 to-teal-500',
    features: ['Professional English', 'Business Communication', 'Flexible Schedule'],
  },
];

export default function Pricing() {
  const [selectedProgram, setSelectedProgram] = useState(programs[0]);
  const [isForeign, setIsForeign] = useState(false);
  const [months, setMonths] = useState(1);

  const calculateTotal = () => {
    const price = isForeign ? selectedProgram.priceForeign : selectedProgram.priceMorocco;
    return price * months;
  };

  const getCurrency = () => isForeign ? '$' : 'DH';

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-wide">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-primary font-medium text-sm mb-6 border border-white/20">
              Investment Plans
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Choose Your <span className="text-primary">Path</span>
            </h2>
            <p className="text-navy-200 text-lg leading-relaxed">
              Transparent pricing for quality education. Select your program and calculate your investment.
            </p>
          </motion.div>

          {/* Location Toggle - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex p-1 bg-navy-700/50 rounded-2xl border border-white/10">
              <button
                onClick={() => setIsForeign(false)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  !isForeign
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-navy-300 hover:text-white'
                }`}
              >
                <MapPin className="w-4 h-4" />
                Morocco
                {!isForeign && <span className="text-xs opacity-70">(DH)</span>}
              </button>
              <button
                onClick={() => setIsForeign(true)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isForeign
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-navy-300 hover:text-white'
                }`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                International
                {isForeign && <span className="text-xs opacity-70">($)</span>}
              </button>
            </div>
          </motion.div>

          {/* Program Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {programs.map((program, index) => (
              <motion.button
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedProgram(program)}
                className={`relative text-left p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedProgram.id === program.id
                    ? 'bg-white border-primary shadow-2xl shadow-primary/20 scale-[1.02]'
                    : 'bg-navy-800/50 border-white/10 hover:border-white/30 hover:bg-navy-800'
                }`}
              >
                {/* Selected Indicator */}
                {selectedProgram.id === program.id && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    Selected
                  </div>
                )}

                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <program.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className={`text-xl font-bold mb-1 ${selectedProgram.id === program.id ? 'text-navy-900' : 'text-white'}`}>
                  {program.name}
                </h3>
                <p className={`text-sm mb-4 ${selectedProgram.id === program.id ? 'text-navy-500' : 'text-navy-300'}`}>
                  {program.ageRange}
                </p>

                <div className="flex items-baseline gap-1">
                  <span className={`text-3xl font-bold ${selectedProgram.id === program.id ? 'text-primary' : 'text-white'}`}>
                    {isForeign ? `$${program.priceForeign}` : `${program.priceMorocco} DH`}
                  </span>
                  <span className={`text-sm ${selectedProgram.id === program.id ? 'text-navy-400' : 'text-navy-400'}`}>
                    /month
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Calculator & Summary */}
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Duration Slider */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3 bg-navy-800/50 rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Duration</h3>
                <span className="px-4 py-2 bg-primary/20 text-primary font-bold rounded-lg">
                  {months} {months === 1 ? 'Month' : 'Months'}
                </span>
              </div>

              <div className="relative mb-4">
                <input
                  type="range"
                  min="1"
                  max="12"
                  value={months}
                  onChange={(e) => setMonths(Number(e.target.value))}
                  className="w-full h-3 bg-navy-700 rounded-full appearance-none cursor-pointer accent-primary"
                  style={{
                    background: `linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(months / 12) * 100}%, #1E293B ${(months / 12) * 100}%, #1E293B 100%)`
                  }}
                />
              </div>

              <div className="flex justify-between text-sm text-navy-400">
                <span>1 month</span>
                <span>6 months</span>
                <span>12 months</span>
              </div>

              {/* Features */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4">What&apos;s Included</h4>
                <div className="grid sm:grid-cols-3 gap-3">
                  {selectedProgram.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-navy-300 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                        <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Total Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl p-8 h-full flex flex-col">
                <h3 className="text-navy-400 text-sm font-medium mb-2">Your Total Investment</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-bold text-navy-900">
                    {getCurrency()}{calculateTotal()}
                  </span>
                  <span className="text-navy-400">
                    for {months} {months === 1 ? 'month' : 'months'}
                  </span>
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-navy-500">Program</span>
                    <span className="text-navy-900 font-medium">{selectedProgram.name}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-navy-500">Monthly Rate</span>
                    <span className="text-navy-900 font-medium">
                      {getCurrency()}{isForeign ? selectedProgram.priceForeign : selectedProgram.priceMorocco}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-navy-500">Duration</span>
                    <span className="text-navy-900 font-medium">{months} months</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white py-6 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl hover:shadow-primary/30 transition-all group"
                  onClick={() => {
                    const element = document.querySelector('#contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Get Started
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-center text-navy-400 text-xs mt-4">
                  No hidden fees. Cancel anytime with 7-day notice.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

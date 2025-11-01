import { MessageSquare, FileText, Lightbulb, TrendingUp, Target, Award } from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'AI Mock Interviews',
    description: 'Practice with realistic AI-powered interview simulations tailored to your industry and role.',
  },
  {
    icon: FileText,
    title: 'Resume Analysis',
    description: 'Get detailed feedback on your resume with AI-driven suggestions to make it stand out.',
  },
  {
    icon: Lightbulb,
    title: 'Career Guidance',
    description: 'Receive personalized career advice and strategies from our advanced AI mentor.',
  },
  {
    icon: TrendingUp,
    title: 'Performance Tracking',
    description: 'Monitor your progress with detailed analytics and improvement recommendations.',
  },
  {
    icon: Target,
    title: 'Job-Specific Prep',
    description: 'Prepare for specific roles with customized questions and industry insights.',
  },
  {
    icon: Award,
    title: 'Certification Ready',
    description: 'Get ready for technical certifications with comprehensive practice sessions.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-green-400">Services</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to succeed in your job search, powered by cutting-edge AI technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-green-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                <service.icon className="w-7 h-7 text-green-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function CTA() {
  const navigate = useNavigate();

  return (
    <section id="login" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-green-400" />
          <span className="text-sm text-gray-300">Start Your Success Story Today</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Ready to Land Your <span className="text-green-400">Dream Job?</span>
        </h2>

        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of professionals who make job hunting effortless with MockMentor.
          Get started in minutes, land offers in weeks.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate('/login')}
            className="group px-10 py-5 bg-green-500 hover:bg-green-600 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-3 shadow-lg shadow-green-500/50"
          >
            Start Jobs Today
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <p className="text-gray-500 text-sm mt-8">
          No credit card required • Free forever plan • Cancel anytime
        </p>
      </div>
    </section>
  );
}

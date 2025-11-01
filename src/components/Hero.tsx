import { Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

export default function Hero() {
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-emerald-900/20"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-green-500/30 rounded-full mb-8">
          <Sparkles className="w-4 h-4 text-green-400" />
          <span className="text-sm text-gray-300">AI-Powered Interview Preparation</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Ace Your Next Interview
          <br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            with MockMentor
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Practice with AI-powered mock interviews, get personalized feedback on your resume,
          and receive expert career guidance to land your dream job.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGetStarted}
            className="group px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg font-semibold transition-all transform hover:scale-105 flex items-center gap-2"
          >
            Get Started Free
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg font-semibold transition-all"
          >
            Learn More
          </button>
        </div>

        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">50K+</div>
            <div className="text-gray-400 text-sm mt-1">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">95%</div>
            <div className="text-gray-400 text-sm mt-1">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-400">24/7</div>
            <div className="text-gray-400 text-sm mt-1">AI Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Brain, Shield, Zap, Users } from 'lucide-react';

export default function Features() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-green-400">MockMentor?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              We combine advanced AI technology with industry expertise to provide you with the most
              effective interview preparation platform. Our mission is to help every job seeker
              confidently navigate their career journey.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Advanced AI Technology</h3>
                  <p className="text-gray-400">
                    Powered by state-of-the-art AI models trained on millions of successful interviews.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure & Private</h3>
                  <p className="text-gray-400">
                    Your data is encrypted and protected with enterprise-grade security measures.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instant Feedback</h3>
                  <p className="text-gray-400">
                    Get real-time analysis and actionable insights after every practice session.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community Support</h3>
                  <p className="text-gray-400">
                    Join thousands of professionals who have successfully landed their dream jobs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-3 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  </div>
                  <span className="text-green-400 font-semibold">95%</span>
                </div>
                <div className="text-center">
                  <p className="text-gray-400 mb-2">Interview Success Rate</p>
                  <p className="text-4xl font-bold text-green-400">Exceptional Results</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Users, Briefcase, Award, Globe } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '50,000+',
    label: 'Monthly Users',
    description: 'Active job seekers using MockMentor',
  },
  {
    icon: Briefcase,
    value: '125,000+',
    label: 'Monthly Interviews',
    description: 'Practice sessions completed',
  },
  {
    icon: Award,
    value: '35,000+',
    label: 'Job Offers',
    description: 'Successfully landed by our users',
  },
  {
    icon: Globe,
    value: '120+',
    label: 'Countries',
    description: 'Professionals worldwide',
  },
];

export default function Stats() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-green-400">Thousands</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join a growing community of professionals who are accelerating their careers with MockMentor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-green-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/5 group-hover:to-emerald-500/5 rounded-2xl transition-all duration-300"></div>

              <div className="relative">
                <div className="w-14 h-14 bg-green-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-500/20 transition-colors">
                  <stat.icon className="w-7 h-7 text-green-400" />
                </div>

                <div className="text-4xl font-bold text-green-400 mb-2">{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.label}</div>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

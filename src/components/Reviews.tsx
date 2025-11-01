import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah Chen',
    role: 'Software Engineer at Google',
    avatar: 'SC',
    rating: 5,
    text: 'MockMentor completely transformed my interview preparation. The AI feedback was incredibly accurate and helped me land my dream job at Google. Highly recommended!',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Product Manager at Amazon',
    avatar: 'MR',
    rating: 5,
    text: 'The resume analysis feature is a game-changer. It identified gaps I never noticed and helped me craft a compelling narrative. Got 3 offers within a month!',
  },
  {
    name: 'Emily Thompson',
    role: 'Data Scientist at Microsoft',
    avatar: 'ET',
    rating: 5,
    text: 'As someone who struggled with interview anxiety, MockMentor gave me the confidence I needed. The practice sessions felt incredibly realistic and prepared me perfectly.',
  },
  {
    name: 'David Kim',
    role: 'UX Designer at Apple',
    avatar: 'DK',
    rating: 5,
    text: 'The personalized career guidance was invaluable. MockMentor helped me pivot into a new role and provided insights I could not find anywhere else.',
  },
  {
    name: 'Jessica Martinez',
    role: 'Marketing Director at Meta',
    avatar: 'JM',
    rating: 5,
    text: 'I was skeptical about AI interview prep, but MockMentor exceeded all expectations. The feedback was detailed, actionable, and helped me improve significantly.',
  },
  {
    name: 'Alex Johnson',
    role: 'Financial Analyst at Goldman Sachs',
    avatar: 'AJ',
    rating: 5,
    text: 'Best investment in my career. The platform is intuitive, the AI is impressive, and the results speak for themselves. Landed my role in just 3 weeks!',
  },
];

export default function Reviews() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/10 to-black"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-green-400">Users Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with MockMentor.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl hover:border-green-500/50 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-green-400/50 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-green-400 fill-green-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">{review.text}</p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center font-bold text-sm">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold">{review.name}</div>
                  <div className="text-sm text-gray-400">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

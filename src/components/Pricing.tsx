import { Check, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started',
    features: [
      '5 mock interviews per month',
      'Basic resume analysis',
      'General career advice',
      'Email support',
      'Community access',
    ],
    buttonText: 'Get Started',
    popular: false,
  },
  {
    name: 'Professional',
    price: '$29',
    period: 'per month',
    description: 'For serious job seekers',
    features: [
      'Unlimited mock interviews',
      'Advanced resume analysis',
      'Personalized career guidance',
      'Priority support',
      'Interview recording & playback',
      'Performance analytics',
      'Industry-specific prep',
    ],
    buttonText: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '$99',
    period: 'per month',
    description: 'For teams and organizations',
    features: [
      'Everything in Professional',
      'Team management dashboard',
      'Bulk resume screening',
      'Custom interview templates',
      'Dedicated account manager',
      'API access',
      'White-label options',
      'Advanced analytics',
    ],
    buttonText: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const navigate = useNavigate();

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/5 to-black"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple, <span className="text-green-400">Transparent</span> Pricing
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include our core features.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 bg-white/5 backdrop-blur-sm border rounded-2xl transition-all duration-300 ${
                plan.popular
                  ? 'border-green-500 scale-105 md:scale-110 shadow-2xl shadow-green-500/20'
                  : 'border-white/10 hover:border-green-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-2 px-4 py-1 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full text-sm font-semibold">
                    <Sparkles className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                <div className="flex items-end justify-center gap-2">
                  <span className="text-5xl font-bold text-green-400">{plan.price}</span>
                  <span className="text-gray-400 mb-2">/ {plan.period}</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/login')}
                className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                  plan.popular
                    ? 'bg-green-500 hover:bg-green-600 transform hover:scale-105'
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                {plan.buttonText}
              </button>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

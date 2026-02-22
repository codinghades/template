import { Star, Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "29.99",
    description:
      "Ideal for individuals and small teams starting their development journey.",
    features: [
      "Up to 5 team members",
      "10GB storage",
      "Basic Analytics",
      "API Access",
      "Mobile App",
    ],
    mostPopular: false,
  },
  {
    name: "Professional",
    price: "79.99",
    description:
      "Perfect for growing teams and enterprises needing advanced features.",
    features: [
      "Up to 20 team members",
      "100GB storage",
      "Advanced Analytics",
      "Priority Support",
      "Custom Integrations",
    ],
    mostPopular: true,
  },
  {
    name: "Enterprise",
    price: "199.99",
    description:
      "Tailored solutions for large organizations with specific needs.",
    features: [
      "Unlimited team members",
      "1TB storage",
      "Dedicated Account Manager",
      "24/7 Support",
      "Custom Solutions",
    ],
    mostPopular: false,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-7xl mx-auto ">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            <span className="bg-linear-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Simple, Transparent
            </span>
            <br />
            <span className="bg-linear-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Pricing Plans
            </span>
          </h2>
          <p className="text-gray-400 text-xl sm:text-lg max-w-2xl mx-auto ">
            Choose the perfect plan for your needs and budget. All plans include
            a 30-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
          {plans.map((plan, key) => (
            <div
              key={key}
              className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 overflow-visible group flex flex-col h-full ${plan.mostPopular ? "border-blue-500/50 shadow-2xl shadow-blue-500/20 lg:scale-105" : "border-slate-800 hover:border-slate-700"}`}
            >
                <div className="absolute inset-0 bg-linear-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-lg" />
              {plan.mostPopular && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-linear-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                    <Star className="w-3 h-3 sm:w-3 sm:h-3 fill-white" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}

                <div className="pt-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-4xl font-bold bg-linear-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">${plan.price}</span>
                    <span className="text-gray-400 ml-1">/month</span>
                  </div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-row">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                       <div className="shrink-0 w-4 h-4 mr-2 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                         <Check className="w-2.5 h-2.5 sm:h-3 sm:w-3 text-blue-400" />
                       </div>
                        <span className="text-gray-300 text-sm sm:text-base">
                            {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-2.5 sm:p-3 px-4 sm:px-6 rounded-lg font-semibold transition duration-300 mt-auto hover:scale-102 cursor-pointer text-sm sm:text-base 
                    ${plan.mostPopular 
                    ? "bg-linear-to-b from-blue-500 to-cyan-500" 
                    : "bg-white/5 border border-white/10 hover:bg-white/10"}`}>
                        Get Started
                  </button>
                </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
            <p className="text-gray-400 text-base">
                Need a custom plan? <a href="/contact" className="text-blue-400 hover:text-blue-300 duration-300">Contact Us</a>
            </p>
        </div>
      </div>
    </section>
  );
}

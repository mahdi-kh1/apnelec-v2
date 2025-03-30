import { Zap, Shield, Globe, BarChart } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-10 w-10 text-blue-600" />,
    title: "Lightning Fast",
    description: "Our solutions are optimized for speed and performance, ensuring your business operates efficiently."
  },
  {
    icon: <Shield className="h-10 w-10 text-blue-600" />,
    title: "Secure & Reliable",
    description: "Built with security in mind, our products protect your data with industry-leading standards."
  },
  {
    icon: <Globe className="h-10 w-10 text-blue-600" />,
    title: "Global Reach",
    description: "Connect with customers worldwide with our scalable infrastructure and localization features."
  },
  {
    icon: <BarChart className="h-10 w-10 text-blue-600" />,
    title: "Data-Driven",
    description: "Make informed decisions with comprehensive analytics and reporting tools."
  }
];

export default function FeatureSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We provide comprehensive solutions tailored to your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-gray-700 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
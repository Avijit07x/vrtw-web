import { Code, Rocket, Zap } from "lucide-react";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Vite Lightning Fast",
      description:
        "Powered by Vite for instant hot module replacement and blazing fast builds. Development has never been this smooth.",
      gradient: "from-orange-400 to-red-400",
    },
    {
      icon: Code,
      title: "React 19 Ready",
      description:
        "Latest React with TypeScript support, modern hooks, and concurrent features. Build the future of web apps today.",
      gradient: "from-blue-400 to-cyan-400",
    },
    {
      icon: Rocket,
      title: "TailwindCSS v4",
      description:
        "The newest TailwindCSS with improved performance, better IntelliSense, and modern CSS features built right in.",
      gradient: "from-purple-400 to-pink-400",
    },
  ];

  return (
    <section className="px-6 py-20 bg-[#0c0b0e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-lg md:text-xl text-gray-300">
            Pre-configured with the best modern tools
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

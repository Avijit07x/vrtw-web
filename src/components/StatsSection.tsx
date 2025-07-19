// components/StatsSection.tsx
import { Download, Star, Zap } from "lucide-react";
import StatCard from "./StatCard";

const StatsSection = () => {
  const stats = [
    {
      icon: Download,
      value: "50K+",
      label: "Downloads",
      iconColor: "text-purple-400",
    },
    {
      icon: Star,
      value: "2.5K+",
      label: "GitHub Stars",
      iconColor: "text-yellow-400",
    },
    {
      icon: Zap,
      value: "< 30s",
      label: "Setup Time",
      iconColor: "text-green-400",
    },
  ];

  return (
    <section className="px-6 py-20 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

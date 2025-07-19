import React from "react";

interface StatCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  iconColor: string;
}

const StatCard = ({
  icon: IconComponent,
  value,
  label,
  iconColor,
}: StatCardProps) => {
  return (
    <div>
      <div className="flex items-center justify-center mb-4">
        <IconComponent className={`w-8 h-8 ${iconColor}`} />
      </div>
      <div className="text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-gray-300">{label}</div>
    </div>
  );
};

export default StatCard;

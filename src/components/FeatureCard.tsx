import React from "react";

interface FeatureCardProps {
	icon: React.ComponentType<{ className?: string }>;
	title: string;
	description: string;
	gradient: string;
}

const FeatureCard = ({
	icon: IconComponent,
	title,
	description,
	gradient,
}: FeatureCardProps) => {
	return (
		<div className="bg-[#1a1032] backdrop-blur-sm border border-[#352a6e] rounded-2xl p-8 hover:border-[#4f4f87] shadow-blue-700 transition-all ">
			<div
				className={`w-12 h-12 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center mb-6`}
			>
				<IconComponent className="w-6 h-6 text-white" />
			</div>
			<h3 className="text-xl md:text-2xl font-bold text-white mb-4">
				{title}
			</h3>
			<p className="text-gray-300 leading-relaxed">{description}</p>
		</div>
	);
};

export default FeatureCard;

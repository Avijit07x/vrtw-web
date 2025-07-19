import { Zap } from "lucide-react";
import CommandDemo from "./CommandDemo";
import FloatingParticles from "./FloatingParticles";

const HeroSection = () => {
	return (
		<section className="relative px-6 py-20 pt-10 text-center">
			<div className="max-w-4xl mx-auto">
				<div className="inline-flex items-center max-md:text-xs space-x-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm mb-8 border border-purple-500/30">
					<Zap className="w-4 h-4" />
					<span>Lightning fast project setup</span>
				</div>

				<h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
					Setup Modern React
					<span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
						{" "}
						Projects
					</span>
					<br />
					in Seconds
				</h1>

				<p className="text-base md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
					Create production-ready Vite + React + TailwindCSS v4
					projects with one simple command. No configuration needed,
					just pure development bliss.
				</p>

				<CommandDemo />

				<div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
					<a
						href="https://www.npmjs.com/package/create-vrtw?activeTab=readme"
						target="_blank"
						className="max-sm:w-full"
					>
						<button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white max-sm:w-full px-8 py-3 rounded-xl font-semibold md:text-lg hover:from-purple-600 hover:to-pink-600 transition-all transform hover:scale-105">
							Get Started
						</button>
					</a>
					<a
						href="https://github.com/avijit07x/create-vrtw#readme"
						target="_blank"
						className="max-sm:w-full"
					>
						<button className="border border-slate-600 text-white px-8 py-3 rounded-xl max-sm:w-full font-semibold md:text-lg hover:bg-slate-800/50 transition-all">
							View Examples
						</button>
					</a>
				</div>
			</div>

			<FloatingParticles />
		</section>
	);
};

export default HeroSection;

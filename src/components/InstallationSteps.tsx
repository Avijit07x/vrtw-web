import InstallationStep from "./InstallationStep";

const steps = [
	{
		number: 1,
		title: "Create Project",
		command: "npx create-vrtw",
	},
	{
		number: 2,
		title: "Navigate to Directory",
		command: "cd my-awesome-app",
	},
	{
		number: 3,
		title: "Start Development",
		command: "npm run dev",
	},
];

const InstallationSteps = () => (
	<section className="px-6 py-20" aria-labelledby="quick-setup-heading">
		<div className="max-w-4xl mx-auto">
			<header className="text-center mb-16">
				<h2
					id="quick-setup-heading"
					className="text-4xl font-bold text-white mb-4"
				>
					Quick Setup
				</h2>
				<p className="text-xl text-gray-300">
					Three commands to rule them all
				</p>
			</header>

			<ol className="space-y-8" aria-label="Installation steps">
				{steps.map((step) => (
					<li key={step.number}>
						<InstallationStep {...step} />
					</li>
				))}
			</ol>

			<div className="mt-12 text-center">
				<p className="text-gray-300 text-lg">
					That's it! Your modern React app is ready to go. 🚀
				</p>
			</div>
		</div>
	</section>
);

export default InstallationSteps;

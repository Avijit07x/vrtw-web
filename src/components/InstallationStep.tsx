interface InstallationStepProps {
	number: number;
	title: string;
	command: string;
}

const InstallationStep = ({
	number,
	title,
	command,
}: InstallationStepProps) => {
	return (
		<div className="flex items-start space-x-6">
			<div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
				{number}
			</div>
			<div className="flex-1">
				<h3 className="text-xl font-semibold text-white mb-2">
					{title}
				</h3>
				<div className="bg-[#1a1032] rounded-lg p-4 font-mono text-green-400">
					{command}
				</div>
			</div>
		</div>
	);
};

export default InstallationStep;

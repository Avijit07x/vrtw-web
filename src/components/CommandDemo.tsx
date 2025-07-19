import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CommandDemoProps {
	command?: string;
}

const CommandDemo = ({ command = "npx create-vrtw" }: CommandDemoProps) => {
	const [copied, setCopied] = useState(false);

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 mb-12 max-w-2xl mx-auto">
			<div className="flex items-center justify-between mb-4">
				<div className="flex items-center space-x-2">
					<div className="w-3 h-3 bg-red-500 rounded-full"></div>
					<div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
					<div className="w-3 h-3 bg-green-500 rounded-full"></div>
				</div>
				<button
					onClick={() => copyToClipboard(command)}
					className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors"
				>
					{copied ? (
						<Check className="w-4 h-4" />
					) : (
						<Copy className="w-4 h-4" />
					)}
					<span className="text-sm">
						{copied ? "Copied!" : "Copy"}
					</span>
				</button>
			</div>
			<code className="text-green-400 mt-2 font-mono max-md:text-sm text-lg block">
				$ {command}
			</code>
		</div>
	);
};

export default CommandDemo;

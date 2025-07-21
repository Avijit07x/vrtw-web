import { Download, Star, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import StatCard from "./StatCard";

const StatsSection = () => {
	const [downloads, setDownloads] = useState<number | null>(null);
	const [stars, setStars] = useState<number | null>(null);

	useEffect(() => {
		// NPM downloads
		fetch(
			"https://api.npmjs.org/downloads/point/2000-01-01:9999-12-31/create-vrtw"
		)
			.then((r) => r.json())
			.then((d) => setDownloads(d.downloads));

		// GitHub stars
		fetch("https://api.github.com/repos/avijit07x/create-vrtw")
			.then((r) => r.json())
			.then((d) => setStars(d.stargazers_count));
	}, []);

	const stats = [
		{
			icon: Download,
			value:
				downloads !== null
					? downloads > 1000
						? `${(downloads / 1000).toFixed(1)}K+`
						: downloads.toLocaleString()
					: "...",
			label: "Downloads",
			iconColor: "text-purple-400",
		},
		{
			icon: Star,
			value:
				stars !== null
					? stars > 1000
						? `${(stars / 1000).toFixed(1)}K+`
						: stars.toLocaleString()
					: "...",
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
		<section className="px-6 py-20 bg-[#0c0b0e]">
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

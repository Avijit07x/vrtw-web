import { Github, Terminal } from "lucide-react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { SplitText } from "gsap/all";


const Navigation = () => {
	useGSAP(() => {
		const logoword = SplitText.create(".logo-text", { type: 'words' });

		gsap.to(".logo", {
			opacity: 1,
			y:0,
			duration: 1,
			stagger: 0.06,
			ease:"sine.in"
		})
		gsap.from(logoword.words,{opacity:0,yPercent:100,duration:1.2,stagger:0.06,ease:"expo.out"})
	})

	return (
		<nav className="relative z-10 px-6 py-4">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				<div className="flex items-center space-x-2">
					<div className="logo w-8 h-8 bg-gradient-to-r from-[#805ccd] to-[#4a5dd7] rounded-lg flex items-center justify-center opacity-0 translate-y-3">
						<Terminal className="w-5 h-5 text-white" />
					</div>
					<span className="logo-text text-xl font-bold text-white">
						create-vrtw
					</span>
				</div>
				<div className=" flex items-center space-x-4">
					<a
						href="https://github.com/avijit07x/create-vrtw"
						className="logo flex items-center  opacity-0 translate-y-3 space-x-1 text-gray-300 hover:text-white transition-colors"
						target="_blank"
					>
						<Github className="w-4 h-4" />
						<span className="logo-text">GitHub</span>
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;

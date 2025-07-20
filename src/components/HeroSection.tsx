import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { SplitText } from "gsap/all";
import { Zap } from "lucide-react";
import CommandDemo from "./CommandDemo";
import FloatingParticles from "./FloatingParticles";

const HeroSection = () => {
   
  useGSAP(() => {
    const heading = SplitText.create('#text01', { type: 'lines' });
    const smallText =  SplitText.create('#text02',{type:'lines'})
    
    
    gsap.from(heading.lines, { yPercent: 100, opacity: 0, duration: 1.2,stagger:0.07 ,ease: "expo.out",});
    gsap.from(smallText.lines, { yPercent: 100, opacity: 0, duration: 1.2, stagger: 0.05, ease: "expo.out", delay: 0.5 });
    
    gsap.to(".main-button", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "sine.in",
      stagger: 0.06,
      
    })
  })


  
  return (
    <section className="relative px-6 py-20 pt-10 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center max-md:text-xs space-x-2 bg-[#59387d] text-gray-200 px-4 py-2 rounded-full text-sm mb-8 border border-purple-500/30">
          <Zap className="w-4 h-4" />
          <span>Lightning fast project setup</span>
        </div>

        <h1 id="text01" className="text-4xl md:text-7xl font-semibold text-white mb-6 leading-tight md:leading-20">
          Setup Modern React
          <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            {" "}
            Projects
          </span>
          <br />
          in Seconds
        </h1>

        <p id="text02" className="text-base md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
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
            <button  className="main-button bg-gradient-to-r from-[#715c9b] to-[#5366dd] text-white max-sm:w-full px-8 py-3 rounded-xl font-semibold md:text-lg  transition-all transform hover:scale-105 opacity-0 translate-y-16">
              Get Started
            </button>
          </a>
          <a
            href="https://github.com/avijit07x/create-vrtw#readme"
            target="_blank"
            className="max-sm:w-full"
          >
            <button className="main-button border border-slate-600 text-white px-8 py-3 rounded-xl max-sm:w-full font-semibold md:text-lg hover:bg-slate-800/50 transition-all opacity-0 translate-y-16">
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


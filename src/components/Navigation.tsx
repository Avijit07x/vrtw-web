// components/Navigation.tsx
import { Github, Terminal } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="relative z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
            <Terminal className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">create-vrtw</span>
        </div>
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/avijit07x/create-vrtw"
            className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
            target="_blank"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

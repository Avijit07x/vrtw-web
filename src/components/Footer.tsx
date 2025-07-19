// components/Footer.tsx
import { Terminal } from "lucide-react";

const Footer = () => {
  return (
    <footer className="px-6 py-12 border-t border-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">create-vrtw</span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/avijit07x/create-vrtw#readme"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              Documentation
            </a>
            <a
              href="https://github.com/avijit07x/create-vrtw"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://www.npmjs.com/package/create-vrtw?activeTab=readme"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
            >
              npm
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-gray-400">
          <p>&copy; 2025 create-vrtw. Built with ❤️ for developers.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { Info } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-black/50 backdrop-blur-sm border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            MCP Server Tester
          </h1>
          <a
            target="_blank"
            href="https://github.com/Nishant0121/MCPServer"
            className="text-blue-400 hover:text-blue-300 transition-colors"
            title="Documentation"
          >
            <Info size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

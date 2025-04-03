import React from "react";
import { Link } from "react-router-dom";
import { Menu, Settings, Server, Package, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"; // ShadCN Drawer Menu
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Server className="w-8 h-8 text-emerald-400" />
            <span className="ml-2 text-xl font-bold">MCP Manager</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/marketplace" icon={<Package />} text="Marketplace" />
            <NavLink
              to="/configuration"
              icon={<Settings />}
              text="Configuration"
            />
            <NavLink to="/account" icon={<User />} text="Account" />
          </div>

          {/* Mobile Navigation - ShadCN Drawer */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-10 h-10" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="bg-gray-900 text-white">
                <div className="flex flex-col space-y-4 p-4">
                  <NavLink
                    to="/marketplace"
                    icon={<Package />}
                    text="Marketplace"
                  />
                  <NavLink
                    to="/configuration"
                    icon={<Settings />}
                    text="Configuration"
                  />
                  <NavLink to="/account" icon={<User />} text="Account" />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Reusable Navigation Link Component
const NavLink = ({
  to,
  icon,
  text,
}: {
  to: string;
  icon: React.ReactNode;
  text: string;
}) => (
  <Link
    to={to}
    className="flex items-center space-x-2 hover:text-emerald-400 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;

import { Outlet } from "react-router-dom";
import Navbar from "../navbar";

function Layout() {
  return (
    <div className="flex flex-col h-full">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-10">
        <Navbar />
      </div>

      {/* Content */}
      <div className="p-4 flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;

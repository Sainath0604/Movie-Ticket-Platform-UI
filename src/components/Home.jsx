import Movies from "./Movies";
import Dashboard from "./Dashboard";
import { useState } from "react";
import Sidebar from "./Sidebar";

function Home() {
  const [activeComponent, setActiveComponent] = useState(
    sessionStorage.getItem("activeComponent") || "Dashboard"
  );

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
    sessionStorage.setItem("activeComponent", componentName);
  };

  return (
    <div className="m-0 h-screen">
      <div className="flex flex-col lg:flex-row">
        <div className="md:w-[15%]">
          <Sidebar
            activeComponent={activeComponent}
            handleComponentChange={handleComponentChange}
          />
        </div>
        <div className="border-l border-gray-600 md:w-[85%]">
          {activeComponent === "Dashboard" && <Dashboard />}
          {activeComponent === "Movies" && <Movies />}
        </div>
      </div>
    </div>
  );
}

export default Home;

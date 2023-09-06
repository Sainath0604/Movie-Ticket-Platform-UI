import Movies from "./Movies";
import Dashboard from "./Dashboard";
import { useState } from "react";
import Sidebar from "./Sidebar";

function Home() {
  const [activeComponent, setActiveComponent] = useState("Movies"); // Initialize the activeComponent state with "Movies"

  const handleComponentChange = (componentName) => {
    setActiveComponent(componentName);
  };
  return (
    <div className="m-0 h-screen">
      <div className="flex flex-col lg:flex-row">
        <Sidebar
          activeComponent={activeComponent}
          handleComponentChange={handleComponentChange}
        />
        <div className=" md:w-4/5">
          {activeComponent === "Movies" && <Movies />}
          {activeComponent === "Dashboard" && <Dashboard />}
        </div>
      </div>
    </div>
  );
}

export default Home;

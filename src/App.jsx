import { useState } from "react";
import "./App.css";
import { Tabs, Tab } from "@nextui-org/react";
import Home from "./Home";
import ProjectPage from "./ProjectPage";
import Experiences from "./ExperiencesPage";
import ThemeSwitcher from "./ThemeSwitcher";
import { useLocation } from "react-router-dom";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const location = useLocation();

    const toggleDarkMode = () => setDarkMode(prevMode => !prevMode);

    const getSelectedKey = () => {
        const path = location.pathname;
        if (path.includes("/experiences")) {
            return "experiences";
        } else if (path.includes("/ProjectPage")) {
          return "projectpage"
        }
        return "home";
    };

    return (
        <main className="h-full w-full text-foreground bg-background overflow-auto py-16">
            <div className="relative flex flex-col max-w-sm md:max-w-3xl m-auto p-8">
                <Tabs defaultSelectedKey={getSelectedKey()} aria-label="Pages">
                    <Tab key="home" title="Home" className="w-full">
                        <Home />
                    </Tab>
                    <Tab key="projects" title="Projects" className="w-full">
                        <ProjectPage />
                    </Tab>
                    <Tab
                        key="experiences"
                        title="Experiences"
                        className="w-full"
                    >
                        <Experiences />
                    </Tab>
                </Tabs>
            </div>
            <div className="absolute top-8 right-7">
                <ThemeSwitcher
                    toggleDarkMode={toggleDarkMode}
                    darkMode={darkMode}
                />
            </div>
        </main>
    );
}

export default App;

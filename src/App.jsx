import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Tabs, Tab } from "@nextui-org/react";
import Home from './Home';
import Experiences from './Experiences'

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className='h-full w-full text-foreground bg-background overflow-auto py-16'>
      <div className='relative flex flex-col max-w-sm md:max-w-3xl m-auto p-8'>
        <Tabs defaultSelectedKey="home" aria-label="Pages">
          <Tab key="home" title="Home" className="w-full">
            <Home />
          </Tab>
          <Tab key="experiences" title="Experiences" className="w-full">
            <Experiences />
          </Tab>
        </Tabs>
      </div>
    </main>
  );
}

export default App;
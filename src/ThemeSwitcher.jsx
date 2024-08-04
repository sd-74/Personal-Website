import { Tooltip, Button } from "@nextui-org/react";
import IconSun from './assets/iconsun.svg';
import IconMoon from './assets/iconmoon.svg';

const ThemeSwitcher = ({ toggleDarkMode, darkMode }) => {
    return (
        <Tooltip
            key="theme-switcher"
            placement="bottom"
            content="Toggle Dark Mode"
        >
            <Button isIconOnly onClick={toggleDarkMode} variant="flat">
                <img 
                    src={darkMode ? IconMoon : IconSun} 
                    alt={darkMode ? "Moon Icon" : "Sun Icon"}
                    width="24"
                    height="24"
                />
            </Button>
        </Tooltip>
    );
};

export default ThemeSwitcher;
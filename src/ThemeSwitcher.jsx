import { Tooltip, Button } from "@nextui-org/react"; // Ensure these components are correctly imported
import IconSun from './assets/IconSun.svg';
import IconMoon from './assets/IconMoon.svg';

const ThemeSwitcher = ({ toggleDarkMode }) => {
    return (
        <Tooltip
            key="theme-switcher"
            placement="bottom"
            content="Toggle Dark Mode"
        >
            <Button isIconOnly onClick={toggleDarkMode} variant="flat">
                <IconSun strokeWidth='1.25' />
                <IconMoon strokeWidth='1.25' />
            </Button>
        </Tooltip>
    );
};

export default ThemeSwitcher;

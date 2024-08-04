import { useTheme } from "next-themes";
import { Button } from "@nextui-org/react";
import IconSun from "./assets/iconsun.svg";
import IconMoon from "./assets/iconmoon.svg";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Button
            isIconOnly
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            variant="flat"
        >
            <img
                src={theme === "dark" ? IconMoon : IconSun}
                alt={theme === "dark" ? "Moon Icon" : "Sun Icon"}
                width="24"
                height="24"
            />
        </Button>
    );
};

export default ThemeSwitcher;

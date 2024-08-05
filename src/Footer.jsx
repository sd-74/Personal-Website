import { Link, Button, Tooltip } from "@nextui-org/react";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconMail,
    IconBrandInstagram,
    IconBrandSpotify,
} from "@tabler/icons-react";
import { useState } from "react";

const Footer = () => {
    const [isLoadingGithub, setIsLoadingGithub] = useState(false);
    const [isLoadingLinkedin, setIsLoadingLinkedin] = useState(false);
    const [isLoadingInstagram, setIsLoadingInstagram] = useState(false);
    const [isLoadingSpotify, setIsLoadingSpotify] = useState(false)

    const handleGithubClick = () => {
        setIsLoadingGithub(true);
    };

    const handleLinkedinClick = () => {
        setIsLoadingLinkedin(true);
    };

    const handleInstagramClick = () => {
        setIsLoadingInstagram(true);
    };
    const handleSpotifyClick = () => {
        setIsLoadingSpotify(true);
    };

    return (
        <div className="flex justify-between w-full">
            <Link href="." color="foreground">
                Shubham Dey
            </Link>
            <div className="flex gap-2">
                <Tooltip key="linkedin" placement="top" content="LinkedIn">
                    <Link href="https://www.linkedin.com/in/shubham-dey-6198b4232/">
                        <Button
                            isIconOnly
                            onClick={handleLinkedinClick}
                            isLoading={isLoadingLinkedin}
                            variant="flat"
                        >
                            <IconBrandLinkedin strokeWidth="1.25" />
                        </Button>
                    </Link>
                </Tooltip>
                <Tooltip key="github" placement="top" content="GitHub">
                    <Link href="https://github.com/sd-74">
                        <Button
                            isIconOnly
                            onClick={handleGithubClick}
                            isLoading={isLoadingGithub}
                            variant="flat"
                        >
                            <IconBrandGithub strokeWidth="1.25" />
                        </Button>
                    </Link>
                </Tooltip>
                <Tooltip key="instagram" placement="top" content="Instagram">
                    <Link href="https://www.instagram.com/shubham.dey_">
                        <Button
                            isIconOnly
                            onClick={handleInstagramClick}
                            isLoading={isLoadingInstagram}
                            variant="flat"
                        >
                            <IconBrandInstagram strokeWidth="1.25" />
                        </Button>
                    </Link>
                </Tooltip>
                <Tooltip key="spotify" placement="top" content="Spotify">
                    <Link href="https://open.spotify.com/user/shubhamsd2014?si=777056d69bd34c7c">
                        <Button
                            isIconOnly
                            onClick={handleSpotifyClick}
                            isLoading={isLoadingSpotify}
                            variant="flat"
                        >
                            <IconBrandSpotify strokeWidth="1.25" />
                        </Button>
                    </Link>
                </Tooltip>
                <Tooltip key="email" placement="top" content="Email">
                    <Link href="mailto:shubhamsd2014@gmail.com">
                        <Button isIconOnly variant="flat">
                            <IconMail strokeWidth="1.25" />
                        </Button>
                    </Link>
                </Tooltip>
            </div>
        </div>
    );
};

export default Footer;
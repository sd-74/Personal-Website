import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Link,
} from "@nextui-org/react";
import { Badges } from "./Data";
import { useState } from "react";

const ExperienceCard = (props) => {
    const { experience } = props;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Card
            key={experience.title}
            isHoverable
            fullWidth
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`h-full rounded-[14px] p-[2.3px]`}
            style={{
                background: `linear-gradient(to right, ${experience.color}, ${experience.color})`,
            }}
            data-pressed={isHovered}
        >
            {/* <CardHeader className="relative flex justify-between p-4"> */}
            <CardHeader className="top-1 flex-col !items-start bg-background" >
                <h4 className="text-primary text-tiny font-bold">
                    {experience.title}
                </h4>
                <small className="text-secondary text-default-500 font-bold">{ experience.position}</small>
            </CardHeader>
            <CardBody className="col-span-12 sm:col-span-4 h-full w-full bg-background">
                <p className="text-primary font-small">
                    {experience.caption}
                </p>
            </CardBody>
            <CardFooter className="bottom-0 flex-wrap gap-1 bg-background">
                {experience.tags.map((tag) => (
                    <Image
                        key={tag}
                        alt={tag}
                        className="h-[20px]"
                        src={Badges[tag]}
                    />
                ))}
            </CardFooter>
        </Card>
        
    );
};

export default ExperienceCard;

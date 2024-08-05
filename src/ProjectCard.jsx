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

const ProjectCard = (props) => {
    const project = props.project;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={
                project.link !== "" && project.link !== "."
                    ? project.link
                    : project.github
            }
            className="w-full aspect-square"
        >
            <Card
                key={project.title}
                isPressable
                isHoverable
                disableRipple
                fullWidth
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`h-full rounded-[14px] p-[2.3px]`}
                style={{
                    background: `linear-gradient(to right, ${project.color}, ${project.color})`,
                }}
                data-pressed={isHovered}
            >
                <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                    <h4 className="text-primary text-xl font-bold mb-1">
                        {project.title}
                    </h4>
                    {props.displayDate ? (
                        <h2 className="mb-2">{project.date}</h2>
                    ) : null}
                    <p className="text-medium text-primary/60 text-left">
                        {project.caption}
                    </p>
                </CardHeader>
                <CardBody className="col-span-12 sm:col-span-4 h-full w-full bg-background rounded-[14px]"></CardBody>
                <CardFooter className="absolute bottom-0 flex-wrap gap-1">
                    {project.tags.map((tag) => (
                        <Image
                            key={tag}
                            alt={tag}
                            className="h-[20px]"
                            src={Badges[tag]}
                        />
                    ))}
                </CardFooter>
            </Card>
        </Link>
    );
};

export default ProjectCard;

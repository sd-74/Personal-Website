import { Image, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import ProjectCard from "./ProjectCard";
import { Projects } from "./Data";

const Home = () => {
    
    const [width, setWidth] = useState(window.innerWidth);

    // debounce the window resize event to prevent performance issues and weird pfp resizing
    useEffect(() => {
        const handleResize = debounce(() => {
            setWidth(window.innerWidth);
        }, 200);

        window.addEventListener("resize", handleResize);

        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="py-12 flex-col">
            <div className="flex flex-col md:flex-row justify-between mb-14">
                <div className="flex-col">
                    <h1 className="text-5xl font-bold text-primary">
                        Shubham Dey
                    </h1>
                    <p className="pt-3 text-secondary max-w-md pb-8 lg:pb-0">
                        I'm an undergraduate sophomore student pursuing a B.S. in 
                        Mathematics & Computer Science and a Minor in Business at {" "}
                        <Link href="https://www.illinois.edu/" style={{ color: '#ff5f05' }}>
                            The University of Illinois Urbana-Champaign.
                        </Link>
                    </p>
                </div>
                
                <Image
                    key={width}
                    width={width < 768 ? "full" : "160px"}
                    radius="full"
                    alt="Profile Picture"
                    src="./profile-picture.jpg"
                    className="border-2 border-foreground"
                />
    
            </div>
            <h2 className="text-3xl font-bold pb-4">Current Projects</h2>
            
            <div className="flex md:flex-row flex-col lg:flex justify-center gap-2">
                {Projects.map((project) =>
                    project.current ? (
                        <ProjectCard
                            key={project.title}
                            project={project}
                            displayDate={false}
                        />
                    ) : null
                )}
            </div>
                    
            <p className="pt-8 text-secondary">
                <i> Professionally, </i> I am very interested in Quantative Finance, and Software Development. <br />
                <i> Outside of school,</i> I enjoy playing soccer, watching sports, listening to music, and watching movies.
            </p>
        </div>
    );
};

export default Home;
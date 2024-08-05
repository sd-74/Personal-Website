import { Experiences } from "./ProjectData";
import ExperienceCard from "./ExperienceCard";


const ExperiencesPage = () => {
    const experiences = Experiences

    return (
        <div className="py-12 flex-col">
            <div className="flex flex-col md:flex-row justify-between mb-14">
                <div className="flex-col">

                    <h1 className="text-5xl font-bold text-primary">
                        Experiences
                    </h1>
                    <div className="flex-col md:grid md:grid-cols-3 gap-2 pt-8">
                        {experiences.map((experience) => (
                            <ExperienceCard key={experience.title} experience={experience} displayDate={false}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ExperiencesPage;
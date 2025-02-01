import Title from "./Title"

import img1 from '../assets/projects/1.png';
import img2 from '../assets/projects/2.png';
import img3 from '../assets/projects/3.png';

import { Github, Video } from "lucide-react";


const projects = [
    {
        id: 1,
        title: 'Plateforme E-commerce',
        description: 'Cette plateforme permet aux utilisateurs d"acheter et de vendre des produits en ligne avec une interface fluide et attrayante.',
        technologies: ['HTML', 'CSS', 'JAVA'],
        demoLink: '#',
        repoLink: '#',
        image: img1,
    },
    {
        id: 2,
        title: 'Agenda en Ligne',
        description: 'Cette plateforme permet aux utilisateurs de gérer leur emploi du temps de manière efficace.',
        technologies: [' Python', 'JavaScript', 'Django'],
        demoLink: '#',
        repoLink: '#',
        image: img2,
    },
    {
        id: 3,
        title: 'Portfolio',
        description: 'Ce site portfolio est une vitrine interactive mettant en avant mes compétences, mes projets et mon parcours professionnel. ',
        technologies: ['React.js', 'CSS', 'JavaScript', 'Tailwind css', 'Typescript', 'Next.js', 'Prisma'],
        demoLink: '#',
        repoLink: '#',
        image: img3,
    },
];

const Projects = () => {
    return (
        <div className="mt-10" id="Projects">
            <Title title="Mes Projets" />
            <div className="grid md:grid-cols-3 gap-4">
                {projects.map((project) => (
                    <div key={project.id} className="bg-base-300 p-5 h-fit rounded-xl shadow-lg ">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-xl h-56 object-cover"
                        />
                        <div>
                            <h1 className="my-2 font-bold">
                                {project.title}
                            </h1>
                            <p className="text-sm">{project.description}</p>

                        </div>
                        <div className="flex flex-wrap gap-2 my-3">
                            {project.technologies.map((tech) => (
                                <span className="badge badge-secondary badge-sm">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex">
                            <a className="btn btn-base-300 w-2/3" href={project.demoLink}>
                                Demo
                                <Video className="w-4" />
                            </a>

                            <a className="btn btn-neutral w-1/3 ml-2" href={project.repoLink}>
                                <Github className="w-4" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects

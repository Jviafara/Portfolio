import React from 'react';
import DeltaAI from '../assets/portfolio/Delta-AI.png';
import GPT3 from '../assets/portfolio/GPT3.png';
import patontas from '../assets/portfolio/Patontas.png';
import TechUse from './TechUse';

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: GPT3,
            // description:
            //     'Fully responsive web application design usin react and tailwind',
            liveDemo: 'https://gpt-3aidemo.netlify.app',
            codeLink: 'https://github.com/Jviafara/GPT-3',
            techs: ['react', 'tailwind'],
        },
        {
            id: 2,
            src: DeltaAI,
            // description:
            //     'Aplicación fullstack usando openAI API para generar imágenes a partir de una frase cualquiera y con la opción de compartir dichas imágenes con todos los usuarios y guardar las imágenes en la nube.',
            liveDemo: 'https://delta-ai.netlify.app/',
            codeLink: 'https://github.com/Jviafara/Delta-AI',
            techs: ['nodejs', 'mongo', 'express', 'react', 'tailwind'],
        },
        {
            id: 3,
            src: patontas,
            liveDemo: 'https://patontas.netlify.app/products',
            codeLink: '',
            techs: ['nodejs', 'mongo', 'express', 'react', 'tailwind'],
        },
    ];

    return (
        <div
            name="Projects"
            className="bg-gradient-to-b from-black to-gray-800 w-full
         text-white pt-20 md:h-full">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-4">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Projects
                    </p>
                    <p className="py-6">Check out some of my work!</p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-10 ">
                    {projects.map(
                        ({
                            id,
                            src,
                            liveDemo,
                            codeLink,
                            techs,
                            description,
                        }) => (
                            <div
                                key={id}
                                className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
                                <img src={src} alt="preview" />
                                <div className="flex items-center justify-center">
                                    <button className="w-1/2 px-6 py-3 m-4 duration200 hover:scale-105">
                                        <a
                                            href={liveDemo}
                                            target="_blank"
                                            rel="noreferrer">
                                            Live Demo
                                        </a>
                                    </button>
                                    <button className="w-1/2 px-6 py-3 m-4 duration200 hover:scale-105">
                                        <a
                                            href={codeLink}
                                            target="_blank"
                                            rel="noreferrer">
                                            Code
                                        </a>
                                    </button>
                                </div>
                                <div className="flex items-center justify-evenly gap-2 p-4">
                                    {techs.map((tech) => (
                                        <div className="group flex items-center">
                                            <div className="group-hover:hidden">
                                                <TechUse tech={tech} />
                                            </div>
                                            <p className="hidden group-hover:flex">
                                                {tech.toUpperCase()}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Projects;

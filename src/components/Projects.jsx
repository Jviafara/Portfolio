import React, { useState } from 'react';
import DeltaAI from '../assets/portfolio/Delta-AI.png';
import GPT3 from '../assets/portfolio/GPT3.png';
import patontas from '../assets/portfolio/Patontas.png';
import TechUse from './TechUse';

const Projects = () => {
    const [projectInfo, setProjectInfo] = useState(false);
    const [project, setProject] = useState(null);
    const note =
        'BackEnd corriendo en render puede que tarde entre 30 y 60 segundos en cargar los recursos.';

    const projects = [
        {
            id: 1,
            src: GPT3,
            name: 'GPT-3',
            description:
                'Fully responsive web application design usin react and tailwind',
            liveDemo: 'https://gpt-3aidemo.netlify.app',
            codeLink: 'https://github.com/Jviafara/GPT-3',
            techs: ['react', 'tailwind'],
        },
        {
            id: 2,
            src: DeltaAI,
            name: 'DeltaAI',
            note: note,
            description:
                'Aplicación fullstack usando openAI API para generar imágenes a partir de una frase cualquiera y con la opción de compartir dichas imágenes con todos los usuarios y guardar las imágenes en la nube.',
            liveDemo: 'https://delta-ai.netlify.app/',
            codeLink: 'https://github.com/Jviafara/Delta-AI',
            techs: ['nodejs', 'mongo', 'express', 'react', 'tailwind'],
        },
        {
            id: 3,
            src: patontas,
            name: 'Patontas',
            description:
                'E-commerce web page fullstack para una pequeñá tienda de artesanias hechas a mano',
            note: note,
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
                    <p className="py-6">
                        Check out some of my work! <strong></strong>
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 py-10 ">
                    {projects.map(({ id, src, name }) => (
                        <div
                            key={id}
                            className="shadow-md shadow-gray-600 rounded-lg duration-200 hover:scale-105">
                            <div className="bg-gray-400 rounded-t-lg flex justify-center font-bold text-lg">
                                <h1>{name}</h1>
                            </div>
                            <button
                                type="button"
                                onClick={() => {
                                    setProjectInfo(true);
                                    setProject(
                                        projects.filter((e) => e.id === id)
                                    );
                                }}>
                                <img
                                    src={src}
                                    alt="preview"
                                    className="rounded-b-lg -mb-1.5 h-full w-full"
                                />
                            </button>
                        </div>
                    ))}
                </div>
                {projectInfo && (
                    <div>
                        <div className="bg-gray-400 rounded-t-lg flex justify-between items-center font-bold text-lg p-2">
                            <h1 className="ml-2">{project[0].name}</h1>
                            <button
                                type="button"
                                onClick={() => setProjectInfo(false)}
                                className="bg-red-500 px-3 py-1 rounded-full">
                                X
                            </button>
                        </div>
                        <div className="flex gap-8 flex-col lg:flex-row">
                            <div className="w-full lg:w-2/3 ">
                                <img
                                    src={project[0].src}
                                    alt="preview"
                                    className=""
                                />
                                {project[0].note && (
                                    <strong className="text-sm">
                                        Note: {project[0].note}
                                    </strong>
                                )}
                            </div>
                            <div className="w-full lg:w-1/3 flex flex-col">
                                <div className="text-lg my-2">
                                    <p>{project[0].description}</p>
                                </div>
                                <div className="flex items-center justify-center">
                                    <button className="w-1/2 px-6 py-3 m-4 shadow-md shadow-gray-600 rounded-lg duration-300 hover:scale-110">
                                        <a
                                            href={project[0].liveDemo}
                                            target="_blank"
                                            rel="noreferrer">
                                            Live Demo
                                        </a>
                                    </button>
                                    <button className="w-1/2 px-6 py-3 m-4 shadow-md shadow-gray-600 rounded-lg duration-300 hover:scale-110">
                                        <a
                                            href={project[0].codeLink}
                                            target="_blank"
                                            rel="noreferrer">
                                            Code
                                        </a>
                                    </button>
                                </div>
                                <div className="flex items-center justify-evenly gap-2 p-4">
                                    {project[0].techs.map((tech) => (
                                        <div
                                            key={tech}
                                            className="group flex items-center">
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
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Projects;

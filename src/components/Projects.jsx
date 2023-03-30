import React from 'react';
import DeltaAI from '../assets/portfolio/Delta-AI.png';
import GPT3 from '../assets/portfolio/GPT3.png';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';

const Projects = () => {
    const projects = [
        {
            id: 1,
            src: GPT3,
            liveDemo: 'https://gpt-3aidemo.netlify.app',
            codeLink: 'https://github.com/Jviafara/GPT-3',
        },
        {
            id: 2,
            src: DeltaAI,
            liveDemo: 'https://delta-ai.netlify.app/',
            codeLink: 'https://github.com/Jviafara/Delta-AI',
        },
        {
            id: 3,
            src: navbar,
            liveDemo: '',
            codeLink: '',
        },
        {
            id: 4,
            src: reactParallax,
            liveDemo: '',
            codeLink: '',
        },
        {
            id: 5,
            src: reactSmooth,
            liveDemo: '',
            codeLink: '',
        },
        {
            id: 6,
            src: reactWeather,
            liveDemo: '',
            codeLink: '',
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
                    {projects.map(({ id, src, liveDemo, codeLink }) => (
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;

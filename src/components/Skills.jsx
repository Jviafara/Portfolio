import React from 'react';
import Css from '../assets/css.png';
import GitHub from '../assets/github.png';
import Graphql from '../assets/graphql.png';
import Html from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import Nextjs from '../assets/nextjs.png';
import Node from '../assets/node.png';
import ReactLogo from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';

const Skills = () => {
    const techs = [
        {
            id: 1,
            src: Html,
            title: 'HTML',
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            src: Css,
            title: 'CSS',
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            src: JavaScript,
            title: 'JavaScript',
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            src: ReactLogo,
            title: 'React',
            style: 'shadow-orange-600',
        },
        {
            id: 5,
            src: Tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400',
        },
        {
            id: 6,
            src: Node,
            title: 'Node js',
            style: 'shadow-green-500',
        },
        {
            id: 7,
            src: Nextjs,
            title: 'Next.js',
            style: 'shadow-white',
        },
        {
            id: 8,
            src: Graphql,
            title: 'GraphQl',
            style: 'shadow-pink-400',
        },
        {
            id: 9,
            src: GitHub,
            title: 'Git and GitHub',
            style: 'shadow-gray-500',
        },
    ];

    return (
        <div
            name="Skills"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-full pt-10">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skils and Experience
                    </p>
                    <p className="py-6">
                        This are the Technologies I've worked with
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, title, src, style }) => (
                        <div
                            key={id}
                            className={
                                'shadow-md hover:scale-110 duration-500 py-2 rounded-lg' +
                                ' ' +
                                style
                            }>
                            <img
                                src={src}
                                alt={title}
                                className="w-20 mx-auto"
                            />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;

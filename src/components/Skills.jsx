import React from 'react';
import Css from '../assets/css.png';
import GitHub from '../assets/github.png';
import Html from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import MongoDB from '../assets/mongodb.png';
import MySQL from '../assets/mysql.png';
import Node from '../assets/node.png';
import ReactLogo from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
import VsCode from '../assets/vscode.png';

const Skills = () => {
    const backEnd = [
        {
            id: 1,
            src: Node,
            title: 'Node js',
            style: 'shadow-green-500',
        },
        {
            id: 2,
            src: MongoDB,
            title: 'MongoDb',
            style: 'shadow-green-800',
        },
        {
            id: 3,
            src: MySQL,
            title: 'MySQL',
            style: 'shadow-blue-800',
        },
    ];
    const tools = [
        {
            id: 1,
            src: GitHub,
            title: 'Git and GitHub',
            style: 'shadow-gray-500',
        },
        {
            id: 2,
            src: VsCode,
            title: 'VsCode',
            style: 'shadow-blue-800',
        },
    ];
    const frontEnd = [
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
    ];

    return (
        <div
            name="Skills"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-full pt-10">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-3xl font-bold border-b-4 border-gray-500 pt-2 inline sm:text-4xl">
                        Skils and Experience
                    </p>
                    <p className="py-6">
                        This are the Technologies and Tools I've worked with
                    </p>
                </div>
                <div>
                    <p className="text-3xl font-bold border-b-4 border-gray-500 pt-2 inline sm:text-4xl">
                        BackEnd
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {backEnd.map(({ id, title, src, style }) => (
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
                <div>
                    <p className="text-3xl font-bold border-b-4 border-gray-500 pt-2 inline sm:text-4xl">
                        FrontEnd
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {frontEnd.map(({ id, title, src, style }) => (
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
                <div>
                    <p className="text-3xl font-bold border-b-4 border-gray-500 pt-2 inline sm:text-4xl">
                        Tools
                    </p>
                </div>
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {tools.map(({ id, title, src, style }) => (
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

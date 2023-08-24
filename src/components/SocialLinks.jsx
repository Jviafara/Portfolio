import React from 'react';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const SocialLinks = () => {
    const links = [
        {
            id: 1,
            name: 'LinkedIn',
            child: (
                <>
                    LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href: 'https://www.linkedin.com/in/jes%C3%BAs-viafara-8019b8245/',
            style: 'rounded-tr-md',
        },
        {
            id: 2,
            name: 'GitHub',
            child: (
                <>
                    GitHub <FaGithub size={30} />
                </>
            ),
            href: 'https://github.com/Jviafara',
        },
        {
            id: 3,
            name: 'Mail',
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: 'mailto:jealvito@gmail.com',
        },
        {
            id: 4,
            name: 'Resume',
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href: '/Jesús_Viafara_CV.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ];
    return (
        <div>
            <div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
                <ul>
                    {links.map(({ id, style, href, child, download }) => (
                        <li
                            key={id}
                            className={
                                'flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300' +
                                '' +
                                style
                            }>
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-white"
                                download={download}
                                target="_blank"
                                rel="noreferrer">
                                <>{child}</>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <footer className="flex xl:hidden w-full bg-gray-500">
                <ul className="flex w-full justify-evenly items-center flex-col md:flex-row">
                    {links.map(({ id, style, href, child, download }) => (
                        <li
                            key={id}
                            className={
                                'flex justify-between items-center w-40 h-14 px-4  '
                            }>
                            <a
                                href={href}
                                className="flex justify-between items-center w-full text-white"
                                download={download}
                                target="_blank"
                                rel="noreferrer">
                                <>{child}</>
                            </a>
                        </li>
                    ))}
                </ul>
            </footer>
        </div>
    );
};

export default SocialLinks;

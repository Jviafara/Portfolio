import React from 'react';
import { TbArrowRightCircle } from 'react-icons/tb';
import { Link } from 'react-scroll';
import image from '../assets/profile.jpg';

const Home = () => {
    return (
        <div
            name="Home"
            className="h-full w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ml-auto">
                <div className="flex-1 flex flex-col justify-center items-center md:items-start h-full my-40 mx-4 w-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white text-center  md:text-left">
                        HI! I'm Jesús.
                        <br />
                        I'm a Full Stack Web Developer.
                    </h2>
                    <p className="text-gray-500 py-6 max-w-full  text-center  md:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec volutpat egestas elit vel aliquam. Nulla venenatis
                        massa nibh, sed pretium nisi cursus ac. Fusce nec
                        facilisis urna, euismod semper nisi. Vivamus imperdiet
                        eleifend lectus sed placerat. Integer non pharetra
                        tortor. Nam eget libero turpis.
                    </p>
                    <div>
                        <Link
                            to="Projects"
                            smooth
                            duration={500}
                            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r 
                        from-cyan-500 to-blue-500 cursor-pointer">
                            Projects
                            <span className="group-hover:rotate-90 duration-300">
                                <TbArrowRightCircle
                                    size={25}
                                    className="ml-2"
                                />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className="flex-1">
                    <img
                        src={image}
                        alt="profile"
                        className="rounded-r-full rounded-l-full mx-auto w-2/3 md:w-2/3"
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;

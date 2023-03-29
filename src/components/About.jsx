import React from 'react';

const About = () => {
    return (
        <div
            name="About"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white sm:mt-15">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About Me
                    </p>
                </div>
                <p className="text-xl mt-20">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officiis distinctio ducimus, doloribus dolorum architecto
                    illo non aliquid minus quae nemo cumque iure ea! Repellat
                    expedita neque tempore quia, odit, qui eligendi alias libero
                    quis soluta quasi iste, fugiat explicabo id nesciunt
                    consequuntur molestiae nulla? Tempora at facilis nemo
                    reprehenderit libero?
                </p>
                <br />
                <p className="text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tenetur eum, accusantium ipsa repudiandae iure perferendis
                    fugiat totam repellendus id magnam debitis unde eius quae
                    doloribus distinctio cumque consequatur minus quos quas
                    atque excepturi animi odio, voluptatem ad. Et quod culpa
                    architecto. Error, nostrum eum voluptatem ducimus repellat
                    qui nam cum.
                </p>
            </div>
        </div>
    );
};

export default About;

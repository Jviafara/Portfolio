import React from 'react';

const Contact = () => {
    return (
        <div
            name="Contact"
            className="bg-gradient-to-b from-black to-gray-500 w-full h-screen p-4 text-white">
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">
                        Fill And Submit theForm to send me an Email
                    </p>
                </div>
                <div className="flex justify-center items-center">
                    <form
                        action="https://getform.io/f/986d3bba-f0d0-44f6-a1a2-6c31b80fab9c"
                        method="post"
                        className="flex flex-col w-full md:w-1/2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            rows="10"
                            placeholder="Write your message here!"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <button
                            type="submit"
                            className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-300">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;

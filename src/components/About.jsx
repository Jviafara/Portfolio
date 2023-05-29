import React from 'react';

const About = () => {
    return (
        <div
            name="About"
            className="w-full h-full bg-gradient-to-b from-gray-800 to-black text-white pt-20">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-4">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About Me
                    </p>
                </div>
                <p className="text-xl mt-20">
                    Durante toda mi formación de pregrado en ingeniería
                    electrónica siempre tuve una mejor afinidad hacia la
                    programación que con los demás conocimientos, durante toda
                    mi formación aprendí y utilicé una programación practica
                    utilizando lenguajes basados en c++ en plataformas como
                    arduino o PIC, pero luego de descubrir la programación
                    orientada a objetos y el desarrollo de software decidí que
                    eran conocimientos y skills que debería adquirir y poco
                    apoco fui adquiriendo estos conocimientos.
                </p>
                <br />
                <p className="text-xl">
                    Hoy puedo decir que soy un desarrollador web y estoy en
                    busca de una oportunidad de demostrar las habilidades que
                    adquirido y que sean de uso y ayuda en un ámbito
                    profesional, de la misma manera espero seguir adquiriendo
                    conocimientos y experiencias para crecer aún más como
                    desarrollador.
                </p>
            </div>
        </div>
    );
};

export default About;

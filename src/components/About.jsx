import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Welcome to my portfolio! I am a dedicated and highly skilled Full Stack Web Developer with a robust ability to tackle complex problems. 
        My experience spans both front-end and back-end development, enabling me to create comprehensive and seamless web applications.

        On the front-end, I am proficient in modern frameworks and libraries such as React ensuring visually appealing and user-friendly interfaces. 
        My back-end expertise includes working with Node.js and Express along with extensive experience in database management with MySQL and MongoDB.
        </p>

        <br />

        <p className="text-xl">
        I am passionate about continuous learning and staying updated with the latest technologies to deliver top-notch web solutions. 
        Explore my portfolio to see detailed case studies, code samples, and live demos of my projects. 
        Let's collaborate to bring your vision to life!
        </p>
      </div>
    </div>
  );
};

export default About;
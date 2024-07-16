import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import bootstrap from "../assets/bootstrap.png";
import linux from "../assets/linux.png";
import java from "../assets/java.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: java,
      title: "Java",
      style: "shadow-blue-800",
    },
    {
      id: 2,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-cyan-400",
    },
    {
      id: 6,
      src: nodejs,
      title: "Node JS",
      style: "shadow-green-600",
    },
    {
      id: 7,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },
   
    {
      id: 9,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-violet-400",
    },
    {
      id: 10,
      src: mysql,
      title: "MySQL",
      style: "shadow-blue-400",
    },
    {
      id: 11,
      src: github,
      title: "Github",
      style: "shadow-gray-400",
    },
    {
      id: 12,
      src: linux,
      title: "Linux",
      style: "shadow-yellow-400",
    },
  ];

  return (
    <div
      name="Skills"
      className=" bg-gradient-to-b from-gray-800 to-black w-full h-screen "
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white my-200">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full h-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-110 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
import React from "react";
import Quiz from "../assets/portfolio/Quiz.png";
import FitnessTracker from "../assets/portfolio/Fitness Tracker.png";
import Todolist from "../assets/portfolio/To-do-list.png";




const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: FitnessTracker,
      github : "https://github.com/NishantMaithil/Fitness-Tracker",
      liveDemo : "https://fitness-tracker-nishantmaithils-projects.vercel.app/"
    },
    {
      id: 2,
      src: Todolist,
      github : "https://github.com/NishantMaithil/To-Do-List",
    },
    {
      id: 3,
      src: Quiz,
      github : "https://github.com/NishantMaithil/UPSC-PracticeTest-Java-Project"
    },
    
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, github, liveDemo }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-500">
              <img
                src={src} height={100}
                alt=""
                className="rounded-md duration-200 "
              />
              <div className="flex items-center justify-center">
                <button onClick={() => window.open(liveDemo)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" 
                >
                  Demo
                </button>
                <button onClick={() => window.open(github)} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
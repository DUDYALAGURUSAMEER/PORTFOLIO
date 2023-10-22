import React from "react";

const About = () => { 
  return (
    <div
      name="about"
      id="about"
      className="w-full h-screen bg-[#0a192f] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className=" py-16 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
          <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
            <div className="sm:text-right pb-8 pl-4">
              <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                About
              </p>
            </div>
            <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold">
              <p>
                Hi. I'm Dudyala Guru Sameer, nice to meet you. Please take a
                look around.
              </p>
            </div>
            <div>
              <p>
                {" "}
                
I am currently a Computer Science student pursuing my B.Tech at VIT Chennai, with a keen interest in technology and web development. I find great satisfaction in tackling complex challenges and arriving at practical solutions through programming. As I approach the final year of my academic journey, I am eagerly seeking an opportunity to apply my skills and knowledge in a professional setting.

Outside the realm of coding, I enjoy spending my free time watching YouTube, exploring the latest in technology, and immersing myself in music. Additionally, I cherish quality moments with my family, which serve as a source of inspiration and support for my academic pursuits. My insatiable curiosity drives me to constantly acquire new knowledge and skills, fueling my passion for both technology and personal growth.

              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
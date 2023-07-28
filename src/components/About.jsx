import React from "react";

const About = () => {
 
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
              Computer engineering student, passionate about technology,
               fan of videogames, anime and music,
                interest in sports and astronomy,
                I love programming, I like to learn new technologies and ways to improve
              </p>
             
              <br />
              <br />
              <a href="./src/assets/Code_a_program.pdf" download>
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
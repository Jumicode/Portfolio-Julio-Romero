import React from "react";

const Hero = () => {
  const social_media = [
    "mail",
    "logo-github",
    "logo-linkedin"];
  return <section
  
  id="home"
   className="min-h-screen flex py-10 md:flex-row flex-col items-center"
   >

      <div className="  flex-1">
        <div className=" text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Julio Romero</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Front end Developer
          </h4>
          <button className="btn-primary mt-8">Contact Me</button>
          <div className=" mt-8 text-3xl flex items-center justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </div>
            ))}
          </div>
        </div>
      </div>

   </section>
};

export default Hero;

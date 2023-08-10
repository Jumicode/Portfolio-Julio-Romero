import React from "react";

const Hero = () => {
  const social_media = [
    { icon: "mail", link: "https://mail.google.com/mail/?view=cm&to=jromeroacive@gmail.com" },
    { icon: "logo-github", link: "https://github.com/Jumicode" },
    { icon: "logo-linkedin", link: "https://www.linkedin.com/in/julio-romero-582143242/" },
    { icon: "logo-reddit", link: "https://www.reddit.com/user/Jumi18" }
  ];

  return (
    <section id="home" className="min-h-screen mt-20 flex py-10 md:flex-row flex-col items-center">
      <div className="flex-1 mb-15">
        <div className="text-center">
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
          <div className="mt-8 text-3xl flex items-center justify-center gap-5">
            {social_media?.map((item) => (
              <a key={item.icon} href={item.link} target="_blank" rel="noopener noreferrer">
                <div className="text-gray-600 hover:text-white cursor-pointer">
                  <ion-icon name={item.icon}></ion-icon>
                </div>
              </a>
            ))}
          </div>
          <a href="/dist/assets/CV_Julio_Romero.pdf" download>
          
            <button className="btn-primary mt-10 bg-cyan-600 p-5 rounded-xl">Download CV</button>
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

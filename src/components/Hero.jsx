import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/D.png";
import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left Line */}
        <div className="flex flex-col justify-center items-center mt-28 md:mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Main Text */}
        <div className="mt-28 md:mt-5 flex-1 z-10">
          <h1 className={`${styles.heroHeadText} text-white relative z-10`}>
            Hi, I'm{" "}
            <span className="text-[#915EFF] relative inline-block glow-effect">
              Dhanuschandra
            </span>
          </h1>
          <p className={`${styles.heroSubText} mt-4 text-white-100`}>
            I’m a{" "}
            <span className="text-[#915EFF] font-bold">
              <Typewriter
                words={[
                  "Developer",
                  "AI Explorer",
                  "Intern",
                  "Tech Enthusiast",
                  "Creative Builder",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I build modern applications that solve real-world problems
            <br />
            through smart tech, innovation, and scalable design.
          </p>
        </div>

        {/* Image + SVG Blob */}
        <div className="relative mt-28 hidden md:block w-[280px] h-[320px] z-0">
          <svg
            viewBox="0 0 200 200"
            className="absolute w-[300px] h-[300px] -top-10 -left-10 opacity-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#915EFF"
              d="M39.1,-68.2C49.4,-63.1,56.4,-49.5,62.2,-36.1C67.9,-22.8,72.4,-9.7,70.5,2.3C68.6,14.3,60.4,25.1,53.5,37.8C46.7,50.4,41.3,64.8,30.8,71.9C20.4,78.9,5,78.7,-8.2,73.5C-21.3,68.3,-32.1,58.1,-43.7,48.6C-55.2,39.2,-67.5,30.6,-70.8,19.1C-74.2,7.6,-68.7,-6.9,-63.2,-22.4C-57.7,-37.9,-52.2,-54.3,-41.1,-59.8C-29.9,-65.2,-14.9,-59.8,0.8,-61C16.5,-62.2,33.1,-70.4,39.1,-68.2Z"
              transform="translate(100 100)"
            />
          </svg>
          <img
            src={profileImage}
            alt="Dhanuschandra"
            className="w-128 h-auto rounded-xl shadow-lg relative z-10 hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Scroll Down Mouse */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

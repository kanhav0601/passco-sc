/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";
import BuildWebsite from "../assets/images/hero/BuildWebsite.png";

export default function Hero() {
  return (
    <section className="hero">
      <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
        <h1 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5">
          Transforming Governance <br />
          <span className="text-[#2C8C84] font-mono">with Tech!</span>
        </h1>

        <p className="font-light text-xl text-gray-400 leading-relaxed mb-16">
          We deliver innovative IT solutions and essential support to supercharge
          government operations across India!
        </p>
        <Fade direction="up" delay={500} triggerOnce>
          <Button
            href="/project"
            type="link"
            className="flex w-71 h-18 items-center px-14 py-5 text-white 
            text-xl bg-[#2C8C84] rounded-lg shadow-2xl transition duration-200 transform 
            hover:bg-black hover:shadow-2x1 hover:shadow-[#2C8C84] hover:scale-105"
          >
            Our Promises
            <svg
              className="ml-2 w-7 h-7 text-green-500 animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16 m8-8H4"
                className="text-green-500"
              />
            </svg>

          </Button>
        </Fade>
      </div>
      <div className="flex pt-5 md:w-fit w-full justify-center items-center order-first md:order-first lg:order-last lg:w-1/2">
        <Fade direction="up" triggerOnce>
          <img className="" src={BuildWebsite} alt="Build Website" />
        </Fade>
      </div>
    </section>
  );
}

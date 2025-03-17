"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides] = useState([
    {
      image: "/Slide-Solar.jpg",
      title: "Let's Go Solar Together",
      description:
        "APN Elec is a local business specialising in Solar PV installation and battery storage.",
      url: "#",
    },
    {
      image: "/slide-bg-01.jpg",
      title: "DOMESTIC ELECTRICAL SERVICES",
      description:
        "APN Elec can help you make sure that your home is safe for yourself and your loved ones and can provide all the certification for electrical work you will need when you come to sell or rent your home.",
      url: "#",
    },
    {
      image: "/slide-bg-02.jpg",
      title: "COMMERCIAL ELECTRICAL SERVICES",
      description:
        "If you require a reliable trustworthy and qualified electrician APN Elec is located in the Brighton and Hove area and servicing both East and West Sussex.",
      url: "#",
    },
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40">
            <div className="container mx-auto h-full flex items-center px-10">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="text-xl mb-8">{slide.description}</p>
                <Link
                  href={slide.url}
                  passHref
                  className="z-0 hover:cursor-pointer"
                >
                  <button className="bg-transparent backdrop-blur-lg border-blue-300 border-small hover:bg-blue-700 hover:border-blue-700 hover:cursor-pointer z-10 text-white px-4 py-2 rounded">
                    Solar power solutions
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default HeroSlider;

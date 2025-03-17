"use client";
import React, { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    img: "/portrait_01.jpg",
    alt: "Mr Hawthorne",
    title: "Installed additional socket outlets",
    text: "“Clean and tidy – good quality of workmanship.”",
    footer: "Mr Ehsan Zar, Hove, East Sussex",
    date: "Date: 29 July 2017",
  },
  {
    img: "/portrait_02.jpg",
    alt: "Mr Hawthorne",
    title: "Replace Consumer Unit (Fuse box)",
    text: "“Every went well – very courteous, Good quality of work – reasonable price - Reliable.”",
    footer: "Ms Jo Smith, Hove",
    date: "Date: 1 September 2017",
  },
  {
    img: "/portrait_03.jpg",
    alt: "Mr Hawthorne",
    title: "Installed hood on cooker.",
    text: "“Very happy and respectful trader. Would recommend”",
    footer: "Ms Julie Rodgers, Hove East Sussex",
    date: "Date: 4 September 2017",
  },
  // Add more testimonials as needed
];

const About: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <>
      <div className="container px-10 mx-auto">
        <div className="text-center">
          APN Elec are certified by NAPIT to provide both Electrical and Solar
          PV installation. We also come with Part P certification for Building
          Regulations. APN Elec is qualified to the latest 18th Edition
          Regulations for Electrical work and EV Charging. APN Elec is proud to
          be a member of Trustmark. Trustmark is a consumer protection body
          which was established in 2005 by a joint commission of the Government
          and industry bodies. Its goal is to regulate all industries in and
          around the home, and to ensure their Registered Businesses maintain
          required standards of technical competence, customer service and
          trading practices. <p></p>
        </div>
        <div
          className="bg-cover bg-center pt-16 pb-10"
          style={{ backgroundImage: "url('/path/to/backgroundImage8.jpg')" }}
        >
          <div className="flex flex-wrap">
            <div className="basis-7/12 max-w-full">
              <Image
                alt="APN Elec"
                src="/about-apnelec.jpg"
                width={500}
                height={300}
                className="rounded shadow-lg"
              />
            </div>

            <div className="basis-5/12 max-w-full pt-10">
              <h3 className="text-2xl font-bold">About APN Elec.</h3>
              <p className="mt-4">
                We are MCS approved, MCS is an industry-led quality assurance
                scheme, which demonstrates the quality and reliability of
                approved products and installation companies.
                <br />
                We are members of RECC. RECC stands for Renewable Energy
                Consumer Code. RECC were established to ensure that consumers
                wishing to install a small-scale heat or power generation unit
                for their homes have the necessary confidence and service
                standards so that they can make an informed choice.
                <br />
                We are also insured by IWA Deposit and Guarantee Protection,
                every system is insured for a minimum of two years after
                commissioning.
              </p>
            </div>
          </div>
          <hr className="my-10" />
          <div className="flex flex-wrap">
            <div className="basis-5/12 max-w-full pt-10">
              <h3 className="text-2xl font-bold">About Amir</h3>
              <p className="mt-4">
                I worked for many years as an electronics Engineer. My job was
                designing electronic circuit boards. After all those years in my
                chosen career I realised that I would prefer a more sociable
                job. Around 12 years ago I re-trained to be an Electrician. And
                after that my keen interest in renewable energy sources led me
                to further qualifications in 2019 as a Solar Panel, and EV
                charging point installer. I am very interested in green issues
                and I like working with renewables and zero emission vehicles.
                Moving away from fossil fuels is imperative for our planet.
              </p>
              <p className="pt-10">
                <a
                  className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-lg font-medium rounded-md border border-gray-800 hover:bg-gray-900"
                  href="/Contact"
                  title="Contact us now"
                >
                  Contact us
                </a>
              </p>
            </div>

            <div className="basis-7/12 max-w-full text-right">
              <Image
                alt="Amir Nasabzadeh"
                src="/about-apnelec-amir.jpg"
                width={500}
                height={300}
                className="rounded shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-cover bg-center pt-16 pb-10 text-white">
        <div className="container px-10 mx-auto">
          <div className="text-center mb-5">
            <span className="decorated l"></span>
            <h2 className="text-2xl font-bold">What Clients said</h2>
            <span className="decorated r"></span>
          </div>

          <div className="pt-10">&nbsp;</div>

          <div className="relative w-4/5 mx-auto">
            <div className="flex items-center justify-between">
              <button
                onClick={handlePrev}
                className="text-white bg-gray-800 p-2 rounded-full"
              >
                &lt;
              </button>
              <div className="flex-1 mx-4">
                <div className="flex flex-col items-center">
                  <Image
                    src={testimonials[currentIndex].img}
                    alt={testimonials[currentIndex].alt}
                    width={100}
                    height={100}
                    className="rounded-full"
                  />
                  <h6 className="text-lg font-bold mt-4">
                    {testimonials[currentIndex].title}
                  </h6>
                  <p className="mt-2">{testimonials[currentIndex].text}</p>
                  <footer className="mt-4">
                    <span className="block font-bold">
                      {testimonials[currentIndex].footer}
                    </span>
                    <cite className="block">
                      {testimonials[currentIndex].date}
                    </cite>
                  </footer>
                </div>
              </div>
              <button
                onClick={handleNext}
                className="text-white bg-gray-800 p-2 rounded-full"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default About;

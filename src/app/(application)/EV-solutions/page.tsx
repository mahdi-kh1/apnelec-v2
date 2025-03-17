"use client";
import React, { useState } from "react";
import Image from "next/image";

const EvSolutionsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const openModal = (image: { src: string; alt: string }) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="container mx-auto px-10">
      <div className="flex flex-col space-y-10">
        <div className="pb-10">
          <p>
            If you are considering purchasing an Electrical car or van, APN Elec
            are registered and certified by Myenergi Zappi 2 home charge point,
            PodPiont and Rolec EV to install both home and workplace charging
            points. APN Elec are not VAT registered, therefore VAT will not be
            added to your bill.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row pt-10 pb-10 space-y-10 md:space-y-0 md:space-x-10">
        <div className="flex-1 max-w-full flex flex-col justify-center">
          <h2>APN Elec likes Zappi. Charging points</h2>
          <p>
            They are a multi-award winning charging point and can be used for
            any electric car. Zappi charging points are:
          </p>
          <ul className="list-disc pl-5">
            <li>Designed and manufactured in the UK.</li>
            <li>OZEV grant approved.</li>
            <li>
              Fast installation, depending on your property this can be just
              half a day.
            </li>
            <li>In-built LCD screen displaying energy monitoring.</li>
            <li>
              Savings can be maximised because they have Economy Tariff sensing
              as well as a programmable timer.
            </li>
            <li>Solar PV and Battery compatible.</li>
            <li>
              Can be paired with the Myenergi app, so you can set timers and
              boost functions
            </li>
            <li>3-year warranty</li>
          </ul>
        </div>

        <div className="flex-1 max-w-full flex items-center">
          <Image
            alt="sas zappi2 off road"
            src="/Lisa-Rolec-Off-Road01032021.jpg"
            className="w-full text-center object-cover h-64 md:h-auto rounded-md"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10">
        <div className="flex-1 max-w-full flex items-center">
          <Image
            alt="sas zappi2 off road"
            src="/sas-zappi2-off-road01032021.jpg"
            className="w-full text-center object-cover h-64 md:h-auto rounded-md"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>

        <div className="flex-1 max-w-full flex flex-col justify-center">
          <p>
            You may be eligible for the £350 grant from the Office of Zero
            Emission Vehicles (OZEV). For more update please check the&nbsp;
            <a href="https://www.find-government-grants.service.gov.uk/grants/electric-vehicle-chargepoint-and-infrastructure-grants-for-landlords-1#eligibility">
              OZEV
            </a>{" "}
            website.&nbsp;
          </p>
          <p>See the eligibility checklist below.</p>
          <ol className="list-decimal pl-5">
            <li>You have dedicated off-road parking</li>
            <li>Your plug-in vehicle was purchased after 1 October 2016.</li>
            <li>You have not already claimed the grant for your vehicle.</li>
            <li>
              By the claiming the grant you are not exceeding the limit of two
              OZEV funded charging points per household.
            </li>
          </ol>
        </div>
      </div>

      {/* <div className="grid grid-cols-2 grid-rows-[repeat(2,300px)] gap-4">
        <div className="row-span-full col-start-1 col-end-2 w-full h-full cursor-pointer" onClick={() => openModal({ src: "/Stephen-rolec01032021.jpg", alt: "Stephen rolec" })}>
          <Image
            alt="Stephen rolec"
            src="/Stephen-rolec01032021.jpg"
            className="object-cover h-full rounded-md"
            width={800}
            height={500}
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 w-full h-full cursor-pointer" onClick={() => openModal({ src: "/Rolec-Smart01032021.jpg", alt: "Rolec Smart" })}>
          <Image
            alt="Rolec Smart"
            src="/Rolec-Smart01032021.jpg"
            className="w-full text-center object-cover h-full rounded-md"
            width={500}
            height={500}
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-2 row-end-3 w-full h-full cursor-pointer" onClick={() => openModal({ src: "/Sas-Zappi01032021.jpg", alt: "sas zappi" })}>
          <Image
            alt="sas zappi"
            src="/Sas-Zappi01032021.jpg"
            className="w-full text-center object-cover h-full rounded-md"
            width={500}
            height={500}
          />
        </div>
      </div> */}
      <div className="mt-10 grid grid-cols-2 grid-rows-[repeat(2,500px)] gap-4">
        <div className="col-span-full row-start-2 row-end-3 w-full h-full">
          <Image
            alt="Stephen rolec"
            src="/Stephen-rolec01032021.jpg"
            className="w-full object-cover h-full rounded-md"
            width={800}
            height={500}
          />
        </div>
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 w-full h-full">
          <Image
            alt="Rolec Smart"
            src="/Rolec-Smart01032021.jpg"
            className="w-full text-center object-cover h-full rounded-md"
            width={500}
            height={500}
          />
        </div>
        <div className="col-start-2 col-end-3 row-start-1 row-end-2 w-full h-full">
          <Image
            alt="sas zappi"
            src="/Sas-Zappi01032021.jpg"
            className="w-full text-center object-cover h-full rounded-md"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10"></div>
      <div className="flex justify-center">
        <p>APN Elec are approved installers, contact us today for a quote</p>
      </div>

      {/* {isModalOpen && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-full max-h-full p-4">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 m-4 text-white text-2xl z-50"
            >
              &times;
            </button>
            <div className=" w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default EvSolutionsPage;

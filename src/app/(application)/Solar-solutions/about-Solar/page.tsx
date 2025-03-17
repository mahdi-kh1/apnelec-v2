import React from "react";
import Image from "next/image";
import { CircleCheckBig } from 'lucide-react';

const AboutSolarPage: React.FC = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="flex flex-row">
        <div className="px-2 basis-2/12 max-w-full">
          <Image
            src={"/amir-apnelec.jpg"}
            alt="about-solar"
            width={500}
            height={300}
            className="rounded-md"
          />
        </div>
        <div className="px-2 basis-10/12 max-w-full">
          <div>
            <h2 className="text-2xl font-bold">WHAT IS SOLAR ENERGY?</h2>

            <p className="mt-4">
              The world needs to transition to clean energy in order to avoid
              global heating and climate change. Solar PV will contribute to the
              UK’s climate change objectives and help us reduce our dependence
              on fossil fuels.
            </p>

            <p className="mt-4">
              Solar energy technologies convert sunlight into energy. This is
              converted to electricity in the case of solar PV.
            </p>

            <h2 className="text-2xl font-bold mt-8">HOW DOES SOLAR PV WORK?</h2>

            <p className="mt-4">
              Solar PV is a method of generating electric power by using solar
              cells to convert energy from the sun by photovoltaic effect. These
              solar cells are assembled into solar panels and then installed on
              rooftops (flat or pitched) or on the ground. When the sunlight
              shines on the panels, it creates an electric field across the
              layers. The stronger the sunshine the more electricity is
              produced. The cells don’t need direct sunlight to work and can
              even work on cloudy days.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold">ARE SOLAR PANELS RIGHT FOR ME?</h2>

        <p className="mt-4">
          The key thing to consider is how much space you have. For instance to
          create 3.5kWp will typically take up around 20m2 roof area.
        </p>

        <p className="mt-4">
          An unshaded, South facing roof is ideal for solar PV. East - West
          facing roofs can also be considered, a system facing East or West will
          yield around 15-20% less energy than one facing directly South. North
          facing roofs are not recommended.
        </p>

        <p className="mt-4">
          Any nearby buildings, trees or chimneys could shade your roof and have
          a negative impact on the performance of your system.
        </p>

        <p className="mt-4">
          Some solar PV systems can minimise the impact of shading with the use
          of ‘optimisers’. If you don’t have shading, the use of optimisers is
          not necessary or beneficial, other than the increased monitoring
          opportunities they offer – they won’t generate more energy.
        </p>
      </div>
      <div className="flex flex-row mt-8">
        <div className="basis-3/12">
          <Image
            src={"/screwing-panels-from-front.jpg"}
            alt="screwing-panels"
            width={500}
            height={300}
            className="rounded-md"
          />
        </div>
        <div className="basis-9/12 pl-4">
          <h2 className="text-2xl font-bold">
            WHAT ARE THE BENEFITS OF SOLAR PV?
          </h2>

          <ul className="mt-4">
            <li className="flex items-center gap-2"><CircleCheckBig size={16} color="#f02332" /><span>Cut your electricity bills.</span></li>
            <li className="flex items-center gap-2"><CircleCheckBig size={16} color="#f02332" /><span>Reduce your carbon footprint</span></li>
            <li className="flex items-center gap-2"><CircleCheckBig size={16} color="#f02332" /><span>Receive a small revenue for extra energy sold to the grid.</span></li>
            <li className="flex items-center gap-2"><CircleCheckBig size={16} color="#f02332" /><span>Increase the value of your home.</span></li>
          </ul> 
          
          <h2 className="text-2xl font-bold mt-5">
            DO I NEED PERMISSION TO INSTALL SOLAR PV?
          </h2>

          <p>
            Solar PV systems usually don’t require planning permission in the
            UK. They are considered ‘permitted developments’. There are some
            exceptions such as if you live in a listed building, conservation
            area or national park. It is advisable to check with your local
            authority.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap scalup mt-5">
        <div className="basis-8/12 max-w-full">
          <p>
            If you install more than 3.5kW you must obtain prior permission with
            your Distribution Network Operator (DNO). If installing less than
            3.5kW you need to register with the DNO within 28 days of
            commissioning. The DNO is the company responsible for bringing
            electricity to your home. We will do all this for you. However here
            is the government advice on how to register your new energy device
            in the UK.
          </p>

          <h2 className="text-2xl font-bold mt-5">BATTERY STORAGE</h2>

          <p>
            A battery storage unit helps you make the most of the electricity
            generated with any excess being stored for future use. Most homes
            use a fraction of the solar energy they generate and a battery
            stores energy generated when the sun is at its strongest for use in
            the evening and overnight.
          </p>

          <hr className="my-8" />
          <p className="text-center">
            <a
              href="/en-us/Solar-solutions/Solar-energy-calculator"
              className="text-2xl font-normal bg-white"
              title="Make your own calculation"
            >
              check how many KiloWatts your home can produce
            </a>
          </p>
        </div>

        <div className="basis-4/12 max-w-full">
          <a
            href="/en-us/Solar-solutions/Solar-energy-calculator"
            title="Make your own calculation"
          >
            <Image
              alt="UK map"
              src="/Maps-UK.png"
              width={500}
              height={300}
              className="max-w-full rounded-md"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSolarPage;

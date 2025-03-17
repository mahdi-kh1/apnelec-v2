import React from "react";
import Image from "next/image";

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="flex flex-row">
        <div className="px-2 basis-3/12 max-w-full">
          <Image src={"/amir-apnelec.jpg"} alt="about-solar" width={500} height={300} />
        </div>
        <div className="px-2 basis-9/12 max-w-full">
          <div>
            <h2>WHAT IS SOLAR ENERGY?</h2>

            <p>
              The world needs to transition to clean energy in order to avoid
              global heating and climate change. Solar PV will contribute to the
              UK’s climate change objectives and help us reduce our dependence
              on fossil fuels.
            </p>

            <p>
              Solar energy technologies convert sunlight into energy. This is
              converted to electricity in the case of solar PV.
            </p>

            <h2>HOW DOES SOLAR PV WORK?</h2>

            <p>
              Solar PV is a method of generating electric power by using solar
              cells to convert energy from the sun by photovoltaic effect. These
              solar cells are assembled into solar panels and then installed on
              rooftops (flat or pitched) or on the ground. When the sunlight
              shines on the panels, it creates an electric field across the
              layers. The stronger the sunshine the more electricity is
              produced. The cells don’t need direct sunlight to
              work&nbsp;and&nbsp;can&nbsp;even&nbsp;work on&nbsp;cloudy days.
            </p>

            <p>&nbsp;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

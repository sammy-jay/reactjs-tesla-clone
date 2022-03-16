import React from "react";
import "./HeroList.css";
import data from "../../carInfo";
import Hero from "./Hero/Hero";

function HeroList() {
  const data2 = [
    {
      id: 4,
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/16b04537-a4be-4bf9-8637-86862a858da8/bvlatuR/std/2880x1800/_25-HP-SolarPanels-D",
      title: "Solar Panels",
      description: "Lowest Cost Solar Panels in America",
    },
    {
      id: 5,
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/c877126e-0db5-409d-a412-04fc94b59b76/bvlatuR/std/2880x1800/HP-SR-Design-D",
      title: "Solar Roof",
      description: "Produce Clean Energy From Your Roof",
    },
    {
      id: 6,
      image:
        "https://tesla-cdn.thron.com/delivery/public/image/tesla/dd739764-bcaa-4263-9488-8c73bc9fb046/bvlatuR/std/2880x2400/Desktop-Accessories",
      title: "Accessories",
    },
  ];
  return (
    <>
      {data.map((car) => (
        <Hero {...car} key={car.id} />
      ))}
      {data2.map((car) => (
        <Hero {...car} key={car.id} isDiff />
      ))}
    </>
  );
}

export default HeroList;

import React from "react";
import { FaBed, FaParking, FaUtensils, FaWifi } from "react-icons/fa";
import Title from "../title/title";

export default function Services() {
  const services = [
    {
      icon: <FaBed />,
      title: "10 Rooms",
    },

    {
      icon: <FaParking />,
      title: "Free CarPark",
    },

    {
      icon: <FaUtensils />,
      title: "Restaurant",
    },

    {
      icon: <FaWifi />,
      title: "Free Wi-Fi",
    },
  ];

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
            </article>
          );
        })}
      </div>
    </section>
  );
}

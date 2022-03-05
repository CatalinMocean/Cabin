import React from "react";
import { FaBed, FaParking, FaUtensils, FaWifi } from "react-icons/fa";
import Title from "../title/title";
import { Link } from 'react-router-dom';

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
      icon: <FaUtensils style={{fill: "#af9a7d"}}/>,
      title: "Restaurant",
      link: '/restaurant'
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
              <span>{item.link ? <Link to={item.link}>{item.icon}</Link> : item.icon}</span>
              <h6>{item.title}</h6>
            </article>
          );
        })}
      </div>
    </section>
  );
}

import React from "react";
import Carousel from "../../components/carousel/carousel";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";
import Services from "../../components/services/services";

const Home = () => {
  return (
    <div>
      <Carousel>
        <Banner title="Cabin" subtitle="rooms">
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Carousel>
      <Services />
    </div>
  );
};

export default Home;

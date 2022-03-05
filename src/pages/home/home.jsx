import React from "react";
import Carousel from "../../components/carousel/carousel";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";
import Services from "../../components/services/services";


const bannerStyle = {
      position: 'absolute',
      zIndex: 2,
      top: '40%',
      right: '38%'
}

const Home = () => {
  return (
    <div>
      <Carousel>
        <Banner title="Cabin" style={bannerStyle}>
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

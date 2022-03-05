import React from 'react';
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";



const AboutUs = () => {
    return (  
        <div
        id="background-container404"
        style={{
          background: 'url("/images/aboutUs.jpeg") center/cover no-repeat',
        }}
      >
        <Banner title="AboutUs">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </div>
    );
  }
    

    

export default AboutUs;
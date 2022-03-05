import React from 'react';
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";



const Restaurant = () => {
    return (  
        <div
        id="background-container404"
        style={{
          background: 'url("/images/meniubg.jpg") center/cover no-repeat',
        }}
      >
        <Banner title="Meniu">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </div>
    );
  }
    

    

export default Restaurant;
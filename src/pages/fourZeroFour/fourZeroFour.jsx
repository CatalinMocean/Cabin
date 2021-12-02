import React from "react";
import Banner from "../../components/banner/banner";
import { Link } from "react-router-dom";

function fourZeroFour() {
  return (
    <div
      id="background-container404"
      style={{
        background: 'url("/images/defaultBcg.jpeg") center/cover no-repeat',
      }}
    >
      <Banner title="404" subtitle="Page not found">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </div>
  );
}

export default fourZeroFour;

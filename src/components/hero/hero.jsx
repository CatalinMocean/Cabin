import React from "react";

const Hero = ({ children, parent }) => {
  return <header style={parent}>{children}</header>;
};

export default Hero;

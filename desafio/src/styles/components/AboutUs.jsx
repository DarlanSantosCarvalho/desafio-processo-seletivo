import React from "react";
import "../components/AboutUs.sass";

const AboutUs = () => {
  return (
    <div className="container-about">
      <h2>Sobre nós</h2>
      <span className="line"></span>

      <div className="info">
        <div className="topicos">
          <h3 className="active">Missão</h3>
          <h3>Visão</h3>
          <h3>Valores</h3>
        </div>
        <p className="active">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus, minus
          molestias libero ullam quibusdam dignissimos accusamus? Ullam
          voluptates molestias, ad rerum, praesentium aut, esse iure nemo vero
          culpa voluptatibus. Nesciunt!
        </p>
      </div>

      <h2 className="services">Serviços</h2>
    </div>
  );
};

export default AboutUs;

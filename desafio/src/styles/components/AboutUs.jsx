import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/AboutUs.sass";

const AboutUs = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.mdsystemweb.com.br/projects/api/v1/test/about.php")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="container-about">
      <h2>Sobre nós</h2>

      <div className="info">
        <div className="topicos">
          <h3 className="active">{data[0]?.label}</h3>
          <h3>{data[1]?.label}</h3>
          <h3>{data[2]?.label}</h3>
        </div>
        <p className="active">{data[0]?.description}</p>
        <p className="unactive">{data[1]?.description}</p>
        <p className="unactive">{data[2]?.description.replace(/'/g, "")}</p>
      </div>

      <h2 className="services">Serviços</h2>
    </div>
  );
};

export default AboutUs;

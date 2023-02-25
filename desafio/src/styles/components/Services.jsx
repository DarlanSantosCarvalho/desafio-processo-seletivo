import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/Services.sass";

const Services = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.mdsystemweb.com.br/projects/api/v1/test/services.php")
      .then((response) => setData(response.data));
  }, []);

  console.log(data);

  return (
    <div className="container-services">
      <img src="#" alt="Seta pra esquerda" /> 

      <div className="footer">
          <h3>{`${data[0]?.title}.`}</h3>
          <p>{data[0]?.text}</p>
          <h3 className="unactive">{`${data[1]?.title}.`}</h3>
          <p className="unactive">{data[1]?.text}</p>
          <h3 className="unactive">{`${data[2]?.title}.`}</h3>
          <p className="unactive">{data[2]?.text}</p>
      </div>

      <img src="#" alt="Seta pra direita" />
    </div>
  );
};

export default Services;

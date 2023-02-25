import React from "react";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../components/Services.sass";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.mdsystemweb.com.br/projects/api/v1/test/services.php")
      .then((response) => setData(response.data));
  }, []);

  return (
    <Slider className="container-services" {...settings}>
        <div className="text 1">
          <h3 className="h3-carousel">{data[0]?.title}</h3>
          <p>{data[0]?.text}</p>
        </div>
        <div className="text 2">
          <h3 className="h3-carousel">{data[1]?.title}</h3>
          <p>{data[1]?.text}</p>
        </div>
        <div className="text 3">
          <h3 className="h3-carousel">{data[2]?.title}</h3>
          <p>{data[2]?.text}</p>
        </div>
    </Slider>
  );
}

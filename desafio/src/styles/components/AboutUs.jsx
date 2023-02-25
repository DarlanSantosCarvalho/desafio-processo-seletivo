import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/AboutUs.sass";

const AboutUs = () => {
  const [data, setData] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["missao", "visao", "valores"];

  useEffect(() => {
    axios
      .get("https://www.mdsystemweb.com.br/projects/api/v1/test/about.php")
      .then((response) => setData(response.data));
  }, []);

  console.log(data)

  return (
    <div className="container-about">
      <div className="container-tab">
        
        <ul className="topicos">
          {tabs.map((tab, index) => {
            return (
              <li key={index}>
                <button classNameto="topico-info"
                  onClick={() => setActiveTab(index)}
                  className={`${activeTab === index ? "active" : ""}`}
                >
                  {tab}
                </button>
              </li>
            );
          })}
        </ul>
        {data.map((element, index) => {
          return (
            <div
              key={index}
              className={`${activeTab === index ? "active" : "unactive"}`}
            >
              <h1>{element.label}</h1>
              {index === data.length - 1 ? (
                <p dangerouslySetInnerHTML={{ __html: element.description }} />
              ) : (
                element.description
              )}
            </div>
          );
        })}
            </div>
      </div>
  );
};

export default AboutUs;

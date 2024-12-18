"use client";

import React from "react";

const InfoBox = ({ title, items }) => {
    return (
      <div>
          <h1 id="infobox">{ title }</h1>
          <ul>
            {
              items.map((item, index) => (
                <React.Fragment key={index}>
                  <li>{item.time}</li>
                  <li>{item.meeting}</li>  
                </React.Fragment>              
            ))}
          </ul>
      </div>
    )
  }
  
  export default InfoBox
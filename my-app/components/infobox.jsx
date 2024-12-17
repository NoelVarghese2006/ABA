"use client";

import React from "react";

const InfoBox = ({ title, items }) => {
    return (
      <div>
          <h2 id="infobox">{ title }</h2>
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
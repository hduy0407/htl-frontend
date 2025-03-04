import React from "react";
import '../style/Location.css';

const Location = () => {
  return (
    <div className="location-page">
      <div className="text-container">
        <h5>Sân nằm ở vị trí gần trung tâm</h5>
        <h5>Yên tĩnh, thoáng mát, chỗ để xe thoải mái</h5>
      </div>
      <div className="map-container">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.033446590892!2d105.85587561030516!3d21.031347680537824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0000715b7f%3A0xfa2626407c65ab52!2sHTL%20Pickleball%20Center!5e0!3m2!1svi!2sfi!4v1741029989190!5m2!1svi!2sfi" 
          width="600" 
          height="450" 
          style={{border: 0}} 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;

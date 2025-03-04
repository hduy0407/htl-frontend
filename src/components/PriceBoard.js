import React from 'react';
import '../style/PriceBoard.css'; // Add any custom styling if needed

const PriceBoard = () => {
  return (
    <div className="page-priceboard">
        <div className="title-band">
            <h3>Bảng Giá</h3>
        </div>
        <div className="container-priceboard">
            <img src='/assets/priceboard.jpg' alt="Price Board" className="price-board" />
        </div>
    </div>
  );
};

export default PriceBoard;
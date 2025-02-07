import React, { useState } from 'react';

const QuantitySelector = ({ initialQty = 1, onChange }) => {
  const [qty, setQty] = useState(initialQty);

  const handleIncrement = () => {
    setQty(qty + 1);
    onChange(qty + 1);
  };

  const handleDecrement = () => {
    if (qty > 1) {
      setQty(qty - 1);
      onChange(qty - 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button type="button" onClick={handleDecrement} style={{width: "20px",backgroundColor: "#fff",marginRight: "5px",fontWeight:" 900"}}>-</button>
      <input type="number" value={qty} readOnly style={{ width:"30px"}} />
      <button type="button" onClick={handleIncrement} style={{width: "20px",backgroundColor: "#fff",marginLeft: "5px",fontWeight:" 900"}}>+</button>
    </div>
  );
};

export default QuantitySelector;

import React, { useState } from 'react';

const QuantitySelector = ({ initialQty = 1, onChange }) => {
  const [qty, setQty] = useState(initialQty);

  const handleIncrement = () => {
    setQty((prev) => {
      const newQty = prev + 1;
      onChange(newQty);
      return newQty;
    });
  };

  const handleDecrement = () => {
    setQty((prev) => {
      if (prev > 1) {
        const newQty = prev - 1;
        onChange(newQty);
        return newQty;
      }
      return prev;
    });
  };

  const handleChange = (e) => {
    let value = e.target.value;

    if (value === "") {
      setQty("");
      return;
    }

    value = parseInt(value, 10);
    if (!isNaN(value) && value > 0) {
      setQty(value);
      onChange(value);
    }
  };

  return (
    <div className="quantity-selector">
      <button
        type="button"
        onClick={handleDecrement}
        style={{ width: "20px", backgroundColor: "#fff", marginRight: "5px", fontWeight: "900" }}
      >
        -
      </button>
      <input
        type="number"
        value={qty}
        onChange={handleChange}
        style={{ width: "40px", textAlign: "center" }}
      />
      <button
        type="button"
        onClick={handleIncrement}
        style={{ width: "20px", backgroundColor: "#fff", marginLeft: "5px", fontWeight: "900" }}
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;

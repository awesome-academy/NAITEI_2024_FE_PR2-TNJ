import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

export default function QuantityControl(): JSX.Element {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  return (
    <div className="shadow-none inline float-right h-[30px] w-[80px] md:block md:float-none md:h-[42px] border">
      <div className="h-full flex justify-between items-center">
        <button
          onClick={handleDecrement}
          className="flex-1 border-r h-full transition-all hover:text-white hover:bg-primary"
        >
          <FontAwesomeIcon icon={faMinus} />
        </button>
        <span className="flex-1 text-center">{quantity}</span>
        <button
          onClick={handleIncrement}
          className="flex-1 h-full border-l transition-all hover:text-white hover:bg-primary"
        >
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </div>
  );
}

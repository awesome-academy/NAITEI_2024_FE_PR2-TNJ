import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';

interface QuantityControlProps {
  productId: number;
  initialQuantity: number;
  remainingStock: number;
  updateQuantity: (productId: number, quantity: number) => Promise<void>;
}

export default function QuantityControl({
  productId,
  initialQuantity,
  remainingStock,
  updateQuantity,
}: QuantityControlProps): JSX.Element {
  const [quantity, setQuantity] = useState(initialQuantity);

  useEffect(() => {
    setQuantity(initialQuantity);
  }, [initialQuantity]);

  const handleIncrement = () => {
    if (quantity < initialQuantity + remainingStock) {
      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      updateQuantity(productId, newQuantity);
    } else {
      toast.error('Out of Stock!');
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateQuantity(productId, newQuantity);
    }
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

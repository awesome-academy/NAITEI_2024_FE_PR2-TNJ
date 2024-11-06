import React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  currentStep: number;
  onSetStep: (number: number) => void;
}
export default function Steps({ currentStep, onSetStep }: Props): JSX.Element {
  const { t } = useTranslation();
  const steps = [
    t('checkout.card-confirm'),
    t('checkout.address'),
    t('checkout.pay'),
  ];
  return (
    <div className=" rounded-lg mx-auto ">
      <div className="flex items-center">
        <div
          className={`relative h-10 w-10 rounded-full bg-gray-300 flex items-center cursor-pointer justify-center text-lg ${
            currentStep >= 1 ? 'bg-primary text-white' : ''
          }`}
          onClick={() => onSetStep(1)}
        >
          <span className="text-white">1</span>
          <span
            className={`absolute top-[-30px] text-[14px]  text-nowrap ${
              currentStep >= 1 ? 'text-primary font-bold' : 'text-gray-300'
            } `}
          >
            {steps[0]}
          </span>
        </div>
        <span
          className={`flex-1 h-0.5 bg-gray-300 ${
            currentStep >= 2 ? 'bg-primary' : ''
          }`}
        ></span>
        <div
          className={`relative h-10 w-10 rounded-full bg-gray-300 flex items-center cursor-pointer justify-center text-lg ${
            currentStep >= 2 ? 'bg-primary text-white' : ''
          }`}
          onClick={() => onSetStep(2)}
        >
          <span className="text-white">2</span>
          <span
            className={`absolute top-[-30px] text-[14px] text-nowrap ${
              currentStep >= 2 ? 'text-primary font-bold' : 'text-gray-300'
            } `}
          >
            {steps[1]}
          </span>
        </div>
        <span
          className={`flex-1 h-0.5 bg-gray-300 ${
            currentStep >= 3 ? 'bg-primary' : ''
          }`}
        ></span>
        <div
          className={`relative h-10 w-10 rounded-full bg-gray-300 flex items-center cursor-pointer justify-center text-lg ${
            currentStep >= 3 ? 'bg-primary text-white' : ''
          }`}
          onClick={() => onSetStep(3)}
        >
          <span className="text-white">3</span>
          <span
            className={`absolute top-[-30px] text-[14px]  text-nowrap ${
              currentStep >= 3 ? 'text-primary font-bold' : 'text-gray-300'
            } `}
          >
            {steps[2]}
          </span>
        </div>
      </div>
    </div>
  );
}

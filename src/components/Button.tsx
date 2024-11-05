import React from 'react';

interface Props {
  icon?: string;
  title: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Button({
  icon,
  title,
  onClick,
  variant = 'primary',
  className = '',
}: Props): JSX.Element {
  const baseStyles =
    'flex items-center justify-center border border-[#d8d8d8] px-5 h-[42px] text-[13px] font-normal uppercase transition-all';
  const variantStyles = {
    primary: 'text-white bg-primary hover:opacity-85',
    secondary: 'bg-[#f6f6f6] hover:bg-[#eeeeee]',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && (
        <img src={icon} alt={title} className="h-[14px] w-[14px] mr-[5px]" />
      )}
      <span>{title}</span>
    </button>
  );
}

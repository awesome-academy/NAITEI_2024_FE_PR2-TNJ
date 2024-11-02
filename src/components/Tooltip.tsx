import { ReactNode, useState, useRef } from 'react';
import React from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  children: ReactNode;
  content: string;
}

export default function Tooltip({ children, content }: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
  });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      setTooltipPosition({ x: rect.left, y: rect.bottom, width: rect.width });
    }
    setVisible(true);
  };

  const hideTooltip = () => setVisible(false);

  const tooltipContent = (
    <div
      className="fixed p-2 bg-gray-800 text-white text-sm rounded-md shadow-lg z-50"
      style={{
        top: tooltipPosition.y,
        left: tooltipPosition.x,
        width: tooltipPosition.width,
      }}
    >
      {content}
    </div>
  );

  return (
    <div
      ref={wrapperRef}
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {children}
      {visible && createPortal(tooltipContent, document.body)}
    </div>
  );
}

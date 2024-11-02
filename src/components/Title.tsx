import React from 'react';

interface Props {
  title: string;
  titleClassName: string;
  subTitle: string;
  subTitleClassName: string;
}

export default function Title({
  title,
  subTitle,
  titleClassName,
  subTitleClassName,
}: Props) {
  return (
    <div>
      <h1
        className={`text-[#333333] font-bold text-[32px] uppercase ${titleClassName}`}
      >
        {title}
      </h1>
      <div className={`flex items-center ${subTitleClassName}`}>
        <span className="border-t border-primary w-[100px]"></span>
        <span className="italic text-[14px] pl-4">{subTitle}</span>
      </div>
    </div>
  );
}

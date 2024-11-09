import React from 'react';
import star from '../image/star.png';
import star_empty from '../image/star-empty.png';
interface Props {
  rating: number;
  className?: string;
}

export default function StarList({ className, rating }: Props): JSX.Element {
  const totalStars = 5;

  return (
    <li className={`ais-RatingMenu-item pb-4 flex items-center ${className}`}>
      {[...Array(totalStars)].map((_, index) => (
        <img
          key={index}
          src={index < rating ? star : star_empty}
          alt={index < rating ? 'Full star' : 'Empty star'}
          className="inline-block h-3 w-3 mr-1"
        />
      ))}
    </li>
  );
}

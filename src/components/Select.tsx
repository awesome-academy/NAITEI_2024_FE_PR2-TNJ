import React from 'react';
import { Option } from '../types/option.type';

interface Props {
  options: Option[];
  label: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
}

export default function Select({
  options,
  label,
  onChange,
  value,
}: Props): JSX.Element {
  return (
    <select
      className="ais-select border rounded px-2 py-1"
      aria-label={label}
      value={value}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} className="ais-option" value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

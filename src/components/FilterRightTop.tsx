import { useTranslation } from 'react-i18next';
import Select from './Select';
import React from 'react';

interface Props {
  productPerPage: number;
  onSetProductPerPage: (number: number) => void;
  sortBy: string;
  onSetSortBy: (string: string) => void;
}

export default function FilterRightTop({
  productPerPage,
  onSetProductPerPage,
  sortBy,
  onSetSortBy,
}: Props): JSX.Element {
  const { t } = useTranslation();

  const hitsPerPageOptions = [
    { value: '8', label: '8' },
    { value: '16', label: '16' },
    { value: '32', label: '32' },
  ];

  const sortByOptions = [
    { value: 'feature_default', label: t('sortFeature') },
    { value: 'price_asc', label: t('priceUp') },
    { value: 'price_desc', label: t('priceDown') },
  ];

  return (
    <header className="container-header container-options min-h-[80px] items-center border-b border-[#ebecf3] justify-end mb-[30px] py-[30px] flex">
      <div className="ais-SortBy container-option text-[#21243d] text-[.75rem] relative">
        <Select
          options={sortByOptions}
          label="Sort results by"
          onChange={(e) => onSetSortBy(e.target.value)}
          value={sortBy}
        />
      </div>
      <div className="ais-HitsPerPage container-option ml-12 text-[#21243d] text-[.75rem] relative">
        <Select
          options={hitsPerPageOptions}
          label="Hits per page"
          onChange={(e) => onSetProductPerPage(Number(e.target.value))}
          value={'' + productPerPage}
        />
      </div>
    </header>
  );
}

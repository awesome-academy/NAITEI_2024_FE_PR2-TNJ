import React from 'react';
import Tooltip from './Tooltip';
import { useTranslation } from 'react-i18next';
import { NewsItem as News } from 'src/types/news.type';
import { Link } from 'react-router-dom';

interface Props {
  newsItem: News;
}

const NewsItem = ({ newsItem }: Props) => {
  const { t } = useTranslation();

  return (
    <div className="px-[10px]">
      <div className="item-inner relative bg-white shadow-md ">
        <div className="relative">
          <Link
            to={`/news?id=${newsItem.id}`}
            className="block overflow-hidden"
          >
            <img
              className="w-full h-48 object-cover transition-all hover:scale-110"
              src={newsItem.urlImg}
            />
          </Link>
          <span className="absolute text-xs text-gray-800 shadow-custom -top-7 left-5 flex flex-col items-center pt-2.5 w-12 h-12 rounded-full bg-white text-center mb-0 uppercase">
            <span>{newsItem.day}</span>
            <span>{newsItem.month}</span>
          </span>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            <Link
              to={`/news?id=${newsItem.id}`}
              className="font-medium hover:text-primary transition-colors"
            >
              {newsItem.title}
            </Link>
          </h3>
          <Tooltip content={newsItem.des}>
            <p className="mb-4 line-clamp-3 text-[14px] hover:cursor-text text-[#7a7a7a]">
              {newsItem.des}
            </p>
          </Tooltip>
          <Link
            to={`/news?id=${newsItem.id}`}
            className="text-primary font-semibold flex items-center hover:underline"
          >
            {t('homepage.read-more')}
            <i className="las la-angle-right ml-1"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

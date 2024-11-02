import React from 'react';
import banner from '../image/banner-homepage.png';
import Tooltip from './Tooltip';
import { useTranslation } from 'react-i18next';

const NewsItem = () => {
  const { t } = useTranslation();

  // thay thế bằng api
  const newsItem = {
    urlImg: banner,
    day: '20',
    month: 'Oct',
    title: 'TNJ tổ chức Team Building 2024 tại Quần đảo Cô Tô Quảng Ninh',
    des: `Mở đầu những ngày hè rực rỡ tháng 7, Công ty TNHH Truong Nhung
            Jewelry đã tổ chức thành công một buổi Team Building với sự tham gia
            và hưởng ứng nhiệt tình của các thành viên trong công ty cùng người
            thân. Đây là sự kiện đem lại nhiều trải nghiệm bổ ích, vừa giúp nhân
            viên được nghỉ ngơi thư giãn, vừa là cơ hội để gắn kết các thành
            viên công ty sau một quãng thời gian làm việc vất vả. Cùng nhìn lại
            những khoảnh khắc ấn tượng và đầy ý nghĩa tại chuyến đi Quần đảo Cô
            Tô xinh đẹp nhé!`,
  };
  return (
    <div className="px-[10px]">
      <div className="item-inner relative bg-white shadow-md ">
        <div className="relative">
          <a href="#" className="block overflow-hidden">
            <img
              className="w-full h-48 object-cover transition-all hover:scale-110"
              src={newsItem.urlImg}
            />
          </a>
          <span className="absolute text-xs text-gray-800 shadow-custom -top-7 left-5 flex flex-col items-center pt-2.5 w-12 h-12 rounded-full bg-white text-center mb-0 uppercase">
            <span>{newsItem.day}</span>
            <span>{newsItem.month}</span>
          </span>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">
            <a
              href="#"
              className="font-medium hover:text-primary transition-colors"
            >
              {newsItem.title}
            </a>
          </h3>
          <Tooltip content={newsItem.des}>
            <p className="mb-4 line-clamp-3 text-[14px] text-[#7a7a7a]">
              {newsItem.des}
            </p>
          </Tooltip>
          <a
            href="#"
            className="text-primary font-semibold flex items-center hover:underline"
          >
            {t('homepage.read-more')}
            <i className="las la-angle-right ml-1"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;

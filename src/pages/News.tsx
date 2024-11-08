import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Breadcrumb from 'src/components/Breadcrumb';
import NewsItem from '../components/NewsItem';
import { NewsItem as NewsType } from 'src/types/news.type';
import { useTranslation } from 'react-i18next';

export default function News() {
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();
  const newsId = searchParams.get('id');
  const [newsData, setNewsData] = useState<NewsType[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API}news`);
        if (!response.ok) {
          throw new Error('Failed to fetch news');
        }
        const data = await response.json();
        setNewsData(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchNews();
  }, []);

  const selectedNews = newsId
    ? newsData.find((news) => news.id === parseInt(newsId))
    : null;

  return (
    <div className="mb-4">
      <Breadcrumb />
      <section className="main-content max-w-[1230px] font-poppins w-full px-[30px] mx-auto">
        {!selectedNews ? (
          <div className="">
            <h1 className="text-3xl font-bold text-center mb-12">
              {t('news.title')}
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-10">
              {newsData.map((newsItem) => (
                <NewsItem key={newsItem.id} newsItem={newsItem} />
              ))}
            </div>
          </div>
        ) : (
          <div>
            <article className="max-w-4xl mx-auto">
              <div className="mb-8">
                <img
                  src={selectedNews.urlImg}
                  alt={selectedNews.title}
                  className="w-full h-[400px] object-cover rounded-lg"
                />
                <div className="mt-4 flex items-center gap-4">
                  <span className="text-gray-600">
                    {selectedNews.day} {selectedNews.month}
                  </span>
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-6">{selectedNews.title}</h1>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {selectedNews.des}
                </p>
              </div>
            </article>
          </div>
        )}
      </section>
    </div>
  );
}

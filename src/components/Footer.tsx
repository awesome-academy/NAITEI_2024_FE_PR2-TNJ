import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../image/logo-tnj-footer.png';
import plane from '../image/paper-plane.svg';
import Input from './Input';
import logoSaleNoti from '../image/logoSaleNoti.png';
import house from '../image/house.svg';
import clock from '../image/clock.svg';
import phone from '../image/phone.svg';
import mail from '../image/mail.svg';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <footer className="bg-[#f5f5f5] pt-[60px] px-[15px] pb-[35px] text-[#666666]">
        <div className="max-w-[1170px] flex mx-auto relative">
          <div className="row w-full flex flex-wrap">
            <div className="col w-full md:w-1/2 lg:w-1/4 px-[15px] py-0 flex flex-col">
              <Link to="/">
                <img src={logo} alt="Logo" className="w-[170px] h-[50px]" />
              </Link>
              <div className="mt-4 text-[14px]">
                <ul className="flex flex-col">
                  <li className="mb-[25px]">
                    <h2 className="font-bold pb-[7.5px]">
                      {t('footer.tnj-hanoi')}
                    </h2>
                    <ul className="flex flex-col">
                      <li className="flex mt-[7.5px] pb-[7.5px]">
                        <img
                          src={house}
                          alt="house-icon"
                          className="w-[18px] h-4"
                        />
                        <span className="ml-[15px] hover:text-primary hover:cursor-pointer transition-all">
                          {t('footer.tnj-hanoi-address')}
                        </span>
                      </li>
                      <li className="flex mt-[7.5px] pb-[7.5px]">
                        <img
                          src={phone}
                          alt="phone-icon"
                          className="w-[18px] h-4"
                        />
                        <span className="ml-[15px] hover:text-primary hover:cursor-pointer transition-all">
                          0967.622.821
                        </span>
                      </li>
                      <li className="flex mt-[7.5px] pb-[7.5px]">
                        <img
                          src={mail}
                          alt="mail-icon"
                          className="w-[18px] h-4"
                        />
                        <span className="ml-[15px] hover:text-primary hover:cursor-pointer transition-all">
                          Trangsuctnj41caugiay@gmail.com
                        </span>
                      </li>
                      <li className="flex mt-[7.5px] pb-[7.5px]">
                        <img
                          src={clock}
                          alt="clock-icon"
                          className="w-[18px] h-4"
                        />
                        <span className="ml-[15px] hover:text-primary hover:cursor-pointer transition-all">
                          Mon - Sun : 8 AM - 21 PM
                        </span>
                      </li>
                    </ul>
                  </li>
                  <li className="mb-[25px]">
                    <h2 className="font-bold pb-[7.5px]">TNJ HCM</h2>
                    <ul className="flex flex-col">
                      <li className="flex mt-[7.5px] pb-[7.5px]">
                        <img
                          src={house}
                          alt="house-icon"
                          className="w-[18px] h-4"
                        />
                        <span className="ml-[15px] hover:text-primary hover:cursor-pointer transition-all">
                          {t('footer.tnj-hcm-address')}
                        </span>
                      </li>
                      <li className="flex mt-[7.5px] pb-[7.5px]">
                        <img
                          src={phone}
                          alt="phone-icon"
                          className="w-[18px] h-4"
                        />
                        <span className="ml-[15px] hover:text-primary hover:cursor-pointer transition-all">
                          0986.171.332 - 0938.171.332
                        </span>
                      </li>
                      <li className="flex mt-[7.5px] pb-[7.5px]">
                        <img
                          src={mail}
                          alt="mail-icon"
                          className="w-[18px] h-4"
                        />
                        <span className="ml-[15px] hover:text-primary hover:cursor-pointer transition-all">
                          trangsuctnjhcm@gmail.com
                        </span>
                      </li>
                      <li className="flex mt-[7.5px] pb-[7.5px]">
                        <img
                          src={clock}
                          alt="clock-icon"
                          className="w-[18px] h-4"
                        />
                        <span className="ml-[15px] hover:text-primary hover:cursor-pointer transition-all">
                          Mon - Sun : 8 AM - 21 PM
                        </span>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col w-full md:w-1/2 lg:w-1/4 px-[15px] py-0 flex flex-col">
              <h2 className="font-bold text-[15px] mb-6">
                {t('footer.information')}
              </h2>
              <ul className="flex flex-col text-[14px] uppercase leading-[32px]">
                <li className="hover:text-primary transition-all">
                  <a href="#">{t('footer.shipping-policy')}</a>
                </li>
                <li className="hover:text-primary transition-all">
                  <a href="#">{t('footer.payment-policy')}</a>
                </li>
                <li className="hover:text-primary transition-all">
                  <a href="#">{t('footer.refund-policy')}</a>
                </li>
                <li className="hover:text-primary transition-all">
                  <a href="#">{t('footer.terms-of-service')}</a>
                </li>
                <li className="hover:text-primary transition-all">
                  <a href="#">{t('footer.contact-us')}</a>
                </li>
                <li className="hover:text-primary transition-all">
                  <Link
                    to={sessionStorage.getItem('token') ? '/cart' : '/login'}
                  >
                    {t('footer.cart')}
                  </Link>
                </li>
                <li className="hover:text-primary transition-all">
                  <Link
                    to={sessionStorage.getItem('token') ? '/cart' : '/login'}
                  >
                    {t('footer.order-history')}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col w-full md:w-1/2 lg:w-1/4 px-[15px] py-0 flex">
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftrangsucnamnu&tabs=timeline&width=340&height=140&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="250"
                height="130"
                className="border-none overflow-hidden"
                scrolling="no"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
            <div className="col w-full md:w-1/2 lg:w-1/4 px-[15px] py-0 flex flex-col text-[14px]">
              <h2 className="font-bold text-[15px] mb-6 mt-4 md:mt-0">
                {t('footer.newsletter')}
              </h2>
              <p className="mb-[15px]">{t('footer.subscribe-newsletter')}</p>
              <form action="" className="flex items-center">
                <Input
                  name="username"
                  inputClassName="bg-white rounded-none border-r-0"
                  placeholder={t('footer.enter-your-email')}
                  type="email"
                />
                <button className="bg-primary mt-2 p-3">
                  <img src={plane} alt="plane-icon" className="w-4 h-4" />
                </button>
              </form>
              <p className="mt-4 leading-[24px] mb-[15px]">
                {t('footer.company-info')}
              </p>
              <img
                src={logoSaleNoti}
                alt="logo-notification"
                className="w-[160px] h-[60px]"
              />
            </div>
          </div>
        </div>
      </footer>

      <div className="w-full text-center text-[#666666] p-6">
        Copyright © 2024 tnj.vn
      </div>
    </>
  );
}

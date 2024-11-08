/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';
import ChangeLanguage from './ChangeLanguage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleUser,
  faCartShopping,
  faChevronDown,
  faListUl,
  faMagnifyingGlass,
  faXmark,
  faRightFromBracket,
  faClockRotateLeft,
  faUserPlus,
  faRightToBracket,
} from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import logo from '../image/TNJ-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Social from './Social';
import { CartItem } from 'src/types/cart.type';
import { Category } from 'src/types/category.type';

interface Props {
  onChangeLanguage: (lng: string) => void;
  cart: CartItem[];
}

export default function Header({ onChangeLanguage, cart }: Props): JSX.Element {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<number[]>([]);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);

  const handleUserMouseEnter = () => setIsUserDropdownOpen(true);
  const handleUserMouseLeave = () => setIsUserDropdownOpen(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleToggle = (index: number) => {
    setOpenCategories((prev: number[]) => {
      if (prev.includes(index)) {
        return prev.filter((catIndex) => catIndex !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleLogout = () => {
    sessionStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}categories`);
      const data = await response.json();

      const transformedData = data.map((category: any) => ({
        id: category.id,
        title: category.title,
        subCategories: category.subCategories.map((sub: any) => ({
          id: sub.id,
          name: sub.name,
        })),
      }));
      setCategories(transformedData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSidebarOpen]);

  const token = sessionStorage.getItem('token');
  useEffect(() => {
    setIsLoggedIn(!!token);
  }, [token]);

  return (
    <>
      <div className="bg-[#f5f5f5] hidden lg:flex w-full">
        <div className="px-4 min-h-[80px] w-full flex justify-between items-center">
          <ChangeLanguage onChangeLanguage={onChangeLanguage} />
          <form className="border-b flex items-center w-[500px] ">
            <Input
              name="username"
              inputClassName="rounded-none border-0"
              placeholder={t('header.input-placeholder')}
              type="text"
            />
            <button>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form>
          <div className="social px-4">
            <Social />
          </div>
        </div>
      </div>

      <div className="sticky top-0 w-full z-[20] flex justify-between items-center px-4 py-1 bg-white shadow-sm">
        <div className="lg:hidden flex items-center px-4 z-1000">
          <FontAwesomeIcon
            icon={faListUl}
            className="mr-6 cursor-pointer hover:text-primary transition-all"
            onClick={toggleSidebar}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="cursor-pointer hover:text-primary transition-all"
          />
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" className="px-4" />
        </Link>
        <nav className="category hidden lg:flex items-center space-x-6">
          {categories.map((category) => (
            <div key={category.id} className="relative">
              <Link
                to={`/product?category=${category.id}`}
                className="cursor-pointer hover:text-primary uppercase flex items-center"
                onMouseEnter={() => setHoveredCategory(category.title)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {category.title}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="ml-1 text-[10px]"
                />
              </Link>

              <ul
                className={`before--hover absolute left-0 text-[14px] w-[250px] mt-2 bg-white border border-gray-200 rounded shadow-sm transition-all duration-300 ${
                  hoveredCategory === category.title
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0 pointer-events-none'
                }`}
                onMouseEnter={() => setHoveredCategory(category.title)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {category.subCategories.map((subCategory) => (
                  <li
                    key={subCategory.id}
                    className="hover:text-primary w-full py-2 px-4 text-left border-b border-[#f2f2f2] transition-all"
                  >
                    <Link
                      to={`/product?category=${category.id}&subCategory=${subCategory.id}`}
                    >
                      {subCategory.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="relative">
            <Link
              to="/news"
              className="cursor-pointer hover:text-primary uppercase flex items-center"
            >
              {t('header.news')}
            </Link>
          </div>
        </nav>

        <div className="social flex items-center px-3">
          <div
            className="relative"
            onMouseEnter={handleUserMouseEnter}
            onMouseLeave={handleUserMouseLeave}
          >
            <FontAwesomeIcon
              icon={faCircleUser}
              title={t('header.user')}
              className="hover:text-primary cursor-pointer text-[20px] mr-6 transition-all"
            />

            {isUserDropdownOpen && (
              <ul className="absolute before--hover right-0 mt-2 w-[160px] bg-white border border-gray-200 rounded shadow-sm text-sm transition-all duration-300 opacity-100 transform translate-y-0">
                {isLoggedIn ? (
                  <>
                    <li className="hover:text-primary text-nowrap hover:bg-gray-50 py-2 cursor-pointer border-b px-4 text-left transition-all">
                      <Link
                        to="/purchase-history"
                        className="flex items-center"
                      >
                        <FontAwesomeIcon
                          icon={faClockRotateLeft}
                          className="mr-2"
                        />
                        {t('header.purchaseHistory')}
                      </Link>
                    </li>
                    <li
                      className="hover:text-primary hover:bg-gray-50 py-2 cursor-pointer px-4 text-left transition-all flex items-center"
                      onClick={handleLogout}
                    >
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        className="mr-2"
                      />
                      {t('header.logout')}
                    </li>
                  </>
                ) : (
                  <>
                    <li className="hover:text-primary hover:bg-gray-50 py-2 cursor-pointer border-b px-4 text-left transition-all">
                      <Link to="/login">
                        <FontAwesomeIcon icon={faUserPlus} className="mr-2" />
                        {t('header.login')}
                      </Link>
                    </li>
                    <li className="hover:text-primary hover:bg-gray-50 py-2 cursor-pointer px-4 text-left transition-all">
                      <Link to="/registration">
                        <FontAwesomeIcon
                          icon={faRightToBracket}
                          className="mr-2"
                        />
                        {t('header.register')}
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            )}
          </div>
          <Link to="/cart" className="relative inline-flex items-center">
            <FontAwesomeIcon
              icon={faCartShopping}
              title={t('header.cart')}
              className="hover:text-primary cursor-pointer text-[20px] mr-6 transition-all"
            />
            <span className="absolute inline-flex items-center justify-center w-4 h-4 text-[8px] font-bold text-white bg-primary rounded-full -top-2 right-3">
              {sessionStorage.getItem('token') ? cart.length : 0}
            </span>
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}

      {/* Left Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[360px] bg-white z-30 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="">
          <div className="flex w-full items-center p-4 border-b justify-between">
            <h2 className="text-xl font-semibold">{t('menu')}</h2>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-lg hover:rotate-90 transition-all cursor-pointer duration-500"
              onClick={toggleSidebar}
            />
          </div>

          <ul className="text-[#666666] h-[90vh] overflow-y-auto scrollbar-hidden">
            {categories.map((category, index) => (
              <li key={category.id}>
                <div className="border-b flex items-center justify-between">
                  <Link
                    to={`/product?category=${category.id}`}
                    className={`font-medium px-4 py-2 uppercase flex-1 cursor-pointer transition-all hover:text-primary`}
                  >
                    {category.title}
                  </Link>
                  <span
                    className={`cursor-pointer text-[14px] border-l p-4 hover:bg-primary hover:text-white transition-all ${
                      openCategories.includes(index)
                        ? 'bg-primary text-white'
                        : ''
                    }`}
                    onClick={() => handleToggle(index)}
                  >
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className={`${
                        openCategories.includes(index) ? '' : '-rotate-90'
                      } transition-transform`}
                    />
                  </span>
                </div>
                <ul
                  className={`transition-all duration-500 ${
                    openCategories.includes(index) ? 'max-h-screen' : 'max-h-0'
                  } overflow-hidden`}
                >
                  {category.subCategories.map((subCategory) => (
                    <li
                      key={subCategory.id}
                      className="w-full text-sm px-4 py-2 border-b hover:text-primary transition-all"
                    >
                      <Link
                        to={`/product?category=${category.id}&subCategory=${subCategory.id}`}
                      >
                        {subCategory.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li>
              <div className="border-b flex items-center justify-between">
                <Link
                  to="/news"
                  className={`font-medium px-4 py-4 flex-1 uppercase cursor-pointer transition-all hover:text-primary`}
                >
                  {t('header.news')}
                </Link>
              </div>
            </li>

            <div className="mt-2 mb-6">
              <Social />
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

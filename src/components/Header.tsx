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
} from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import logo from '../image/TNJ-logo.png';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Social from './Social';

interface Props {
  onChangeLanguage: (lng: string) => void;
}

export default function Header({ onChangeLanguage }: Props): JSX.Element {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState<number[]>([]);

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

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  // Gọi api thay thế chỗ này
  const categories = [
    {
      title: 'Trang sức nữ',
      items: ['Nhẫn bạc nữ', 'Nhẫn nữ Moissanite', 'Dây chuyền bạc nữ'],
    },
    {
      title: 'Trang sức nam',
      items: ['Nhẫn nam', 'Dây chuyền nam', 'Lắc tay nam'],
    },
    {
      title: 'Trang sức cho bé',
      items: ['Nhẫn trẻ em', 'Dây chuyền trẻ em', 'Lắc tay trẻ em'],
    },
  ];

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isSidebarOpen]);
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

      <div className="sticky top-0  w-full z-[20] flex justify-between items-center px-4 py-2 bg-white shadow-md">
        <div className="lg:hidden flex items-center px-4 z-1000">
          <FontAwesomeIcon
            icon={faListUl}
            className="mr-6 cursor-pointer hover:text-primary transition-all"
            onClick={toggleSidebar}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className=" cursor-pointer hover:text-primary transition-all"
          />
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" className="px-4" />
        </Link>
        <nav className="category hidden lg:flex items-center space-x-6">
          {categories.map((category) => (
            <div key={category.title} className="relative">
              <span
                className="cursor-pointer hover:text-primary uppercase flex items-center"
                onMouseEnter={() => setHoveredCategory(category.title)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {category.title}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="ml-1 text-[10px]"
                />
              </span>

              <ul
                className={`before--hover absolute left-0 text-[14px] w-[250px] mt-2 bg-white border border-gray-200 rounded shadow-sm transition-all duration-300 ${
                  hoveredCategory === category.title
                    ? 'translate-y-0 opacity-100'
                    : 'translate-y-4 opacity-0 pointer-events-none'
                }`}
                onMouseEnter={() => setHoveredCategory(category.title)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {category.items.map((item) => (
                  <li
                    key={item}
                    className="hover:text-primary w-full py-2 px-4 text-left border-b border-[#f2f2f2] transition-all"
                  >
                    <a href="www.facebook.com">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="relative">
            <span className="cursor-pointer hover:text-primary uppercase flex items-center">
              {t('header.news')}
            </span>
          </div>
        </nav>

        <div className="social flex items-center px-3">
          <FontAwesomeIcon
            icon={faCircleUser}
            title={t('header.user')}
            className="hover:text-primary cursor-pointer text-[20px] mr-6 transition-all"
          />
          <button type="button" className="relative inline-flex items-center">
            <FontAwesomeIcon
              icon={faCartShopping}
              title={t('header.cart')}
              className="hover:text-primary cursor-pointer text-[20px] mr-6 transition-all"
            />
            <span className="absolute inline-flex items-center justify-center w-4 h-4 text-[8px] font-bold text-white bg-primary rounded-full -top-2 right-3">
              20
            </span>
          </button>
        </div>
      </div>

      {/* Overlay  */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}

      {/*Left Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-[360px] bg-white z-30 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="">
          <div className="flex w-full items-center p-4 border-b justify-between">
            <h2 className="text-xl  font-semibold ">{t('menu')}</h2>
            <FontAwesomeIcon
              icon={faXmark}
              className="text-lg hover:rotate-90 transition-all cursor-pointer duration-500"
              onClick={toggleSidebar}
            />
          </div>

          <ul className="text-[#666666] h-[90vh] overflow-y-auto scrollbar-hidden">
            {categories.map((category, index) => (
              <li key={category.title}>
                <div className="border-b flex items-center justify-between">
                  <span
                    className={`font-medium px-4 py-2 uppercase flex-1 cursor-pointer transition-all hover:text-primary`}
                  >
                    {category.title}
                  </span>
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
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="w-full text-sm px-4 py-2 border-b hover:text-primary transition-all"
                    >
                      <a href="www.facebook.com">{item}</a>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li>
              <div className="border-b flex items-center justify-between">
                <span
                  className={`font-medium px-4 py-4 flex-1 uppercase cursor-pointer transition-all hover:text-primary`}
                >
                  {t('header.news')}
                </span>
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

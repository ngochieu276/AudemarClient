import { Link } from 'react-router-dom';
import { Global, Search, User } from 'assets/svg/common';
import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Tiktok,
  Wechat,
  Weibo,
  Whatsapp,
  Youtube,
} from 'assets/svg/social-network';
import CompanyLogo from 'assets/image/Logo.png';
import {
  watchList,
  servicesListHeader,
  ourWorldHeaderList,
  boutiqueList,
  storiesList,
  servicesList,
} from './navigation-labels';
import { useState } from 'react';
import { useScrollDirection, ScroolDirection } from 'hook/scrollDirection';
import Slide from 'component/Slide';
import { SwiperSlide } from 'swiper/react';
import CardDetail from 'component/CardDetail';
import { ourWorldSlides, servicesSlides, storiesLink, watchSlides } from './data';

enum MenuExpand {
  Watches = 'watches',
  Ourworld = 'ourworld',
  Services = 'services',
}

export default function Header() {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [menuExpand, setMenuExpand] = useState<MenuExpand | null>(null);

  const scrollDirection = useScrollDirection();

  const getHeaderPosition = (position: ScroolDirection | null, isOpenMenu: boolean) => {
    if (isOpenMenu) {
      return `top-0`;
    }
    if (position === ScroolDirection.Up) {
      return `top-0`;
    } else if (position === ScroolDirection.Down) {
      return `-top-32`;
    }
  };

  const handleExpandMenu = (menu: MenuExpand) => {
    setOpenMenu(false);
    setMenuExpand(menu);
  };

  const handleMainMenu = () => {
    if (!isOpenMenu && !!menuExpand) {
      setMenuExpand(null);
      return;
    } else setOpenMenu(!isOpenMenu);
  };

  return (
    <header
      className={` sticky ${getHeaderPosition(scrollDirection, isOpenMenu)} z-50 bg-white duration-300 max-h-screen overflow-y-auto no-scrollbar`}
    >
      <div className="h-32 flex items-center justify-between font-semibold text-sm px-4 lg:px-24">
        <div className="flex items-center gap-12">
          <div
            onClick={() => handleMainMenu()}
            className={`
            w-8 h-2 cursor-pointer relative
            after:content-[''] after:block after:absolute after:left-0 after:top-0 after:h-0.5 after:w-full after:bg-black ${isOpenMenu ? 'after:rotate-45 after:top-1/2' : ''} after:duration-500
            before:content-[''] before:block before:absolute before:left-0 before:bottom-0 before:h-0.5 before:w-full before:bg-black ${isOpenMenu ? 'before:-rotate-45 before:top-1/2' : ''} before:duration-500
            `}
          ></div>
          {!isOpenMenu && (
            <Link
              to=""
              className=" hidden lg:block hover:opacity-75"
              onClick={() => handleExpandMenu(MenuExpand.Watches)}
            >
              Watch
            </Link>
          )}
          {!isOpenMenu && (
            <Link
              to=""
              className=" hidden lg:block hover:opacity-75"
              onClick={() => handleExpandMenu(MenuExpand.Ourworld)}
            >
              Our world
            </Link>
          )}
          {!isOpenMenu && (
            <Link to="/stories" className=" hidden lg:block hover:opacity-75">
              Stories
            </Link>
          )}
        </div>
        <div>
          <img src={CompanyLogo} alt="Logo" />
        </div>
        <div className="flex items-center gap-4 lg:gap-12">
          {!isOpenMenu && (
            <Link
              to=""
              className=" hidden lg:block hover:opacity-75"
              onClick={() => handleExpandMenu(MenuExpand.Services)}
            >
              Service
            </Link>
          )}
          {!isOpenMenu && (
            <Link to="/boutiques" className=" hidden lg:block hover:opacity-75">
              Boutiques
            </Link>
          )}
          <Link to="" className=" hover:opacity-75">
            <User color="black" />
          </Link>
          <Link to="" className=" hover:opacity-75">
            <Search color="black" />
          </Link>
        </div>
      </div>
      {isOpenMenu && (
        <div className=" grid grid-cols-4 px-4 pb-12 lg:px-24">
          <div className=" col-span-4 lg:col-span-1 md:row-start-2 lg:row-start-1 text-xs md:grid md:grid-cols-2 lg:flex lg:flex-col">
            <div className="flex flex-col mb-8">
              <label className="font-bold mb-2">Watches</label>
              {watchList.map((item) => (
                <Link to={item.path} className="hover:opacity-75">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col mb-8">
              <label className="font-bold mb-2">Our world</label>
              {ourWorldHeaderList.map((item) => (
                <Link to={item.path} className="hover:opacity-75">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col mb-8">
              <label className="font-bold mb-2">Stories</label>
              {storiesList.map((item) => (
                <Link to={item.path} className="hover:opacity-75">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col mb-8">
              <label className="font-bold mb-2">Services</label>
              {servicesListHeader.map((item) => (
                <Link to={item.path} className="hover:opacity-75">
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="flex flex-col mb-8">
              <label className="font-bold mb-2">Boutiques</label>
              {boutiqueList.map((item) => (
                <Link to={item.path} className="hover:opacity-75">
                  {item.label}
                </Link>
              ))}
            </div>
            <Link to="" className="flex items-center gap-4 pb-24">
              <Global color="black" />
              Change language / currency
            </Link>
          </div>
          <div className=" col-span-4 lg:col-span-3 xl:col-span-2 md:row-start-1 mb-8">
            <h2 className="font-raleway text-4xl lg:text-5xl font-thin">LATEST</h2>
            <h2 className="font-lora text-4xl lg:text-5xl font-normal italic">STORIES</h2>
            <div className=" w-full grid grid-cols-2 gap-8 md:gap-2">
              {storiesLink.map((story) => {
                return (
                  <Link to={story.link} className=" col-span-2 md:col-span-1 ">
                    <div className="overflow-hidden mb-2">
                      <img src={story.img} alt="story" className=" hover:scale-125 duration-1000" />
                    </div>
                    <p className=" font-semibold text-sm">{story.title}</p>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className=" col-span-4 lg:col-span-4 flex flex-col lg:flex-row lg:justify-between gap-12">
            <div className="flex justify-center md:justify-start gap-4">
              <Instagram color="black" />
              <Facebook color="black" />
              <Youtube color="black" />
              <Tiktok color="black" />
              <LinkedIn color="black" />
              <Pinterest color="black" />
              <Weibo color="black" />
              <Wechat color="black" />
              <Whatsapp color="black" />
            </div>
            <div className="flex justify-center md:justify-end">© 2024 Audemars Piguet</div>
          </div>
        </div>
      )}
      {menuExpand === MenuExpand.Watches && (
        <div className=" grid grid-cols-4 px-4 pb-12 lg:px-24">
          <div className=" col-span-4 md:col-span-1">
            <div className="flex flex-col mb-8 md:mt-12">
              {watchList.map((item) => (
                <Link to={item.path} className="hover:opacity-75">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className=" col-span-4 md:col-span-3">
            <div className=" flex items-center gap-2">
              <h2 className="font-raleway text-4xl lg:text-5xl font-thin">OUR</h2>
              <h2 className="font-lora text-4xl lg:text-5xl font-normal italic">COLLECTIONS</h2>
            </div>
            <Slide
              children={watchSlides.map((slide) => {
                return (
                  <SwiperSlide>
                    <CardDetail onlyImage {...slide} />
                  </SwiperSlide>
                );
              })}
            ></Slide>
          </div>
        </div>
      )}
      {menuExpand === MenuExpand.Ourworld && (
        <div className=" grid grid-cols-4 px-4 pb-12 lg:px-24">
          <div className=" col-span-4 md:col-span-1">
            <div className="flex flex-col mb-8 md:mt-12">
              {ourWorldHeaderList.map((item) => (
                <Link to={item.path} className="hover:opacity-75">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className=" col-span-4 md:col-span-3">
            <div className=" flex items-center gap-2">
              <h2 className="font-raleway text-4xl lg:text-5xl font-thin">WHO WE</h2>
              <h2 className="font-lora text-4xl lg:text-5xl font-normal italic">ARE</h2>
            </div>
            <Slide
              children={ourWorldSlides.map((slide) => {
                return (
                  <SwiperSlide>
                    <CardDetail whiteMode {...slide} />
                  </SwiperSlide>
                );
              })}
            ></Slide>
          </div>
        </div>
      )}
      {menuExpand === MenuExpand.Services && (
        <div className=" grid grid-cols-4 px-4 pb-12 lg:px-24">
          <div className=" col-span-4 md:col-span-1">
            <div className="flex flex-col mb-8 md:mt-12">
              {servicesList.map((item) => (
                <Link to={item.path} className="hover:opacity-75">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className=" col-span-4 md:col-span-3">
            <div className=" flex items-center gap-2">
              <h2 className="font-raleway text-4xl lg:text-5xl font-thin">OUR</h2>
              <h2 className="font-lora text-4xl lg:text-5xl font-normal italic">SERVICES</h2>
            </div>
            <Slide
              children={servicesSlides.map((slide) => {
                return (
                  <SwiperSlide>
                    <CardDetail whiteMode {...slide} />
                  </SwiperSlide>
                );
              })}
            ></Slide>
          </div>
        </div>
      )}
    </header>
  );
}

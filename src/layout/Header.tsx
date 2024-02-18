import { Link } from 'react-router-dom';
import { Global, Search, User } from '../assets/svg/common';
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
} from '../assets/svg/social-network';
import CompanyLogo from '../assets/image/Logo.png';
import {
  watchList,
  servicesListHeader,
  ourWorldHeaderList,
  boutiqueList,
  storiesList,
  servicesList,
} from './navigation-labels';
import { useState } from 'react';
import { useScrollDirection, ScroolDirection } from '../hook/scrollDirection';
import Slide from '../component/Slide';
import { SwiperSlide } from 'swiper/react';
import CardDetail from '../component/CardDetail';

const storiesLink = [
  {
    link: '',
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/stories-origins/greeting-card-2024/4000x2352_takeover_2024_v2.jpg.transform.appagelistmob.jpg',
    title: '2024 greetings from Le Brassus: A new chapter begins',
  },
  {
    link: '',
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/stories-art/sallisa-rosa/takeover_1920x1129_sallisa_rosa_v2.jpg.transform.appagelistmob.jpg',
    title: 'Sallisa Rosa: "Topography of Memory"',
  },
  {
    link: '',
    img: 'https://www.audemarspiguet.com/content/dam/ap/com/stories-art/dubai-watch-week/dubai2023_4000x2352_takeover.jpg.transform.appagelistmob.jpg',
    title: 'Audemars Piguet at the Dubai Watch Week 2023',
  },
];

const watchSlides = [
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010333AA/importer/watch.png.transform.apcollectioncarousel.png',
    bgImg:
      'https://www.audemarspiguet.com/content/dam/ap/com/collections/code-11-59/static-bg/1col_4000x1923_Code.png.transform.apcollectioncarousel.png',
    hightlightImg:
      'https://www.audemarspiguet.com/content/dam/ap/com/collections/code-11-59/logo/logo-2000x1639-white-Code%20(1).png.transform.apcollectioncarousel.png',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010962AA/importer/watch.png.transform.apcollectioncarousel.png',
    bgImg:
      'https://www.audemarspiguet.com/content/dam/ap/com/collections/royal-oak/static-bg/1col_4000x1923_RO.png.transform.apcollectioncarousel.png',
    hightlightImg:
      'https://www.audemarspiguet.com/content/dam/ap/com/collections/royal-oak/logo/logo-2000x1075-white-Royal-Oak.png.transform.apcollectioncarousel.png',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009454.00/importer/watch.png.transform.apcollectioncarousel.png',
    bgImg:
      'https://www.audemarspiguet.com/content/dam/ap/com/collections/royal-oak-offshore/static-bg/1col_4000x1923_ROO.png.transform.apcollectioncarousel.png',
    hightlightImg:
      'https://www.audemarspiguet.com/content/dam/ap/com/collections/royal-oak-offshore/logo/logo-2000x1220-white-Royal-Oak-Offshore.png.transform.apcollectioncarousel.png',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR009585.00/importer/watch.png.transform.apcollectioncarousel.png',
    bgImg:
      'https://www.audemarspiguet.com/content/dam/ap/com/collections/royal-oak-concept/static-bg/1col_4000x1923_ROC.png.transform.apcollectioncarousel.png',
    hightlightImg:
      'https://www.audemarspiguet.com/content/dam/ap/com/collections/royal-oak-concept/logo/logo-2000x1220-white-Royal-Oak-Concept.png.transform.apcollectioncarousel.png',
  },
];

const ourWorldSlides = [
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/origins/4000x2352.jpg.transform.appagelist.jpg',
    title: 'Born in Lebrassus',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/savoir-faire/4000x2352-savoirfaire-takeover.jpg.transform.appagelist.jpg',
    title: 'Savoir-Faire',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/hub-contemporary/4000x2352_contemporary_takeover.jpg.transform.appagelist.jpg',
    title: 'Ap & Art',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/ap---music/4000x2352.jpg.transform.appagelist.jpg',
    title: 'Ap & Music',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/ap-and-golf/4000x2352-takeover-golf_v2.jpg.transform.appagelist.jpg',
    title: 'Ap & Golf',
  },
];

const servicesSlides = [
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/origins/4000x2352.jpg.transform.appagelist.jpg',
    title: 'Maintain Services',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/services/caring/4000x2352-caring-takeover.jpg.transform.appagelist.jpg',
    title: 'Caring for your watch',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/services/after-sales/4000x2352-aftersales-takeover.jpg.transform.appagelist.jpg',
    title: 'After Sales Network',
  },
];

enum MenuExpand {
  Watches = 'watches',
  Ourworld = 'ourworld',
  Services = 'services',
}

export default function Header() {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [menuExpand, setMenuExpand] = useState<MenuExpand | null>(null);

  const scrollDirection = useScrollDirection();

  const getHeaderPosition = (position: ScroolDirection | null) => {
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

  return (
    <header
      className={` sticky ${getHeaderPosition(scrollDirection)} z-50 bg-white duration-300 max-h-screen overflow-y-auto no-scrollbar`}
    >
      <div className="h-32 flex items-center justify-between font-semibold text-sm px-4 lg:px-24">
        <div className="flex items-center gap-12">
          <div
            onClick={() => setOpenMenu(!isOpenMenu)}
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
            <Slide>
              {watchSlides.map((slide) => {
                return (
                  <SwiperSlide>
                    <CardDetail onlyImage {...slide} />
                  </SwiperSlide>
                );
              })}
            </Slide>
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
            <Slide>
              {ourWorldSlides.map((slide) => {
                return (
                  <SwiperSlide>
                    <CardDetail whiteMode {...slide} />
                  </SwiperSlide>
                );
              })}
            </Slide>
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
            <Slide>
              {servicesSlides.map((slide) => {
                return (
                  <SwiperSlide>
                    <CardDetail whiteMode {...slide} />
                  </SwiperSlide>
                );
              })}
            </Slide>
          </div>
        </div>
      )}
    </header>
  );
}

import { SwiperSlide } from 'swiper/react';
import IntroduceSlide from '../component/IntroduceSlide';
import IntroduceVideo from '../component/IntroduceVideo';
import CardDetail from '../component/CardDetail';
import IntroduceNoneBG from '../component/IntroduceNoneBg';
import Gallery from '../component/Gallery';
import IntroduceImage from '../component/IntroduceImage';
import Subcribe from '../layout/Subcribe';

const slides1 = [
  {
    link: 'https://dynamicmedia.audemarspiguet.com/is/image/audemarspiguet/carouselHP_novelties_1000x1324_tamara_jan24?size=568,0&fmt=webp-alpha',
    title: 'Royal 1 Oak Concept Flying Tourbillon "Tamara Ralph" Limited Edition',
    description:
      'Designed in collaboration with Tamara Ralph, the limited-edition Royal Oak Concept Flying Tourbillon features an 18-carat pink gold case glittering with Frosted Gold and a multilayered dial in graded shades of brown, bronze and gold.',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/homepage/2023/carousel-our-latest-optim/carouselHP_novelties_1000x1324_RO_26585CM-OO-D301VE-01_V2.jpg.transform.apcarouselv.jpg',
    title: 'Royal Oak Perpetual Calendar Openworked "Cactus Jack" Limited Edition',
    description:
      'This limited edition of 200 pieces is crafted in brown ceramic—a first at Audemars Piguet—and enhanced by components endowed with green or blue luminescent coating.',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/homepage/2023/carousel-our-latest-optim/01-carHP-CODE_77410OR-OO-A623CR-01.jpg.transform.apcarouselv.jpg',
    title: 'Code 11.59 by Audemars Piguet Selfwinding',
    description:
      'Housed in a new 38 mm sized case, this model unites a prune coloured dial and alligator strap with pink gold to deliver a rich and warm aesthetic.',
  },
];

const listGallery = [
  'https://www.audemarspiguet.com/content/dam/ap/com/novelties/cactus-jack/CactusJack_Carousel_02.jpg',
  'https://www.audemarspiguet.com/content/dam/ap/com/homepage/2024/tamara-ralph/15s_REVEAL_MASTER_231123_16-9_H264.mp4',
  'https://www.audemarspiguet.com/content/dam/ap/com/homepage/2024/tamara-ralph/Lookbook_CactusJack_04_bis.jpg',
  'https://www.audemarspiguet.com/content/dam/ap/com/homepage/2024/tamara-ralph/Lookbook_CactusJack_01.jpg',
  'https://www.audemarspiguet.com/content/dam/ap/com/homepage/2024/tamara-ralph/Lookbook_CactusJack_04.jpg',
];

const slides2 = [
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/homepage/2023/avril-new-roo/HP_carousel_NewCode_1000x1321_01.jpg.transform.apcarouselv.jpg',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/homepage/2023/avril-new-roo/HP_carousel_NewCode_1000x1321_02.jpg.transform.apcarouselv.jpg',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/homepage/2023/avril-new-roo/HP_carousel_NewCode_1000x1321_03.jpg.transform.apcarouselv.jpg',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/homepage/2023/avril-new-roo/HP_carousel_NewCode_1000x1321_04.jpg.transform.apcarouselv.jpg',
  },
];

const slides3 = [
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/stories-savoir-faire/podcast-episode-3/Miniature%201_1%20Podcast%203%20(1).jpg.transform.apcarouselvtabwide.jpg',
    title: "Ep 3 - The Royal Oak Offshore's 30th anniversary",
    description:
      'In this new episode of the AP Talks podcast, Malaika Crawford, journalist and watch expert, François-Henry Bennahmias, CEO of Audemars Piguet and Raphaël Balestra, Heritage & Archives Manager talk about the Royal Oak Offshore collection and its unconventional journey that started 30 years ago.',
    buttonMoreLabel: 'Listen to the podcast',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/novelties/book-assouline/COVER_1_2.jpg.transform.apcarouselvtabwide.jpg',
    title: 'Ep 2 - A Step Inside the Archives of the Royal Oak',
    description:
      'Bill Prince and Sébastian Vivas, Heritage and Museum Director at Audemars Piguet, demystify the Royal Oak’s creation process, reception and commercial success by discussing new archival materials and sharing anecdotes. ',
    buttonMoreLabel: 'Listen to the podcast',
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/novelties/book-assouline/COVER%20_1_1.jpg.transform.apcarouselvtabwide.jpg',
    title: 'Ep 1 - 50 Years of Royal Oak:  A Not-so-Perfect Success Story',
    description:
      'Bill Prince turns the clock back with François-Henry Bennhamias, CEO of Audemars Piguet, to relive how the iconoclastic Royal Oak evolved to become an icon. A not so easy road as you will hear.',
    buttonMoreLabel: 'Listen to the podcast',
  },
];

export default function Mainpage() {
  return (
    <div>
      <IntroduceVideo
        title1={`A BOLDLY FEMININE`}
        title2={`ROYAL OAK CONCEPT`}
        description={`A Royal Oak Concept Flying Tourbillon limited-edition designed in collaboration with Haute Couture designer Tamara Ralph.`}
        btnMoreLabel="Discover more"
      />
      <IntroduceSlide
        title1={`OUR`}
        title2={`LATEST`}
        description={`Discover the new watches which embody the brand’s uncompromising approach to craftsmanship.`}
        slideArray={slides1.map((slide) => {
          return (
            <SwiperSlide>
              <CardDetail {...slide} />
            </SwiperSlide>
          );
        })}
        btnMoreLabel="Explore our latest"
      />
      <IntroduceNoneBG
        title1={`AP X`}
        title2={`CACTUS JACK`}
        description={`Audemars Piguet has teamed up with Cactus Jack, the brand and record label founded by American hip hop artist Travis Scott, to design a dedicated Royal Oak Perpetual Calendar limited edition.`}
        btnMoreLabel="Discover more"
      />
      <Gallery list={listGallery} />
      <IntroduceImage
        img="https://www.audemarspiguet.com/content/dam/ap/com/homepage/2023/avril-new-roo/universelle_HP_1920x1283.jpg.transform.apfw.jpg"
        title1={`THE CODE 11.59`}
        title2={`BY AUDEMARS PIGUET UNIVERSELLE`}
        description={`Audemars Piguet pays tribute to its legacy of high complications in this new creation that incorporates 40 different functions, including 23 complications.`}
        btnMoreLabel="Discover more"
      />
      <IntroduceSlide
        title1={`CODE 11.59 BY AUDEMARS PIGUET`}
        title2={`NOW IN STEEL`}
        description={`For the very first time, six new references of the Code 11.59 by Audemars Piguet Selfwinding and Selfwinding Chronograph have been created in stainless steel.`}
        slideArray={slides2.map((slide) => {
          return (
            <SwiperSlide>
              <CardDetail {...slide} onlyImage={true} />
            </SwiperSlide>
          );
        })}
      />
      <IntroduceImage
        img="https://www.audemarspiguet.com/content/dam/ap/com/homepage/2022/50-anniversary/header_APChronicles_1920x1129_v2.jpg.transform.apfw.jpg"
        title1={`AP CHRONICLES:`}
        title2={`DIVE INTO THE ROYAL OAK'S HISTORY`}
        description={`Travel back in time and immerse yourself into the Royal Oak's universe through enriched articles, technical sheets of models and calibres as well as exclusive anecdotes and archival footages uncovered by our Heritage team..`}
        btnMoreLabel="Explore AP Chronicles"
      />
      <IntroduceSlide
        title1={`AP TALKS`}
        title2={`PODCAST`}
        description={`Discover the third episode of the AP TALKS Podcast, a series of conversations presenting Audemars Piguet’s craftsmanship, heritage and cultural universe through the eyes of Audemars Piguet’s experts and special guests.`}
        slideArray={slides3.map((slide) => {
          return (
            <SwiperSlide>
              <CardDetail {...slide} />
            </SwiperSlide>
          );
        })}
      />
      <IntroduceImage
        img="https://www.audemarspiguet.com/content/dam/ap/com/homepage/Musee_HP.jpg.transform.apfw.jpg"
        title1={`MUSÉE ATELIER`}
        title2={`AUDEMARS PIGUET`}
        description={`Experience our heritage, craftsmanship and connection to the world in the Musée Atelier Audemars Piguet which pays tribute to the craftspeople who have made what Audemars Piguet is today, generation after generation.`}
        btnMoreLabel="Discover more"
      />
      <IntroduceImage
        img="https://www.audemarspiguet.com/content/dam/ap/com/homepage/2023/avril-new-roo/img_apcoverage_1920x1283_05.jpg.transform.apfw.jpg"
        title1={`AP COVERAGE`}
        title2={`SERVICE`}
        description={`Discover the AP Coverage Service, a 2-year complimentary service covering the risks of theft as well as partial or total functional damage.`}
        btnMoreLabel="Discover more"
        reverse
        imgScale="2/3"
      />
      <IntroduceImage
        img="https://dynamicmedia.audemarspiguet.com/is/image/audemarspiguet/image_boutiques_hp?size=1920,0&wid=1920&fmt=webp-alpha"
        title1={`FIND A`}
        title2={`BOUTIQUE`}
        btnMoreLabel="Explore all Boutiques"
        whiteMode
      />
      <Subcribe />
    </div>
  );
}

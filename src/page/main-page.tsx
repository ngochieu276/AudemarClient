import { SwiperSlide } from "swiper/react";
import IntroduceSlide from "../component/IntroduceSlide"
import IntroduceVideo from "../component/IntroduceVideo";
import CardDetail from "../component/CardDetail";
import IntroduceNoneBG from "../component/IntroduceNoneBg";

const slides = [
  {
    link: 'https://dynamicmedia.audemarspiguet.com/is/image/audemarspiguet/carouselHP_novelties_1000x1324_tamara_jan24?size=568,0&fmt=webp-alpha',
    title: 'Royal Oak Concept Flying Tourbillon "Tamara Ralph" Limited Edition',  
    description: 'Designed in collaboration with Tamara Ralph, the limited-edition Royal Oak Concept Flying Tourbillon features an 18-carat pink gold case glittering with Frosted Gold and a multilayered dial in graded shades of brown, bronze and gold.'
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/homepage/2023/carousel-our-latest-optim/carouselHP_novelties_1000x1324_RO_26585CM-OO-D301VE-01_V2.jpg.transform.apcarouselv.jpg',
    title: 'Royal Oak Perpetual Calendar Openworked "Cactus Jack" Limited Edition',
    description: 'This limited edition of 200 pieces is crafted in brown ceramic—a first at Audemars Piguet—and enhanced by components endowed with green or blue luminescent coating.'
  },
  {
    link: 'https://www.audemarspiguet.com/content/dam/ap/com/homepage/2023/carousel-our-latest-optim/01-carHP-CODE_77410OR-OO-A623CR-01.jpg.transform.apcarouselv.jpg',
    title: 'Code 11.59 by Audemars Piguet Selfwinding',
    description: 'Housed in a new 38 mm sized case, this model unites a prune coloured dial and alligator strap with pink gold to deliver a rich and warm aesthetic.'
  }
];

export default function Mainpage() {
  return (
    <div>
      <IntroduceVideo 
        title1={`A BOLDLY\nFEMININE`}
        title2={`ROYAL OAK\nCONCEPT`}
        description={`A Royal Oak Concept Flying Tourbillon limited-edition designed\n in collaboration with Haute Couture designer Tamara Ralph.`}
        btnMoreLabel="Discover more"
      />
      <IntroduceSlide 
        title1={`OUR`}
        title2={`LATEST`}
        description={`Discover the new watches which\nembody the brand’s uncompromising\napproach to craftsmanship.`}
        slideArray={slides.map(slide => {
          return <SwiperSlide><CardDetail {...slide}/></SwiperSlide>
        })}
        btnMoreLabel="Explore our latest"
      />
      <IntroduceNoneBG 
        title1={`AP X`}
        title2={`CACTUS JACK`}
        description={`Audemars Piguet has teamed up with Cactus Jack, the \nbrand and record label founded by American hip hop \nartist Travis Scott, to design a dedicated Royal Oak \nPerpetual Calendar limited edition.`}
        btnMoreLabel="Discover more"
      />
    </div>
  )
}

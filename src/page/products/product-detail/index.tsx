import { useState } from 'react';
import Slide from 'component/Slide';
import IntroduceProduct from '../component/intro-product';
import SpecificationProduct from '../component/specification-product';
import { SwiperSlide } from 'swiper/react';
import { closeProductDetais, complicationData, productList } from '../data';
import ProductCard from '../product-card';
import Button from 'component/ui-component/button';
import ButtonMore from 'component/ui-component/more-button';
import CardDetail from 'component/CardDetail';

export enum ProductDetailTabFilter {
  Watch = 'Watch',
  Calibre = 'Calibre',
  Warranty = 'Warranty',
}

export default function ProductDetail() {
  const [productDetail, setProductDetail] = useState<ProductDetailTabFilter>(ProductDetailTabFilter.Watch);

  const hightLightProductDetail = (currentFilter: ProductDetailTabFilter, filter: ProductDetailTabFilter) => {
    return currentFilter === filter;
  };

  return (
    <section className="product-detail">
      <IntroduceProduct
        img="https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010565AA/importer/watch.png.transform.appdpmain.png"
        title1={`CODE 11.59 BY AUDEMARS PIGUET`}
        title2={`GRANDE SONNERIE CARILLON SUPERSONNERIE`}
        description={`Ref. 26397NB.OO.D002KB.01`}
        btnMoreLabel="Discover more"
      />
      <SpecificationProduct
        img="https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010434AA/importer/watch.png.transform.appdpfeaturedcase.png"
        details={
          <div>
            <h6 className=" text-5xl font-thin mb-8">CASE</h6>
            <p>18-carat white gold case, glareproofed sapphire crystal and caseback.</p>
            <div className="mt-16 flex flex-col gap-4">
              <div>
                <label className=" font-semibold">SIZE</label>
                <p className=" text-4xl font-thin">
                  42 <span className=" text-lg">mm</span>
                </p>
              </div>
              <div>
                <label className=" font-semibold">THICKNESS</label>
                <p className=" text-4xl font-thin">
                  15.6 <span className=" text-lg">mm</span>
                </p>
              </div>
              <div>
                <label className=" font-semibold">WATER RESISTANCE</label>
                <p className=" text-4xl font-thin">
                  20 <span className=" text-lg">mm</span>
                </p>
              </div>
            </div>
          </div>
        }
      />
      <SpecificationProduct
        reverse
        img="https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010434AA/importer/watch.png.transform.appdpfeatureddial.png"
        details={
          <div>
            <h6 className=" text-5xl font-thin mb-8">DIAL</h6>
            <p>Beige dial, black counters, pink gold applied hour-markers and hands.</p>
          </div>
        }
      />
      <SpecificationProduct
        img="https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010434AA/importer/watch.png.transform.appdpfeaturedstrap.png"
        details={
          <div>
            <h6 className=" text-5xl font-thin mb-8">BRACELET</h6>
            <p>Black alligator strap with 18-carat white gold AP folding clasp.</p>
          </div>
        }
      />
      <div className="bg-black py-8 flex flex-col">
        <div className=" text-white ps-8 md:ps-36 min-w-fit">
          <h2 className="font-raleway text-4xl lg:text-5xl font-thin whitespace-pre-line">UP CLOSE</h2>
          <h2 className="font-lora text-4xl lg:text-5xl font-normal italic mb-4 lg:mb-8 whitespace-pre-line">
            & IN DETAIL
          </h2>
        </div>
        <div className="ps-0 md:ps-24 lg:ps-72">
          <Slide
            children={closeProductDetais.map((slide) => {
              return (
                <SwiperSlide>
                  <img src={slide} alt="close-detail" />
                </SwiperSlide>
              );
            })}
          ></Slide>
        </div>
      </div>
      <div className="bg-black grid grid-cols-12 py-8 gap-8">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 text-white px-8 lg:ps-16 xl:ps-36 min-w-fit  flex flex-col">
          <h2 className="font-raleway text-4xl lg:text-5xl font-thin">THE ULTIMATE</h2>
          <h2 className="font-lora text-4xl lg:text-5xl font-normal italic mb-4 lg:mb-8">
            ULTRA-
            <br />
            COMPLICATION
          </h2>
          <p className="mb-8">
            Bringing together the Manufacture’s horological savoir-faire into a single selfwinding movement that is
            capable of powering 40 functions, including 23 complications.
          </p>
          <ButtonMore label="View the full list" />
        </div>
        <div className=" col-span-12 md:col-span-6 lg:col-span-8">
          <Slide
            children={complicationData.map((complicationData) => {
              return (
                <SwiperSlide>
                  <CardDetail {...complicationData} />
                </SwiperSlide>
              );
            })}
          ></Slide>
        </div>
      </div>
      <div className="bg-black grid grid-cols-12 py-8 gap-8">
        <div className="col-span-12 md:col-span-6 lg:col-span-4 text-white px-8 lg:ps-16 xl:ps-36 min-w-fit  flex flex-col justify-center">
          <h2 className="font-raleway text-4xl lg:text-5xl font-thin">OTHERS YOU</h2>
          <h2 className="font-lora text-4xl lg:text-5xl font-normal italic mb-4 lg:mb-8">MIGHT LIKE</h2>
          <Button label="Browse All Watches" color="white" bg="inherit" borderColor="white" />
        </div>
        <div className=" col-span-12 md:col-span-6 lg:col-span-8">
          <Slide
            children={productList.map((product) => {
              return (
                <SwiperSlide>
                  <ProductCard product={product} />
                </SwiperSlide>
              );
            })}
          ></Slide>
        </div>
      </div>
      <div className="bg-black py-8 px-8 lg:ps-16 xl:px-36 text-white">
        <h2 className=" text-white font-raleway text-4xl lg:text-5xl font-thin">SPECIFICATIONS</h2>
        <div className="tabs">
          <div className="tab-header flex border-b">
            {Object.values(ProductDetailTabFilter).map((key) => {
              return (
                <div
                  className={` text-white py-4 px-4 flex justify-center font-semibold text-xs relative after:block cursor-pointer 
                    after:absolute after:bottom-0 after:h-0.5 after:w-full after:bg-${hightLightProductDetail(productDetail, key) ? 'white' : 'transparent'} hover:after:bg-white after:duration-500`}
                  onClick={() => setProductDetail(key)}
                >
                  {key}
                </div>
              );
            })}
          </div>
          <div className="tab-contents">
            {productDetail === ProductDetailTabFilter.Watch && (
              <div className=" flex flex-col md:flex-row">
                <div className=" py-16 w-full md:w-1/2">
                  <h6 className=" mb-4 text-2xl font-thin">CASE</h6>
                  <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <label className=" font-semibold text-xs">MATERIAL</label>
                      <p className=" text-xs">18-carat white gold</p>
                    </div>
                    <div>
                      <label className=" font-semibold text-xs">WATER RESISTANCE</label>
                      <p className=" text-xs">20 m</p>
                    </div>
                    <div className=" col-span-1 lg:col-span-2">
                      <label className=" font-semibold text-xs">SIZE</label>
                      <p className=" text-xs">42 mm</p>
                    </div>
                    <div>
                      <h6 className=" mb-4 text-2xl font-thin">DIAL</h6>
                      <p className=" text-xs">Beige dial, black counters, pink gold applied hour-markers and hands.</p>
                    </div>
                    <div>
                      <h6 className=" mb-4 text-2xl font-thin">BRACELET</h6>
                      <p className=" text-xs">Black alligator strap with 18-carat white gold AP folding clasp.</p>
                    </div>
                  </div>
                </div>
                <div className=" hidden md:block p-8">
                  <img
                    src="https://www.audemarspiguet.com/content/dam/ap/com/products/watches/MTR010434AA/importer/watch.png.transform.appdpspecificationsbacktabwide.png"
                    alt="img"
                  />
                </div>
              </div>
            )}
            {productDetail === ProductDetailTabFilter.Calibre && (
              <div className=" flex flex-col md:flex-row">
                <div className=" py-16 w-full md:w-1/2">
                  <h6 className=" mb-4 text-2xl font-thin">CALIBRE 1000</h6>
                  <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div>
                      <label className=" font-semibold text-xs">FUNCTIONS</label>
                      <p className=" text-xs">
                        Grande Sonnerie Supersonnerie, minute repeater, tourbillon, flyback chronograph, split-seconds
                        chronograph, astronomical moon, moon phases, large date, hours and minutes.
                      </p>
                    </div>
                    <div>
                      <label className=" font-semibold text-xs">NUMBER OF JEWELS</label>
                      <p className=" text-xs">90</p>
                    </div>
                    <div className=" col-span-1">
                      <label className=" font-semibold text-xs">MECHANISM</label>
                      <p className=" text-xs">Selfwinding</p>
                    </div>
                    <div>
                      <label className=" font-semibold text-xs">POWER RESERVE</label>
                      <p className=" text-xs">60 h</p>
                    </div>
                    <div>
                      <label className=" font-semibold text-xs">TOTAL DIAMETER</label>
                      <p className=" text-xs">34.3 mm</p>
                    </div>
                    <div>
                      <label className=" font-semibold text-xs">NUMBER OF PARTS</label>
                      <p className=" text-xs">1140</p>
                    </div>
                    <div>
                      <label className=" font-semibold text-xs">FREQUENCY</label>
                      <p className=" text-xs">3 hz 21600 vph</p>
                    </div>
                    <div>
                      <label className=" font-semibold text-xs">THICKNESS</label>
                      <p className=" text-xs">8.8 mm</p>
                    </div>
                  </div>
                </div>
                <div className=" hidden md:block p-8">
                  <img
                    src="https://www.audemarspiguet.com/content/dam/ap/com/products/calibres/A0128369AA/importer/back.png.transform.aphalfwidth.png"
                    alt="img"
                  />
                </div>
              </div>
            )}
            {productDetail === ProductDetailTabFilter.Warranty && (
              <div className=" py-16 w-96">
                <div>
                  <h6 className=" mb-16 text-2xl font-thin">WARRANTY</h6>
                </div>
                <div className="mb-8">
                  <label className=" font-semibold">TWO YEAR WARRANTY</label>
                  <p className=" text-xs">
                    Your watch is guaranteed against manufacturing defects for a period of 2 years subject to our
                    International Sales Warranty.
                  </p>
                </div>
                <div>
                  <label className=" font-semibold">FIVE YEAR WARRANTY</label>
                  <p className=" text-xs">
                    Applicable to all AP watches purchased through our authorized network from 1st January 2017 subject
                    to our International Sales Warranty.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

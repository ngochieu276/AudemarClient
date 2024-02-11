import HeroVideo from '../assets/video/hero-mainpage.mp4';

export default function IntroduceVideo() {
  return (
    <div className="relative w-full flex justify-center items-center">
      <video
        autoPlay
        loop
        muted
        className='w-full z-1'>
        <source
          src={HeroVideo}
          type='video/mp4'
        />
      </video>
      <div className='absolute start-8 inset-y-1/3 -translate-y-1/2'>
        <h2 className='font-raleway text-6xl text-white font-thin'>A BOLDLY <br/> FEMININE</h2>
        <h2 className='font-lora text-6xl text-white font-normal italic mb-8'>ROYAL OAK <br/>  CONCEPT</h2>
        <p className='text-white w-2/3 mb-8'>A Royal Oak Concept Flying Tourbillon limited-edition designed in collaboration with Haute Couture designer Tamara Ralph.</p>
        <div className='flex justify-start items-center'>
          <div className='group flex justify-end items-center w-48 gap-2 cursor-pointer'>
            <div className='bg-white h-0.5 w-4 flex-1 group-hover:flex-initial duration-300'></div>
            <p className='text-white'>Discover More</p>
          </div>
        </div>
      </div>
    </div>
  );
}

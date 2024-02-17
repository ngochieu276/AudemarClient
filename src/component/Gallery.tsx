import VideoPlay from './ui-component/video-play';

interface GalleryProps {
  list: string[];
}

export default function Gallery(props: GalleryProps) {
  return (
    <div className="bg-black grid grid-cols-4 gap-2 lg:gap-4 p-8 lg:p-24">
      {props.list.map((item, index) => {
        let gridProperty = '';
        if (index === 0 || index === 3) {
          gridProperty = 'row-span-2 col-span-2 lg:col-span-1';
        }
        if (index === 1) {
          gridProperty = 'row-span-3 col-span-4 lg:col-span-2 row-start-1 lg:col-start-2';
        }

        if (index === 2 || index === 4) {
          gridProperty = 'row-span-1 col-span-2 lg:col-span-1';
        }

        if (index === 1) {
          return (
            <div className={`bg-black ${gridProperty} flex justify-center items-center overflow-hidden max-h-full`}>
              <VideoPlay link={item} autoPlay loop />
            </div>
          );
        } else {
          return (
            <div className={`bg-white ${gridProperty} flex justify-center items-center object-cover overflow-hidden`}>
              <img src={item} alt="gallery" className="hover:scale-125 duration-1000 h-full " />
            </div>
          );
        }
      })}
    </div>
  );
}

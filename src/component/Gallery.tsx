import VideoPlay from "./ui-component/video-play";

interface GalleryProps {
  list: string[]
}

export default function Gallery(props: GalleryProps) {
  return (
    <div className='bg-black grid grid-cols-4 grid-rows-3 gap-4 p-24'>
      {props.list.map((item, index) => {
        let gridProperty = "";
        if (index === 0 || index === 3) {
          gridProperty = "row-span-2";
        }
        if (index === 1) {
          gridProperty = "row-span-3 col-span-2";
        }

        if (index === 1) {
          return (
            <div
              className={`bg-black ${gridProperty} flex justify-center items-center overflow-hidden`}>
              <VideoPlay
                link={item} 
                autoPlay
                loop
                scale={"200"}
              />
            </div>
          );
        } else {
          return (
            <div
              className={`bg-white ${gridProperty} flex justify-center items-center overflow-hidden`}>
              <img
                src={item}
                alt='gallery'
                className=' scale-125 object-cover hover:scale-150 duration-1000'
              />
            </div>
          );
        }
      })}
    </div>
  );
}

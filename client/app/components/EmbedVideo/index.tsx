import { RiPlayFill } from '@remixicon/react';
import VideoOverlay from './VideoOverlay';
import { useState } from 'react';

export default function EmbedVideo({
  previewSrc,
  src,
}: {
  previewSrc: string;
  src: string;
}) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className='relative'>
      <div>
        <video
          className='video-bg fill hide-for-medium'
          preload='true'
          playsInline
          autoPlay
          muted
          loop
        >
          <source src={previewSrc} type='video/mp4' />
        </video>
      </div>

      <div className='absolute inset-0 flex items-center justify-center'>
        <button
          className='rounded-full border-2 border-white text-white p-4 hover:bg-[--sub4-color]
  hover:border-[--sub4-color] hover:scale-125 transition-transform'
          onClick={() => setShowPopup(true)}
        >
          <RiPlayFill size={80} />
        </button>
      </div>

      {showPopup && (
        <VideoOverlay
          src='https://www.youtube.com/embed/So3ISERLZrw?si=aUYIQhC2qUMqpsNJ'
          hidePopupHandler={() => setShowPopup(false)}
        />
      )}
    </div>
  );
}

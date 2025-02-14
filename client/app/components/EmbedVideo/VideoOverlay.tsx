import { RiCloseLine } from '@remixicon/react';
import { useEffect } from 'react';

export default function VideoOverlay({
  src,
  hidePopupHandler,
}: {
  src: string;
  hidePopupHandler: () => void;
}) {
  useEffect(() => {
    const html = document.querySelector('html');

    if (html) {
      html.style.overflowY = 'hidden';

      return () => {
        html.style.overflowY = '';
      };
    }
  });

  return (
    <div
      className='fixed inset-0 bg-black/80 z-50 flex items-center justify-center'
      onClick={hidePopupHandler}
    >
      <button
        className='text-white/80 right-4 top-4 absolute'
        onClick={hidePopupHandler}
      >
        <RiCloseLine size={32} />
      </button>

      <iframe
        width='1000'
        height='562'
        src={src}
        title='YouTube video player'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        referrerPolicy='strict-origin-when-cross-origin'
        allowFullScreen
        onClick={(e) => e.stopPropagation()}
      ></iframe>
    </div>
  );
}

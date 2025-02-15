import TextRenderer from '~/components/TextRenderer';
import { IPageDetail } from '~/interfaces/page.interface';
import { getImageUrl } from '~/utils';
import './Banner.css';
import { useState } from 'react';

export default function Banner({ page }: { page: IPageDetail }) {
  const [truncate, setTruncate] = useState(true);

  return (
    <div id='banner' className='banner'>
      <img src={getImageUrl(page.pst_thumbnail)} alt={page.pst_title} />

      <div className='container'>
        <div className='col-span-7 -mt-36'>
          <div className='rounded-xl px-10 py-2 flex flex-col bg-[--main-bg-opacity] bg-opacity-90 transition-all ease-linear duration-300 shadow-2xl'>
            <TextRenderer
              content={page.pst_content}
              truncate={truncate}
              maxLines={5}
            />

            {truncate ? (
              <button
                className='inline w-fit text-blue py-2 text-center font-bold text-[--sub5-text]'
                onClick={() => setTruncate(false)}
              >
                Xem thêm
              </button>
            ) : (
              <button
                className='inline w-fit text-blue py-2 text-center font-bold text-[--sub5-text]'
                onClick={() => setTruncate(true)}
              >
                Thu gọn
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

import { IPageDetail } from '~/interfaces/page.interface';
import { useState } from 'react';
import LocationList from './LocationList';
import VideoDisplay from './VideoDisplay';

export default function ILOSystemPage({ page }: { page: IPageDetail }) {
  const [selectedLocation, setSelectedLocation] = useState(locations[0]);

  return (
    <main className='max-w-[1430px] mx-auto px-4 py-20'>
      <h1 className='text-[48px] font-bold text-center text-[#333] mb-16'>
        Ghé thăm chúng tôi
      </h1>

      <div className='grid grid-cols-12 gap-8'>
        <div className='col-span-4'>
          <LocationList
            locations={locations}
            selectedLocation={selectedLocation}
            onLocationSelect={setSelectedLocation}
          />
        </div>

        <div className='col-span-8'>
          <VideoDisplay location={selectedLocation} />
        </div>
      </div>
    </main>
  );
}

const locations = [
  {
    id: 1,
    name: 'ILO PRESCHOOL Gò Vấp',
    address: '380 Nguyễn Văn Lượng, Phường 16, Quận Gò Vấp, TP. HCM',
    hotline: '090 695 4388',
    videoUrl: 'https://www.youtube.com/embed/yQQUmAgZty4',
  },
  {
    id: 2,
    name: 'ILO PRESCHOOL Tân Bình',
    address: '380 Nguyễn Văn Lượng, Phường 16, Quận Gò Vấp, TP. HCM',
    hotline: '090 695 4388',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_2',
  },
  {
    id: 3,
    name: 'ILO PRESCHOOL Tân Phú',
    address: '',
    hotline: '',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_3',
  },
  {
    id: 4,
    name: 'ILO PRESCHOOL Nam Sài Gòn',
    address: '',
    hotline: '',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_4',
  },
  {
    id: 5,
    name: 'ILO PRESCHOOL Bình Dương',
    address: '',
    hotline: '',
    videoUrl: 'https://www.youtube.com/embed/VIDEO_ID_5',
  },
];

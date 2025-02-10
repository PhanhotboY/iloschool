import {
  RiArrowDownLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTimeLine,
} from '@remixicon/react';

import { useRootLoaderData } from '~/lib/useRootLoaderData';
import { getImageUrl, toAddressString } from '~/utils';
import StickyHeader from './StickyHeader';

export default function Header({ shadow }: { shadow?: boolean }) {
  const { appSettings } = useRootLoaderData();

  return (
    <div className='h-[70px] bg-white'>
      <div className='container'>
        <img
          className='absolute w-[125px] h-[70px] top-0 left-0 object-cover'
          alt='Link'
          src={getImageUrl(appSettings.app_logo)}
        />

        <div className='absolute w-[1545px] h-[74px] top-0 left-[190px]'>
          <div className='absolute w-[226px] h-[51px] top-[11px] left-0'>
            <div className='relative h-[51px]'>
              <div className="absolute w-[209px] h-8 top-2 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#666666d9] text-[23.1px] tracking-[0] leading-[31.2px] whitespace-nowrap">
                Câu chuyện về ILO
              </div>

              <RiArrowDownLine />
            </div>
          </div>

          <div className='absolute w-[210px] h-[51px] top-[11px] left-[260px]'>
            <div className='relative h-[51px]'>
              <div className="absolute w-[193px] h-8 top-2 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#666666d9] text-[22.3px] tracking-[0] leading-[31.2px] whitespace-nowrap">
                Chương trình học
              </div>

              <RiArrowDownLine />
            </div>
          </div>

          <div className='absolute w-[180px] h-[51px] top-[11px] left-[504px]'>
            <div className='relative h-[51px]'>
              <div className="absolute w-[163px] h-8 top-2 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#666666d9] text-[23.2px] tracking-[0] leading-[31.2px] whitespace-nowrap">
                Cơ sở vật chất
              </div>

              <RiArrowDownLine />
            </div>
          </div>

          <div className='absolute w-[162px] h-[51px] top-[11px] left-[718px]'>
            <div className='relative h-[51px]'>
              <div className="absolute w-[145px] h-8 top-2 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#666666d9] text-[22.9px] tracking-[0] leading-[31.2px] whitespace-nowrap">
                Hệ thống ILO
              </div>

              <RiArrowDownLine />
            </div>
          </div>

          <div className='absolute w-24 h-[51px] top-[11px] left-[915px]'>
            <div className='relative h-[51px]'>
              <div className="absolute w-[79px] h-8 top-2 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#666666d9] text-[23.2px] tracking-[0] leading-[31.2px] whitespace-nowrap">
                Bản tin
              </div>

              <RiArrowDownLine />
            </div>
          </div>

          <div className='absolute w-[133px] h-[51px] top-[11px] left-[1044px]'>
            <div className='relative h-[51px]'>
              <div className="absolute w-[116px] h-8 top-2 left-0 [font-family:'Inter-Bold',Helvetica] font-bold text-[#666666d9] text-[21.8px] tracking-[0] leading-[31.2px] whitespace-nowrap">
                Tuyển sinh
              </div>

              <RiArrowDownLine />
            </div>
          </div>

          <div className='absolute w-[222px] h-[74px] top-0 left-[1212px]'>
            <div className='relative h-16 top-[3px] bg-[#3e553c] rounded-[50px] overflow-hidden'>
              <div className="absolute w-[156px] h-8 top-[13px] left-[33px] [font-family:'Inter-Bold',Helvetica] font-bold text-[#f7f5ec] text-[23.4px] tracking-[0] leading-6">
                Đăng ký ngay
              </div>
            </div>
          </div>

          <RiArrowDownLine />
        </div>
      </div>

      <div className='absolute w-[1400px] h-px top-[70px] left-[260px] border-t [border-top-style:solid] border-[#696969] opacity-10' />
    </div>
  );
}

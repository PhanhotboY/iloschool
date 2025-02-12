import {
  RiArrowDownLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTimeLine,
} from '@remixicon/react';

import { useRootLoaderData } from '~/lib/useRootLoaderData';
import { getImageUrl, toAddressString } from '~/utils';
import StickyHeader from './StickyHeader';
import { useState } from 'react';
import { Link } from '@remix-run/react';

export default function Header({ shadow }: { shadow?: boolean }) {
  const { appSettings } = useRootLoaderData();

  
  // State quản lý việc mở dropdown
  const [openStoryDropdown, setOpenStoryDropdown] = useState(false);
  const [openProgramDropdown, setOpenProgramDropdown] = useState(false);
  const [openFacilityDropdown, setOpenFacilityDropdown] = useState(false);
  const [openSystemDropdown, setOpenSystemDropdown] = useState(false);
  const [openNewsDropdown, setOpenNewsDropdown] = useState(false);
  const [openEnrollmentDropdown, setOpenEnrollmentDropdown] = useState(false);

  return (
    <div className='h-[70px] bg-white sticky top-0 z-50 shadow-md'> {/* Thêm sticky */}

      <div className='container'>
      <Link to="/">
          <img
            className="absolute w-[125px] h-[70px] top-0 left-0 object-cover"
            alt="Link"
            src={getImageUrl(appSettings.app_logo)}
          />
        </Link>

<div className="absolute w-[1545px] h-[74px] top-0 left-[190px] z-10">
          
          <div
            className="absolute w-[226px] h-[51px] top-[11px] left-0"
            onMouseEnter={() => setOpenStoryDropdown(true)}
            onMouseLeave={() => setOpenStoryDropdown(false)}
          >
            <div className="relative h-[51px]">
              <div className="absolute w-[209px] h-8 top-2 left-0 font-bold text-[#666666d9] text-[23.1px]">
              <Link to="/cau-chuyen-ve-ilo" className="text-lg font-semibold text-gray-700 hover:text-green-700 flex items-center gap-1">
              Câu chuyện về ILO
              <RiArrowDownLine className="text-gray-700 ml-2 text-xl" /> 
            </Link>
              </div>
            </div>
            {openStoryDropdown && (
              <div className="absolute left-0 top-[51px] bg-white border border-[#ccc] shadow-lg w-[220px] rounded-lg z-20">
                <ul className="p-2">
                  <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                    <Link to="/cau-chuyen-ve-ilo#tam-nhin-su-menh">Tầm nhìn và sứ mệnh</Link>
                  </li>
                  <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                    <Link to="/cau-chuyen-ve-ilo#gia-tri-cot-loi">Giá trị cốt lõi</Link>
                  </li>
                  <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                    <Link to="/cau-chuyen-ve-ilo#vi-sao-chon-ilo">Vì sao chọn ILO?</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div
              className="absolute w-[210px] h-[51px] top-[11px] left-[260px]"
              onMouseEnter={() => setOpenProgramDropdown(true)}
              onMouseLeave={() => setOpenProgramDropdown(false)}
            >
              <div className="relative h-[51px]">
                <div className="absolute w-[193px] h-8 top-2 left-0 font-bold text-[#666666d9] text-[22.3px]">
                <Link to="/chuong-trinh-hoc" className="text-lg font-semibold text-gray-700 hover:text-green-700 flex items-center gap-1">
                Chương trình học
              <RiArrowDownLine className="text-gray-700 ml-2 text-xl" /> 
            </Link>
                </div>
              </div>
              {openProgramDropdown && (
                <div className="absolute left-0 top-[51px] bg-white border border-[#ccc] shadow-lg w-[220px] rounded-lg z-20">
                  <ul className="p-2">
                    <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                      <Link to="/chuong-trinh-hoc#tinh-hoa-giao-duc" >Tinh hoa giáo dục Phần Lan</Link>
                    </li>
                    <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                      <Link to="/chuong-trinh-hoc#khung-chuong-trinh">Khung chương trình</Link>
                    </li>
                    <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                      <Link to="/chuong-trinh-hoc#doi-ngu-giao-vien">Đội ngũ giáo viên</Link>
                    </li>
                    <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                      <Link to="/chuong-trinh-hoc#mot-ngay-o-ilo">Một ngày ở ILO</Link>
                    </li>
                  </ul>
                </div>
              )}
          </div>

          
          <div
            className="absolute w-[180px] h-[51px] top-[11px] left-[504px]"
            onMouseEnter={() => setOpenFacilityDropdown(true)}
            onMouseLeave={() => setOpenFacilityDropdown(false)}
          >
            <div className="relative h-[51px]">
              <div className="absolute w-[163px] h-8 top-2 left-0 font-bold text-[#666666d9] text-[23.2px]">
              <Link to="/co-so-vat-chat" className="text-lg font-semibold text-gray-700 hover:text-green-700 flex items-center gap-1">
              Cơ sở vật chất
              <RiArrowDownLine className="text-gray-700 ml-2 text-xl" /> 
            </Link>
              </div>
            </div>
            {openFacilityDropdown && (
              <div className="absolute left-0 top-[51px] bg-white border border-[#ccc] shadow-lg w-[220px] rounded-lg z-20">
                <ul className="p-2">
                  <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                    <Link to="/co-so-vat-chat#phong-hoc">Phòng học</Link>
                  </li>
                  <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                    <Link to="/co-so-vat-chat#san-choi">Sân chơi</Link>
                  </li>
                  <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                    <Link to="/co-so-vat-chat#phong-an">Phòng ăn</Link>
                  </li>
                  <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                    <Link to="/co-so-vat-chat#phong-tuong-tuong">Phòng tưởng tượng</Link>
                  </li>
                  <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                    <Link to="/co-so-vat-chat#thu-vien">Thư viện</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>


        <div
          className="absolute w-[162px] h-[51px] top-[11px] left-[718px]"
          onMouseEnter={() => setOpenSystemDropdown(true)}
          onMouseLeave={() => setOpenSystemDropdown(false)}
        >
          <div className="relative h-[51px]">
              <div className="absolute w-[163px] h-8 top-2 left-0 font-bold text-[#666666d9] text-[23.2px]">
              <Link to="/he-thong-ilo" className="text-lg font-semibold text-gray-700 hover:text-green-700 flex items-center gap-1">
              Hệ thống ILO
              <RiArrowDownLine className="text-gray-700 ml-2 text-xl" /> 
            </Link>
              </div>
            </div>
          {openSystemDropdown && (
            <div className="absolute left-0 top-[51px] bg-white border border-[#ccc] shadow-lg w-[220px] rounded-lg z-20">
              <ul className="p-2">
                <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                  <Link to="/he-thong-ilo#ilo-go-vap">ILO Gò Vấp</Link>
                </li>
                <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                  <Link to="/he-thong-ilo#ilo-tan-dinh">ILO Tân Định</Link>
                </li>
                <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                  <Link to="/he-thong-ilo#ilo-tan-phu">ILO Tân Phú</Link>
                </li>
                <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                  <Link to="/he-thong-ilo#ilo-binh-duong">ILO Bình Dương</Link>
                </li>
              </ul>
            </div>
          )}
        </div>


          <div
            className="absolute w-24 h-[51px] top-[11px] left-[915px]"
            onMouseEnter={() => setOpenNewsDropdown(true)}
            onMouseLeave={() => setOpenNewsDropdown(false)}
          >
            <div className="relative h-[51px]">
              <div className="absolute w-[79px] h-8 top-2 left-0 font-bold text-[#666666d9] text-[23.2px]">
                Bản tin
              </div>
              
            </div>
            {openNewsDropdown && (
              <div className="absolute left-0 top-[51px] bg-white border border-[#ccc] shadow-lg w-[220px] rounded-lg z-20">
                <ul className="p-2">
                  <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">Cùng con trưởng thành</li>
                  <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">Sự kiện</li>
                  <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">Hoạt động vui học</li>
                  <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">Tin tức</li>
                  <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">Multimedia</li>
                </ul>
              </div>
            )}
          </div>

          
        <div
          className="absolute w-[133px] h-[51px] top-[11px] left-[1044px]"
          onMouseEnter={() => setOpenEnrollmentDropdown(true)}
          onMouseLeave={() => setOpenEnrollmentDropdown(false)}
        >
          <div className="relative h-[51px]">
              <div className="absolute w-[163px] h-8 top-2 left-0 font-bold text-[#666666d9] text-[23.2px]">
              <Link to="/tuyen-sinh" className="text-lg font-semibold text-gray-700 hover:text-green-700 flex items-center gap-1">
              Tuyển sinh
              <RiArrowDownLine className="text-gray-700 ml-2 text-xl" /> 
            </Link>
              </div>
            </div>
          {openEnrollmentDropdown && (
            <div className="absolute left-0 top-[51px] bg-white border border-[#ccc] shadow-lg w-[220px] rounded-lg z-20">
              <ul className="p-2">
                <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                  <Link to="/tuyen-sinh#lich-hoc">Lịch học</Link>
                </li>
                <li className="py-2 px-3 hover:bg-gray-200 cursor-pointer">
                  <Link to="/tuyen-sinh#hoc-bong">Học bổng</Link>
                </li>
              </ul>
            </div>
          )}
        </div>


          <div className="absolute w-[222px] h-[74px] top-0 left-[1212px]">
            <div className="relative h-16 top-[3px] bg-[#3e553c] rounded-[50px] overflow-hidden">
              <div className="absolute w-[156px] h-8 top-[13px] left-[33px] font-bold text-[#f7f5ec] text-[23.4px]">
                Đăng ký ngay
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='absolute w-[1400px] h-px top-[70px] left-[260px] border-t [border-top-style:solid] border-[#696969] opacity-10' />
    </div>
  );
}

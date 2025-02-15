import { Link } from '@remix-run/react';
import { getImages } from '~/services/image.server';
import { getPosts } from '~/services/page.server';
import HandsomeError from '~/components/HandsomeError';
import { useLoaderData } from '@remix-run/react';
import MainSlider from './MainSlider';
import { useState } from 'react';

export const loader = async () => {
  const sliders = [
    { img_name: 'banner.jpg' },
    { img_name: 'banner2.jpg' },
    { img_name: 'banner3.jpg' },
    { img_name: 'banner4.jpg' },
    { img_name: 'banner5.jpg' },
  ];
  const posts = await getPosts();

  return { sliders, posts };
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  const [isPlaying, setIsPlaying] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const handlePlayVideo = () => {
    setIsPlaying(true);
  };
  return (
    <main className='w-full'>
      <div className='w-full max-w-[1903px] mx-auto'>
        <MainSlider />

        <h2 className='text-center text-[40px] md:text-[48px] font-bold text-[#333] mt-16 mb-12'>
          6 điểm đặc biệt chỉ có ở ILO
        </h2>

        <div className='flex flex-wrap justify-center gap-8 mt-16'>
          {/* Cơ sở vật chất */}
          <div className='flex-[0_0_calc(50%-1rem)] max-w-[715px] bg-[#faf7f2] rounded-lg overflow-hidden'>
            <img
              className='w-full h-[400px] object-cover'
              src='/assets/csvc.jpg'
              alt='Cơ sở vật chất'
            />
            <div className='px-6 pb-[60px] pt-8'>
              <h3 className='text-[20px] leading-[32px] font-bold text-[#696969] mb-4'>
                Cơ sở vật chất
              </h3>
              <Link
                to='/co-so-vat-chat'
                className='inline-flex items-center px-6 py-3 bg-[#9ab987] text-white rounded-full hover:bg-[#839e71] transition-colors'
              >
                Xem thêm
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Chương trình học */}
          <div className='flex-[0_0_calc(50%-1rem)] max-w-[715px] bg-[#faf7f2] rounded-lg overflow-hidden'>
            <img
              className='w-full h-[400px] object-cover'
              src='/assets/cth.jpg'
              alt='Chương trình học'
            />
            <div className='px-6 pb-[60px] pt-8'>
              <h3 className='text-[20px] leading-[32px] font-bold text-[#696969] mb-4'>
                Chương trình học
              </h3>
              <Link
                to='/chuong-trinh-hoc'
                className='inline-flex items-center px-6 py-3 bg-[#9ab987] text-white rounded-full hover:bg-[#839e71] transition-colors'
              >
                Xem thêm
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className='flex-[0_0_calc(50%-1rem)] max-w-[715px] bg-[#faf7f2] rounded-lg overflow-hidden'>
            <img
              className='w-full h-[400px] object-cover'
              src='/assets/doingugiaovien.jpg'
              alt='Đội ngũ giáo viên'
            />
            <div className='px-6 pb-[60px] pt-8'>
              <h3 className='text-[20px] leading-[32px] font-bold text-[#696969] mb-4'>
                Đội ngũ giáo viên
              </h3>
              <Link
                to='/chuong-trinh-hoc#doi-ngu-giao-vien'
                className='inline-flex items-center px-6 py-3 bg-[#9ab987] text-white rounded-full hover:bg-[#839e71] transition-colors'
              >
                Xem thêm
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className='flex-[0_0_calc(50%-1rem)] max-w-[715px] bg-[#faf7f2] rounded-lg overflow-hidden'>
            <img
              className='w-full h-[400px] object-cover'
              src='/assets/buaan.jpg'
              alt='Bữa ăn'
            />
            <div className='px-6 pb-[60px] pt-8'>
              <h3 className='text-[20px] leading-[32px] font-bold text-[#696969] mb-4'>
                Bữa ăn
              </h3>
              <Link
                to='/cau-chuyen-ve-ilo#bua-an-tai-truong'
                className='inline-flex items-center px-6 py-3 bg-[#9ab987] text-white rounded-full hover:bg-[#839e71] transition-colors'
              >
                Xem thêm
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Hệ thống ILO */}
          <div className='flex-[0_0_calc(50%-1rem)] max-w-[715px] bg-[#faf7f2] rounded-lg overflow-hidden'>
            <img
              className='w-full h-[400px] object-cover'
              src='/assets/hethong.jpg'
              alt='Hệ thống ILO'
            />
            <div className='px-6 pb-[60px] pt-8'>
              <h3 className='text-[20px] leading-[32px] font-bold text-[#696969] mb-4'>
                Hệ thống ILO
              </h3>
              <Link
                to='/he-thong-ilo'
                className='inline-flex items-center px-6 py-3 bg-[#9ab987] text-white rounded-full hover:bg-[#839e71] transition-colors'
              >
                Xem thêm
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>
          </div>

          <div className='flex-[0_0_calc(50%-1rem)] max-w-[715px] bg-[#faf7f2] rounded-lg overflow-hidden'>
            <img
              className='w-full h-[400px] object-cover'
              src='/assets/ct.jpg'
              alt='Chương trình'
            />
            <div className='px-6 pb-[60px] pt-8'>
              <h3 className='text-[20px] leading-[32px] font-bold text-[#696969] mb-4'>
                Chương trình
              </h3>
              <Link
                to='/chuong-trinh-hoc#chuong-trinh-khung'
                className='inline-flex items-center px-6 py-3 bg-[#9ab987] text-white rounded-full hover:bg-[#839e71] transition-colors'
              >
                Xem thêm
                <svg
                  className='w-4 h-4 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <div className='w-full px-4 my-16'>
          <h2 className='text-center text-[40px] md:text-[48px] font-bold text-[#333] mb-12'>
            Một ngày tại ILO
          </h2>

          <div className='relative w-full max-w-[1280px] mx-auto aspect-video rounded-lg overflow-hidden'>
            {!isPlaying ? (
              <>
                <div
                  className='absolute inset-0 bg-cover bg-center'
                  style={{
                    backgroundImage: `url(/assets/banner.jpg)`,
                  }}
                />

                <div
                  className='absolute inset-0 flex items-center justify-center bg-black/30 group hover:bg-black/40 transition-colors cursor-pointer'
                  onClick={handlePlayVideo}
                >
                  <div className='w-20 h-20 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform'>
                    <svg
                      className='w-10 h-10 text-[#333] ml-1'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path d='M8 5v14l11-7z' />
                    </svg>
                  </div>
                </div>
              </>
            ) : (
              <iframe
                className='absolute inset-0 w-full h-full'
                src='https://www.youtube.com/embed/4BJSx_91ckc?autoplay=1'
                title='Một ngày tại ILO'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            )}
          </div>
        </div>

        <div className='w-full px-4 my-16'>
          <h2 className='text-center text-[40px] md:text-[48px] font-bold text-[#333] mt-16 mb-12'>
            Bản tin ILO
          </h2>
        </div>
        {/* Phần đăng ký */}
        <div className='w-full min-h-[1047px] flex flex-wrap items-center px-4 bg-[#f5f8f5]'>
          <div className='w-full md:w-1/2 h-full'>
            <img
              src='/assets/banner.jpg'
              alt='Đăng ký học tại ILO'
              className='w-full h-full object-cover'
            />
          </div>

          <div className='w-full md:w-1/2 p-8 md:p-16'>
            <h2 className='text-[32px] md:text-[40px] font-bold text-[#333] mb-8'>
              Đăng ký cho con học tại ILO
            </h2>

            <form className='space-y-6'>
              <div>
                <input
                  type='text'
                  placeholder='Họ và tên phụ huynh'
                  className='w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#9ab987]'
                />
              </div>

              <div>
                <input
                  type='tel'
                  placeholder='Số điện thoại'
                  className='w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#9ab987]'
                />
              </div>

              <div>
                <select className='w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#9ab987] appearance-none bg-white'>
                  <option value=''>Chọn tuổi của bé</option>
                  <option value='2'>2 tuổi</option>
                  <option value='3'>3 tuổi</option>
                  <option value='4'>4 tuổi</option>
                  <option value='5'>5 tuổi</option>
                </select>
              </div>

              <div>
                <select className='w-full p-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#9ab987] appearance-none bg-white'>
                  <option value=''>Chọn chi nhánh ILO</option>
                  <option value='branch1'>Chi nhánh 1</option>
                  <option value='branch2'>Chi nhánh 2</option>
                  <option value='branch3'>Chi nhánh 3</option>
                </select>
              </div>

              <div className='flex items-start gap-2'>
                <input type='checkbox' id='consent' className='mt-1.5' />
                <label
                  htmlFor='consent'
                  className='text-[#696969] text-[16px] leading-[24px]'
                >
                  Bằng việc đăng ký thông tin, bạn đồng ý cho phép ILO liên lạc
                  thông qua các hình thức: cuộc gọi, tin nhắn, email nhằm mục
                  đích tư vấn các chương trình mầm non & nghiên cứu thị trường.
                  Xem chi tiết về các điều khoản bảo vệ dữ liệu cá nhân mà ILO
                  sẽ thực hiện cho khách hàng tại{' '}
                  <a href='#' className='text-blue-600 hover:underline'>
                    đây
                  </a>
                  .
                </label>
              </div>

              <button
                type='submit'
                className='inline-flex items-center px-8 py-4 bg-[#55713C] text-white rounded-full hover:bg-[#445a30] transition-colors'
              >
                Đăng ký ngay
                <svg
                  className='w-5 h-5 ml-2'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className='w-full px-4 my-16'>
          <h2 className='text-center text-[40px] md:text-[48px] font-bold text-[#333] mt-16 mb-12'>
            Ghé thăm chúng tôi
          </h2>
        </div>

        <div className='w-full bg-[#9ab987] py-4 cursor-pointer hover:bg-[#839e71] transition-colors'>
          <div
            className='flex items-center justify-center gap-2 text-white'
            onClick={scrollToTop}
          >
            <span className='text-lg'>Trở về đầu trang</span>
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 10l7-7m0 0l7 7m-7-7v18'
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
}

export const ErrorBoundary = () => <HandsomeError />;

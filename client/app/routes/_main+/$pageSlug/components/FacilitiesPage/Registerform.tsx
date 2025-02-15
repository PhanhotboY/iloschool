export default function Playground() {
  return (
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
              thông qua các hình thức: cuộc gọi, tin nhắn, email nhằm mục đích
              tư vấn các chương trình mầm non & nghiên cứu thị trường. Xem chi
              tiết về các điều khoản bảo vệ dữ liệu cá nhân mà ILO sẽ thực hiện
              cho khách hàng tại{' '}
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
  );
}

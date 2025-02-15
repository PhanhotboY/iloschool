export default function Library() {
  return (
    <section className='w-full max-w-[1430px] mx-auto px-4 mb-20'>
      <h2 className='text-[40px] font-bold text-[#333] mb-8 text-center'>
        Thư viện
      </h2>

      <div className='text-[#696969] text-[20px] leading-[32px] mb-8'>
        Sách là người bạn tri thức không thể thiếu trên hành trình phát triển
        của con. ILO nuôi dưỡng văn hóa và thói quen đọc sách của con bằng không
        gian thư viện hiện đại với đa dạng các đầu sách tiếng Việt và tiếng Anh.
      </div>

      <div className='grid grid-cols-12 gap-4'>
        {/* Row 1 */}
        <div className='col-span-4'>
          <img
            src='/assets/facilities/classroom/p1.jpg'
            alt='Classroom 1'
            className='w-full h-[300px] object-cover rounded-lg'
          />
        </div>
        <div className='col-span-4'>
          <img
            src='/assets/facilities/classroom/p2.jpg'
            alt='Classroom 2'
            className='w-full h-[300px] object-cover rounded-lg'
          />
        </div>
        <div className='col-span-4'>
          <img
            src='/assets/facilities/classroom/p3.jpg'
            alt='Classroom 3'
            className='w-full h-[300px] object-cover rounded-lg'
          />
        </div>

        {/* Row 2 */}
        <div className='col-span-8'>
          <img
            src='/assets/facilities/classroom/p4.jpg'
            alt='Classroom 4'
            className='w-full h-[400px] object-cover rounded-lg'
          />
        </div>
        <div className='col-span-4'>
          <img
            src='/assets/facilities/classroom/p5.jpg'
            alt='Classroom 5'
            className='w-full h-[400px] object-cover rounded-lg'
          />
        </div>

        {/* Row 3 */}
        <div className='col-span-4'>
          <img
            src='/assets/facilities/classroom/p6.jpg'
            alt='Classroom 6'
            className='w-full h-[500px] object-cover rounded-lg'
          />
        </div>
        <div className='col-span-5'>
          <img
            src='/assets/facilities/classroom/p7.jpg'
            alt='Classroom 6'
            className='w-full h-[500px] object-cover rounded-lg'
          />
        </div>
        <div className='col-span-3'>
          <img
            src='/assets/facilities/classroom/p8.jpg'
            alt='Classroom 6'
            className='w-full h-[500px] object-cover rounded-lg'
          />
        </div>
      </div>
    </section>
  );
}

export default function Scholarship() {
  return (
    <section className='w-full max-w-[1430px] mx-auto px-4 mb-20'>
      <h2 className='text-[40px] font-bold text-[#333] mb-8 text-center'>
        Học bổng
      </h2>

      <div className='grid grid-cols-12 gap-4'>
        {/* Left image */}
        <div className='col-span-6'>
          <img
            src='/assets/tuyen-sinh.jpg'
            alt='Scholarship 1'
            className='w-full h-[500px] object-cover rounded-lg'
          />
        </div>

        {/* Right image */}
        <div className='col-span-6'>
          <img
            src='/assets/tuyen-sinh.jpg'
            alt='Scholarship 2'
            className='w-full h-[500px] object-cover rounded-lg'
          />
        </div>
      </div>
    </section>
  );
}

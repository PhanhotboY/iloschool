export default function DiningRoom() {
  return (
    <section className='w-full max-w-[1430px] mx-auto px-4 mb-20'>
      <h2 className='text-[40px] font-bold text-[#333] mb-8 text-center'>
        Phòng ăn
      </h2>

      <div className='text-[#696969] text-[20px] leading-[32px] mb-8'>
        Phòng ăn được thiết kế mở hai chiều, hướng ra không gian rộng bên ngoài
        mang đến cảm giác thoáng đãng để con tận hưởng bữa ăn vui vẻ. Nhà bếp
        được trang bị hiện đại với quy trình khép kín, đảm bảo chất lượng và an
        toàn vệ sinh thực phẩm để mang đến những cho con bữa ăn ngon, đầy đủ
        dinh dưỡng, tốt cho sức khỏe của con.
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

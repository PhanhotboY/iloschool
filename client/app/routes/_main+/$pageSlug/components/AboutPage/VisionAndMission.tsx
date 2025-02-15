export default function VisionAndMission() {
  return (
    <section className='container'>
      <div className='col-span-6 row-span-3 rounded-xl overflow-hidden'>
        <img src='/assets/about-us/1.png' alt='Câu chuyện về ILO 1' />
      </div>

      <div className='col-span-6'>
        <div className='rounded-xl p-10 bg-[--main-color]'>
          <h2 className='text-3xl font-bold mb-3 text-[--sub4-text]'>
            Tầm Nhìn
          </h2>

          <p>
            Đào tạo một thế hệ không chỉ có khả năng thích ứng với thế giới đang
            thay đổi mà còn góp phần thay đổi thế giới.
          </p>
        </div>
      </div>

      <div className='col-span-6 rounded-xl overflow-hidden'>
        <img src='/assets/about-us/2.png' alt='Câu chuyện về ILO 2' />
      </div>

      <div className='col-span-6'>
        <div className='rounded-xl p-10 bg-[--sub1-color]'>
          <h2 className='text-3xl font-bold mb-3 text-[--sub4-text]'>
            Sứ Mệnh
          </h2>

          <p>
            Cam kết xây dựng một nền tảng giáo dục sẵn sàng cho tương lai và gắn
            chặt với môi trường làm việc hiện đại, cũng như phát triển các giá
            trị của một công dân địa phương – toàn cầu.
          </p>
        </div>
      </div>
    </section>
  );
}

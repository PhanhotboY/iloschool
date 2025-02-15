export default function CoreValues() {
  return (
    <section className='py-24 bg-[--sub3-color]'>
      <div className='container gap-y-16'>
        <div className='col-span-12'>
          <h2 className='text-6xl text-[--sub4-text] font-bold mb-3 text-right capitalize'>
            Giá Trị Cốt Lõi
          </h2>
        </div>

        <div className='col-span-12 h-fit rounded-xl overflow-hidden'>
          <img src='/assets/about-us/3.png' alt='Câu chuyện về ILO 3' />
        </div>

        <div className='col-span-12 grid grid-cols-12 gap-x-16 gap-y-8'>
          {coreValues.map((e, i) => (
            <div
              key={i}
              className={`col-span-5 flex gap-4 items-center ${i % 2 === 0 ? 'row-start-1' : 'row-start-2'} ${i === 1 ? 'col-start-2' : ''}`}
            >
              <div className='w-32 aspect-square'>
                <img
                  className='object-contain'
                  src={`/assets/about-us/${e.icon}`}
                  alt={e.icon}
                />
              </div>

              <p>{e.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const coreValues = [
  {
    icon: 'icon-1.png',
    content: 'Đặt phát triển con người là giá trị cốt lõi cho mọi hoạt động',
  },
  {
    icon: 'icon-2.png',
    content: 'Cam kết luôn đổi mới',
  },
  {
    icon: 'icon-3.png',
    content: 'Hoạt động dựa trên tính minh bạch và hiệu quả',
  },
  {
    icon: 'icon-4.png',
    content: 'Tạo ra những ảnh hưởng tích cực cho cộng đồng',
  },
];

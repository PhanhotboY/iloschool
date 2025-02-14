import { useState } from 'react';

export default function Features() {
  const [showingFeature, setShowingFeature] = useState(0);

  return (
    <section className='container gap-12 pb-40'>
      <h2 className='col-start-4 col-end-10 font-bold text-6xl text-[--sub4-text] text-center capitalize'>
        4 điểm đặc biệt có ở ILO Preschool
      </h2>

      <ul
        className='col-span-12 flex gap-8'
        onMouseLeave={() => setShowingFeature(0)}
      >
        {features.map((feature, index) => (
          <li
            key={index}
            className={`${showingFeature === index ? 'w-1/2' : 'w-1/6'} 
            relative h-[580px] transition-all ease-in-out duration-200`}
            onMouseEnter={() => setShowingFeature(index)}
          >
            <div className='h-full rounded-xl overflow-hidden'>
              <img
                className={`${showingFeature === index ? 'scale-110' : 'scale-100'} 
            relative h-[580px] transition-all ease-in-out duration-200`}
                src={feature.image}
                alt={feature.title}
              />
            </div>

            <div
              className={`absolute w-[500px] p-8 rounded-xl  flex flex-col justify-center bg-[--sub2-color] 
               -bottom-12 transition-all ease-in-out duration-200 ${
                 showingFeature === index
                   ? 'block opacity-100 -left-10'
                   : 'hidden opacity-0 left-100'
               } shadow-xl`}
            >
              <h3 className='font-bold text-3xl text-[--sub4-color]'>
                {feature.title}
              </h3>
              <p className='mt-4 text-lg'>{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

const features = [
  {
    title: 'Cơ sở vật chất tại ILO',
    description:
      'ILO được thiết kế theo phong cách tối giản Bắc Âu – Scandinavian với chất liệu chủ đạo là gỗ và đá, gần gũi với thiên nhiên. Những lớp học “không tường”, đón ánh sáng tự nhiên cùng hệ thống mảng xanh, máy lọc không khí và nguồn nước sạch lành cho con thỏa sức vui học.',
    image: '/assets/about-us/feature-1.png',
  },
  {
    title: 'Con người ở ILO',
    description:
      'Giáo viên ILO được tuyển chọn với tiêu chí cao nhất về năng lực chuyên môn nghiệp vụ và tham gia những chương trình đào tạo bài bản. Mỗi khoảnh khắc con ở trường luôn nhận được sự chăm sóc tận tình bằng yêu thương và trách nhiệm từ đội ngũ nhân viên của ILO Preschool.',
    image: '/assets/about-us/feature-2.png',
  },
  {
    title: 'Triết lý giáo dục ở ILO',
    description:
      'ILO Preschool ứng dụng tinh hoa giáo dục Phần Lan, dựa trên khung chương trình của Bộ Giáo dục & Đào tạo Việt Nam, lấy học sinh làm trung tâm của mọi hoạt động. Mục tiêu của chúng tôi là tạo nên những em bé hạnh phúc, tự tin và đam mê trọn đời với việc học.',
    image: '/assets/about-us/feature-3.png',
  },
  {
    title: 'Bữa ăn tại trường',
    description:
      'Những bữa ăn dinh dưỡng và an toàn vệ sinh thực phẩm cho con luôn là ưu tiên hàng đầu của ILO. Nguồn thực phẩm và quy trình chế biến được kiểm định nghiêm ngặt cùng với đội ngũ đầu bếp tài hoa, thực đơn đa dạng để con tận hưởng những bữa ăn vui vẻ và thích thú.',
    image: '/assets/about-us/feature-4.png',
  },
];

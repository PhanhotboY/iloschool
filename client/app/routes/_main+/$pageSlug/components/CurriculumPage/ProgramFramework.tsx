import { RiArrowDownSLine, RiArrowUpSLine } from '@remixicon/react';
import { useState } from 'react';

export default function ProgramFramework() {
  const [showingFramework, setShowingFramework] = useState<
    (typeof frameworks)[0] | null
  >(frameworks[0]);

  return (
    <section className='container'>
      <h2 className='col-span-12 text-6xl font-bold text-[--sub4-text]'>
        Khung chương trình
      </h2>

      <div className='col-span-6'>
        <ul className='text-[--sub4-text] space-y-6'>
          {frameworks.map((framework) => (
            <li key={framework.title}>
              <div
                className={`flex justify-between cursor-pointer text-2xl ${
                  showingFramework?.title === framework.title
                    ? 'font-bold text-[--sub4-text]'
                    : 'text-[--sub6-text]'
                } pb-2 select-none transition-all duration-500 ease-in-out`}
                onClick={() => {
                  if (showingFramework?.title === framework.title) {
                    setShowingFramework(null);
                  } else {
                    setShowingFramework(framework);
                  }
                }}
              >
                <h3>{framework.title}</h3>

                {showingFramework?.title === framework.title ? (
                  <RiArrowDownSLine size={30} />
                ) : (
                  <RiArrowUpSLine size={30} />
                )}
              </div>

              <div
                className={`font-normal space-y-4 text-sm rounded-b-2xl bg-[--main-color] border-t 
                border-[--sub4-color] overflow-hidden ${
                  showingFramework?.title === framework.title
                    ? 'max-h-[1000px]'
                    : 'max-h-0'
                } transition-all duration-500 ease-in-out`}
              >
                <p
                  className='p-8'
                  dangerouslySetInnerHTML={{ __html: framework.content }}
                ></p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className='col-span-6 rounded-xl overflow-hidden'>
        <img
          src={showingFramework?.image || frameworks[0].image}
          alt={showingFramework?.title || frameworks[0].title}
        />
      </div>
    </section>
  );
}

const frameworks = [
  {
    title: 'Độ tuổi',
    content: `<ul class='list-disc'>
        <li><strong>Lớp Foxes</strong> (18 tháng – 24 tháng)</li>
        <li><strong>Lớp Bears</strong> (24 tháng – 36 tháng)</li>
        <li><strong>Lớp Seals</strong> (3 – 4 tuổi)</li>
        <li><strong>Lớp Owls</strong> (4 – 5 tuổi)</li>
        <li><strong>Lớp Squirrels</strong> (5 -6 tuổi)</li>
      </ul>`,
    image: '/assets/framework/do-tuoi.png',
  },
  {
    title: 'Chương trình khung',
    content: `<p>ILO do tổ chức giáo dục ILA sáng lập và vận hành. Tại trường Mầm non song ngữ ILO Preschool, chương trình học của bé được cập nhật hàng tuần, hàng tháng theo gợi ý từ chuyên gia đầu ngành thuộc Tổ chức Giáo dục HEI Phần Lan. Bên cạnh phương pháp Play-based learning, hệ thống mầm non quốc tế ILO Preschool kết hợp thêm các phương pháp giáo dục tiêu biểu cho học sinh mầm non như Project-based learning và Theme-based learning để giúp con tiếp thu kiến thức tự nhiên với đầy hứng thú.</p>`,
    image: '/assets/framework/chuong-trinh-khung.png',
  },
  {
    title: 'Tiếp cận Đa ngôn ngữ',
    content: `<div>
      <p class="p1">Độ tuổi mầm non được xem là “thời điểm vàng” để con tiếp xúc với các ngôn ngữ khác nhau. Giáo dục đa ngôn ngữ mang lại rất nhiều lợi ích cho con như phát triển tư duy sáng tạo, trí thông minh và bồi dưỡng trí tuệ cảm xúc.</p>
      <br/>
      <p class="p1">Chúng tôi đem đến chương trình tiếp cận kiến thức và phát triển kỹ năng bằng 3 ngôn ngữ Anh – Việt – Trung. Được lồng ghép trong các môn toán, khoa học, nghệ thuật và âm nhạc, ngôn ngữ trở nên gần gũi trong hoạt động thường nhật của con.</p>
      <br/>
      <p class="p1">Chúng tôi không đơn thuần chỉ dạy ngôn ngữ mà tạo nên môi trường để con va chạm và tiếp nhận tự nhiên. Bằng cách này, tình yêu ngôn ngữ nơi con sẽ từng ngày được nuôi dưỡng và phát triển.</p>
    </div>`,
    image: '/assets/framework/tiep-can-da-ngon-ngu.png',
  },
  {
    title: 'Chương trình tiền tiểu học',
    content:
      '<p>Tại ILO Preschool, chương trình tiền tiểu học tập trung các kỹ năng mềm, toán học và ngôn ngữ giúp con chuẩn bị tâm lý, khả năng tự lập để làm quen môi trường mới. Từ ngôi trường giáo dục hạnh phúc, con được trang bị những kiến thức và kỹ năng quan trọng để nổi trội và tự tin bước vào tiểu học.</p>',
    image: '/assets/framework/chuong-trinh-tien-tieu-hoc.png',
  },
  {
    title: 'Chương trình ngoại khóa',
    content:
      '<p>Bên cạnh các lớp học chính, Mầm non song ngữ ILO Preschool tổ chức các lớp ngoại khóa với đa dạng môn học khác nhau yoga, dance sport, toán tư duy… Các lớp học ngoại khóa ECA (Extracurricular Activities) không những tạo cơ hội cho con khám phá nhiều kiến thức hữu ích mà còn giúp con tìm thấy sở thích riêng và bộc lộ tài năng ngay từ khi còn nhỏ. Đây chính là một bước đệm để con có thể nuôi dưỡng đam mê và tự tin tỏa sáng trong tương lai.</p>',
    image: '/assets/framework/chuong-trinh-ngoai-khoa.png',
  },
  {
    title: 'Thời khóa biểu mẫu',
    content:
      '<p>Mỗi ngày tại ILO Preschool con sẽ học và chơi thông qua rất nhiều hoạt động thú vị bên cạnh thời gian nghỉ ngơi và ăn uống lành mạnh. Đây là thời gian biểu một ngày tại ILO Preschool, ba mẹ có thể tham khảo để đưa ra lựa chọn phù hợp cho con.</p>',
    image: '/assets/framework/thoi-khoa-bieu-mau.png',
  },
];

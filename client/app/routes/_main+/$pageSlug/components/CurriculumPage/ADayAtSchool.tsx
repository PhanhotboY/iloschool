import { RiPlayFill } from '@remixicon/react';
import EmbedVideo from '~/components/EmbedVideo';

export default function ADayAtSchool() {
  return (
    <section>
      <div className='container'>
        <h2 className='col-span-12 text-6xl font-bold text-center text-[--sub4-text]'>
          Một ngày tại Mầm non song ngữ ILO
        </h2>

        <p className='col-start-3 col-end-11 text-center'>
          Chào ngày mới ở ILO Preschool bằng yêu thương và những cái ôm trìu
          mến. Con sẽ bắt đầu học hỏi, vui chơi và khám phá trong không gian
          ngập tràn ánh nắng. Mỗi ngày ở ILO là một ngày con hạnh phúc.
        </p>

        <p className='col-span-12 text-center text-xl font-bold'>
          Và đây là một ngày tuyệt vời ở ngôi trường ILO!
        </p>

        <div className='col-span-12'>
          <EmbedVideo
            previewSrc='/assets/a-day-at-school/oneday-bg.mp4'
            src='/videos/day-at-school.mp4'
          />
        </div>
      </div>
    </section>
  );
}

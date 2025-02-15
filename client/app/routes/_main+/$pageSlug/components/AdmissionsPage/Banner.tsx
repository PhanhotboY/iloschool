import { IPageDetail } from '~/interfaces/page.interface';

export default function Banner({ page }: { page: IPageDetail }) {
  return (
    <section
      className='relative w-full h-[700px] bg-cover bg-center bg-no-repeat overflow-hidden'
      style={{
        backgroundImage: 'url("/assets/tuyen-sinh.jpg")',
      }}
    >
      <div className='absolute inset-0 bg-gradient-to-r from-white/20 to-transparent'></div>

      <div className='absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent'></div>
    </section>
  );
}

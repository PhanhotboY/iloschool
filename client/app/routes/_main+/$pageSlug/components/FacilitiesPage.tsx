import TextRenderer from '~/components/TextRenderer';
import { IPageDetail } from '~/interfaces/page.interface';

export default function FacilitiesPage({ page }: { page: IPageDetail }) {
  return (
    <main className='mb-16'>
      <section className='w-full h-fit'>
        <img src={page.pst_thumbnail} alt={`${page.pst_title} thumbnail`} />
      </section>

      <div className='container block'>
        <TextRenderer content={page.pst_content} />
      </div>
    </main>
  );
}

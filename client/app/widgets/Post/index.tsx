import { Link } from '@remix-run/react';

export default function Page({ page }: { page: any }) {
  return (
    <article className='bg-zinc-200/50 lg:grid grid-cols-2 rounded-xl overflow-hidden mt-4 text-sm flex flex-col items-center'>
      <figure className='col-span-1 w-full'>
        <img src={page.thumbnail} alt={page.title} />
      </figure>

      <div className='col-span-1 p-12 flex flex-col gap-4 h-full'>
        <h3 className='text-lg'>
          <b>{page.title}</b>
        </h3>

        <p>{page.excerpt}</p>

        <Link
          to={`/blog/${page.slug}`}
          className='rounded-full bg-[--sub1-color] uppercase text-[--sub3-text] px-4 py-2 w-fit'
        >
          THAM KHẢO NGAY
        </Link>
      </div>
    </article>
  );
}

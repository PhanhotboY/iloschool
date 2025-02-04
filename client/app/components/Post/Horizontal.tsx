import { Link } from '@remix-run/react';
import clsx from 'classnames';
import { IPage } from '~/interfaces/page.interface';
import { getPublicPeriod } from '~/lib';
import { RiEyeFill } from '@remixicon/react';
import TextRenderer from '../TextRenderer';

export default function HorizontalPost({
  page,
  detailed = false,
  important = false,
  ratio = '6/4',
  colSpan = 10,
  className,
}: {
  page: IPage;
  detailed?: boolean;
  important?: boolean;
  ratio?: string;
  colSpan?: number;
  className?: string;
}) {
  const wrapperClass = clsx(
    'rank-1',
    'block',
    'md:grid',
    `grid-cols-${colSpan}`,
    `col-span-${colSpan}`,
    important ? 'gap-1 md:gap-4' : 'gap-3 pb-2.5',
    className
  );
  const imgClass = clsx('thumb-wrapper', `col-span-${ratio.split('/')[0]}`);
  const contentClass = clsx(
    'content',
    'flex',
    'flex-col',
    `col-span-${ratio.split('/')[1]}`
  );

  return (
    <article className={wrapperClass}>
      <figure
        className={`${imgClass} h-fit aspect-video max-md:mb-2 overflow-hidden`}
      >
        <Link to={`/blog/${page.pst_slug}`}>
          <img
            src={page.pst_thumbnail}
            alt={page.pst_title}
            title={page.pst_title}
          />
        </Link>
      </figure>

      <div className={`${contentClass} px-2`}>
        <h2
          className={`${
            important ? 'text-base md:text-xl' : 'text-sm'
          } hover:text-[--main-color] font-bold`}
          title={page.pst_title}
          style={{
            display: '-webkit-box',
            textOverflow: 'ellipsis',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflowWrap: 'break-word',
            overflow: 'hidden',
          }}
        >
          <Link to={`/blog/${page.pst_slug}`}>{page.pst_title}</Link>
        </h2>

        <div
          className={`flex items-center ${
            important ? 'text-sm italic m-1 md:m-4' : 'text-xs m-1'
          }`}
        >
          <time dateTime={page.updatedAt}>
            {getPublicPeriod(page.updatedAt)}
          </time>

          <p className='mx-2 not-italic'>|</p>

          <RiEyeFill size={16} className='mr-1 text-[--main-color]' />

          {page.pst_views}
        </div>

        {detailed && <TextRenderer content={page.pst_excerpt} truncate />}
      </div>
    </article>
  );
}

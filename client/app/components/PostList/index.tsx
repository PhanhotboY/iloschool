import { useEffect, useState } from 'react';
import HorizontalPost from '../Post/Horizontal';
import SeemoreButton from '../SeemoreButton';
import { IPage } from '~/interfaces/page.interface';
import VerticalPost from '../Post/Vertical';

export default function PostList({
  posts,
  postsGetter,
  emphasized = false,
}: {
  posts: Array<IPage>;
  postsGetter: (page: number) => Promise<Array<IPage>> | Array<IPage>;
  emphasized?: boolean;
}) {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loadedPages, setLoadedPages] = useState<Array<any>>(posts);

  const loadPages = async () => {
    setLoading(true);
    const posts = await postsGetter(page + 1);
    setPage(page + 1);
    if (!posts.length) {
      setHasMore(false);
      setLoading(false);
      return;
    }
    setLoadedPages([...loadedPages, ...posts]);
    setLoading(false);
  };

  const articleProps = {
    ratio: '4/6',
    detailed: true,
    important: true,
    showCategory: true,
    className: 'flex flex-col text-xl',
  };

  useEffect(() => {
    setLoadedPages(posts);
    setPage(1);
    setHasMore(true);
  }, [posts]);

  if (!loadedPages.length) {
    return <div>No posts</div>;
  }

  return (
    <section>
      <ul id='article-list' className='grid gap-y-6 md:gap-y-4'>
        {emphasized && (
          <li>
            <VerticalPost
              post={loadedPages[0]}
              detailed
              important
              className='mb-4'
            />
          </li>
        )}

        {(emphasized ? loadedPages.slice(1) : loadedPages).map(
          (a: any, i: number) => (
            <li key={i}>
              <HorizontalPost page={a} {...articleProps} />
            </li>
          )
        )}
      </ul>

      {loading && (
        <div className='w-fit m-auto mt-6'>
          <img src='/assets/loading.gif' alt='loading gif' />
        </div>
      )}

      {hasMore && <SeemoreButton className='mt-6' loadData={loadPages} />}
    </section>
  );
}

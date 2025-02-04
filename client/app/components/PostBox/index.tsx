import { IPage } from '~/interfaces/page.interface';
import VerticalPost from '../Page/Vertical';
// import BoxHeader from '../BoxHeading';
import { useEffect, useState } from 'react';

export default function PageBox({
  pagesGetter,
}: // category,
{
  // category: ICategoryDetail | ICategory;
  pagesGetter: () => Promise<Array<IPage>>;
}) {
  const [pages, setPages] = useState<Array<IPage>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pagesGetter().then((pages) => {
      setPages(pages);
      setLoading(false);
    });
  }, []);

  return (
    <section className='grid col-span-full grid-cols-12 gap-x-6'>
      {/* <BoxHeader category={category} /> */}

      <div className='grid grid-cols-12 col-span-full gap-x-6'>
        {loading ? (
          <div>Loading...</div>
        ) : (
          !!pages.length && (
            <>
              <div className='col-span-full md:col-span-6'>
                <VerticalPost page={pages[0]} detailed important />
              </div>

              <div className='scroll grid grid-cols-2 md:grid-cols-6 col-span-full md:col-span-6 gap-4 md:gap-6 max-md:mt-4 max-md:px-2'>
                {pages.slice(1, 5).map((page, index) => (
                  <div className='col-span-1 md:col-span-3' key={index}>
                    <VerticalPost page={page} />
                  </div>
                ))}
              </div>
            </>
          )
        )}
      </div>
    </section>
  );
}

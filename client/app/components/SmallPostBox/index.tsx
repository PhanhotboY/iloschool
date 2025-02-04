import { IPage } from '~/interfaces/page.interface';
import HorizontalPost from '../Page/Horizontal';
import VerticalPost from '../Page/Vertical';
// import BoxHeader from '../BoxHeading';
import SideBar from '../../routes/blog+/SideBar';
import { useEffect, useState } from 'react';

export default function SmallPageBox({
  pagesGetter,
  // category,
  showSidebar = false,
  detailed = false,
  ratio = '6/3',
  cols = 9,
  height,
  ads,
}: {
  // category: ICategoryDetail | string;
  pagesGetter: () => Promise<IPage[]>;
  showSidebar?: boolean;
  detailed?: boolean;
  ratio?: string;
  cols?: number;
  height?: number;
  ads?: Array<any>;
}) {
  const [pages, setPages] = useState<IPage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pagesGetter().then((pages) => {
      setPages(pages);
      setLoading(false);
    });
  }, []);

  return (
    <section className='flex flex-col md:grid col-span-full grid-cols-12 gap-x-6'>
      <div className={`grid col-span-${cols} mt-4`}>
        {/* <BoxHeader category={category} /> */}

        <div className={`grid grid-cols-${cols} col-span-full gap-x-4`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            !!pages.length && (
              <>
                <div
                  className={`max-md:col-span-full col-span-${
                    ratio.split('/')[0]
                  } h-fit`}
                >
                  <VerticalPost page={pages[0]} detailed important />
                </div>

                <div
                  className={`max-md:col-span-full col-span-${
                    ratio.split('/')[1]
                  }`}
                  style={{
                    maxHeight: height ? `${height}px` : '500px',
                  }}
                >
                  <ul
                    className={`scroll max-md:grid grid-cols-2 px-2 gap-x-4 md:gap-x-2 max-md:mt-4 md:scroll md:divide-y h-full md:overflow-auto`}
                  >
                    {pages.slice(1).map((page, index) => (
                      <li
                        className={`col-span-1 md:[&:not(:first-child)]:pt-2.5 ${
                          index > 3 ? 'hidden md:block' : ''
                        }`}
                        key={index}
                      >
                        <HorizontalPost
                          page={page}
                          ratio='1/2'
                          colSpan={3}
                          detailed={detailed}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )
          )}
        </div>
      </div>

      {showSidebar && <SideBar pages={pages} />}
    </section>
  );
}

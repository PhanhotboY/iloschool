import { LoaderFunctionArgs, MetaFunction, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

import HandsomeError from '~/components/HandsomeError';
import TextRenderer from '~/components/TextRenderer';
import { getPage } from '~/services/page.server';
import { PAGE } from '~/constants/page.constant';
import AboutPage from './components/AboutPage';
import CurriculumPage from './components/CurriculumPage';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { pageSlug } = params;

  try {
    const page = await getPage(pageSlug!);
    if (page.pst_template === PAGE.TEMPLATE.BLOG.code) {
      return redirect('/blog/' + pageSlug);
    }

    return {
      page,
    };
  } catch (error) {
    // console.error(error);
    throw new Response('Not found', { status: 404 });
  }
};

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  if (!data?.page) return [{ title: 'Page Not Found' }];

  return [
    {
      title: `${data.page.pst_title}`,
    },
    {
      description: data.page.pst_excerpt,
    },
  ];
};

export default function Page() {
  const { page } = useLoaderData<typeof loader>();

  switch (page.pst_template) {
    case PAGE.TEMPLATE.HOME_PAGE.code:
    case PAGE.TEMPLATE.BRANCH_PAGE.code:
    case PAGE.TEMPLATE.FACILITIES_PAGE.code:
      return;

    case PAGE.TEMPLATE.ADMISSION.code:
      return;

    case PAGE.TEMPLATE.ABOUT.code:
      return <AboutPage page={page} />;

    case PAGE.TEMPLATE.CURRICULUM_PAGE.code:
      return <CurriculumPage page={page} />;

    case PAGE.TEMPLATE.BLOG.code:
      return;

    default:
      return (
        <main>
          <TextRenderer content={page.pst_content} />
        </main>
      );
  }
}

export const ErrorBoundary = () => <HandsomeError />;

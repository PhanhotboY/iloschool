import { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import HandsomeError from '~/components/HandsomeError';
import TextRenderer from '~/components/TextRenderer';
import { getPage } from '~/services/page.server';
import LandingPage from './LandingPage';
import { PAGE } from '~/constants/page.constant';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { pageSlug } = params;

  try {
    const page = await getPage(pageSlug!);

    return {
      page,
    };
  } catch (error) {
    // console.error(error);
    throw new Response('Not found', { status: 404 });
  }
};

export default function Page() {
  const { page } = useLoaderData<typeof loader>();

  switch (page.pst_template.ptp_code) {
    case PAGE.TEMPLATE.HOME_PAGE.code:
      return <LandingPage />;

    default:
      return (
        <main>
          <TextRenderer content={page.pst_content} />
        </main>
      );
  }
}

export const ErrorBoundary = () => <HandsomeError />;
